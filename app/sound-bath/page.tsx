import type { Metadata } from "next";
import { SOCIAL } from "@/components/site";

export const metadata: Metadata = {
  title: "Sound Bath — Andrew Heringer",
  description:
    "Sound Bath is an ambient music project of peaceful soundscapes for relaxation, mindfulness and rest.",
};

export default function SoundBathPage() {
  return (
    <>
      <section
        className="section"
        style={{ backgroundImage: "url(/images/SoundBathBackground.webp)" }}
      >
        <div className="section__overlay" />
        <div className="section__inner">
          <img
            src="/images/SoundbathLogo.webp"
            alt="Sound Bath"
            style={{ width: "min(320px, 70vw)", margin: "0 auto 28px" }}
          />
          <p className="section__text">
            An ambient music project of peaceful soundscapes for relaxation, mindfulness and
            rest.
          </p>
          <a href={SOCIAL.spotify} target="_blank" rel="noopener noreferrer" className="btn">
            Listen on Spotify
          </a>
        </div>
      </section>

      <div className="prose">
        <div className="prose__inner">
          <p className="eyebrow">Ambient Soundscapes</p>
          <h2>Space to Rest</h2>
          <p>
            Sound Bath is an ambient music project by Andrew Heringer — peaceful soundscapes
            designed for relaxation, mindfulness and rest.
          </p>
          <p>
            Slow-moving pads, gentle drones and natural textures create room to breathe, whether
            you&apos;re meditating, working, or drifting off to sleep.
          </p>
        </div>
      </div>
    </>
  );
}
