import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andrew Heringer",
  description:
    "Andrew Heringer is a music producer, singer and multi-instrumentalist — The Guest and the Host, Sound Bath, and music for tv/film.",
  openGraph: {
    title: "Andrew Heringer",
    description: "Music Producer and Singer/Songwriter",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jost.variable}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
