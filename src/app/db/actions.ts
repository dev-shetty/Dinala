"use server"

import { MongoClient } from "mongodb"

export async function connectDB() {
  try {
    const MONGO_URI = process.env.MONGO_URI || ""
    if (!MONGO_URI || MONGO_URI === "") {
      throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
      )
    }

    const client = await MongoClient.connect(MONGO_URI)
    const db = client.db("dinala-db")
    return db
  } catch (error) {
    console.log(error)
  }
}
