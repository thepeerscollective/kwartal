import type { Metadata } from 'next';
import Behaviors from '@/components/Behaviors';
import { BASE } from '@/lib/base';

export const metadata: Metadata = { title: 'Kontakt', description: 'Biuro sprzedaży Kwartału Zabłocie, ul. Lipowa 4 w Krakowie. Umów spotkanie w biurze, przez wideo albo na budowie.' };

export default function Kontakt() {
  return (
    <>


<section className="sec"><div className="wrap g2" style={{alignItems: 'start'}}>
<div className="rv in"><p className="k">Biuro sprzedaży</p><h1>Przyjdź zobaczyć<br /><span className="light">swoje okno.</span></h1>
<dl className="spec" style={{marginTop: 'clamp(10px,5.33vh,48px)', maxWidth: '520px'}}><div><dt>Adres</dt><dd>ul. Lipowa 4, Kraków</dd></div><div><dt>Parking</dt><dd>od dziedzińca, dla klientów</dd></div><div><dt>Poniedziałek–piątek</dt><dd>9:00–18:00</dd></div><div><dt>Sobota</dt><dd>10:00–14:00</dd></div><div><dt>Telefon</dt><dd><a href="tel:+48120000000">+48 12 000 00 00</a></dd></div><div><dt>E-mail</dt><dd><a href="mailto:sprzedaz@kwartalzablocie.pl">sprzedaz@ kwartalzablocie.pl</a></dd></div></dl></div>
<form className="form rv in"><p className="k">Umów spotkanie</p>
<div className="field"><label htmlFor="kn">Imię i nazwisko</label><input id="kn" required autoComplete="name" /></div>
<div className="field"><label htmlFor="kt">Telefon</label><input id="kt" type="tel" required autoComplete="tel" /></div>
<div className="field"><label htmlFor="ke">E-mail</label><input id="ke" type="email" autoComplete="email" /></div>
<div className="field"><span style={{fontSize: '14px', fontWeight: '500'}}>Jak wolisz?</span><div className="chips" data-toggle="one"><button type="button" className="chip" aria-pressed="true">W biurze</button><button type="button" className="chip" aria-pressed="false">Wideo</button><button type="button" className="chip" aria-pressed="false">Na budowie</button></div></div>
<button className="btn btn-t" type="submit">Wyślij</button><small>Oddzwonimy w ciągu jednego dnia roboczego.</small><p className="ok">Dziękujemy. Oddzwonimy jutro do 12:00.</p></form>
</div></section>
<section className="sec sand"><div className="wrap"><div className="head rv"><div><p className="k">Zespół sprzedaży</p><h2>Z kim się spotkasz.</h2></div></div>
<div className="g3"><div className="person rv"><div className="ph "><img src={`${BASE}/img/k01.webp`} alt="Portret: Ola Wrona" loading="lazy" decoding="async" /></div><h3>Ola Wrona</h3><p>sprzedaż, budynki A i B</p></div><div className="person rv"><div className="ph "><img src={`${BASE}/img/k02.webp`} alt="Portret: Piotr Gaj" loading="lazy" decoding="async" /></div><h3>Piotr Gaj</h3><p>sprzedaż, budynki C i D</p></div><div className="person rv"><div className="ph "><img src={`${BASE}/img/f01.webp`} alt="Portret: Marek Lis" loading="lazy" decoding="async" /></div><h3>Marek Lis</h3><p>doradca kredytowy</p></div></div></div></section>
<section className="sec"><div className="wrap"><div className="map rv"><svg viewBox="0 0 1200 460" role="img" aria-label="Mapa dojazdu do biura sprzedaży, ul. Lipowa 4"><rect width="1200" height="460" fill="#E9E4DA" /><path d="M-20 400 C 300 340 600 460 1220 380 L1220 480 L-20 480Z" fill="#CFDCE0" /><line x1="-100" y1="0" x2="20" y2="460" stroke="#F2EFE9" strokeWidth="16" /><line x1="60" y1="0" x2="180" y2="460" stroke="#F2EFE9" strokeWidth="16" /><line x1="220" y1="0" x2="340" y2="460" stroke="#F2EFE9" strokeWidth="16" /><line x1="380" y1="0" x2="500" y2="460" stroke="#F2EFE9" strokeWidth="16" /><line x1="540" y1="0" x2="660" y2="460" stroke="#F2EFE9" strokeWidth="16" /><line x1="700" y1="0" x2="820" y2="460" stroke="#F2EFE9" strokeWidth="16" /><line x1="860" y1="0" x2="980" y2="460" stroke="#F2EFE9" strokeWidth="16" /><line x1="1020" y1="0" x2="1140" y2="460" stroke="#F2EFE9" strokeWidth="16" /><line x1="1180" y1="0" x2="1300" y2="460" stroke="#F2EFE9" strokeWidth="16" /><line x1="0" y1="200" x2="1200" y2="170" stroke="#F2EFE9" strokeWidth="26" /><text x="80" y="190" fontFamily="IBM Plex Mono" fontSize="12" fill="#6E6A63">UL. LIPOWA</text><rect x="600" y="140" width="40" height="40" fill="#B5562F" /><text x="652" y="166" fontFamily="Bricolage Grotesque" fontWeight="500" fontSize="18" fill="#1C1C1A">Biuro sprzedaży · ul. Lipowa 4</text><rect x="760" y="230" width="140" height="90" fill="#1C1C1A" /><text x="772" y="282" fontFamily="IBM Plex Mono" fontSize="11" fill="#F2EFE9">KWARTAŁ</text></svg></div></div></section>


      <Behaviors page="common" />
    </>
  );
}
