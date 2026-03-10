import { ImageSourcePropType } from "react-native";

export interface Game {
  id: string
  title: string
  status: "playing" | "played" | "backlog"
  coverImg: ImageSourcePropType
}

export const sampleGames: Game[] = [

  // PLAYING
  {
    id: "1",
    title: "Elder Scrolls V: Skyrim",
    status: "playing",
    coverImg: require("../assets/game-capes/elderScrollsVSkyrimCape.jpg")
  },
  {
    id: "2",
    title: "Cyberpunk 2077",
    status: "playing",
    coverImg: require("../assets/game-capes/cyberpunk2077Cape.jpg")
  },
  {
    id: "3",
    title: "Elden Ring",
    status: "playing",
    coverImg: require("../assets/game-capes/eldenRingCape.jpg")
  },
  {
    id: "4",
    title: "Baldur's Gate 3",
    status: "playing",
    coverImg: require("../assets/game-capes/baldursGate3Cape.jpg")
  },
  {
    id: "5",
    title: "Bloodborne",
    status: "playing",
    coverImg: require("../assets/game-capes/bloodborneCape.jpg")
  },

  // PLAYED
  {
    id: "6",
    title: "Dave The Diver",
    status: "played",
    coverImg: require("../assets/game-capes/daveTheDiverCape.jpg")
  },
  {
    id: "7",
    title: "Flyff",
    status: "played",
    coverImg: require("../assets/game-capes/flyffCape.jpg")
  },
  {
    id: "8",
    title: "Shovel Knight",
    status: "played",
    coverImg: require("../assets/game-capes/shovelKnightCape.jpg")
  },
  {
    id: "9",
    title: "Road 96",
    status: "played",
    coverImg: require("../assets/game-capes/road96Cape.jpg")
  },
  {
    id: "10",
    title: "Castle Crashers",
    status: "played",
    coverImg: require("../assets/game-capes/castleCrashersCape.jpg")
  },

  // BACKLOG
  {
    id: "11",
    title: "Clair Obscur: Expedition 33",
    status: "backlog",
    coverImg: require("../assets/game-capes/clairObscurE33Cape.jpg")
  },
  {
    id: "12",
    title: "God Of War 2018",
    status: "backlog",
    coverImg: require("../assets/game-capes/gow2018Cape.jpg")
  },
  {
    id: "13",
    title: "Resident Evil 4 Remake",
    status: "backlog",
    coverImg: require("../assets/game-capes/residentEvil4Cape.jpg")
  },
  {
    id: "14",
    title: "Red Dead Redemption 2",
    status: "backlog",
    coverImg: require("../assets/game-capes/rdr2Cape.jpg")
  },
  {
    id: "15",
    title: "The Witcher 3",
    status: "backlog",
    coverImg: require("../assets/game-capes/theWitcher3Cape.jpg")
  }

]