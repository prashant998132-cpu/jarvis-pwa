import Dexie from "dexie";

export const db = new Dexie("JarvisMemory") as Dexie & { memories: Dexie.Table<Memory> };

db.version(1).stores({
  memories: "++id,timestamp,text,embedding",
});

interface Memory {
  id?: number;
  timestamp: number;
  text: string;
  embedding: Float32Array;
}