import type { Metadata } from "next";
import { SOCIAL } from "@/components/site";

export const metadata: Metadata = {
  title: "The Guest and the Host — Andrew Heringer",
  description:
    "The Guest and the Host is the indie-folk / singer-songwriter project of Andrew Heringer.",
};

export default function GuestPage() {
  return (
    <>
      <section
        className="section"
        data-navbg="dark"
        style={{ backgroundImage: "url(/images/GuestBackground.webp)" }}
      >
        <div className="section__overlay" />
        <div className="section__inner">
          <p className="eyebrow">A Project by Andrew Heringer</p>
          <h1 className="section__title">The Guest and the Host</h1>
          <p className="section__text">
            The indie-folk / singer-songwriter project of Andrew Heringer.
          </p>
          <a href={SOCIAL.spotify} target="_blank" rel="noopener noreferrer" className="btn">
            Listen on Spotify
          </a>
        </div>
      </section>

      <div className="prose" data-navbg="light">
        <div className="prose__inner">
          <p className="eyebrow">The Music</p>
          <h2>Songs and Stories</h2>
          <p>
            The Guest and the Host is the indie-folk / singer-songwriter project of Andrew
            Heringer — a home for intimate songwriting, warm arrangements and honest, layered
            vocals.
          </p>
          <p>
            Built from years of playing in bands and collaborating with other artists, the
            project blends acoustic textures with the ambient sensibility that runs through all
            of Andrew&apos;s work.
          </p>
        </div>
      </div>

      <div className="media-row" data-navbg="light">
        <img src="/images/TGATH-Andrew.webp" alt="Andrew Heringer" />
        <img src="/images/GuestImage.webp" alt="The Guest and the Host" />
      </div>

      <div className="media-full" data-navbg="light">
        <img src="/images/Band.webp" alt="The band performing live" />
      </div>
    </>
  );
}
