import type { Metadata } from 'next';
import Behaviors from '@/components/Behaviors';
import { BASE } from '@/lib/base';

export const metadata: Metadata = { title: 'Postęp budowy', description: 'Patrz, jak rośnie Twoje okno: postęp budynków, kamera na żywo i dziennik budowy miesiąc po miesiącu.' };

export default function Postep() {
  return (
    <>


<section className="sec" style={{paddingBottom: '48px'}}><div className="wrap"><p className="k rv in">Postęp budowy · aktualizacja <span data-today>14.11.2026</span></p><h1 className="rv in">Patrz, jak rośnie<br /><span className="light">Twoje okno.</span></h1></div></section>
<section style={{paddingBottom: '96px'}}><div className="wrap g4"><div className="bcard rv"><div className="t"><b>A</b><h3>Dawna hala</h3></div><p className="h2">74%</p><div className="bar"><i data-w="74%"></i></div><p className="meta">teraz: wykończenia klatek</p></div><div className="bcard rv"><div className="t"><b>B</b><h3>Od dziedzińca</h3></div><p className="h2">62%</p><div className="bar"><i data-w="62%"></i></div><p className="meta">teraz: okna i dach</p></div><div className="bcard rv"><div className="t"><b>C</b><h3>Od Wisły</h3></div><p className="h2">28%</p><div className="bar"><i data-w="28%"></i></div><p className="meta">teraz: stan surowy, 3. piętro</p></div><div className="bcard rv"><div className="t"><b>D</b><h3>Kawalerki</h3></div><p className="h2">12%</p><div className="bar"><i data-w="12%"></i></div><p className="meta">teraz: fundamenty</p></div></div></section>
<section className="sec dark"><div className="wrap g2">
<div className="rv"><p className="k">Kamera na żywo · co 15 minut</p><h2>Zajrzyj na budowę<br />kiedy chcesz.</h2><p className="lead" style={{margin: '24px 0'}}>Kamera na dźwigu robi zdjęcie co 15 minut. Z tych zdjęć co miesiąc składamy minutowy film.</p><p className="mono" id="cam-next" style={{color: '#8D877C'}}></p><a className="btn btn-l" style={{marginTop: '24px'}} href="#">Zobacz film z października</a></div>
<div className="live rv"><div className="ph " style={{aspectRatio: '16/10'}}><img src={`${BASE}/img/p01.webp`} alt="Widok z kamery na dźwigu na plac budowy budynku B" decoding="async" /></div><span className="tag">LIVE</span><span className="time" id="cam-time"></span></div>
</div></section>
<section className="sec"><div className="wrap"><div className="head rv"><div><p className="k">Dziennik budowy</p><h2>Miesiąc po miesiącu.</h2></div></div>
<div className="month rv"><div><h3>Listopad 2026</h3><p className="lead" style={{fontSize: '16px', marginTop: '10px'}}>Budynek B ma już wszystkie okna. Zaczynamy dach i taras na 6. piętrze.</p></div><div className="ph " style={{aspectRatio: '4/3'}}><img src={`${BASE}/img/p02.webp`} alt="Budowa, listopad 2026" loading="lazy" decoding="async" /></div><div className="ph " style={{aspectRatio: '4/3'}}><img src={`${BASE}/img/p02b.webp`} alt="Detal z budowy, listopad 2026" loading="lazy" decoding="async" /></div></div><div className="month rv"><div><h3>Październik 2026</h3><p className="lead" style={{fontSize: '16px', marginTop: '10px'}}>Odsłoniliśmy cegłę w hali A. Ręczne czyszczenie potrwa do stycznia.</p></div><div className="ph " style={{aspectRatio: '4/3'}}><img src={`${BASE}/img/p03.webp`} alt="Budowa, październik 2026" loading="lazy" decoding="async" /></div><div className="ph " style={{aspectRatio: '4/3'}}><img src={`${BASE}/img/p03b.webp`} alt="Detal z budowy, październik 2026" loading="lazy" decoding="async" /></div></div><div className="month rv"><div><h3>Wrzesień 2026</h3><p className="lead" style={{fontSize: '16px', marginTop: '10px'}}>Stan surowy budynku B. Wiecha na dachu i grill dla ekipy.</p></div><div className="ph " style={{aspectRatio: '4/3'}}><img src={`${BASE}/img/p04.webp`} alt="Budowa, wrzesień 2026" loading="lazy" decoding="async" /></div><div className="ph " style={{aspectRatio: '4/3'}}><img src={`${BASE}/img/p04b.webp`} alt="Detal z budowy, wrzesień 2026" loading="lazy" decoding="async" /></div></div><div className="month rv"><div><h3>Sierpień 2026</h3><p className="lead" style={{fontSize: '16px', marginTop: '10px'}}>Fundamenty budynku C. Znaleźliśmy fragment starego torowiska, zostanie na dziedzińcu.</p></div><div className="ph " style={{aspectRatio: '4/3'}}><img src={`${BASE}/img/p05.webp`} alt="Budowa, sierpień 2026" loading="lazy" decoding="async" /></div><div className="ph " style={{aspectRatio: '4/3'}}><img src={`${BASE}/img/p05b.webp`} alt="Detal z budowy, sierpień 2026" loading="lazy" decoding="async" /></div></div>
</div></section>
<section className="sec sand"><div className="wrap g2"><div className="rv"><h2>Raport z budowy raz w miesiącu.</h2><p className="lead" style={{marginTop: '20px'}}>Zdjęcia, opóźnienia, jeśli są, i to, co się zmieniło. Bez marketingu.</p></div><form className="form rv"><div className="field"><label htmlFor="ne">Twój e-mail</label><input id="ne" type="email" required /></div><button className="btn btn-t" type="submit">Zapisz mnie</button><p className="ok">Zapisane. Pierwszy raport 1 grudnia.</p></form></div></section>


      <Behaviors page="pages" />
    </>
  );
}
