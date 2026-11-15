import { BASE } from '@/lib/base';

export default function NotFound() {
  return (
    <section className="sec"><div className="wrap">
      <p className="k">404</p>
      <h1>Tego okna<br /><span className="light">nie ma na elewacji.</span></h1>
      <p className="lead" style={{ margin: '24px 0 32px' }}>Może zostało sprzedane, a może adres ma literówkę.</p>
      <div className="row"><a className="btn btn-t" href={`${BASE}/mieszkania/`}>Wszystkie mieszkania</a><a className="btn btn-l" href={`${BASE}/`}>Strona główna</a></div>
    </div></section>
  );
}
