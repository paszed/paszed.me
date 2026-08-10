export const pricing = {
  title: "Egyszerű, átlátható árak.",
  description:
    "Válaszd ki a vállalkozásodhoz illő weboldalcsomagot. Fizess egy összegben, vagy oszd el a költséget 3, 6, 9 vagy 12 hónapra.",

  paymentLabel: "Rugalmas fizetési lehetőségek",
  paymentDescription:
    "Fizesd ki a teljes projekt árát előre, vagy oszd el a fizetést 3, 6, 9 vagy 12 hónapra. Az első részlet a fejlesztés megkezdése előtt esedékes.",

  plans: {
    starter: {
      forLabel: "Kinek",
      for:
        "Kisvállalkozásoknak, amelyek professzionális online jelenlétet szeretnének.",
      addOns: "A kiegészítő szolgáltatások külön érhetők el.",
    },

    business: {
      forLabel: "Kinek",
      for:
        "Olyan vállalkozásoknak, amelyek erősebb online jelenlétet és az ügyfélszerzést aktívan támogató weboldalt szeretnének.",
      addOns: "A kiegészítő szolgáltatások külön érhetők el.",
    },

    premium: {
      forLabel: "Kinek",
      for:
        "Olyan vállalkozásoknak, amelyek teljes digitális jelenlétet és nagymértékben személyre szabott weboldalélményt szeretnének.",
      addOns: "A kiegészítő szolgáltatások külön érhetők el.",
    },
  },

  upfront: "Egyösszegű fizetés",
  from: "vagy már",
  perMonth: "/hó",
  total: "összesen",
  months: "hónap",

  calculator: {
    title:
      "Találd meg a számodra megfelelő fizetési konstrukciót",
    description:
      "Válassz csomagot, fizetési időszakot és kiegészítő szolgáltatásokat, hogy lásd a várható beruházásodat.",

    packageLabel: "Csomag",
    paymentLabel: "Fizetési időszak",
    addOnsLabel: "Kiegészítő szolgáltatások",

    monthly: "Havi",
    upfront: "Egyösszegű",
    total: "Összesen",
    perMonth: "/hó",
    months: "hónap",

    selected: "Kiválasztva",
    pages: "oldal",
    languages: "nyelv",

    estimatedInvestment: "Várható beruházás",
    estimatedMonthlyPayment: "Várható havi fizetés",
    estimatedTotal: "Várható teljes összeg",

    websiteCare: "Weboldal-karbantartás",
    googleVisibility: "Google-láthatósági beállítás",
    contentSupport: "Tartalmi támogatás",
    additionalPages: "További oldalak",
    additionalLanguages: "További nyelvek",

    from: "Már",
    page: "/ oldal",
    language: "/ nyelv",

    includes: "Tartalmazza",
    removeLabel: "Eltávolítás",
    addLabel: "Hozzáadás",
  },

  noteTitle: "Másra van szükséged?",
  note:
    "Minden vállalkozás más. További oldalak, nyelvek, integrációk, funkciók és egyéb igények külön is hozzáadhatók.",
} as const;
