import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Andrew — Andrew Heringer",
  description:
    "Andrew Heringer is a singer, songwriter, and producer from Northern California, releasing ambient music as Sound Bath and singer-songwriter material as The Guest and the Host.",
};

export default function AboutPage() {
  return (
    <>
      <section
        className="section hero--dark"
        data-navbg="dark"
        style={{ backgroundImage: "url(/images/AboutBackground.webp)" }}
      >
        <div className="section__overlay" />
        <div className="section__inner split__inner">
          <div className="split__row split__row--top">
            <div className="split__media">
              <img src="/images/AboutAndrew.webp" alt="Andrew Heringer" />
            </div>
            <div className="split__copy">
              <h1 className="section__title">About Andrew</h1>
              <p className="section__text section__text--long">
                Andrew Heringer is a singer, songwriter, and producer from Northern California,
                currently releasing ambient music as Sound Bath and singer-songwriter material
                as The Guest and the Host. A founding member of the band Milo Greene, he toured
                across North America and Europe throughout the 2010s, with performances on The
                Late Show with David Letterman, The Tonight Show with Jay Leno, and Conan
                O&rsquo;Brien, as well as appearances at Lollapalooza, Bonnaroo, and Outside
                Lands. Milo Greene opened for The Civil Wars, Foster the People, Bombay Bicycle
                Club, Cold War Kids, Stars, and The Walkmen, and toured alongside Lucius and
                Bahamas. Heringer&rsquo;s songs have been featured in the television shows
                Grey&rsquo;s Anatomy, 13 Reasons Why, Shameless, and many more. As a musical
                collaborator, he&rsquo;s produced, written, recorded and mixed music for many
                other artists such as Damien Rice, Madi Diaz, and Joshua Radin. From his Bay
                Area home studio, he now focuses on ambient wellness music and remains a
                passionate advocate for independent artistry.
              </p>
            </div>
          </div>

          <div className="split__below">
            <div className="spotify-embed">
              <iframe
                title="Andrew Heringer on Spotify"
                src="https://open.spotify.com/embed/playlist/6pHE1ji6B5ozIjXdlh3pXd?utm_source=generator&theme=0"
                width="100%"
                height={352}
                frameBorder={0}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>

            <div className="spotify-embed">
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
          </div>
        </div>
      </section>
    </>
  );
}
