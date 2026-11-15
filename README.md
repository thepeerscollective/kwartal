# Kwartał Zabłocie

Serwis dewelopera: 124 mieszkania w dawnej fabryce na Zabłociu. Koncept: **wybierz okno, nie metraż**. Najeżdżasz na okno elewacji i widzisz mieszkanie, które się za nim kryje.

Live: https://thepeerscollective.github.io/kwartal/

- Next.js 15, static export, GitHub Pages (`.github/workflows/pages.yml`)
- `app/` strony, `components/` nagłówek, stopka, warstwa interakcji
- `lib/site.js` dane 124 mieszkań, elewacje, filtry, symulator słońca, mapa 15 minut, kalkulator raty
- `public/img/` zdjęcia (webp)

```
npm install
NEXT_PUBLIC_BASE= npm run dev
```

Projekt: The Peers Collective
