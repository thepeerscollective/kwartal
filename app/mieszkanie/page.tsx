import type { Metadata } from 'next';
import Behaviors from '@/components/Behaviors';
import { BASE } from '@/lib/base';

export const metadata: Metadata = { title: 'B · 4.04 · 3 pokoje, 64,2 m²', description: 'Karta mieszkania: rzut, cena, harmonogram płatności i symulator słońca w mieszkaniu.' };

export default function Apartment() {
  return (
    <>


<section className="sec" style={{paddingTop: '40px'}}><div className="wrap">
<p className="crumb" data-f="crumb">Mieszkania / Budynek B / 4.04</p>
<div className="apt" style={{marginTop: '28px'}}>
<div>
<p className="k"><span data-f="id">B · 4.04</span></p><h1 style={{margin: '14px 0 12px'}} data-f="title">3 pokoje, 64,2 m²</h1><p className="lead" data-f="sub" style={{maxWidth: 'none', marginBottom: '32px'}}></p>
<div className="tabs" role="tablist"><button role="tab" aria-selected="true" aria-controls="t-2d">Rzut 2D</button><button role="tab" aria-selected="false" aria-controls="t-viz">Wizualizacja</button><button role="tab" aria-selected="false" aria-controls="t-win">Widok z okna</button></div>
<div id="t-2d" role="tabpanel" className="plan"><div id="plan"></div></div>
<div id="t-viz" role="tabpanel" hidden><div className="ph " style={{aspectRatio: '3/2'}}><img src={`${BASE}/img/d02.webp`} alt="Wizualizacja salonu z aneksem, okno od podłogi, dąb i lastryko" decoding="async" /></div></div>
<div id="t-win" role="tabpanel" hidden><div className="ph " style={{aspectRatio: '3/2'}}><img src={`${BASE}/img/d01.webp`} alt="Widok z okna mieszkania na zielony dziedziniec" decoding="async" /></div></div>
</div>
<aside className="side">
<span className="status" data-f="status">wolne</span>
<p className="price" data-f="price">812 000 zł</p><p className="mono" data-f="ppm"></p>
<dl className="spec"><div><dt>Pokoje</dt><dd data-f="rooms"></dd></div><div><dt>Metraż</dt><dd data-f="area"></dd></div><div><dt>Piętro</dt><dd data-f="floor"></dd></div><div><dt>Strona świata</dt><dd data-f="exp"></dd></div><div><dt>Balkon / taras</dt><dd data-f="balcony"></dd></div><div><dt>Oddanie</dt><dd data-f="ready"></dd></div><div><dt>Miejsce postojowe</dt><dd>+ 45 000 zł</dd></div><div><dt>Komórka</dt><dd>+ 12 000 zł</dd></div></dl>
<button className="btn btn-t" id="reserve" style={{justifyContent: 'center'}}>Zarezerwuj na 7 dni</button>
<a className="btn btn-l" style={{justifyContent: 'center'}} href={`${BASE}/kontakt/`}>Umów prezentację</a>
<a className="link" style={{justifySelf: 'start'}} href="#">Pobierz kartę mieszkania PDF ↓</a>
</aside></div></div></section>

<section className="sec dark" id="slonce"><div className="wrap sun">
<div className="rv"><p className="k">Słońce w mieszkaniu <span data-f="sunid"></span></p><h2>Zobacz, gdzie<br /><span className="light">pada słońce.</span></h2>
<p className="lead" style={{margin: '24px 0 8px'}}>Każde mieszkanie ma policzoną wędrówkę słońca: orientację okien, wysokość budynku naprzeciwko i lipy na podwórzu. Przesuń godzinę, zmień miesiąc i zobacz, gdzie położysz rano kawę.</p>
<div className="sun-stats" style={{marginTop: '28px'}}><div><b id="s-salon">6 h 20 min</b><span className="mono" id="s-salon-l" style={{color: '#8D877C'}}>słońca w salonie</span></div><div><b id="s-dec">2 h 10 min</b><span className="mono" style={{color: '#8D877C'}}>w salonie w najkrótszy dzień roku</span></div><div><b id="s-bed">7:40–10:10</b><span className="mono" style={{color: '#8D877C'}}>sypialnia, poranne słońce</span></div></div></div>
<div className="rv"><div className="sun-stage">
<svg id="sun-svg" viewBox="-70 -70 784 620" role="img" aria-label="Rzut mieszkania z plamą słońca na podłodze">
<defs><clipPath id="clip-salon"><path d="M0 180 H180 V100 H180 V0 H420 V480 H0 Z" /></clipPath><clipPath id="clip-bed"><rect x="420" y="0" width="224" height="300" /></clipPath></defs>
<rect x="0" y="0" width="644" height="480" fill="#F2EFE9" />
<g id="sun-patches"></g>
<g stroke="#1C1C1A" fill="none"><rect x="0" y="0" width="644" height="480" strokeWidth="7" /><path d="M420 0 V300 M420 300 H644 M0 180 H180 M180 0 V100" strokeWidth="5" /></g>
<rect x="40" y="476" width="160" height="9" fill="#9EC3D6" /><rect x="260" y="476" width="160" height="9" fill="#9EC3D6" /><rect x="640" y="90" width="9" height="130" fill="#9EC3D6" />
<rect x="60" y="300" width="200" height="60" rx="4" fill="#8E9A82" opacity=".55" /><rect x="470" y="110" width="120" height="150" rx="4" fill="#D9B99F" opacity=".7" /><rect x="200" y="8" width="200" height="40" fill="#D8D2C6" />
<g fontFamily="IBM Plex Mono" fontSize="12" fill="#1C1C1A" letterSpacing="1"><text x="30" y="225">SALON Z KUCHNIĄ</text><text x="450" y="60">SYPIALNIA</text><text x="30" y="60">ŁAZIENKA</text><text x="450" y="340">POKÓJ</text></g>
<text x="40" y="515" fontFamily="IBM Plex Mono" fontSize="12" fill="#D9B99F" letterSpacing="1">BALKON ↓ POŁUDNIE</text>
<circle id="sun-dot" r="16" fill="#E8B07A" />
</svg>
<div style={{marginTop: '28px'}}><span className="mono" style={{color: '#8D877C'}}>Godzina <output id="v-hour" style={{color: 'var(--paper)'}}>8:00</output></span>
<input type="range" id="sun-hour" min="5" max="21" step="0.25" defaultValue="8" style={{'--track': 'var(--terra-l)'} as React.CSSProperties} aria-label="Godzina" />
<div className="hours"><span>5</span><span>9</span><span>13</span><span>17</span><span>21</span></div></div>
<div style={{marginTop: '18px'}}><span className="mono" style={{color: '#8D877C', display: 'block', marginBottom: '10px'}}>Miesiąc (21. dzień)</span><div className="months"><button aria-pressed="false">I</button><button aria-pressed="false">II</button><button aria-pressed="true">III</button><button aria-pressed="false">IV</button><button aria-pressed="false">V</button><button aria-pressed="false">VI</button><button aria-pressed="false">VII</button><button aria-pressed="false">VIII</button><button aria-pressed="false">IX</button><button aria-pressed="false">X</button><button aria-pressed="false">XI</button><button aria-pressed="false">XII</button></div></div>
<p className="sunreadout" id="sun-read"></p>
</div><p className="mono" style={{marginTop: '14px', color: '#5E5A52'}}>Obliczenia na podstawie położenia słońca dla Krakowa (50,06°N) i zacienienia przez budynek naprzeciwko</p></div>
</div></section>

<section className="sec"><div className="wrap g2">
<div className="rv"><h2>Gdzie dokładnie?</h2><p className="lead" style={{margin: '20px 0 32px'}} data-f="where"></p><div id="where-facade" style={{maxWidth: '460px'}}></div></div>
<div className="rv"><div className="ph " style={{aspectRatio: '4/5'}}><img src={`${BASE}/img/d01.webp`} alt="Widok z okna mieszkania na zielony dziedziniec, popołudnie" loading="lazy" decoding="async" /></div></div>
</div></section>

<section className="sec sand"><div className="wrap">
<div className="head rv"><div><h2>Jak może wyglądać.</h2><p className="lead" style={{marginTop: '16px'}}>Wizualizacje w standardzie „pod klucz”. Kolory i materiały wybierasz sam.</p></div></div>
<div className="g3"><div className="rv"><div className="ph " style={{aspectRatio: '4/5'}}><img src={`${BASE}/img/d02.webp`} alt="Salon z aneksem, dąb i lastryko" loading="lazy" decoding="async" /></div></div><div className="rv"><div className="ph " style={{aspectRatio: '4/5'}}><img src={`${BASE}/img/d03.webp`} alt="Sypialnia z lnianą pościelą" loading="lazy" decoding="async" /></div></div><div className="rv"><div className="ph " style={{aspectRatio: '4/5'}}><img src={`${BASE}/img/d04.webp`} alt="Łazienka z zielonymi płytkami i mosiądzem" loading="lazy" decoding="async" /></div></div></div>
</div></section>

<section className="sec"><div className="wrap">
<div className="head rv"><h2>Ile i kiedy płacisz.</h2><a className="link" href={`${BASE}/finansowanie/`}>Policz ratę kredytu →</a></div>
<div className="payline rv"><div className="pay"><h3>10%</h3><p className="lead" style={{fontSize: '15px'}}><b data-f="p10"></b><br />przy umowie deweloperskiej</p></div><div><h3>0 zł</h3><p className="lead" style={{fontSize: '15px'}}>przez cały czas budowy</p></div><div className="pay"><h3>90%</h3><p className="lead" style={{fontSize: '15px'}}><b data-f="p90"></b><br />po odbiorze kluczy</p></div><div><h3>2×</h3><p className="lead" style={{fontSize: '15px'}}>płacisz tylko dwa razy</p></div></div>
</div></section>

<section className="sec sand"><div className="wrap"><div className="head rv"><h2>Podobne mieszkania</h2><a className="link" href={`${BASE}/mieszkania/`}>Wszystkie →</a></div><div className="cards" id="similar"></div></div></section>


      <Behaviors page="apartment" />
    </>
  );
}
