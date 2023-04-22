import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/settings">Settings</Link>
        <Link href="/post">Post</Link>
        <Link href="/user">User</Link>
      </nav>
      <Component {...pageProps} />
      <h1>End of page</h1>
    </>
  );
}
