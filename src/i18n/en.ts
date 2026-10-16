import type es from './es';

const en: typeof es = {
  langName: 'English',
  htmlLang: 'en',
  ogLocale: 'en_GB',
  meta: {
    homeTitle: 'Online therapist for expats and people living abroad | Psicología con Acento',
    homeDescription:
      'Online therapy in English, Spanish and Italian for expats, migrants, families and international students. Free 30-minute first call with psychologist Maria Tani.',
    blogTitle: 'Blog on migration and mental health | Psicología con Acento',
    blogDescription:
      'Articles on migratory grief, cultural adjustment and raising children between cultures, by psychologist Maria Tani.',
    bookTitle: 'Book a session | Psicología con Acento',
    bookDescription: 'Book your free first call or an online therapy session with Maria Tani.',
    privacyTitle: 'Privacy policy | Psicología con Acento',
    legalTitle: 'Legal notice | Psicología con Acento',
    notFoundTitle: 'Page not found | Psicología con Acento',
  },
  nav: {
    about: 'About',
    services: 'How I help',
    fees: 'Fees',
    blog: 'Blog',
    contact: 'Contact',
    book: 'Book',
    menu: 'Menu',
    close: 'Close',
    skip: 'Skip to content',
    langLabel: 'Language',
  },
  hero: {
    line: 'Your psychologist with an accent.',
    lead: 'Online therapy for people living far from home. I work in English, Spanish or Italian, wherever you are.',
    cta: 'Book your free first call',
    secondary: 'See fees',
    note: '30 minutes by video call, no commitment.',
    portraitAlt: 'Maria Tani, psychologist, smiling',
    stamp: 'online therapy from any country',
  },
  who: {
    title: 'Does any of this sound familiar?',
    items: [
      'I miss something I can’t even name.',
      'I chose to move here. So why do I feel like this?',
      'In my own language I’m funny. In this one, I’m someone else.',
      'My son speaks the language better than I do, and I don’t know how to help with what he feels.',
      'When I go back home, I don’t quite fit in there either.',
      'I’ve been here for years and my suitcase is still half packed.',
    ],
    outro:
      'If you recognise yourself here, you’re not doing anything wrong. Moving countries stirs up far more than people see from the outside, and it deserves a space of its own.',
  },
  about: {
    title: 'I’m Maria, and I live with an accent too',
    paragraphs: [
      'I’m a psychologist and a migrant myself. I know the invisible weight of starting over: the grief with no name, the shifts in identity, the loneliness that seems not to make sense because “you chose this”.',
      'I work with adults, children, teenagers and families living between cultures. My approach is integrative: I combine evidence-based tools from different schools of therapy and adapt them to your story, because therapy should speak your emotional language, not just your mother tongue.',
      'Sessions are online, so you can keep the same psychologist even if you change city or country.',
    ],
    facts: [
      ['Training', 'MSc in Clinical Psychology'],
      ['Approach', 'Integrative therapy'],
      ['Languages', 'English, Spanish and Italian'],
      ['Format', 'Online, via secure video call'],
    ],
  },
  services: {
    title: 'What I can help with',
    intro: 'Every migration story is different. These are the situations I work with most.',
    items: [
      {
        title: 'Adults living abroad',
        text: 'Migratory grief, anxiety, loneliness, questions of identity, adaptation fatigue, or deciding whether to stay or go back.',
      },
      {
        title: 'Children and teenagers',
        text: 'Changing schools, language barriers, isolation and the complexity of growing up between two or more cultures.',
      },
      {
        title: 'Families',
        text: 'When everyone adapts at their own pace: improving communication and building a shared sense of home.',
      },
      {
        title: 'International and Erasmus students',
        text: 'Academic pressure, homesickness, new relationships and everything that comes with studying far from home. At a reduced fee.',
      },
    ],
  },
  steps: {
    title: 'How we start',
    items: [
      { title: 'Message me', text: 'On WhatsApp or through the form. Tell me in a couple of lines what brings you here and where you’re writing from.' },
      { title: 'Free first call', text: 'We talk for 30 minutes by video to understand what you need and see if we’re a good fit.' },
      { title: 'We begin sessions', text: '60-minute online sessions, scheduled around your time zone.' },
    ],
  },
  fees: {
    title: 'Fees',
    intro: 'Clear prices, no small print.',
    perSession: 'per session',
    packLabel: 'Pack of 4 sessions',
    free: 'Free',
    rows: {
      orientation: { name: 'First call', desc: '30 minutes to get to know each other and plan the way forward. No commitment.' },
      individual: { name: 'Individual session', desc: '60 minutes. Adults, teenagers, children or families.' },
      students: { name: 'Students', desc: '60 minutes. Erasmus and international students.' },
      deepDive: { name: 'Deep-dive session', desc: '90 minutes to work on one specific topic, with no ongoing commitment.' },
    },
    note: 'All sessions take place online via secure video call. You can cancel or reschedule free of charge up to 24 hours before.',
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        q: 'Does online therapy work as well as in person?',
        a: 'Yes. Research shows that therapy by video call is as effective as face-to-face therapy for most difficulties. It also lets you keep the same psychologist if you move.',
      },
      {
        q: 'Which language are sessions in?',
        a: 'English, Spanish or Italian, whichever feels most comfortable. We can also mix languages: some things can only be said in the language they were lived in.',
      },
      {
        q: 'What about time differences?',
        a: 'I offer morning and evening slots so I can see people in Europe, the Americas and other time zones. We’ll agree on times in the first call.',
      },
      {
        q: 'Which platform do we use?',
        a: 'A secure, encrypted video call platform. All you need is a phone or computer with a connection and a quiet place.',
      },
      {
        q: 'How do I pay?',
        a: 'By bank transfer or online payment before each session or when buying a pack. You receive an invoice for every payment.',
      },
      {
        q: 'Do you work with children even though sessions are online?',
        a: 'Yes. With younger children I adapt sessions with play and drawing, and I include guidance sessions for parents.',
      },
    ],
  },
  blogTeaser: { title: 'From the blog', all: 'All articles' },
  contact: {
    title: 'Get in touch',
    intro: 'I reply within 24 hours. If it’s easier, message me on WhatsApp.',
    whatsapp: 'Message on WhatsApp',
    emailLabel: 'Or by email',
    name: 'Name',
    email: 'Email',
    topic: 'What are you looking for?',
    topicOptions: ['Free first call', 'Individual therapy', 'Children or teenagers', 'Family', 'Students', 'I’m not sure yet'],
    message: 'Tell me a little',
    messageHint: 'What brings you here and which country you live in.',
    privacy: 'I have read and accept the',
    privacyLink: 'privacy policy',
    send: 'Send message',
    sending: 'Sending…',
    success: 'Message sent. I’ll reply within 24 hours.',
    error: 'The message couldn’t be sent. Try again or message me on WhatsApp.',
    mailSubject: 'Enquiry from the website',
  },
  footer: {
    tagline: 'Online therapy for people living between cultures.',
    colegiada: 'Registration no.',
    privacy: 'Privacy',
    legal: 'Legal notice',
    rights: 'All rights reserved.',
    emergency: 'If you are in crisis or in danger, call your local emergency number (112 in the EU).',
  },
  book: {
    title: 'Book your session',
    intro: 'Choose a slot for your free first call or your next session. Times are shown in your own time zone.',
    open: 'See available times',
    loading: 'Loading calendar…',
    iframeTitle: 'Booking calendar',
    fallbackTitle: 'For now, bookings are made on WhatsApp',
    fallbackText: 'Message me with your country and preferred time of day and I’ll suggest a few slots.',
  },
  blog: {
    title: 'Blog',
    intro: 'Ideas and tools for living through migration more gently.',
    minRead: 'min read',
    back: 'Back to the blog',
    ctaTitle: 'Want to talk it through with someone?',
    ctaText: 'The first call is free, with no commitment.',
  },
  notFound: {
    title: 'This page got lost along the way',
    text: 'The link may have changed. Go back to the homepage or message me if you were looking for something specific.',
    back: 'Back to the homepage',
  },
};

export default en;
