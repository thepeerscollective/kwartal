import type { Metadata } from 'next';
import Behaviors from '@/components/Behaviors';
import { BASE } from '@/lib/base';

export const metadata: Metadata = { title: 'Inwestycja', description: 'Fabryka, w której da się mieszkać: historia miejsca, architektura, standard wykończenia i części wspólne.' };

export default function Inwestycja() {
  return (
    <>


<section className="bleed" style={{position: 'relative'}}><div className="ph" style={{borderRadius: '0'}}><img src={`${BASE}/img/i01.webp`} alt="Panorama kwartału z lotu ptaka, cztery budynki wokół zielonego dziedzińca" decoding="async" /></div>
<div className="wrap" style={{position: 'absolute', inset: 'auto 0 48px 0', color: 'var(--paper)'}}><p className="k" style={{color: 'var(--paper)'}}>Inwestycja</p><h1 style={{textShadow: '0 2px 30px rgba(0,0,0,.35)'}}>Fabryka, w której<br />da się mieszkać.</h1></div></section>
<section className="sec"><div className="wrap">
<div className="head rv"><div><p className="k">Historia miejsca</p><h2>Ponad sto lat w trzech datach.</h2></div></div>
<div className="g3"><div className="rv" style={{borderTop: '2px solid var(--ink)', paddingTop: '24px'}}><p className="h1" style={{color: 'var(--ink)'}}>1912</p><h3 style={{margin: '18px 0 8px'}}>Fabryka wyrobów metalowych</h3><p className="lead" style={{fontSize: '16px'}}>Hala z cegły i stalowe kratownice, które zostają w budynku A.</p></div><div className="rv" style={{borderTop: '2px solid var(--ink)', paddingTop: '24px'}}><p className="h1" style={{color: 'var(--grey)'}}>1998</p><h3 style={{margin: '18px 0 8px'}}>Zamknięcie zakładu</h3><p className="lead" style={{fontSize: '16px'}}>Teren stoi pusty prawie trzydzieści lat.</p></div><div className="rv" style={{borderTop: '2px solid var(--ink)', paddingTop: '24px'}}><p className="h1" style={{color: 'var(--terra)'}}>2027</p><h3 style={{margin: '18px 0 8px'}}>Kwartał Zabłocie</h3><p className="lead" style={{fontSize: '16px'}}>124 mieszkania, dziedziniec i ogród na dachu.</p></div></div>
</div></section>
<section className="sec dark"><div className="wrap g2">
<div className="rv"><div className="ph " style={{aspectRatio: '4/5'}}><img src={`${BASE}/img/i02.webp`} alt="Portret architektki Anny Tarnowskiej w hali fabrycznej" loading="lazy" decoding="async" /></div></div>
<div className="rv"><p className="k">Architektura</p><p className="quote" style={{fontSize: 'clamp(24px,2.4vw,34px)', margin: '24px 0'}}>„Nie chcieliśmy kolejnego bloku obok starej fabryki. Chcieliśmy, żeby fabryka dalej tu była, tylko żeby dało się w niej mieszkać.”</p><p><b>Anna Tarnowska</b></p><p className="mono" style={{color: '#8D877C'}}>Tarnowski Architekci · nagroda SARP za rewitalizację, 2024</p>
<div className="stats" style={{gridTemplateColumns: 'repeat(3,1fr)', marginTop: 'clamp(10px,5.33vh,48px)'}}><div><b>2,9 m</b><span>wysokość loftów w budynku A</span></div><div><b>70%</b><span>ścian od dziedzińca z odzyskanej cegły</span></div><div><b>0</b><span>balkonów nad ulicą, wszystkie do środka</span></div></div></div>
</div></section>
<section className="sec"><div className="wrap">
<div className="head rv"><div><p className="k">Standard</p><h2>Co dostajesz w cenie.</h2></div><a className="btn btn-l" href="#">Pobierz pełną specyfikację PDF</a></div>
<div className="rv"><div style={{display: 'grid', gridTemplateColumns: '1fr 1.4fr 1fr', gap: '24px', padding: 'clamp(10px,2.44vh,22px) 0', borderTop: '1px solid var(--line)'}}><h3>Okna</h3><p>aluminiowe, potrójne szyby, od podłogi</p><p className="mono">Schüco · 0,8 W/m²K</p></div><div style={{display: 'grid', gridTemplateColumns: '1fr 1.4fr 1fr', gap: '24px', padding: 'clamp(10px,2.44vh,22px) 0', borderTop: '1px solid var(--line)'}}><h3>Drzwi wejściowe</h3><p>antywłamaniowe klasy RC3, akustyczne 42 dB</p><p className="mono">—</p></div><div style={{display: 'grid', gridTemplateColumns: '1fr 1.4fr 1fr', gap: '24px', padding: 'clamp(10px,2.44vh,22px) 0', borderTop: '1px solid var(--line)'}}><h3>Ogrzewanie</h3><p>podłogowe z pompy ciepła, sterowane z telefonu</p><p className="mono">koszt ~2 zł/m² mies.</p></div><div style={{display: 'grid', gridTemplateColumns: '1fr 1.4fr 1fr', gap: '24px', padding: 'clamp(10px,2.44vh,22px) 0', borderTop: '1px solid var(--line)'}}><h3>Wentylacja</h3><p>mechaniczna z rekuperacją, filtry F7</p><p className="mono">świeże powietrze bez otwierania okien</p></div><div style={{display: 'grid', gridTemplateColumns: '1fr 1.4fr 1fr', gap: '24px', padding: 'clamp(10px,2.44vh,22px) 0', borderTop: '1px solid var(--line)'}}><h3>Części wspólne</h3><p>lastryko wylewane na miejscu</p><p className="mono">—</p></div><div style={{display: 'grid', gridTemplateColumns: '1fr 1.4fr 1fr', gap: '24px', padding: 'clamp(10px,2.44vh,22px) 0', borderTop: '1px solid var(--line)'}}><h3>Balkony</h3><p>szkło i stal, deska kompozytowa</p><p className="mono">—</p></div><div style={{display: 'grid', gridTemplateColumns: '1fr 1.4fr 1fr', gap: '24px', padding: 'clamp(10px,2.44vh,22px) 0', borderTop: '1px solid var(--line)'}}><h3>Ładowarka</h3><p>instalacja w każdym miejscu postojowym</p><p className="mono">7 kW</p></div></div>
</div></section>
<section className="sec sand"><div className="wrap">
<div className="head rv"><div><p className="k">Części wspólne</p><h2>Więcej niż klatka schodowa.</h2></div></div>
<div className="g4"><div className="rv"><div className="ph " style={{aspectRatio: '4/5'}}><img src={`${BASE}/img/i03.webp`} alt="Dziedziniec z placem zabaw pod lipami" loading="lazy" decoding="async" /></div><h3 style={{marginTop: '18px'}}>Dziedziniec</h3><p style={{color: 'var(--grey)', fontSize: '15px', marginTop: '6px'}}>3 200 m² zieleni, plac zabaw z drewna i ławki pod lipami.</p></div><div className="rv"><div className="ph " style={{aspectRatio: '4/5'}}><img src={`${BASE}/img/i04.webp`} alt="Ogród na dachu z grządkami" loading="lazy" decoding="async" /></div><h3 style={{marginTop: '18px'}}>Ogród na dachu</h3><p style={{color: 'var(--grey)', fontSize: '15px', marginTop: '6px'}}>Grządki do wynajęcia, grill i widok na Wawel z budynku C.</p></div><div className="rv"><div className="ph " style={{aspectRatio: '4/5'}}><img src={`${BASE}/img/i05.webp`} alt="Pracownia rowerowa ze stojakami" loading="lazy" decoding="async" /></div><h3 style={{marginTop: '18px'}}>Pracownia rowerowa</h3><p style={{color: 'var(--grey)', fontSize: '15px', marginTop: '6px'}}>Stojaki na 180 rowerów, myjka i narzędzia.</p></div><div className="rv"><div className="ph " style={{aspectRatio: '4/5'}}><img src={`${BASE}/img/i06.webp`} alt="Pokój dla gości" loading="lazy" decoding="async" /></div><h3 style={{marginTop: '18px'}}>Pokój dla gości</h3><p style={{color: 'var(--grey)', fontSize: '15px', marginTop: '6px'}}>Mieszkanie dla Twoich gości, rezerwujesz w aplikacji.</p></div></div>
</div></section>
<section className="sec dark"><div className="wrap">
<p className="k rv">Ekologia bez opowieści</p>
<div className="stats" style={{gridTemplateColumns: 'repeat(3,1fr)', marginTop: 'clamp(10px,3.56vh,32px)'}}><div className="rv"><b style={{fontSize: 'clamp(56px,7vw,110px)'}}>−62%</b><span>emisji CO₂ wobec nowego budynku, bo zostawiliśmy stare mury</span></div><div className="rv"><b style={{fontSize: 'clamp(56px,7vw,110px)'}}>100%</b><span>energii do części wspólnych z paneli na dachu</span></div><div className="rv"><b style={{fontSize: 'clamp(56px,7vw,110px)'}}>48</b><span>drzew posadzonych na dziedzińcu i wzdłuż ulicy</span></div></div>
</div></section>


      <Behaviors page="common" />
    </>
  );
}
