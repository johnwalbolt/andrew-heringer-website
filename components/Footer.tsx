import { SOCIAL } from "./site";
import { InstagramIcon, SpotifyIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <InstagramIcon size={22} />
        </a>
        <a href={SOCIAL.spotify} target="_blank" rel="noopener noreferrer" aria-label="Spotify">
          <SpotifyIcon size={22} />
        </a>
      </div>
      <div className="footer__brand">Andrew Heringer</div>
      <div className="footer__copy">
        © {new Date().getFullYear()} Andrew Heringer. All rights reserved.
      </div>
    </footer>
  );
}
