"use server"

import { connectDB } from "@/app/db/actions"
import { ObjectId } from "mongodb"

export async function test() {
  try {
    const db = await connectDB()
    const result = await db
      ?.collection("users")
      .findOne({ _id: new ObjectId("6614d1147e6d27d01fce07b2") })
    return result
  } catch (error) {
    console.log(error)
  }
}

export async function setName(formData: FormData) {
  const data = formData.get("name")
  const db = await connectDB()
  const result = await db?.collection("test").insertOne({ name: data })
  console.log(result)

  console.log(data)
}


