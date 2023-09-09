import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Head from "next/head";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vidit Khandelwal Links",
  description: `Vidit Khandelwal's link-in-bio page. He is a software engineer based in the United States.`,
  generator: "Next.js",
  keywords: [
    "Vidit",
    "Khandelwal",
    "Vidit Khandelwal",
    "DePauw University",
    "software engineer",
    "swe",
    "sde",
    "engineer",
    "united states",
    "us",
    "usa",
    "cs",
    "computer science",
    "depauw",
    "depauw university",
    "indiana",
    "indianapolis",
    "greencastle",
    "greencastle in",
    "oxford",
    "uk",
    "ox",
    "react",
    "ui",
    "ux",
    "ui/ux",
    "designer",
    "ui designer",
    "design",
    "android engineer",
    "developer",
    "web developer",
    "links",
    "list",
    "link-in-bio",
    "linktree",
  ],
  authors: [{ name: "Vidit Khandelwal", url: "https://viditkhandelwal.com" }],
  creator: "Vidit Khandelwal",
  publisher: "Vidit Khandelwal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
