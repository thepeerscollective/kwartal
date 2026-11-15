'use client';
import { usePathname } from 'next/navigation';
import { BASE } from '@/lib/base';

const NAV: [string, string][] = [
  ['mieszkania', 'Mieszkania'],
  ['okolica', 'Okolica'],
  ['inwestycja', 'Inwestycja'],
  ['postep-budowy', 'Postęp budowy'],
  ['finansowanie', 'Finansowanie'],
  ['kontakt', 'Kontakt'],
];

export function Header() {
  const path = usePathname() ?? '';
  const active = (slug: string) => path.startsWith(`/${slug}`) || (slug === 'mieszkania' && path.startsWith('/mieszkanie'));
  return (
    <header className="nav">
      <div className="wrap">
        <a className="logo" href={`${BASE}/`} aria-label="Kwartał Zabłocie, strona główna"><b>KWARTAŁ</b><span>Zabłocie</span></a>
        <nav aria-label="Główna">
          <ul>
            {NAV.map(([slug, label]) => (
              <li key={slug}><a href={`${BASE}/${slug}/`} aria-current={active(slug) ? 'page' : undefined}>{label}</a></li>
            ))}
          </ul>
        </nav>
        <a className="btn btn-i" href={`${BASE}/kontakt/`}>Umów spotkanie</a>
        <button className="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span></button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="foot">
<div className="wrap">
<div className="foot-grid">
<div><a className="logo" href={`${BASE}/`}><b>KWARTAŁ</b><span>Zabłocie</span></a><p>Biuro sprzedaży<br />ul. Lipowa 4, Kraków<br />pon–pt 9–18 · sob 10–14<br /><a href="tel:+48120000000">+48 12 000 00 00</a></p></div>
<ul><li><a href={`${BASE}/mieszkania/`}>Mieszkania</a></li><li><a href={`${BASE}/okolica/`}>Okolica</a></li><li><a href={`${BASE}/inwestycja/`}>Inwestycja</a></li></ul>
<ul><li><a href={`${BASE}/postep-budowy/`}>Postęp budowy</a></li><li><a href={`${BASE}/finansowanie/`}>Finansowanie</a></li><li><a href={`${BASE}/kontakt/`}>Kontakt</a></li></ul>
<ul><li><a href="#">Prospekt informacyjny</a></li><li><a href="#">Polityka prywatności</a></li><li><a href="#">Instagram</a></li></ul>
</div>
<div className="foot-bottom">Inwestor: Kwartał Zabłocie sp. z o.o. · Wizualizacje mają charakter poglądowy · © {new Date().getFullYear()} · projekt: peers</div>
</div>    </footer>
  );
}
