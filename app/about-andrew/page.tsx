import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Andrew — Andrew Heringer",
  description:
    "Andrew Heringer is a music producer, singer and multi-instrumentalist working out of his home studio in Orinda, CA.",
};

export default function AboutPage() {
  return (
    <>
      <section
        className="section"
        style={{ backgroundImage: "url(/images/AboutBackground.webp)" }}
      >
        <div className="section__overlay" />
        <div className="section__inner">
          <p className="eyebrow">Music Producer &amp; Singer/Songwriter</p>
          <h1 className="section__title">About Andrew</h1>
          <p className="section__text">
            Andrew currently works out of his home studio in Orinda, CA.
          </p>
        </div>
      </section>

      <div className="prose">
        <div className="prose__inner">
          <img
            src="/images/AboutAndrew.webp"
            alt="Andrew Heringer"
            style={{ width: "min(360px, 80vw)", margin: "0 auto 40px", borderRadius: 2 }}
          />
          <h2>The Story</h2>
          <p>
            Andrew Heringer is a music producer, singer and multi-instrumentalist who has built
            a career playing in bands, creating ambient music, collaborating with other musical
            artists and making music for tv/film.
          </p>
          <p>
            His work spans the indie-folk songwriting of{" "}
            <Link href="/the-guest-and-the-host" style={{ textDecoration: "underline" }}>
              The Guest and the Host
            </Link>{" "}
            and the peaceful ambient soundscapes of{" "}
            <Link href="/sound-bath" style={{ textDecoration: "underline" }}>
              Sound Bath
            </Link>
            . Andrew currently works out of his home studio in Orinda, CA.
          </p>
        </div>
      </div>

      <div className="media-row">
        <img src="/images/PlantsRow1.webp" alt="Studio details" />
        <img src="/images/PlantsRow2.webp" alt="Studio details" />
      </div>
    </>
  );
}
