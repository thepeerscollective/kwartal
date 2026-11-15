import type { Metadata } from 'next';
import Behaviors from '@/components/Behaviors';
import { BASE } from '@/lib/base';

export const metadata: Metadata = { title: { absolute: 'Kwartał Zabłocie · Wybierz okno, nie metraż' }, description: '124 mieszkania w dawnej fabryce na Zabłociu w Krakowie. Najedź na okno elewacji i zobacz mieszkanie, które się za nim kryje.' };

export default function HomePage() {
  return (
    <>


<section className="hero"><div className="wrap g2">
<div className="rv in">
<p className="crumb">Kraków · Zabłocie · 4 budynki · 124 mieszkania</p>
<h1>Wybierz okno,<br /><span className="light">nie metraż.</span></h1>
<p className="lead">Każdy z czterech budynków patrzy gdzie indziej: na dziedziniec, na Wisłę, na Wawel, na aleję. Wybierz widok, a pokażemy mieszkania, które go mają.</p>
<div className="row"><a className="btn btn-t" href={`${BASE}/mieszkania/`}>Przeglądaj mieszkania</a><a className="btn btn-l" href="#">Pobierz katalog PDF</a></div>
<p className="mono" style={{marginTop: '18px'}}>Stan na <span data-today>14.11.2026</span> · aktualizowany codziennie</p>
</div>
<div className="view" id="hero-view">
<figure className="vph"><img data-v="0" className="on" src={`${BASE}/img/kw-hero.webp`} alt="Kwartał od ulicy: dawna hala z cegły i trzy nowe budynki z balkonami, lipy przed wejściem" /><img data-v="B" src={`${BASE}/img/d01.webp`} alt="Widok z okna na zielony dziedziniec" loading="lazy" /><img data-v="C" src={`${BASE}/img/o03.webp`} alt="Widok na Wisłę i bulwary o poranku" loading="lazy" /><img data-v="A" src={`${BASE}/img/h04.webp`} alt="Taras z widokiem na Wawel" loading="lazy" /><img data-v="D" src={`${BASE}/img/h02.webp`} alt="Okno od podłogi do sufitu z widokiem na aleję" loading="lazy" />
<figcaption className="vcap">Kwartał od ulicy Lipowej · wizualizacja</figcaption>
<div className="vcard" hidden></div></figure>
<div className="vtabs" role="group" aria-label="Wybierz widok z okna"><span className="mono">Widok z okna:</span>
<button data-b="B" aria-pressed="false">Dziedziniec</button><button data-b="C" aria-pressed="false">Wisła</button><button data-b="A" aria-pressed="false">Wawel</button><button data-b="D" aria-pressed="false">Aleja</button></div>
</div>
</div></section>

<section className="dark" style={{padding: 'clamp(10px,7.11vh,64px) 0'}}><div className="wrap stats">
<div className="rv"><b>124</b><span>mieszkania, 1–5 pokoi</span></div>
<div className="rv"><b>38–112 m²</b><span>od kawalerki po loft z tarasem</span></div>
<div className="rv"><b>7 min</b><span>pieszo do bulwarów Wisły</span></div>
<div className="rv"><b>IV kw. 2027</b><span>oddanie budynków A i B</span></div>
</div></section>

<section className="sec"><div className="wrap g2">
<div className="rv"><p className="k">O inwestycji</p><h2>Cegła z 1912,<br /><span className="light">okna z 2027.</span></h2>
<p className="lead" style={{margin: '28px 0'}}>Kwartał stoi na miejscu dawnej fabryki wyrobów metalowych. Zostawiliśmy jej mury i hale, dodaliśmy to, czego brakowało: światło od podłogi do sufitu, zielony dziedziniec i ciszę od ulicy.</p>
<p className="quote">„Nie chcieliśmy kolejnego bloku obok starej fabryki. Chcieliśmy, żeby fabryka dalej tu była, tylko żeby dało się w niej mieszkać.”</p>
<p className="mono" style={{marginTop: '16px'}}>Anna Tarnowska, Tarnowski Architekci</p></div>
<div className="rv"><div className="ph " style={{aspectRatio: '4/5'}}><img src={`${BASE}/img/h01.webp`} alt="Dziedziniec kwartału z zielenią, stara cegła i nowe przeszklenia" loading="lazy" decoding="async" /></div></div>
</div></section>

<section className="sec sand"><div className="wrap">
<div className="head rv"><div><h2>Cztery budynki, jeden kwartał.</h2><p className="lead" style={{marginTop: '16px'}}>Każdy ma inny charakter. Wybierz ten, który pasuje do Ciebie.</p></div></div>
<div className="g4"><a className="bcard rv" href={`${BASE}/mieszkania/?b=A`}><div className="ph bph"><img src={`${BASE}/img/kw-a.webp`} alt="Budynek A: dawna hala z cegły z łukowymi oknami w czarnych ramach" loading="lazy" decoding="async" /></div><div className="t"><b>A</b><h3>Dawna hala</h3></div><p style={{color: 'var(--grey)', fontSize: '15px'}}>lofty i mieszkania 3–5 pok.</p><p className="meta"><strong data-freecount="A"></strong> wolnych · oddanie IV kw. 2027</p><span className="link" style={{justifySelf: 'start'}}>Zobacz elewację →</span></a><a className="bcard rv" href={`${BASE}/mieszkania/?b=B`}><div className="ph bph"><img src={`${BASE}/img/kw-b.webp`} alt="Budynek B od zielonego dziedzińca, balkony na południe, plac zabaw" loading="lazy" decoding="async" /></div><div className="t"><b>B</b><h3>Od dziedzińca</h3></div><p style={{color: 'var(--grey)', fontSize: '15px'}}>2–3 pokoje, balkony na południe</p><p className="meta"><strong data-freecount="B"></strong> wolnych · oddanie IV kw. 2027</p><span className="link" style={{justifySelf: 'start'}}>Zobacz elewację →</span></a><a className="bcard rv" href={`${BASE}/mieszkania/?b=C`}><div className="ph bph"><img src={`${BASE}/img/kw-c.webp`} alt="Budynek C od Wisły, tarasy z zielenią, bulwary o zachodzie" loading="lazy" decoding="async" /></div><div className="t"><b>C</b><h3>Od Wisły</h3></div><p style={{color: 'var(--grey)', fontSize: '15px'}}>widok na bulwary, tarasy</p><p className="meta"><strong data-freecount="C"></strong> wolnych · oddanie II kw. 2028</p><span className="link" style={{justifySelf: 'start'}}>Zobacz elewację →</span></a><a className="bcard rv" href={`${BASE}/mieszkania/?b=D`}><div className="ph bph"><img src={`${BASE}/img/kw-d.webp`} alt="Budynek D na rogu ulicy, kawalerki z małymi balkonami, stojaki na rowery" loading="lazy" decoding="async" /></div><div className="t"><b>D</b><h3>Kawalerki i 2 pok.</h3></div><p style={{color: 'var(--grey)', fontSize: '15px'}}>pod inwestycję i na start</p><p className="meta"><strong data-freecount="D"></strong> wolnych · oddanie II kw. 2028</p><span className="link" style={{justifySelf: 'start'}}>Zobacz elewację →</span></a></div>
</div></section>

<section className="sec"><div className="wrap g2">
<div className="rv"><p className="k">Okolica</p><h2>Wszystko w<br /><span className="light">15 minut pieszo.</span></h2>
<ul className="walk" style={{margin: '32px 0'}}>
<li>Przystanek tramwajowy <span>2 min</span></li><li>Bulwary Wiślane <span>7 min</span></li><li>Szkoła podstawowa <span>9 min</span></li><li>Park Bednarskiego <span>14 min</span></li></ul>
<a className="btn btn-l" href={`${BASE}/okolica/`}>Cała mapa okolicy →</a></div>
<div className="rings rv"><svg viewBox="0 0 560 560" aria-hidden="true">
<circle cx="280" cy="280" r="270" fill="none" stroke="#CFC8BB" /><circle cx="280" cy="280" r="180" fill="none" stroke="#CFC8BB" /><circle cx="280" cy="280" r="90" fill="#E9E4DA" stroke="#CFC8BB" />
<text x="460" y="96" fontFamily="IBM Plex Mono" fontSize="11" fill="#6E6A63">15 min</text><text x="400" y="170" fontFamily="IBM Plex Mono" fontSize="11" fill="#6E6A63">10 min</text><text x="330" y="226" fontFamily="IBM Plex Mono" fontSize="11" fill="#6E6A63">5 min</text>
<circle cx="250" cy="226" r="8" fill="#B5562F" /><circle cx="160" cy="330" r="8" fill="#B5562F" /><circle cx="380" cy="350" r="8" fill="#B5562F" /><circle cx="330" cy="150" r="8" fill="#B5562F" />
<rect x="268" y="268" width="24" height="24" fill="#1C1C1A" /></svg></div>
</div></section>

<section className="sec dark"><div className="wrap">
<div className="head rv"><div><p className="k">Standard</p><h2>Detale, które zostają na lata.</h2></div></div>
<div className="g3">
<div className="rv"><div className="ph " style={{aspectRatio: '4/5'}}><img src={`${BASE}/img/h02.webp`} alt="Okna od podłogi do sufitu w aluminiowej ramie" loading="lazy" decoding="async" /></div><h3 style={{marginTop: '22px'}}>Okna od podłogi do sufitu</h3><p className="lead" style={{marginTop: '8px', fontSize: '16px'}}>Aluminiowe ramy, potrójne szyby, 2,9 m wysokości w budynku A.</p></div>
<div className="rv"><div className="ph " style={{aspectRatio: '4/5'}}><img src={`${BASE}/img/h03.webp`} alt="Odzyskana cegła przy świeżym tynku" loading="lazy" decoding="async" /></div><h3 style={{marginTop: '22px'}}>Odzyskana cegła</h3><p className="lead" style={{marginTop: '8px', fontSize: '16px'}}>Każda ściana od dziedzińca to cegła rozebranej hali, czyszczona ręcznie.</p></div>
<div className="rv"><div className="ph " style={{aspectRatio: '4/5'}}><img src={`${BASE}/img/h04.webp`} alt="Ogród na dachu z grządkami i widokiem na Wawel" loading="lazy" decoding="async" /></div><h3 style={{marginTop: '22px'}}>Zielony dach</h3><p className="lead" style={{marginTop: '8px', fontSize: '16px'}}>Ogród na dachu budynku C dla wszystkich mieszkańców, z grillem i warzywnikiem.</p></div>
</div></div></section>

<section className="sec"><div className="wrap g2">
<div className="rv"><p className="k">Postęp budowy</p><h2>Budynek B: 62% gotowe.</h2>
<div className="bar" style={{margin: '28px 0 12px'}}><i data-w="62%"></i></div>
<ul className="steps"><li className="done">Fundamenty<span>03.2026</span></li><li className="done">Stan surowy<span>09.2026</span></li><li>Okna i dach<span>12.2026</span></li><li>Wykończenia<span>06.2027</span></li><li>Oddanie<span>IV kw. 2027</span></li></ul>
<a className="btn btn-l" style={{marginTop: 'clamp(10px,3.11vh,28px)'}} href={`${BASE}/postep-budowy/`}>Zdjęcia z budowy co miesiąc →</a></div>
<div className="rv"><div className="ph " style={{aspectRatio: '4/5'}}><img src={`${BASE}/img/h05.webp`} alt="Budowa budynku B w listopadzie, dźwig i stara cegła" loading="lazy" decoding="async" /></div><p className="cap">Budynek B, listopad 2026</p></div>
</div></section>

<section className="sec sand"><div className="wrap g2">
<div className="rv"><p className="k">Finansowanie</p><h2>10% teraz,<br />reszta przy odbiorze.</h2><p className="lead" style={{margin: '28px 0'}}>Płacisz 10% przy umowie deweloperskiej i 90% po odbiorze kluczy. Pomożemy z kredytem: nasz doradca porówna oferty 12 banków za darmo.</p><a className="btn btn-t" href={`${BASE}/finansowanie/`}>Policz ratę →</a></div>
<div className="fcard rv"><dl style={{display: 'grid', gap: '12px'}}><div><dt>Cena mieszkania</dt><dd>812 000 zł</dd></div><div><dt>Wkład własny</dt><dd>20% · 162 400 zł</dd></div><div><dt>Okres</dt><dd>30 lat</dd></div></dl><div><p className="mono">Szacunkowa rata</p><p className="big">4 280 zł / mies.</p><p className="mono" style={{marginTop: '10px'}}>przy oprocentowaniu 6,9%, wyliczenie poglądowe</p></div></div>
</div></section>

<section className="sec terra"><div className="wrap g2">
<div className="rv"><h2 style={{fontSize: 'clamp(44px,5.6vw,80px)'}}>Przyjdź zobaczyć<br />swoje okno.</h2><p className="lead" style={{color: '#F4E2D6', marginTop: 'clamp(10px,3.11vh,28px)'}}>W biurze sprzedaży pokażemy makietę kwartału i próbki materiałów. Kawa na nas.</p></div>
<form className="form rv" aria-label="Umów spotkanie">
<div className="field"><label htmlFor="n">Imię i nazwisko</label><input id="n" name="name" autoComplete="name" required /></div>
<div className="field"><label htmlFor="t">Telefon</label><input id="t" name="tel" type="tel" autoComplete="tel" required /></div>
<div className="field"><label htmlFor="e">E-mail</label><input id="e" name="email" type="email" autoComplete="email" /></div>
<div className="field"><label htmlFor="w">Które mieszkanie Cię interesuje?</label><input id="w" name="unit" placeholder="np. B · 4.04" /></div>
<button className="btn btn-i" type="submit">Umów spotkanie</button>
<small>Oddzwonimy w ciągu jednego dnia roboczego.</small>
<p className="ok">Dziękujemy. Oddzwonimy jutro do 12:00.</p>
</form>
</div></section>


      <Behaviors page="home" />
    </>
  );
}
