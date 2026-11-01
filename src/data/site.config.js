/**
 * Wedding website configuration
 * Extracted from Arpan & Lakshita's wedding invitation PDF.
 */

export const site = {
  siteUrl: "https://arpan-ny.github.io/wedding-invitation/",
  defaultTheme: "lotus",

  themes: [
    { id: "marigold", label: "Marigold" },
    { id: "ruby", label: "Ruby" },
    { id: "emerald", label: "Emerald" },
    { id: "sapphire", label: "Sapphire" },
    { id: "lotus", label: "Lotus" },
  ],

  meta: {
    title: "Arpan & Lakshita — We're getting married",
    description:
      "Join Lakshita and Arpan for their wedding celebrations on 25-26 November 2026 at The Elegance Resort, Chittorgarh, Rajasthan.",
  },

  couple: {
    partnerB: "Lakshita",
    partnerA: "Arpan",
  },

  hashtag: "#ArpanWedsLakshita",

  // Wedding muhurat: 26 November 2026, 12:15 PM IST
  weddingDateIso: "2026-11-26T12:15:00+05:30",
  displayDate: "25 - 26 November 2026",
  city: "Chittorgarh, Rajasthan",

  music: {
    src: "music/celebration.wav",
    labelPlay: "Play music",
    labelPause: "Pause music",
  },

  skipLink: "Skip to content",

  hero: {
    kicker: "Together with their families",
    logoSrc: "images/arpan-lakshita-logo.png",
    ctaLabel: "Open the invitation",
    ctaHref: "#invitation",
  },

  invitation: {
    eyebrow: "A note from our families",
    heading: "With the blessings of our families",

    paragraphs: [
      "With the divine blessings of Shri Charbhuja Nath, we warmly invite you to celebrate the wedding of Arpan and Lakshita.",

      "Join us for two days of beautiful traditions, joyful celebrations, music, blessings, and togetherness as we begin this wonderful new chapter. Your presence and blessings will make our celebrations truly special.",

      "We look forward to celebrating with you at The Elegance Resort, Chittorgarh, on 25 and 26 November 2026.",
    ],

    signOff: "With love and warm regards, from our families",
  },

  countdown: {
    heading: "Until we say I do",

    labels: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },

    arrivedHeading: "The day is here",
    arrivedMessage:
      "The celebrations have begun. We cannot wait to celebrate with you!",
  },

  lineup: {
    eyebrow: "The celebrations",
    heading: "Wedding festivities",
    mapsLabel: "Open in Google Maps",
  },

  events: [
    {
      id: "ganpati",
      title: "Ganpati Sthapana & Kalash",
      date: "25 November 2026",
      time: "7:15 AM",
      venue: "The Elegance Resort, Chittorgarh",
      note: "Beginning our celebrations with Ganpati Bappa's blessings and the Kalash ceremony.",
      accent: "marigold",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=The+Elegance+Resort+Chittorgarh",
    },

    {
      id: "haldi",
      title: "Haldi (Carnival)",
      date: "25 November 2026",
      time: "10:00 AM",
      venue: "The Elegance Resort, Chittorgarh",
      note: "A colourful celebration filled with turmeric, laughter, and family moments.",
      accent: "marigold",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=The+Elegance+Resort+Chittorgarh",
    },

    {
      id: "mayra",
      title: "Mayra",
      date: "25 November 2026",
      time: "4:00 PM",
      venue: "The Elegance Resort, Chittorgarh",
      note: "A beautiful family tradition celebrating love, blessings, and togetherness.",
      accent: "ruby",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=The+Elegance+Resort+Chittorgarh",
    },

    {
      id: "sangeet",
      title: "Sangeet (DJ Night)",
      date: "25 November 2026",
      time: "7:00 PM",
      venue: "The Elegance Resort, Chittorgarh",
      note: "An evening of music, dancing, family performances, and celebration.",
      accent: "emerald",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=The+Elegance+Resort+Chittorgarh",
    },

    {
      id: "samdhi-milan",
      title: "Samdhi Milan",
      date: "26 November 2026",
      time: "8:00 AM",
      venue: "The Elegance Resort, Chittorgarh",
      note: "A special gathering of both families, sharing blessings and warm wishes.",
      accent: "lotus",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=The+Elegance+Resort+Chittorgarh",
    },

    {
      id: "baraat",
      title: "Baraat Welcome",
      date: "26 November 2026",
      time: "11:15 AM",
      venue: "The Elegance Resort, Chittorgarh",
      note: "Welcoming the baraat as we come together for the wedding celebrations.",
      accent: "ruby",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=The+Elegance+Resort+Chittorgarh",
    },

    {
      id: "wedding",
      title: "Shubh Lagna",
      date: "26 November 2026",
      time: "12:15 PM",
      venue: "The Elegance Resort, Chittorgarh",
      note: "The auspicious wedding muhurat. Join us as Lakshita and Arpan begin their journey together.",
      accent: "sapphire",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=The+Elegance+Resort+Chittorgarh",
    },

    {
      id: "ashirwad",
      title: "Ashirwad Ceremony & Swaruchi Bhoj",
      date: "26 November 2026",
      time: "6:30 PM onwards",
      venue: "The Elegance Resort, Chittorgarh",
      note: "An evening of blessings and a special feast. Celebrations continue until your arrival.",
      accent: "lotus",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=The+Elegance+Resort+Chittorgarh",
    },
  ],

  venue: {
    eyebrow: "Find us",
    heading: "The wedding venue",

    name: "The Elegance Resort",

    addressLines: ["The Elegance Resort", "Chittorgarh, Rajasthan", "India"],

    directions:
      "We look forward to welcoming you at The Elegance Resort, Chittorgarh. Please use the Google Maps link for directions.",

    mapsCta: "Open in Google Maps",

    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=The+Elegance+Resort+Chittorgarh",

    loadMapLabel: "Load the map",

    mapTitle: "Map of The Elegance Resort, Chittorgarh",

    embedUrl:
      "https://maps.google.com/maps?q=The%20Elegance%20Resort%20Chittorgarh&z=15&output=embed",

    facadeCaption:
      "Tap to load Google Maps. The map is not loaded until you ask, so the page stays light.",
  },

  gallery: {
    eyebrow: "A few frames",
    heading: "Our story",
    lightboxLabel: "Photo viewer",
    closeLabel: "Close",
    prevLabel: "Previous photo",
    nextLabel: "Next photo",

    photos: [
      {
        src: "photos/1.jpeg",
        alt: "Lakshita and Arpan - Wedding photograph 1",
        width: 800,
        height: 600,
      },
      {
        src: "photos/2.jpeg",
        alt: "Lakshita and Arpan - Wedding photograph 2",
        width: 800,
        height: 600,
      },
      {
        src: "photos/3.jpeg",
        alt: "Lakshita and Arpan - Wedding photograph 3",
        width: 800,
        height: 600,
      },
      {
        src: "photos/4.jpeg",
        alt: "Lakshita and Arpan - Wedding photograph 4",
        width: 800,
        height: 600,
      },
      {
        src: "photos/5.jpeg",
        alt: "Lakshita and Arpan - Wedding photograph 5",
        width: 800,
        height: 600,
      },
      {
        src: "photos/6.jpeg",
        alt: "Lakshita and Arpan - Wedding photograph 6",
        width: 800,
        height: 600,
      },
      {
        src: "photos/7.jpeg",
        alt: "Lakshita and Arpan - Wedding photograph 7",
        width: 800,
        height: 600,
      },
      {
        src: "photos/8.jpeg",
        alt: "Lakshita and Arpan - Wedding photograph 8",
        width: 800,
        height: 600,
      },
    ],
  },

  footer: {
    closing: "We cannot wait to celebrate with you.",
    crafted: "With love, from Arpan & Lakshita.",
  },
};

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "invitation", label: "Invite" },
  { id: "countdown", label: "When" },
  { id: "lineup", label: "Events" },
  { id: "venue", label: "Venue" },
  { id: "gallery", label: "Photos" },
];

export default site;
