import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <p>Welcome to your Next.js application.</p>

      <div className="flex justify-center items-center gap-4" >
        <Link href="/posts" className="text-blue-500 underline">
          Go to Posts
        </Link>
        <Link href="/featuresPosts" className="text-blue-500 underline">
          Go to Features Posts
        </Link>
      </div>
    </div>
  );
}
