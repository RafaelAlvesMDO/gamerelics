import { auth, db } from "@/src/firebase-config";
import * as FileSystem from "expo-file-system/legacy";
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";

export interface GameInput {
    title: string;
    status: "playing" | "played" | "backlog";
    coverImg?: string;
    comment?: string;
    playTime?: string;
    rating?: number;
}

export interface GameData extends GameInput {
    id: string;
}

async function saveImageLocally(uri: string, gameId: string): Promise<string> {
    const dir = FileSystem.documentDirectory + "game-covers/";
    const dirInfo = await FileSystem.getInfoAsync(dir);

    if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(dir, { intermediates: true });
    }

    const dest = `${dir}${gameId}.jpg`;
    await FileSystem.copyAsync({ from: uri, to: dest });
    return dest;
}

export async function saveGame(game: GameInput): Promise<void> {
    const userId = auth.currentUser?.uid;
    if (!userId) throw new Error("Usuário não autenticado.");

    const gameId = String(Date.now());
    let coverPath = "";

    if (game.coverImg) {
        coverPath = await saveImageLocally(game.coverImg, gameId);
    }

    await addDoc(collection(db, "users", userId, "games"), {
        id: gameId,
        title: game.title,
        status: game.status,
        coverImg: coverPath, // vazio se não tiver imagem
        comment: game.comment ?? "",
        playTime: game.playTime ?? "",
        rating: game.rating ?? null,
    });
}

export async function getGamesByStatus(status: string): Promise<GameData[]> {
    const userId = auth.currentUser?.uid;
    if (!userId) throw new Error("Usuário não autenticado.");

    const q = query(
        collection(db, "users", userId, "games"),
        where("status", "==", status)
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as GameData));
}

export async function getGameById(id: string): Promise<GameData | null> {
    const userId = auth.currentUser?.uid;
    if (!userId) throw new Error("Usuário não autenticado.");

    const snapshot = await getDocs(collection(db, "users", userId, "games"));
    const found = snapshot.docs.find((d) => d.id === id || d.data().id === id);

    return found ? ({ ...found.data(), id: found.id } as GameData) : null;
}

export async function deleteGame(docId: string): Promise<void> {
    const userId = auth.currentUser?.uid;
    if (!userId) throw new Error("Usuário não autenticado.");

    await deleteDoc(doc(db, "users", userId, "games", docId));
}