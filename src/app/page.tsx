import { auth, signOut } from "@/auth"
import Image from "next/image"
import Link from "next/link"

export default async function Home() {
  const session = await auth()
  console.log(session)

  return (
    <main className="container mx-auto py-4">
      <p>Hello</p>
      {session?.user ? (
        <div>
          <form
            action={async () => {
              "use server"
              await signOut()
            }}
          >
            <button type="submit">Sign Out</button>
          </form>
          {session.user.image && (
            <div>
              <Image
                src={session.user.image}
                width={32}
                height={32}
                alt={session.user.name!}
              />
            </div>
          )}
          <p>{session.user.name}</p>
        </div>
      ) : (
        <Link href="/api/auth/signin">Sign In</Link>
      )}
    </main>
  )
}
