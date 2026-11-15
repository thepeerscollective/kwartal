"""Convert static HTML fragments into JSX (one-off porting helper)."""
import re
from html.parser import HTMLParser

VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'}
RENAME = {'class': 'className', 'for': 'htmlFor', 'tabindex': 'tabIndex', 'autocomplete': 'autoComplete', 'readonly': 'readOnly',
          'maxlength': 'maxLength', 'colspan': 'colSpan', 'viewbox': 'viewBox', 'crossorigin': 'crossOrigin'}
SVG_CASE = {'viewbox': 'viewBox', 'clippath': 'clipPath', 'textpath': 'textPath', 'lineargradient': 'linearGradient'}


def camel(name):
    return re.sub(r'-([a-z])', lambda m: m.group(1).upper(), name)


def style_obj(s):
    out = []
    for decl in s.split(';'):
        if ':' not in decl:
            continue
        k, v = decl.split(':', 1)
        k = k.strip(); v = v.strip()
        key = k if k.startswith('--') else camel(k)
        out.append(f"{repr(key) if k.startswith('--') else key}: {repr(v)}")
    body = '{' + ', '.join(out) + '}'
    return '{' + (body + ' as React.CSSProperties' if "'--" in body else body) + '}'


class Conv(HTMLParser):
    def __init__(self, link):
        super().__init__(convert_charrefs=False)
        self.out = []; self.link = link

    def attrs(self, tag, attrs):
        parts = []
        for k, v in attrs:
            if k.startswith('on'):
                continue
            if k == 'style':
                parts.append(f'style={style_obj(v)}'); continue
            if k in ('href', 'src'):
                v2 = self.link(v)
                parts.append(f'{k}={v2}'); continue
            if tag == 'input' and k == 'value':
                k = 'defaultValue'
            if tag == 'input' and k == 'checked':
                k = 'defaultChecked'
            if tag == 'details' and k == 'open':
                parts.append('open'); continue
            if k.startswith('aria-') or k.startswith('data-'):
                name = k
            elif k in RENAME:
                name = RENAME[k]
            elif k == 'xmlns':
                name = k
            else:
                name = camel(k)
            if v is None:
                parts.append(f'{name}'); continue
            v = v.replace('{', '&#123;').replace('}', '&#125;')
            parts.append(f'{name}="{v}"' if '"' not in v else f"{name}={{{repr(v)}}}")
        return (' ' + ' '.join(parts)) if parts else ''

    def handle_starttag(self, tag, attrs):
        t = SVG_CASE.get(tag, tag)
        self.out.append(f'<{t}{self.attrs(tag, attrs)}' + (' />' if tag in VOID else '>'))

    def handle_startendtag(self, tag, attrs):
        t = SVG_CASE.get(tag, tag)
        self.out.append(f'<{t}{self.attrs(tag, attrs)} />')

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        self.out.append(f'</{SVG_CASE.get(tag, tag)}>')

    def handle_data(self, d):
        self.out.append(d.replace('{', "{'{'}").replace('}', "{'}'}"))

    def handle_entityref(self, name):
        self.out.append(f'&{name};')

    def handle_charref(self, name):
        self.out.append(f'&#{name};')


def link(v):
    if v.startswith(('http', 'mailto:', 'tel:', '#', 'data:')):
        return f'"{v}"'
    if v.startswith('assets/img/'):
        return '{`${BASE}/img/' + v[len('assets/img/'):] + '`}'
    m = re.match(r'([a-z\-]+)\.html(.*)', v)
    if m:
        page, rest = m.groups()
        path = '' if page == 'index' else page + '/'
        rest = rest.replace('?', '?') if rest else ''
        if rest.startswith('#'):
            return '{`${BASE}/' + path + rest + '`}'
        return '{`${BASE}/' + path + rest + '`}'
    return f'"{v}"'


def convert(html):
    c = Conv(link); c.feed(html); c.close()
    return ''.join(c.out)
