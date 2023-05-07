import "@/styles/globals.css";
import Link from "next/link";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav style={navStyle}>
        <Link href="/" style={linkStyle}>
          Home
        </Link>
        <Link href="/create-post" style={linkStyle}>
          Create Post
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}
const navStyle = {
  padding: "30px 100px"
};

const linkStyle = {
  marginRight: "30px"
};
