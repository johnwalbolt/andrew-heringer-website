import type { Metadata } from "next";
import { SOUND_BATH_PLATFORMS } from "@/components/site";
import {
  SpotifyIcon,
  AppleIcon,
  AmazonIcon,
  YouTubeIcon,
  BandcampIcon,
  GlobeIcon,
} from "@/components/icons";

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
        data-navbg="dark"
        style={{ backgroundImage: "url(/images/HeroBackground.webp)", backgroundColor: "#000" }}
      >
        <div className="section__overlay" />
        <div className="section__inner split__inner">
          <div className="split__row">
            <div className="split__media">
              <img src="/images/SoundbathLogo.webp" alt="Sound Bath" />
            </div>
            <div className="split__copy">
              <p className="eyebrow">A Project by Andrew Heringer</p>
              <h1 className="section__title">Sound Bath</h1>
              <p className="section__text">
                Sound Bath started as an experiment in minimalism and gentle ambient
                soundscapes. As more listeners tuned in, the project expanded into a space for
                intentional soundscapes for relaxation, mindfulness and rest.
              </p>

              <div className="platforms">
                <a href={SOUND_BATH_PLATFORMS.website} target="_blank" rel="noopener noreferrer" className="platform-btn">
                  <GlobeIcon /> Website
                </a>
                <a href={SOUND_BATH_PLATFORMS.spotify} target="_blank" rel="noopener noreferrer" className="platform-btn">
                  <SpotifyIcon /> Spotify
                </a>
                <a href={SOUND_BATH_PLATFORMS.apple} target="_blank" rel="noopener noreferrer" className="platform-btn">
                  <AppleIcon /> Apple
                </a>
                <a href={SOUND_BATH_PLATFORMS.amazon} target="_blank" rel="noopener noreferrer" className="platform-btn">
                  <AmazonIcon /> Amazon
                </a>
                <a href={SOUND_BATH_PLATFORMS.youtube} target="_blank" rel="noopener noreferrer" className="platform-btn">
                  <YouTubeIcon /> YouTube
                </a>
                <a href={SOUND_BATH_PLATFORMS.bandcamp} target="_blank" rel="noopener noreferrer" className="platform-btn">
                  <BandcampIcon /> Bandcamp
                </a>
              </div>
            </div>
          </div>

          <div className="split__below">
            <div className="spotify-embed">
              <iframe
                title="Sound Bath on Spotify"
                src="https://open.spotify.com/embed/playlist/4VUExlchVzZykM9X70fbSZ?utm_source=generator&theme=0"
                width="100%"
                height={352}
                frameBorder={0}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
