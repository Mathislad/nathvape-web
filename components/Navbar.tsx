"use client";

import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";

const links = [
  { href: "#boutique", label: "La boutique" },
  { href: "#produits", label: "Nos produits" },
  { href: "#pourquoi", label: "Pourquoi NathVape" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, box-shadow 0.3s",
        background: scrolled ? "rgba(250,248,244,0.96)" : "transparent",
        boxShadow: scrolled ? "0 1px 16px rgba(58,48,40,0.08)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 1.5rem",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "var(--nv-copper)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Leaf size={16} color="#fff" />
          </span>
          <span
            style={{
              fontWeight: 700,
              fontSize: "1.15rem",
              color: "var(--nv-dark)",
              letterSpacing: "-0.02em",
            }}
          >
            Nath<span style={{ color: "var(--nv-copper)" }}>Vape</span>
          </span>
        </a>

        {/* Nav desktop */}
        <nav
          style={{ display: "flex", gap: "2rem", alignItems: "center" }}
          className="hidden-mobile"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: "var(--nv-body)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--nv-copper)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--nv-body)")
              }
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:0614571753"
            style={{
              background: "var(--nv-copper)",
              color: "#fff",
              padding: "0.5rem 1.2rem",
              borderRadius: 100,
              fontSize: "0.88rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--nv-copper-h)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--nv-copper)")
            }
          >
            06 14 57 17 53
          </a>
        </nav>

        {/* Burger mobile */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--nv-dark)",
            padding: "0.25rem",
          }}
          aria-label="Menu"
          className="show-mobile"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div
          style={{
            background: "var(--nv-cream)",
            borderTop: "1px solid var(--nv-stone)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                color: "var(--nv-body)",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:0614571753"
            style={{
              background: "var(--nv-copper)",
              color: "#fff",
              padding: "0.75rem 1.5rem",
              borderRadius: 100,
              textAlign: "center",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Appeler — 06 14 57 17 53
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}
