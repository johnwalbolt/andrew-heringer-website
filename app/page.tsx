import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { ChevronDown } from "@/components/icons";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="hero"
        style={{ backgroundImage: "url(/images/Website-Hero-Andrew-Smiling.webp)" }}
      >
        <div className="hero__inner">
          <h1 className="hero__title">Andrew Heringer</h1>
          <p className="hero__subtitle">Music Producer and Singer/Songwriter</p>
        </div>
        <a href="#music" className="hero__scroll" aria-label="Scroll to content">
          <ChevronDown size={30} />
        </a>
      </section>

      {/* Music */}
      <section
        id="music"
        className="section section--fixed"
        style={{ backgroundImage: "url(/images/HomeMusicBackground.webp)" }}
      >
        <div className="section__overlay" />
        <div className="section__inner music__inner">
          <div className="music__header">
            <img
              className="music__band"
              src="/images/Band.webp"
              alt="Andrew Heringer's band"
            />
            <h2 className="section__title music__title">Music</h2>
          </div>

          <p className="section__text">
            Andrew Heringer is a music producer, singer and multi-instrumentalist who has
            built a career playing in bands, creating ambient music, collaborating with other
            musical artists and making music for tv/film.
          </p>

          <Link href="/about-andrew" className="btn">
            Learn more
          </Link>

          <div className="embed embed--spotify">
            <iframe
              title="Andrew Heringer on Spotify"
              src="https://open.spotify.com/embed/playlist/1kWbGGLq7u5w3gBfvQes2X?utm_source=generator&theme=0"
              width="100%"
              height={352}
              frameBorder={0}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>

          <div className="video">
            <iframe
              title="The Guest and the Host — Let Me Know What You're Feeling (Official Video)"
              src="https://www.youtube.com/embed/WApr9VsXJ-8"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* The Guest and the Host */}
      <section
        id="guest"
        className="section section--fixed"
        style={{ backgroundImage: "url(/images/HomeGuestBackground.webp)" }}
      >
        <div className="section__overlay" />
        <div className="section__inner guest__inner">
          <h2 className="section__title">The Guest and the Host</h2>
          <img
            className="guest__figure"
            src="/images/TGATH-Andrew.webp"
            alt="Andrew Heringer seated with arms outstretched"
          />
          <p className="section__text">
            The Guest and the Host is the indie-folk / singer-songwriter project of Andrew
            Heringer.
          </p>
          <Link href="/the-guest-and-the-host" className="btn">
            Learn more
          </Link>
        </div>
      </section>

      {/* Sound Bath */}
      <section
        id="sound-bath"
        className="section section--fixed section--no-overlay"
        style={{ backgroundImage: "url(/images/HomeSoundBathBackground.webp)" }}
      >
        <div className="section__inner">
          <h2 className="section__title">Sound Bath</h2>
          <p className="section__text">
            Sound Bath is an ambient music project of peaceful soundscapes for relaxation,
            mindfulness and rest.
          </p>
          <Link href="/sound-bath" className="btn">
            Learn more
          </Link>
        </div>
      </section>

      {/* About Andrew */}
      <section
        id="about"
        className="section section--fixed"
        style={{ backgroundImage: "url(/images/aboutmain.webp)" }}
      >
        <div className="section__overlay" />
        <div className="section__inner">
          <h2 className="section__title">About Andrew</h2>
          <p className="section__text">
            Andrew currently works out of his home studio in Orinda, CA.
          </p>
          <Link href="/about-andrew" className="btn">
            Learn more
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="section contact"
        style={{ backgroundImage: "url(/images/blueyellow.webp)" }}
      >
        <div className="contact__grid">
          <div className="contact__panel">
            <h2 className="section__title">Contact</h2>
            <ContactForm />
          </div>
          <div className="contact__media">
            <img
              src="/images/Contact.webp"
              alt="Andrew Heringer singing into a microphone"
            />
          </div>
        </div>
      </section>
    </>
  );
}
