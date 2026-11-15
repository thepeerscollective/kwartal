import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/bricolage-grotesque/opsz.css';
import '@fontsource/ibm-plex-mono/500.css';
import './globals.css';
import { Footer, Header } from '@/components/chrome';
import { BASE } from '@/lib/base';

export const metadata: Metadata = {
  metadataBase: new URL('https://thepeerscollective.com'),
  title: { default: 'Kwartał Zabłocie · Wybierz okno, nie metraż', template: '%s · Kwartał Zabłocie' },
  description: '124 mieszkania w dawnej fabryce na Zabłociu w Krakowie. Najedź na okno elewacji i zobacz mieszkanie, które się za nim kryje.',
  icons: { icon: `${BASE}/favicon.svg` },
  openGraph: { title: 'Kwartał Zabłocie', description: 'Wybierz okno, nie metraż. 124 mieszkania w dawnej fabryce na Zabłociu.', images: [`${BASE}/img/h01.webp`] },
};
export const viewport: Viewport = { themeColor: '#F2EFE9', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <a className="skip" href="#main">Przejdź do treści</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
