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
- `src/data/projects.ts`: projektens texter, tekniker och länkar.
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
2. Ändra ett projekt i `src/data/projects.ts` och se hur kortet uppdateras.
3. Läs `ProjectCardProps` (typen `Props`) för att förstå hur data skickas med props.
4. Följ `filter` och `selected` i `Projects.tsx` för att förstå React state.
5. Läs CSS Grid och media queries i `App.css` för att förstå responsiv layout.

Inget kontaktformulär eller databas behövs. Mejlknappen öppnar besökarens mejlprogram. Typsnitt hämtas från Google Fonts, med lokala systemtypsnitt som reserv. Sidan använder ingen spårning.
