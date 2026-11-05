import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <Link href="/about">Go to About Page</Link>
      <Link href="/contact">Go to Contact Page</Link>
    </div>
  )
}
