import type es from './es';

const it: typeof es = {
  langName: 'Italiano',
  htmlLang: 'it',
  ogLocale: 'it_IT',
  meta: {
    homeTitle: 'Psicologa online per italiani all’estero ed expat | Psicología con Acento',
    homeDescription:
      'Terapia online in italiano, spagnolo e inglese per expat, migranti, famiglie e studenti internazionali. Prima chiamata gratuita di 30 minuti con la psicologa María Tani.',
    blogTitle: 'Blog su migrazione e salute mentale | Psicología con Acento',
    blogDescription:
      'Articoli sul lutto migratorio, l’adattamento culturale e crescere figli tra culture diverse, a cura della psicologa María Tani.',
    bookTitle: 'Prenota una seduta | Psicología con Acento',
    bookDescription: 'Prenota la tua prima chiamata gratuita o una seduta di terapia online con María Tani.',
    privacyTitle: 'Informativa sulla privacy | Psicología con Acento',
    legalTitle: 'Note legali | Psicología con Acento',
    notFoundTitle: 'Pagina non trovata | Psicología con Acento',
  },
  nav: {
    about: 'Chi sono',
    services: 'Come ti aiuto',
    fees: 'Tariffe',
    blog: 'Blog',
    contact: 'Contatti',
    book: 'Prenota',
    menu: 'Menu',
    close: 'Chiudi',
    skip: 'Vai al contenuto',
    langLabel: 'Lingua',
  },
  hero: {
    line: 'La tua psicologa con accento.',
    lead: 'Terapia online per chi vive lontano da casa. Ti accompagno in italiano, spagnolo o inglese, ovunque tu sia.',
    cta: 'Prenota la prima chiamata gratuita',
    secondary: 'Vedi le tariffe',
    note: '30 minuti in videochiamata, senza impegno.',
    portraitAlt: 'María Tani, psicologa, sorridente',
    stamp: 'terapia online da qualsiasi paese',
  },
  who: {
    title: 'Ti suona familiare qualcuna di queste frasi?',
    items: [
      'Mi manca qualcosa che non so nemmeno nominare.',
      'Ho scelto io di venire qui. Allora perché mi sento così?',
      'Nella mia lingua sono simpatica. In questa, sono un’altra persona.',
      'Mio figlio parla la lingua meglio di me e non so come aiutarlo con quello che prova.',
      'Quando torno a casa, nemmeno lì mi sento del tutto a posto.',
      'Sono qui da anni e ho ancora la valigia mezza fatta.',
    ],
    outro:
      'Se ti riconosci, non stai sbagliando niente. Emigrare smuove molto più di quanto si veda da fuori, e merita uno spazio tutto suo.',
  },
  about: {
    title: 'Sono María, e anch’io vivo con un accento',
    paragraphs: [
      'Sono psicologa e anch’io migrante. Conosco il peso invisibile del ricominciare: il lutto che non ha nome, i cambiamenti di identità, la solitudine che sembra non avere senso perché «l’hai scelto tu».',
      'Lavoro con adulti, bambini, adolescenti e famiglie che vivono tra culture diverse. Il mio approccio è integrato: unisco strumenti di diversi orientamenti, basati sull’evidenza scientifica, e li adatto alla tua storia, perché la terapia deve parlare il tuo linguaggio emotivo, non solo la tua lingua madre.',
      'Le sedute sono online, così puoi continuare con la stessa psicologa anche se cambi città o paese.',
    ],
    facts: [
      ['Formazione', 'Master in Psicologia Clinica'],
      ['Approccio', 'Terapia integrata'],
      ['Lingue', 'Italiano, spagnolo e inglese'],
      ['Modalità', 'Online, in videochiamata sicura'],
    ],
  },
  services: {
    title: 'In cosa posso accompagnarti',
    intro: 'Ogni storia migratoria è diversa. Queste sono le situazioni con cui lavoro di più.',
    items: [
      {
        title: 'Adulti che vivono all’estero',
        text: 'Lutto migratorio, ansia, solitudine, dubbi di identità, la fatica di adattarsi o la scelta tra restare e tornare.',
      },
      {
        title: 'Bambini e adolescenti',
        text: 'Cambi di scuola, barriere linguistiche, isolamento e la complessità di crescere tra due o più culture.',
      },
      {
        title: 'Famiglie',
        text: 'Quando ognuno si adatta con i propri tempi: migliorare la comunicazione e costruire insieme un senso di casa.',
      },
      {
        title: 'Studenti internazionali ed Erasmus',
        text: 'Pressione accademica, nostalgia, nuove relazioni e tutto ciò che comporta studiare lontano da casa. Con tariffa ridotta.',
      },
    ],
  },
  steps: {
    title: 'Come iniziamo',
    items: [
      { title: 'Scrivimi', text: 'Su WhatsApp o con il modulo. Raccontami in due righe cosa ti porta qui e da dove mi scrivi.' },
      { title: 'Prima chiamata gratuita', text: 'Parliamo 30 minuti in videochiamata per capire di cosa hai bisogno e se possiamo lavorare bene insieme.' },
      { title: 'Iniziamo le sedute', text: 'Sedute online di 60 minuti, con orari adatti al tuo fuso orario.' },
    ],
  },
  fees: {
    title: 'Tariffe',
    intro: 'Prezzi chiari, senza clausole nascoste.',
    perSession: 'a seduta',
    packLabel: 'Pacchetto da 4 sedute',
    free: 'Gratis',
    rows: {
      orientation: { name: 'Prima chiamata', desc: '30 minuti per conoscerci e orientare il percorso. Senza impegno.' },
      individual: { name: 'Seduta individuale', desc: '60 minuti. Adulti, adolescenti, bambini o famiglie.' },
      students: { name: 'Studenti', desc: '60 minuti. Erasmus e studenti internazionali.' },
      deepDive: { name: 'Seduta di approfondimento', desc: '90 minuti per lavorare su un tema specifico, senza obbligo di continuità.' },
    },
    note: 'Tutte le sedute si svolgono online in videochiamata sicura. Puoi disdire o spostare l’appuntamento senza costi fino a 24 ore prima.',
  },
  faq: {
    title: 'Domande frequenti',
    items: [
      {
        q: 'La terapia online funziona come quella in presenza?',
        a: 'Sì. La ricerca mostra che la terapia in videochiamata è efficace quanto quella in presenza per la maggior parte delle difficoltà. In più ti permette di mantenere la stessa psicologa anche se ti trasferisci.',
      },
      {
        q: 'In che lingua sono le sedute?',
        a: 'In italiano, spagnolo o inglese, quella in cui ti senti più a tuo agio. Possiamo anche mescolare le lingue: certe cose si possono dire solo nella lingua in cui sono state vissute.',
      },
      {
        q: 'E la differenza di fuso orario?',
        a: 'Ho orari di mattina e di sera per seguire persone in Europa, nelle Americhe e in altri fusi orari. Li definiamo nella prima chiamata.',
      },
      {
        q: 'Che piattaforma usiamo?',
        a: 'Una piattaforma di videochiamata sicura e criptata. Ti servono solo un telefono o un computer con connessione e un posto tranquillo.',
      },
      {
        q: 'Come si paga?',
        a: 'Con bonifico bancario o pagamento online prima di ogni seduta o all’acquisto di un pacchetto. Ricevi fattura per ogni pagamento.',
      },
      {
        q: 'Lavori con i bambini anche se le sedute sono online?',
        a: 'Sì. Con i più piccoli adatto le sedute con il gioco e il disegno, e prevedo incontri di sostegno per i genitori.',
      },
    ],
  },
  blogTeaser: { title: 'Dal blog', all: 'Tutti gli articoli' },
  contact: {
    title: 'Scrivimi',
    intro: 'Rispondo entro 24 ore. Se ti è più comodo, scrivimi su WhatsApp.',
    whatsapp: 'Scrivi su WhatsApp',
    emailLabel: 'Oppure via email',
    name: 'Nome',
    email: 'Email',
    topic: 'Cosa stai cercando?',
    topicOptions: ['Prima chiamata gratuita', 'Terapia individuale', 'Bambini o adolescenti', 'Famiglia', 'Studenti', 'Non lo so ancora'],
    message: 'Raccontami un po’',
    messageHint: 'Cosa ti porta qui e in che paese vivi.',
    privacy: 'Ho letto e accetto',
    privacyLink: 'l’informativa sulla privacy',
    send: 'Invia messaggio',
    sending: 'Invio in corso…',
    success: 'Messaggio inviato. Ti risponderò entro 24 ore.',
    error: 'Non è stato possibile inviare il messaggio. Riprova o scrivimi su WhatsApp.',
    mailSubject: 'Richiesta dal sito',
  },
  footer: {
    tagline: 'Terapia online per chi vive tra culture diverse.',
    colegiada: 'N. di iscrizione all’albo',
    privacy: 'Privacy',
    legal: 'Note legali',
    rights: 'Tutti i diritti riservati.',
    emergency: 'Se sei in crisi o in pericolo, chiama il 112.',
  },
  book: {
    title: 'Prenota la tua seduta',
    intro: 'Scegli un orario per la prima chiamata gratuita o per la tua prossima seduta. Gli orari sono mostrati nel tuo fuso orario.',
    open: 'Vedi gli orari disponibili',
    loading: 'Caricamento del calendario…',
    iframeTitle: 'Calendario delle prenotazioni',
    fallbackTitle: 'Per ora le prenotazioni si fanno su WhatsApp',
    fallbackText: 'Scrivimi il tuo paese e la fascia oraria che preferisci e ti proporrò alcuni orari.',
  },
  blog: {
    title: 'Blog',
    intro: 'Idee e strumenti per vivere la migrazione con più leggerezza.',
    minRead: 'min di lettura',
    back: 'Torna al blog',
    ctaTitle: 'Vuoi parlarne con qualcuno?',
    ctaText: 'La prima chiamata è gratuita e senza impegno.',
  },
  notFound: {
    title: 'Questa pagina si è persa per strada',
    text: 'Forse il link è cambiato. Torna alla home o scrivimi se cercavi qualcosa in particolare.',
    back: 'Torna alla home',
  },
};

export default it;
