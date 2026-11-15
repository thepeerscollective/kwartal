import type { Metadata } from 'next';
import Behaviors from '@/components/Behaviors';
import { BASE } from '@/lib/base';

export const metadata: Metadata = { title: 'Okolica', description: 'Co jest w 15 minut pieszo od Kwartału Zabłocie: tramwaj, bulwary, szkoły, MOCAK, targ i kawiarnie.' };

export default function Okolica() {
  return (
    <>


<section className="sec" style={{paddingBottom: '40px'}}><div className="wrap g2" style={{alignItems: 'end'}}>
<div className="rv in"><p className="k">Okolica · Zabłocie, Kraków</p><h1>Wszystko w<br /><span className="light">15 minut pieszo.</span></h1></div>
<p className="lead rv in">Policzyliśmy, ile idzie się do miejsc, do których chodzi się naprawdę. Pieszo, w normalnym tempie, z wózkiem też.</p>
</div></section>
<section style={{paddingBottom: '96px'}}><div className="wrap">
<div className="chips" id="cats" data-toggle="one" style={{marginBottom: '20px'}}><button className="chip" aria-pressed="true" data-v="Wszystko">Wszystko</button><button className="chip" aria-pressed="false" data-v="Zakupy">Zakupy</button><button className="chip" aria-pressed="false" data-v="Dzieci">Dzieci</button><button className="chip" aria-pressed="false" data-v="Zieleń">Zieleń</button><button className="chip" aria-pressed="false" data-v="Kultura">Kultura</button><button className="chip" aria-pressed="false" data-v="Jedzenie">Jedzenie</button><button className="chip" aria-pressed="false" data-v="Komunikacja">Komunikacja</button><button className="chip" aria-pressed="false" data-v="Zdrowie">Zdrowie</button></div>
<div className="map rv" id="map"><div className="mapcard" id="mapcard" aria-live="polite"></div></div>
<p className="mono" style={{marginTop: '12px'}}>Kliknij punkt na mapie · okręgi: 5, 10 i 15 minut pieszo</p>
</div></section>
<section className="sec dark"><div className="wrap g2" style={{alignItems: 'start'}}>
<div className="rv"><p className="k">Dzień z życia mieszkańca</p><h2>Zwykły wtorek,<br />bez samochodu.</h2></div>
<ul className="day rv">
<li><time>7:10</time><div><b>Piekarnia na rogu</b><span>chleb na zakwasie i kawa na wynos</span></div><em>3 min</em></li>
<li><time>7:45</time><div><b>Przedszkole „Wierzbowe”</b><span>ogród z piaskownicą od strony Wisły</span></div><em>6 min</em></li>
<li><time>8:05</time><div><b>Tramwaj 3 i 24</b><span>12 minut do Rynku, 6 do Kazimierza</span></div><em>2 min</em></li>
<li><time>13:00</time><div><b>Bistro w dawnej hali</b><span>lunch dla pracujących z domu</span></div><em>5 min</em></li>
<li><time>18:00</time><div><b>Bulwary Wiślane</b><span>bieganie, rower, zachód słońca</span></div><em>7 min</em></li>
<li><time>20:30</time><div><b>MOCAK albo kino</b><span>wieczór bez szukania parkingu</span></div><em>4 min</em></li>
</ul></div></section>
<section className="sec"><div className="wrap">
<div className="head rv"><div><p className="k">Dojazdy</p><h2>Kiedy jednak trzeba dalej.</h2></div></div>
<div className="stats" style={{gridTemplateColumns: 'repeat(5,1fr)'}}><div className="rv"><b>12 min</b><span style={{color: 'var(--ink)', fontWeight: '500', fontSize: '17px'}}>Rynek Główny</span><span style={{marginTop: '4px', color: 'var(--grey)'}}>tramwajem</span></div><div className="rv"><b>6 min</b><span style={{color: 'var(--ink)', fontWeight: '500', fontSize: '17px'}}>Kazimierz</span><span style={{marginTop: '4px', color: 'var(--grey)'}}>pieszo przez kładkę</span></div><div className="rv"><b>15 min</b><span style={{color: 'var(--ink)', fontWeight: '500', fontSize: '17px'}}>Dworzec Główny</span><span style={{marginTop: '4px', color: 'var(--grey)'}}>tramwajem</span></div><div className="rv"><b>35 min</b><span style={{color: 'var(--ink)', fontWeight: '500', fontSize: '17px'}}>Lotnisko Balice</span><span style={{marginTop: '4px', color: 'var(--grey)'}}>pociągiem z Dworca</span></div><div className="rv"><b>10 min</b><span style={{color: 'var(--ink)', fontWeight: '500', fontSize: '17px'}}>Autostrada A4</span><span style={{marginTop: '4px', color: 'var(--grey)'}}>samochodem</span></div></div>
</div></section>
<section className="sec sand"><div className="wrap">
<div className="head rv"><div><p className="k">Jak tu jest</p><h2>Zabłocie dziś.</h2></div></div>
<div className="g2" style={{alignItems: 'start'}}><div className="rv"><div className="ph " style={{aspectRatio: '4/3'}}><img src={`${BASE}/img/o01.webp`} alt="Kładka Bernatka o zmierzchu, ludzie na rowerach" loading="lazy" decoding="async" /></div><p className="cap">Kładka Bernatka, 6 minut</p></div><div className="g2" style={{gap: '24px'}}><div className="ph " style={{aspectRatio: '3/4'}}><img src={`${BASE}/img/o02.webp`} alt="Kawiarnia w dawnej fabryce" loading="lazy" decoding="async" /></div><div className="ph " style={{aspectRatio: '3/4'}}><img src={`${BASE}/img/o03.webp`} alt="Bulwary nad Wisłą rano, biegacz" loading="lazy" decoding="async" /></div><div style={{gridColumn: '1/-1'}}><div className="ph " style={{aspectRatio: '16/9'}}><img src={`${BASE}/img/o04.webp`} alt="MOCAK z zewnątrz, dzieci na rowerkach" loading="lazy" decoding="async" /></div></div></div></div>
</div></section>
<section className="sec terra"><div className="wrap g2"><div className="rv"><h2>Przejdź się z nami po okolicy.</h2><p className="lead" style={{color: '#F4E2D6', marginTop: '20px'}}>Spacer z biura sprzedaży w każdą sobotę o 11:00. Zajmuje 40 minut.</p></div><div className="rv"><a className="btn btn-p" href={`${BASE}/kontakt/`}>Zapisz się na spacer</a></div></div></section>


      <Behaviors page="pages" />
    </>
  );
}
