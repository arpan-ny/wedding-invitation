import { navItems, site } from "./site.config";

const hindi = {
  skipLink: "मुख्य सामग्री पर जाएँ",
  displayDate: "25–26 नवंबर 2026",
  city: "चित्तौड़गढ़, राजस्थान",
  music: {
    labelPlay: "संगीत चलाएँ",
    labelPause: "संगीत रोकें",
  },
  hero: {
    kicker: "अपने परिवारों के साथ",
    logoAlt: "अर्पण और लक्षिता की सुंदर कहानी",
    ctaLabel: "निमंत्रण देखें",
  },
  invitation: {
    eyebrow: "स्नेह और आशीर्वाद सहित",
    heading: "न्याति परिवार का स्नेहिल निमंत्रण",
    paragraphs: [
      "श्री चारभुजा नाथ और श्रीनाथजी के दिव्य आशीर्वाद से, न्याति परिवार मुंदड़ा परिवार के स्नेह और आशीर्वाद के साथ अर्पण और लक्षिता के विवाह समारोह में सादर आमंत्रित करता है।",
      "25 और 26 नवंबर 2026 को द एलिगेंस रिज़ॉर्ट, चित्तौड़गढ़ में परंपराओं, संगीत और खुशियों के दो दिनों में हमारे साथ शामिल हों। आपकी उपस्थिति और आशीर्वाद हमारे उत्सव को खास बनाएंगे।",
    ],
    signOff: "स्नेह और आशीर्वाद सहित, न्याति एवं मुंदड़ा परिवार",
  },
  countdown: {
    heading: "शुभ विवाह तक शेष समय",
    labels: {
      days: "दिन",
      hours: "घंटे",
      minutes: "मिनट",
      seconds: "सेकंड",
    },
    arrivedHeading: "शुभ दिन आ गया है",
    arrivedMessage: "उत्सव शुरू हो चुका है। आपके साथ जश्न मनाने की प्रतीक्षा है!",
  },
  lineup: {
    eyebrow: "उत्सव",
    heading: "विवाह समारोह",
    mapsLabel: "गूगल मैप्स पर देखें",
  },
  events: [
    {
      title: "गणपति स्थापना एवं कलश",
      date: "25 नवंबर 2026",
      time: "सुबह 7:15 बजे",
      venue: "द एलिगेंस रिज़ॉर्ट, चित्तौड़गढ़",
      note: "गणपति बप्पा के आशीर्वाद और कलश समारोह के साथ उत्सव का शुभारंभ।",
    },
    {
      title: "हल्दी (कार्निवल)",
      date: "25 नवंबर 2026",
      time: "सुबह 10:00 बजे",
      venue: "द एलिगेंस रिज़ॉर्ट, चित्तौड़गढ़",
      note: "हल्दी, हँसी और परिवार के संग रंगों से भरा उत्सव।",
    },
    {
      title: "मायरा",
      date: "25 नवंबर 2026",
      time: "शाम 4:00 बजे",
      venue: "द एलिगेंस रिज़ॉर्ट, चित्तौड़गढ़",
      note: "प्रेम, आशीर्वाद और अपनेपन से जुड़ी एक सुंदर पारिवारिक परंपरा।",
    },
    {
      title: "संगीत (डीजे नाइट)",
      date: "25 नवंबर 2026",
      time: "शाम 7:00 बजे",
      venue: "द एलिगेंस रिज़ॉर्ट, चित्तौड़गढ़",
      note: "संगीत, नृत्य, पारिवारिक प्रस्तुतियों और खुशियों से भरी शाम।",
    },
    {
      title: "समधी मिलन",
      date: "26 नवंबर 2026",
      time: "सुबह 8:00 बजे",
      venue: "द एलिगेंस रिज़ॉर्ट, चित्तौड़गढ़",
      note: "दोनों परिवारों का मिलन और शुभकामनाओं का विशेष अवसर।",
    },
    {
      title: "वर निकासी",
      date: "26 नवंबर 2026",
      time: "सुबह 11:15 बजे",
      venue: "द एलिगेंस रिज़ॉर्ट, चित्तौड़गढ़",
      note: "जीवनभर के प्रेम और साथ की ओर दूल्हे की सुंदर परंपरागत यात्रा।",
    },
    {
      title: "शुभ लग्न",
      date: "26 नवंबर 2026",
      time: "दोपहर 12:15 बजे",
      venue: "द एलिगेंस रिज़ॉर्ट, चित्तौड़गढ़",
      note: "विवाह का शुभ मुहूर्त। अर्पण और लक्षिता के नए सफर के साक्षी बनें।",
    },
    {
      title: "आशीर्वाद समारोह एवं स्वरुचि भोज",
      date: "26 नवंबर 2026",
      time: "शाम 6:30 बजे से",
      venue: "द एलिगेंस रिज़ॉर्ट, चित्तौड़गढ़",
      note: "आशीर्वाद और विशेष भोज की शाम। आपके आगमन तक उत्सव जारी रहेगा।",
    },
  ],
  venue: {
    eyebrow: "हमसे मिलें",
    heading: "विवाह स्थल",
    addressLines: ["द एलिगेंस रिज़ॉर्ट", "चित्तौड़गढ़, राजस्थान", "भारत"],
    directions:
      "द एलिगेंस रिज़ॉर्ट, चित्तौड़गढ़ में आपका स्वागत करने के लिए हम उत्सुक हैं। रास्ते के लिए गूगल मैप्स लिंक देखें।",
    mapsCta: "गूगल मैप्स पर देखें",
    loadMapLabel: "मैप खोलें",
    mapTitle: "द एलिगेंस रिज़ॉर्ट, चित्तौड़गढ़ का नक्शा",
    facadeCaption:
      "गूगल मैप्स खोलने के लिए टैप करें। आपके कहने तक मैप लोड नहीं होगा, जिससे पेज हल्का बना रहेगा।",
  },
  contact: {
    eyebrow: "हम आपकी सहायता के लिए हैं",
    heading: "परिवारों से संपर्क करें",
    description: "किसी भी प्रश्न या सहायता के लिए कृपया संपर्क करें।",
    callLabel: "कॉल करें",
    whatsappLabel: "व्हाट्सऐप",
  },
  gallery: {
    eyebrow: "कुछ यादगार पल",
    heading: "हमारी कहानी",
    lightboxLabel: "फोटो दर्शक",
    closeLabel: "बंद करें",
    prevLabel: "पिछली फोटो",
    nextLabel: "अगली फोटो",
    photos: Array.from({ length: 9 }, () => ({
      alt: "लक्षिता और अर्पण",
    })),
  },
  footer: {
    closing: "आपके साथ जश्न मनाने की प्रतीक्षा है।",
    crafted: "स्नेह सहित, अर्पण और लक्षिता।",
  },
  languageSwitch: {
    label: "भाषा बदलें: अंग्रेज़ी पर जाएँ",
    buttonLabel: "English",
  },
};

function mergeLocale(source, translation) {
  if (Array.isArray(source)) {
    return source.map((item, index) =>
      mergeLocale(item, translation?.[index]),
    );
  }

  if (source && typeof source === "object") {
    return Object.fromEntries(
      Object.entries(source).map(([key, value]) => [
        key,
        mergeLocale(value, translation?.[key]),
      ]),
    );
  }

  return translation ?? source;
}

export function getSiteContent(language) {
  return language === "hi" ? mergeLocale(site, hindi) : site;
}

export function getNavItems(language) {
  const labels = {
    en: ["Home", "Invite", "When", "Events", "Venue", "Photos", "Contact"],
    hi: ["होम", "निमंत्रण", "समय", "कार्यक्रम", "स्थल", "तस्वीरें", "संपर्क"],
  };
  return navItems.map((item, index) => ({
    ...item,
    label: labels[language][index] ?? item.label,
  }));
}
