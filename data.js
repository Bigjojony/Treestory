const database = [
    { 
        id: "TS-01", 
        title: "Conférence de Bandung", 
        date: "Avril 1955",
        cat: "Diplomatie", 
        country: "Indonésie", 
        info: "Moment charnière où 29 pays africains et asiatiques ont affirmé leur indépendance vis-à-vis des blocs de la Guerre Froide.", 
        short: "Acte fondateur du mouvement des non-alignés.",
        links: ["TS-02", "TS-10"], 
        wiki: "https://fr.wikipedia.org/wiki/Conférence_de_Bandung" 
    },
    { 
        id: "TS-02", 
        title: "Kwame Nkrumah", 
        date: "1957 - 1966",
        cat: "Politique", 
        country: "Ghana", 
        info: "Premier président du Ghana et figure de proue du panafricanisme, militant pour les 'États-Unis d'Afrique'.", 
        short: "Père du panafricanisme moderne.",
        links: ["TS-01", "TS-10"], 
        wiki: "https://fr.wikipedia.org/wiki/Kwame_Nkrumah" 
    },
    { 
        id: "TS-14", 
        title: "Thomas Sankara", 
        date: "1983 - 1987",
        cat: "Révolution", 
        country: "Burkina Faso", 
        info: "Révolutionnaire anti-impérialiste, il a transformé la Haute-Volta en Burkina Faso.", 
        short: "Le président des pauvres et de l'intégrité.",
        links: ["TS-10"], 
        wiki: "https://fr.wikipedia.org/wiki/Thomas_Sankara" 
    }
    // Si tu ajoutes un item avec cat: "Art", le bouton "Art" se créera tout seul !
];