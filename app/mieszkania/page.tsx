import type { Metadata } from 'next';
import Behaviors from '@/components/Behaviors';
import { BASE } from '@/lib/base';

export const metadata: Metadata = { title: 'Mieszkania', description: 'Wyszukiwarka mieszkań na elewacji: 81 wolnych z 124. Filtruj po pokojach, metrażu, cenie, piętrze i stronie świata.' };

export default function Listing() {
  return (
    <>


<section className="listing-head"><div className="wrap">
<div className="head" style={{marginBottom: '28px'}}><div><p className="k">Mieszkania · <span id="count2">81</span> pasujących, 81 wolnych z 124</p><h1>Znajdź swoje okno.</h1></div>
<div className="views" role="group" aria-label="Widok"><button aria-pressed="true" data-view="facade">Elewacja</button><button aria-pressed="false" data-view="list">Lista</button></div></div>
<form className="filters" id="filters">
<div><span className="mono">Pokoje</span><div className="chips" data-f="rooms" data-toggle="many"><button type="button" className="chip" aria-pressed="false" data-v="1">1</button><button type="button" className="chip" aria-pressed="false" data-v="2">2</button><button type="button" className="chip" aria-pressed="false" data-v="3">3</button><button type="button" className="chip" aria-pressed="false" data-v="4">4</button><button type="button" className="chip" aria-pressed="false" data-v="5">5+</button></div></div>
<div><span className="mono">Metraż od <output id="v-area"></output></span><input type="range" id="f-area" min="38" max="110" step="1" defaultValue="38" aria-label="Metraż minimalny" /></div>
<div><span className="mono">Cena <output id="v-price"></output></span><input type="range" id="f-price" min="450000" max="1700000" step="10000" defaultValue="1700000" aria-label="Cena maksymalna" /></div>
<div><span className="mono">Budynek</span><div className="chips" data-f="b" data-toggle="many"><button type="button" className="chip" aria-pressed="false" data-v="A">A</button><button type="button" className="chip" aria-pressed="false" data-v="B">B</button><button type="button" className="chip" aria-pressed="false" data-v="C">C</button><button type="button" className="chip" aria-pressed="false" data-v="D">D</button></div></div>
<div><span className="mono">Piętro</span><div className="chips" data-f="floor" data-toggle="many"><button type="button" className="chip" aria-pressed="false" data-v="0">parter</button><button type="button" className="chip" aria-pressed="false" data-v="12">1–2</button><button type="button" className="chip" aria-pressed="false" data-v="34">3–4</button><button type="button" className="chip" aria-pressed="false" data-v="56">5–6</button></div></div>
<div><span className="mono">Strona świata</span><div className="chips" data-f="exp" data-toggle="many"><button type="button" className="chip" aria-pressed="false" data-v="N">N</button><button type="button" className="chip" aria-pressed="false" data-v="E">E</button><button type="button" className="chip" aria-pressed="false" data-v="S">S</button><button type="button" className="chip" aria-pressed="false" data-v="W">W</button></div></div>
<div><span className="mono">Na zewnątrz</span><div className="chips" data-f="out" data-toggle="many"><button type="button" className="chip" aria-pressed="false" data-v="Balkon">Balkon</button><button type="button" className="chip" aria-pressed="false" data-v="Taras">Taras</button><button type="button" className="chip" aria-pressed="false" data-v="Ogródek">Ogródek</button><button type="button" className="chip" aria-pressed="false" data-v="Loggia">Loggia</button></div></div>
<div><span className="mono">Dodatkowo</span><label style={{display: 'block', fontSize: '15px'}}><input type="checkbox" id="x-park" /> Miejsce postojowe w cenie</label><label style={{display: 'block', fontSize: '15px'}}><input type="checkbox" id="x-store" /> Komórka lokatorska</label><label style={{display: 'block', fontSize: '15px'}}><input type="checkbox" id="x-acc" /> Dostosowane dla wózka</label></div>
<div className="actions"><a className="btn btn-t" href="#view-list">Pokaż <span id="count">81</span> mieszkań</a><button type="button" className="link" id="clear">Wyczyść filtry</button></div>
</form></div></section>
<section id="view-facade" style={{padding: '24px 0 56px'}}><div className="wrap">
<p className="mono" style={{marginBottom: '16px'}}>Najedź na okno · kliknij, żeby otworzyć mieszkanie · wyszarzone okna nie pasują do filtrów</p>
<div className="quarter" id="quarter"><div className="pop" id="q-pop" hidden></div></div>
<div className="legend"><span><i className="st-free"></i>wolne</span><span><i className="st-res"></i>rezerwacja</span><span><i className="st-sold"></i>sprzedane</span></div>
</div></section>
<section id="view-list" style={{padding: '24px 0 96px'}}><div className="wrap">
<div className="head" style={{marginBottom: '28px'}}><h2 className="h3">Lista mieszkań</h2><label className="mono">Sortuj <select id="sort" style={{marginLeft: '8px', border: '1.5px solid var(--line)', borderRadius: '999px', padding: '8px 14px', background: 'var(--white)'}}><option value="rec">polecane</option><option value="pa">cena rosnąco</option><option value="pd">cena malejąco</option><option value="aa">metraż malejąco</option></select></label></div>
<div className="cards" id="cards"></div>
</div></section>
<section className="sec sand"><div className="wrap g2">
<div className="rv"><h2>Nie ma Twojego mieszkania?</h2><p className="lead" style={{marginTop: '20px'}}>Zostaw kryteria. Napiszemy, kiedy zwolni się rezerwacja albo ruszy sprzedaż kolejnego piętra budynku C i D.</p></div>
<form className="form rv"><div className="field"><label htmlFor="pe">Twój e-mail</label><input id="pe" type="email" required autoComplete="email" /></div><button className="btn btn-t" type="submit">Powiadom mnie</button><p className="ok">Gotowe. Dostaniesz maila, gdy coś się zwolni.</p></form>
</div></section>

      <Behaviors page="listing" />
    </>
  );
}
