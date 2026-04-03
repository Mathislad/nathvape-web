"use client";

const raisons = [
  {
    nb: "01",
    titre: "On vous écoute vraiment",
    desc: "Pas de discours préparé, pas de kit poussé à la vente. On commence par comprendre où vous en êtes, et on part de là.",
    couleur: "var(--nv-sage)",
    bg: "var(--nv-sage-lt)",
  },
  {
    nb: "02",
    titre: "Des produits qu'on connaît",
    desc: "On ne vend que ce qu'on a testé, ce en quoi on croit. Chaque produit en rayon a été sélectionné avec soin.",
    couleur: "var(--nv-copper)",
    bg: "var(--nv-linen)",
  },
  {
    nb: "03",
    titre: "Une boutique de quartier",
    desc: "En plein centre d'Yssingeaux, une adresse que vous allez connaître par cœur. Pas un entrepôt, un endroit où on se sent bien.",
    couleur: "var(--nv-sage)",
    bg: "var(--nv-sage-lt)",
  },
  {
    nb: "04",
    titre: "Accessible à tous",
    desc: "Fumeur qui veut changer, curieux sans expérience, ou vétéran de la vape — tout le monde est bien reçu ici.",
    couleur: "var(--nv-copper)",
    bg: "var(--nv-linen)",
  },
];

export default function Pourquoi() {
  return (
    <section
      id="pourquoi"
      style={{
        background: "var(--nv-off)",
        padding: "5rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* En-tête centré */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
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
            Nos valeurs
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              color: "var(--nv-dark)",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
              maxWidth: 500,
              margin: "0 auto 1rem",
            }}
          >
            Pourquoi choisir{" "}
            <span style={{ color: "var(--nv-copper)" }}>NathVape</span> ?
          </h2>
          <p
            style={{
              color: "var(--nv-muted)",
              maxWidth: 440,
              margin: "0 auto",
              lineHeight: 1.7,
              fontSize: "1rem",
            }}
          >
            Ce n&apos;est pas que de la vente. C&apos;est une relation de
            confiance, sur la durée.
          </p>
        </div>

        {/* Grille */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
          }}
          className="pourquoi-grid"
        >
          {raisons.map((r) => (
            <div
              key={r.nb}
              style={{
                background: "var(--nv-cream)",
                borderRadius: 20,
                padding: "2rem",
                border: "1px solid var(--nv-stone)",
                display: "flex",
                gap: "1.25rem",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(58,48,40,0.07)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Numéro */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: r.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  color: r.couleur,
                  letterSpacing: "0.05em",
                }}
              >
                {r.nb}
              </div>
              <div>
                <h3
                  style={{
                    fontWeight: 700,
                    color: "var(--nv-dark)",
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                    lineHeight: 1.3,
                  }}
                >
                  {r.titre}
                </h3>
                <p
                  style={{
                    color: "var(--nv-muted)",
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                  }}
                >
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .pourquoi-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
