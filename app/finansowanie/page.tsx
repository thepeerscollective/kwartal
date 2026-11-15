import type { Metadata } from 'next';
import Behaviors from '@/components/Behaviors';
import { BASE } from '@/lib/base';

export const metadata: Metadata = { title: 'Finansowanie', description: 'Kalkulator raty, harmonogram płatności 10/90 i bezpłatny doradca kredytowy.' };

export default function Finansowanie() {
  return (
    <>


<section className="sec" style={{paddingBottom: '48px'}}><div className="wrap"><p className="k rv in">Finansowanie</p><h1 className="rv in">10% teraz,<br /><span className="light">reszta przy kluczach.</span></h1></div></section>
<section style={{paddingBottom: '96px'}}><div className="wrap">
<div className="calc rv in" id="calc">
<div className="in"><p className="k">Policz ratę</p>
<div><div className="lbl"><label htmlFor="c-price">Cena mieszkania</label><output id="o-price"></output></div><input type="range" id="c-price" min="400000" max="1500000" step="1000" defaultValue="812000" /></div>
<div><div className="lbl"><label htmlFor="c-dp">Wkład własny</label><output id="o-dp"></output></div><input type="range" id="c-dp" min="10" max="50" step="1" defaultValue="20" /></div>
<div><div className="lbl"><label htmlFor="c-yrs">Okres kredytu</label><output id="o-yrs"></output></div><input type="range" id="c-yrs" min="10" max="35" step="1" defaultValue="30" /></div>
<div><div className="lbl"><label htmlFor="c-rate">Oprocentowanie</label><output id="o-rate"></output></div><input type="range" id="c-rate" min="4" max="10" step="0.1" defaultValue="6.9" /></div>
<div className="chips" id="c-type" data-toggle="one"><button className="chip" aria-pressed="true" data-v="stala">Rata stała</button><button className="chip" aria-pressed="false" data-v="malejaca">Rata malejąca</button></div>
</div>
<div className="out"><p className="k">Twoja rata</p><p className="big" id="r-rata">4 280 zł</p><p className="mono" id="r-rata-l" style={{color: '#8D877C'}}></p>
<dl style={{display: 'grid', gap: '12px'}}><div><dt>Kwota kredytu</dt><dd id="r-loan"></dd></div><div><dt>Całkowity koszt odsetek</dt><dd id="r-int"></dd></div><div><dt>Wymagany dochód netto (rodzina 2+0)</dt><dd id="r-inc"></dd></div></dl>
<a className="btn btn-p" href={`${BASE}/kontakt/`} style={{justifySelf: 'start'}}>Porozmawiaj z doradcą (za darmo)</a>
<p className="mono" style={{color: '#8D877C'}}>Wyliczenie poglądowe. Nie jest ofertą banku.</p></div>
</div></div></section>
<section className="sec sand"><div className="wrap"><div className="head rv"><div><p className="k">Harmonogram płatności</p><h2>Dwie płatności. Tyle.</h2></div></div>
<div className="payline rv"><div className=""><p className="mono">dziś</p><h3 style={{margin: '8px 0'}}>Rezerwacja</h3><p style={{color: 'var(--grey)'}}>5 000 zł, zwrotne do 7 dni</p></div><div className="pay"><p className="mono">do 30 dni</p><h3 style={{margin: '8px 0'}}>Umowa deweloperska</h3><p style={{color: 'var(--grey)'}}>10% ceny</p></div><div className=""><p className="mono">2027</p><h3 style={{margin: '8px 0'}}>Budowa</h3><p style={{color: 'var(--grey)'}}>0 zł, nic nie płacisz</p></div><div className="pay"><p className="mono">IV kw. 2027</p><h3 style={{margin: '8px 0'}}>Odbiór kluczy</h3><p style={{color: 'var(--grey)'}}>90% ceny, z kredytu lub gotówką</p></div></div></div></section>
<section className="sec"><div className="wrap g2">
<div className="rv"><div className="ph " style={{aspectRatio: '4/5'}}><img src={`${BASE}/img/f01.webp`} alt="Marek Lis, doradca kredytowy w biurze sprzedaży" loading="lazy" decoding="async" /></div></div>
<div className="rv"><p className="k">Doradca kredytowy</p><h2>Marek porówna 12 banków, zanim Ty porównasz jeden.</h2><p className="lead" style={{margin: '24px 0 32px'}}>Bezpłatnie dla klientów Kwartału. Spotkanie w biurze albo przez wideo, z listą dokumentów do przygotowania.</p><a className="btn btn-t" href={`${BASE}/kontakt/`}>Umów rozmowę z Markiem</a></div>
</div></section>
<section className="sec sand"><div className="wrap g2" style={{alignItems: 'start'}}><div className="rv"><p className="k">Pytania</p><h2>Najczęściej pytacie o:</h2></div>
<div className="faq rv"><details open><summary>Czy mogę kupić bez kredytu?</summary><p>Tak. Wtedy płacisz 10% przy umowie i 90% przy odbiorze, bez żadnych dodatkowych opłat.</p></details><details><summary>Co jeśli bank mi odmówi?</summary><p>Masz 30 dni na odstąpienie od umowy bez kosztów, jeśli bank odmówi kredytu. Zwracamy całą wpłatę.</p></details><details><summary>Czy cena może się zmienić?</summary><p>Nie. Cena w umowie deweloperskiej jest ostateczna i nie jest waloryzowana.</p></details><details><summary>Czy mogę zmienić układ ścian?</summary><p>Tak, do etapu stanu surowego budynku. Pierwsza zmiana jest bezpłatna.</p></details><details><summary>Czy jest program „Pierwsze klucze”?</summary><p>Tak, mieszkania w budynku D mieszczą się w limitach programu. Doradca sprawdzi, czy się kwalifikujesz.</p></details></div></div></section>


      <Behaviors page="pages" />
    </>
  );
}
