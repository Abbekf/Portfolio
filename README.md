# Albin Kalatzis Forsberg | Portfolio

Min personliga portfolio, byggd med React, TypeScript och Vite.

## Kör lokalt

```bash
npm ci
npm run dev
```

## Produktionsbygge

```bash
npm run build
npm run preview
```

## Hitta i koden

- `src/App.tsx`: sätter ihop sidans sektioner.
- `src/components/Navbar.tsx`: navigation och mobilmeny.
- `src/components/Hero.tsx`: introduktion och porträtt.
- `src/data/projects.ts`: projektens översättningsnycklar, tekniker och länkar.
- `src/i18n.ts`: språkval, localStorage och sidans språkmetadata.
- `src/locales/sv.json` och `src/locales/en.json`: alla svenska och engelska texter.
- `src/components/Projects.tsx`: projektfilter och en inbyggd HTML-dialog.
- `src/components/ProjectCard.tsx`: återanvändbart projektkort.
- `src/components/ProjectVisual.tsx`: stiliserade projektillustrationer, inte skärmbilder eller faktiska modellresultat.
- `src/components/About.tsx`: bakgrund och LIA-erfarenheter.
- `src/components/Skills.tsx`: kompetenser med utfällbara förklaringar.
- `src/components/Contact.tsx`: mejl- och GitHub-länkar.
- `src/index.css`: grundstilar och typsnitt.
- `src/App.css`: layout, komponentstilar och mobilanpassning.

## Börja genomgången här

1. Följ flödet från `src/main.tsx` till `App.tsx` och vidare till komponenterna.
2. Ändra projekttexter i båda språkfilerna under `projectContent`. Tekniker och länkar finns i `src/data/projects.ts`.
3. Läs `ProjectCardProps` (typen `Props`) för att förstå hur data skickas med props.
4. Följ `filter` och `selected` i `Projects.tsx` för att förstå React state.
5. Läs CSS Grid och media queries i `App.css` för att förstå responsiv layout.

Inget kontaktformulär eller databas behövs. Mejlknappen öppnar besökarens mejlprogram. Typsnitt hämtas från Google Fonts, med lokala systemtypsnitt som reserv. Sidan använder ingen spårning.

## Språk

Svenska är standard för nya besökare, oavsett webbläsarens språk. Knapparna 🇸🇪 SV och 🇬🇧 EN i sidhuvudet byter språk direkt med i18next och react-i18next. Valet sparas i localStorage som `portfolio-language`. HTML-attributet `lang`, sidtiteln och beskrivningarna uppdateras med språkvalet. Om localStorage är blockerat fungerar språkbytet ändå under besöket.

Lägg alltid till nya texter i båda språkfilerna med samma nyckel. Projektnamn, tekniker och länkar behålls i projektdata; beskrivningar och projektdetaljer översätts när komponenterna renderas.
