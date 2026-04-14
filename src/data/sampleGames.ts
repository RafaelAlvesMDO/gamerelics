import { ImageSourcePropType } from "react-native";

export interface Game {
  id: string
  title: string
  status: "playing" | "played" | "backlog"
  coverImg: ImageSourcePropType
  comment?: string
  playTime?: string
  rating?: number  // Only for Played Games
}

export const sampleGames: Game[] = [

  // PLAYING
  {
    id: "1",
    title: "Elder Scrolls V: Skyrim",
    status: "playing",
    coverImg: require("../assets/game-capes/elderScrollsVSkyrimCape.jpg"),
    comment: "Incrível, nunca enjoa.",
    playTime: "200h",
  },
  {
    id: "2",
    title: "Cyberpunk 2077",
    status: "playing",
    coverImg: require("../assets/game-capes/cyberpunk2077Cape.jpg"),
    comment: "A Night City é absurda.",
    playTime: "60h",
  },
  {
    id: "3",
    title: "Elden Ring",
    status: "playing",
    coverImg: require("../assets/game-capes/eldenRingCape.jpg"),
    comment: "Difícil mas viciante.",
    playTime: "80h",
  },
  {
    id: "4",
    title: "Baldur's Gate 3",
    status: "playing",
    coverImg: require("../assets/game-capes/baldursGate3Cape.jpg"),
    comment: "RPG completo demais.",
    playTime: "120h",
  },
  {
    id: "5",
    title: "Bloodborne",
    status: "playing",
    coverImg: require("../assets/game-capes/bloodborneCape.jpg"),
    comment: "Atmosfera única.",
    playTime: "45h",
  },

  // PLAYED
  {
    id: "6",
    title: "Dave The Diver",
    status: "played",
    coverImg: require("../assets/game-capes/daveTheDiverCape.jpg"),
    comment: "Surpreendente, mistura de gêneros muito bem feita.",
    playTime: "30h",
    rating: 5,
  },
  {
    id: "7",
    title: "Flyff",
    status: "played",
    coverImg: require("../assets/game-capes/flyffCape.jpg"),
    comment: "Nostalgia pura.",
    playTime: "300h",
    rating: 4,
  },
  {
    id: "8",
    title: "Shovel Knight",
    status: "played",
    coverImg: require("../assets/game-capes/shovelKnightCape.jpg"),
    comment: "Plataforma clássico e desafiador.",
    playTime: "12h",
    rating: 4,
  },
  {
    id: "9",
    title: "Road 96",
    status: "played",
    coverImg: require("../assets/game-capes/road96Cape.jpg"),
    comment: "História envolvente e marcante.",
    playTime: "8h",
    rating: 5,
  },
  {
    id: "10",
    title: "Castle Crashers",
    status: "played",
    coverImg: require("../assets/game-capes/castleCrashersCape.jpg"),
    comment: "Melhor com amigos.",
    playTime: "20h",
    rating: 3,
  },
  
  // BACKLOG
  {
    id: "11",
    title: "Clair Obscur: Expedition 33",
    status: "backlog",
    coverImg: require("../assets/game-capes/clairObscurE33Cape.jpg"),
    comment: "Parece incrível, mal posso esperar.",
  },
  {
    id: "12",
    title: "God Of War 2018",
    status: "backlog",
    coverImg: require("../assets/game-capes/gow2018Cape.jpg"),
    comment: "Todo mundo recomenda, preciso jogar.",
  },
  {
    id: "13",
    title: "Resident Evil 4 Remake",
    status: "backlog",
    coverImg: require("../assets/game-capes/residentEvil4Cape.jpg"),
    comment: "Ouvi que o remake é excelente.",
  },
  {
    id: "14",
    title: "Red Dead Redemption 2",
    status: "backlog",
    coverImg: require("../assets/game-capes/rdr2Cape.jpg"),
    comment: "Dicen que es una obra maestra.",
  },
  {
    id: "15",
    title: "The Witcher 3",
    status: "backlog",
    coverImg: require("../assets/game-capes/theWitcher3Cape.jpg"),
    comment: "Pendente há anos, precisa ser zerado.",
  },
]