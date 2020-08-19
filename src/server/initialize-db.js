import { defaultState } from "./defaultState";
import { connectDb } from "./connect-db";

async function initializeDb() {
  let db = await connectDb();
  for (let collectionName in defaultState) {
    let collection = db.collection(collectionName);
    console.log(collection);
    console.log(defaultState[collectionName]);
    const waaat = await collection.insertMany(defaultState[collectionName]);
    console.log(waaat);
  }
}

initializeDb();
