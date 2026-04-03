"use client";

import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Image de fond */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/nathvape-hero.jpg"
          alt="Ambiance boutique NathVape Yssingeaux"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
        {/* Dégradé violet électrique */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(15,11,30,0.85) 0%, rgba(108,59,238,0.5) 60%, rgba(34,197,94,0.2) 100%)",
          }}
        />
      </div>

      {/* Contenu */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1100,
          margin: "0 auto",
          padding: "7rem 1.5rem 4rem",
          width: "100%",
        }}
      >
        {/* Badge localisation */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            background: "rgba(108,59,238,0.25)",
            border: "1px solid rgba(167,139,250,0.5)",
            borderRadius: 100,
            padding: "0.35rem 0.9rem",
            marginBottom: "1.5rem",
            backdropFilter: "blur(8px)",
          }}
        >
          <MapPin size={13} color="#FAF8F4" />
          <span
            style={{ color: "#FAF8F4", fontSize: "0.82rem", fontWeight: 500 }}
          >
            Yssingeaux, Haute-Loire (43)
          </span>
        </div>

        {/* Titre */}
        <h1
          style={{
            fontSize: "clamp(2.4rem, 7vw, 5rem)",
            fontWeight: 800,
            color: "#FAF8F4",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "1.25rem",
            maxWidth: 680,
          }}
        >
          Votre espace vape
          <br />
          <span style={{ color: "#A78BFA" }}>nouvelle génération</span>
          <br />
          à Yssingeaux
        </h1>

        {/* Baseline */}
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "rgba(250,248,244,0.85)",
            maxWidth: 480,
            marginBottom: "0.9rem",
            lineHeight: 1.6,
          }}
        >
          Cigarettes électroniques, e-liquides et accessoires — avec des
          conseils vrais, sans jargon.
        </p>

        {/* Adresse */}
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "rgba(250,248,244,0.7)",
            fontSize: "0.9rem",
            marginBottom: "2.5rem",
          }}
        >
          <MapPin size={14} />
          15 rue de Chante Barbe, 43200 Yssingeaux
        </p>

        {/* CTA */}
        <div
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <a
            href="#contact"
            style={{
              background: "var(--nv-copper)",
              color: "#fff",
              padding: "0.85rem 2rem",
              borderRadius: 100,
              fontWeight: 700,
              fontSize: "0.95rem",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--nv-copper-h)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--nv-copper)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Nous trouver
          </a>
          <a
            href="tel:0614571753"
            style={{
              background: "rgba(250,248,244,0.15)",
              border: "1.5px solid rgba(250,248,244,0.5)",
              color: "#FAF8F4",
              padding: "0.85rem 2rem",
              borderRadius: 100,
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
              backdropFilter: "blur(6px)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(250,248,244,0.25)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(250,248,244,0.15)")
            }
          >
            <Phone size={15} />
            06 14 57 17 53
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          opacity: 0.6,
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: 1,
            height: 50,
            background:
              "linear-gradient(to bottom, rgba(250,248,244,0.8), transparent)",
          }}
        />
      </div>
    </section>
  );
}
