export const about = {
  hero: {
    title: "Rólam",

    intro:
      "Edvard vagyok, szoftverfejlesztő, aki megbízható alkalmazások, fejlesztői eszközök és olyan rendszerek építésére fókuszál, amelyekből hasznos termékek születnek.",
  },

  story: {
    title: "Ahogyan dolgozom",

    description:
      "Gyakorlati megközelítés ötletek és technikai kihívások megbízható szoftverré alakításához.",

    items: [
      "A szoftverfejlesztést az alapvető probléma megértésével kezdem. A cél nem csupán kód írása, hanem olyan rendszerek létrehozása, amelyek átláthatók, karbantarthatók és hosszú távon értéket teremtenek.",

      "A munkám a termékfejlesztést erős mérnöki alapokkal ötvözi: alkalmazásarchitektúra, automatizáció, fejlesztői élmény, infrastruktúra és gyakorlati MI-munkafolyamatok.",

      "Szeretem a visszatérő problémákat újrahasznosítható megoldásokká alakítani. Akár egy meglévő rendszert fejlesztek, akár valami újat építek, a célom a komplexitás csökkentése és tartós alapok létrehozása.",

      "Ez a weboldal dokumentálja az általam épített rendszereket, a mögöttük lévő döntéseket és a folyamat során szerzett tapasztalatokat.",
    ],
  },

  philosophy: {
    title: "Mérnöki alapelvek",

    description:
      "Az alapelvek, amelyek meghatározzák a szoftvertervezéshez, technikai döntésekhez és hosszú távú karbantarthatósághoz való hozzáállásomat.",

    items: [
      {
        title: "Először a problémát értsük meg",

        description:
          "A legjobb technikai megoldások a valódi igény megértéséből születnek, még mielőtt kiválasztanánk a megvalósítást.",
      },
      {
        title: "Változásra építeni",

        description:
          "A szoftvert úgy kell tervezni, hogy a jövőbeli fejlesztések könnyebbé váljanak, ne pedig további komplexitást hozzanak.",
      },
      {
        title: "A visszatérő akadályok megszüntetése",

        description:
          "Az ismétlődő problémák lehetőséget adnak jobb eszközök, munkafolyamatok és rendszerek létrehozására.",
      },
      {
        title: "Fejlődés szállítással",

        description:
          "A mérnöki tudás építéssel, visszajelzéssel, iterációval és a folyamat folyamatos javításával fejlődik.",
      },
    ],
  },

  skills: {
    title: "Eszközök és technológiák",

    description:
      "Azok a technológiák és munkafolyamatok, amelyeket modern szoftverrendszerek tervezéséhez, építéséhez, teszteléséhez és karbantartásához használok.",

    items: [
      {
        category: "Nyelvek",
        items: [
          "TypeScript",
          "JavaScript",
          "Python",
          "SQL",
          "Go",
        ],
      },
      {
        category: "Alkalmazásfejlesztés",
        items: [
          "React",
          "Next.js",
          "Node.js",
          "Tailwind CSS",
          "PostgreSQL",
        ],
      },
      {
        category: "Infrastruktúra és eszközök",
        items: [
          "Docker",
          "GitHub Actions",
          "REST APIs",
          "Webhooks",
          "OAuth",
        ],
      },
      {
        category: "Fejlesztői munkafolyamat",
        items: [
          "Git",
          "Neovim",
          "Fish",
          "pnpm",
          "Vitest",
          "Playwright",
        ],
      },
    ],
  },
} as const;
