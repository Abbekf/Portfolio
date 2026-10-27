export type Project = {
  id: string
  title: string
  category: 'Eget projekt' | 'LIA-projekt'
  label: string
  description: string
  technologies: string[]
  videoUrl?: string
  posterUrl?: string
  downloadUrl?: string
  githubUrl?: string
  problem: string
  approach: string
  takeaway: string
}

export const projects: Project[] = [
  {
    id: 'trafficvision',
    title: 'TrafficVision',
    category: 'Eget projekt',
    label: 'Objektdetektering & tracking',
    description:
      'Analysera trafikvideo med AI, följ fordon över tid och räkna passager över en valbar linje.',
    technologies: ['Python', 'YOLO11', 'ByteTrack', 'Streamlit'],
    videoUrl: '/projects/trafficvision/demo.mp4',
    posterUrl: '/projects/trafficvision/preview.jpg',
    githubUrl: 'https://github.com/Abbekf/TrafficVision',
    problem:
      'Hur kan man gå från en trafikvideo till en överblick över vilka fordon som passerar, i vilken riktning och vid vilken tidpunkt?',
    approach:
      'Jag byggde en Python-app där en förtränad YOLO11n-modell upptäcker objekt och ByteTrack kopplar ihop dem mellan bildrutorna. En separat räknare registrerar spårens första passage över en horisontell eller vertikal linje. Appen har en inbyggd exempelvideo, stöd för egna uppladdningar och export till markerad video, CSV och JSON.',
    takeaway:
      'Videon visar en riktig modellkörning på 10 sekunder motorvägstrafik, med 15 registrerade passager. Projektet har 23 automatiserade tester för bland annat räknelogik, export och appflöde. Passagerna är modellens förutsägelser; träffsäkerheten är ännu inte uppmätt mot manuellt märkta trafikklipp.',
  },
  {
    id: 'media',
    title: 'MediaSearch AI',
    category: 'Eget projekt',
    label: 'Tal → text → sökning',
    description:
      'Hitta rätt ögonblick i ljud och video genom att söka efter betydelse, inte bara exakta ord.',
    technologies: ['Python', 'Whisper', 'Streamlit'],
    githubUrl: 'https://github.com/Abbekf/MediaSearch-ai',
    problem:
      'Långa inspelningar är svåra att söka i. En vanlig textsökning missar ofta det du letar efter när formuleringen skiljer sig från din fråga.',
    approach:
      'Jag byggde ett flöde från transkription till semantisk sökning och ett Streamlit-gränssnitt. Texten representeras som embeddings så att frågor kan matchas med innehåll som har liknande betydelse.',
    takeaway:
      'Projektet knyter ihop taligenkänning, textrepresentation och ett användargränssnitt. Ett exempeltranskript och tester finns i repot.',
  },
  {
    id: 'melanoma',
    title: 'Melanoma Classifier',
    category: 'Eget projekt',
    label: 'Computer vision',
    description:
      'Klassificering av hudförändringar med transfer learning och fokus på noggrann utvärdering.',
    technologies: ['TensorFlow', 'EfficientNetB0', 'Grad-CAM'],
    githubUrl: 'https://github.com/Abbekf/Melanoma-classifier',
    problem:
      'Jag ville undersöka hur en förtränad bildmodell kan användas på hudbilder, och hur man utvärderar den utan att läcka information mellan datamängder.',
    approach:
      'Jag finjusterade EfficientNetB0 på ISIC2020 med patientbaserad uppdelning. Modellval gjordes på valideringsdata och följdes av en låst testutvärdering. Grad-CAM användes för att undersöka modellens fokus på valideringsbilder.',
    takeaway:
      'Den valda modellen nådde ROC-AUC 0,878 på valideringsdata. Repot innehåller sparade testresultat, figurer och reproducerbarhetskontroller. Detta är ett utbildningsprojekt, inte ett kliniskt verktyg.',
  },
  {
    id: 'cardiac',
    title: 'Cardiac Inpainting',
    category: 'LIA-projekt',
    label: 'Nightingale Heart',
    description:
      'Kontrafaktiska bröströntgenbilder med segmentering och generativ AI.',
    technologies: ['U-Net', 'Stable Diffusion', 'Python'],
    problem:
      'Hur kan man förändra hjärtregionen i en röntgenbild och samtidigt bevara bildens övriga innehåll?',
    approach:
      'Under min LIA på Nightingale Heart arbetade jag med en pipeline för NIH-bilder. Segmentering av hjärta och lungor följdes av inpainting och generering av kontrafaktiska hjärtregioner. SSIM användes för att kontrollera att omgivande bildinnehåll bevarades.',
    takeaway:
      'Jag fick praktisk erfarenhet av medicinsk bildbehandling, segmenteringsmasker och generativa modeller. Projektet genomfördes under LIA och har inget offentligt kodrepo här.',
  },
  {
    id: 'agents',
    title: 'Konkurrentanalys med AI',
    category: 'LIA-projekt',
    label: 'DeLorean',
    description:
      'Från webbdata till återkommande konkurrentbevakning med LLM-baserad analys.',
    technologies: ['Python', 'LLM', 'AI-agenter'],
    problem:
      'Att manuellt följa konkurrenters webbplatser tar tid och gör det lätt att missa förändringar.',
    approach:
      'Under min LIA på DeLorean arbetade jag med webbinsamling och LLM-analys. Flödet delades upp i upptäckt av webbplatser, klassificering av sidor och återkommande skanning, med lagring och veckosammanställningar via e-post.',
    takeaway:
      'Jag arbetade med hela kedjan från ostrukturerad webbdata till användbar sammanställning. Projektet gav erfarenhet av agentflöden och automatisering i ett verkligt sammanhang.',
  },
  {
    id: 'accessibility',
    title: 'Accessibility Audit',
    category: 'LIA-projekt',
    label: 'DeLorean',
    description:
      'Automatiserad tillgänglighetsgranskning med regelkontroller och AI-stödda förklaringar.',
    technologies: ['Python', 'axe-core', 'RAG'],
    problem:
      'Tillgänglighetsfel behöver både hittas och förklaras så att utvecklare kan förstå vad de ska åtgärda.',
    approach:
      'Under min LIA på DeLorean arbetade jag med ett flöde för crawling, regelbaserad granskning och rapportering, tillsammans med RAG-liknande förklaringar kopplade till WCAG.',
    takeaway:
      'Projektet kombinerar deterministiska kontroller med språkmodellers förmåga att förklara. Automatisk granskning täcker delar av tillgänglighetsarbetet och behöver kompletteras med manuella tester.',
  },
]
