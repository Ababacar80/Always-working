export const siteConfig = {
  name: "Always Working",
  slogan: "Votre Propreté notre Priorité",
  url: "https://alwaysworking.com",

  whatsapp: "+221711204949",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsapp}`
  },

  contact: {
    telephone: "71 120 49 49",
    email: "alwaysworking726@gmail.com",
    adresse: "Parcelles Assainies, Unité 12",
    horaires: "24/24",
    zone: "Partout (déplacement chez le client)",
  },

  about: {
    founderName: "Mame Birane Cissé",
    founderTitle: "PDG",
    founding: "2023",
    pourquoi: "Pour être indépendant",
    pointFort: "Un service professionnel",
  },

  services: [
    {
      nom: "Nettoyage industriel",
      description:
        "Des prestations de nettoyage adaptées aux espaces industriels et professionnels pour maintenir des environnements propres, sains et agréables.",
    },
    {
      nom: "Nettoyage pendant construction",
      description:
        "Nettoyage et entretien des espaces pendant les travaux afin de maintenir un chantier propre et faciliter le bon déroulement des différentes étapes de construction.",
    },
    {
      nom: "Fin de chantier",
      description:
        "Nettoyage complet après les travaux pour éliminer poussières, débris et saletés et préparer les locaux à leur utilisation.",
    },
    {
      nom: "Nettoyage maison / appartement / studio",
      description:
        "Un service de nettoyage pour les maisons, appartements et studios afin de vous offrir un intérieur propre, frais et agréable au quotidien.",
    },
    {
      nom: "Lavage moquette et canapé",
      description:
        "Nettoyage en profondeur des moquettes et canapés pour éliminer les saletés et redonner à vos textiles un aspect propre et soigné.",
    },
    {
      nom: "Désinfection",
      description:
        "Des prestations de désinfection pour contribuer à maintenir des espaces propres et sains, aussi bien dans les environnements professionnels que résidentiels.",
    },
  ],

  seo: {
    title: "Always Working — Nettoyage professionnel à Dakar",
    description:
      "Nettoyage industriel, fin de chantier, désinfection... Sur devis, disponible 24/24.",
    keywords: [
      "nettoyage industriel Dakar",
      "nettoyage fin de chantier Dakar",
      "désinfection Dakar",
    ],
  },
} as const

