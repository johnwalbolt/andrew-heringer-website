import type { Metadata } from "next";
import { GUEST_PLATFORMS } from "@/components/site";
import { AmazonIcon, AppleIcon, SpotifyIcon, YouTubeIcon } from "@/components/icons";

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
        <div className="section__inner split__inner">
          <div className="split__row">
            <div className="split__media">
              <img src="/images/GuestImage.webp" alt="Andrew Heringer" />
            </div>
            <div className="split__copy">
              <p className="eyebrow">A Project by Andrew Heringer</p>
              <h1 className="section__title">The Guest and the Host</h1>
              <p className="section__text">
                The Guest and the Host is the indie-folk project of songwriter and producer
                Andrew Heringer. The music explores themes of connection, resilience, and
                self-reflection that blends timeless soft rock influences with heartfelt
                lyricism. With roots in folk, Americana, and pop, The Guest and the Host is
                Heringer&rsquo;s outlet for authentic artistic expression.
              </p>
              <div className="platforms">
                <a href={GUEST_PLATFORMS.amazon} target="_blank" rel="noopener noreferrer" className="platform-btn">
                  <AmazonIcon /> Amazon
                </a>
                <a href={GUEST_PLATFORMS.apple} target="_blank" rel="noopener noreferrer" className="platform-btn">
                  <AppleIcon /> Apple
                </a>
                <a href={GUEST_PLATFORMS.spotify} target="_blank" rel="noopener noreferrer" className="platform-btn">
                  <SpotifyIcon /> Spotify
                </a>
                <a href={GUEST_PLATFORMS.youtube} target="_blank" rel="noopener noreferrer" className="platform-btn">
                  <YouTubeIcon /> YouTube
                </a>
              </div>
            </div>
          </div>

          <div className="split__below">
          <div className="video-embed">
            <iframe
              src="https://www.youtube.com/embed/WApr9VsXJ-8"
              title="The Guest and the Host — Let Me Know What You're Feeling (Official Video)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="spotify-embed">
            <iframe
              title="The Guest and the Host on Spotify"
              src="https://open.spotify.com/embed/playlist/27LocyaZ0lbB0juHIzDgID?utm_source=generator&theme=0"
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
