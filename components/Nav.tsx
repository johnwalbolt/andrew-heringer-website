"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, SOCIAL } from "./site";
import { InstagramIcon, SpotifyIcon, MenuIcon, CloseIcon } from "./icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The homepage nav starts transparent and frosts on scroll; every other page
  // keeps the frosted-glass background at all times.
  const frosted = !isHome || scrolled;

  return (
    <header className={`nav ${frosted ? "nav--frost" : ""} ${open ? "nav--open" : ""}`}>
      <Link href="/" className="nav__brand" onClick={() => setOpen(false)}>
        Andrew Heringer
      </Link>

      <button
        className="nav__toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      <nav className={`nav__menu ${open ? "nav__menu--open" : ""}`}>
        <div className="nav__links">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="nav__link" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="nav__social">
          <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href={SOCIAL.spotify} target="_blank" rel="noopener noreferrer" aria-label="Spotify">
            <SpotifyIcon />
          </a>
        </div>
      </nav>
    </header>
  );
}
