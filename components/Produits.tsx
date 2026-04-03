"use client";

import Image from "next/image";

const produits = [
  {
    icon: "💨",
    titre: "Kits & Cigarettes électroniques",
    desc: "Appareils pour débutants et vapoteurs confirmés. Formats pod, stylo, box — on vous aide à choisir.",
  },
  {
    icon: "🌿",
    titre: "E-liquides",
    desc: "Large sélection de saveurs : fruités, gourmands, frais, tabac. Plusieurs taux de nicotine disponibles.",
  },
  {
    icon: "🔧",
    titre: "Accessoires & recharges",
    desc: "Coils, pods, batteries, chargeurs, drip tips — tout ce qu'il vous faut pour entretenir votre matériel.",
  },
  {
    icon: "💬",
    titre: "Conseil & accompagnement",
    desc: "Vous voulez arrêter de fumer ? On vous accompagne pas à pas, sans pression, avec bienveillance.",
  },
];

export default function Produits() {
  return (
    <section
      id="produits"
      style={{
        background: "var(--nv-cream)",
        padding: "5rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* En-tête */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "end",
            marginBottom: "3.5rem",
          }}
          className="produits-header"
        >
          <div>
            <span
              style={{
                display: "inline-block",
                background: "var(--nv-linen)",
                color: "var(--nv-copper)",
                borderRadius: 100,
                padding: "0.3rem 0.9rem",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Ce que l&apos;on propose
            </span>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 800,
                color: "var(--nv-dark)",
                lineHeight: 1.2,
                letterSpacing: "-0.025em",
              }}
            >
              Tout ce dont vous
              <br />
              <span style={{ color: "var(--nv-copper)" }}>
                avez besoin
              </span>
            </h2>
          </div>
          <p
            style={{
              color: "var(--nv-muted)",
              lineHeight: 1.7,
              fontSize: "1rem",
            }}
          >
            Notre sélection est pensée pour tous les profils : les personnes
            qui débutent, celles qui veulent progresser, et les habitués qui
            cherchent de la nouveauté.
          </p>
        </div>

        {/* Grille produits + image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gap: "2rem",
            alignItems: "start",
          }}
          className="produits-layout"
        >
          {/* Cartes */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.25rem",
            }}
            className="produits-cards"
          >
            {produits.map((p) => (
              <div
                key={p.titre}
                style={{
                  background: "var(--nv-off)",
                  borderRadius: 16,
                  padding: "1.75rem",
                  border: "1px solid var(--nv-stone)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(58,48,40,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.75rem" }}>
                  {p.icon}
                </span>
                <h3
                  style={{
                    fontWeight: 700,
                    color: "var(--nv-dark)",
                    fontSize: "0.95rem",
                    marginBottom: "0.5rem",
                    lineHeight: 1.3,
                  }}
                >
                  {p.titre}
                </h3>
                <p
                  style={{
                    color: "var(--nv-muted)",
                    fontSize: "0.88rem",
                    lineHeight: 1.6,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Image décorative */}
          <div
            style={{
              position: "relative",
              borderRadius: 20,
              overflow: "hidden",
              aspectRatio: "3/4",
              boxShadow: "0 16px 50px rgba(58,48,40,0.1)",
            }}
          >
            <Image
              src="/images/nathvape-produits.jpg"
              alt="Produits NathVape — e-liquides et accessoires"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(15,11,30,0.5) 0%, transparent 60%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "1.5rem",
                left: "1.5rem",
                right: "1.5rem",
                background: "rgba(248,249,255,0.96)",
                borderRadius: 12,
                padding: "1rem",
                backdropFilter: "blur(8px)",
              }}
            >
              <p
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "var(--nv-dark)",
                  marginBottom: "0.2rem",
                }}
              >
                Besoin d&apos;un conseil ?
              </p>
              <p style={{ fontSize: "0.82rem", color: "var(--nv-muted)" }}>
                On vous accueille et on prend le temps
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .produits-header { grid-template-columns: 1fr !important; }
          .produits-layout { grid-template-columns: 1fr !important; }
          .produits-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
