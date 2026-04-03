"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

const atouts = [
  "Un accueil humain, pas un script de vente",
  "Des conseils adaptés à votre rythme",
  "Gamme soigneusement sélectionnée",
  "Boutique de proximité, 100% locale",
];

export default function Boutique() {
  return (
    <section
      id="boutique"
      style={{
        background: "var(--nv-off)",
        padding: "5rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="boutique-grid"
      >
        {/* Image */}
        <div
          style={{
            position: "relative",
            borderRadius: 20,
            overflow: "hidden",
            aspectRatio: "4/5",
            boxShadow: "0 20px 60px rgba(58,48,40,0.12)",
          }}
        >
          <Image
            src="/images/nathvape-boutique.jpg"
            alt="Intérieur boutique NathVape Yssingeaux"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Badge flottant */}
          <div
            style={{
              position: "absolute",
              bottom: "1.5rem",
              right: "1.5rem",
              background: "var(--nv-copper)",
              color: "#fff",
              borderRadius: 12,
              padding: "0.75rem 1.25rem",
              fontSize: "0.85rem",
              fontWeight: 700,
              boxShadow: "0 4px 20px rgba(160,113,79,0.4)",
              lineHeight: 1.3,
            }}
          >
            <div style={{ fontSize: "1.4rem", fontWeight: 900 }}>+5 ans</div>
            <div style={{ opacity: 0.9 }}>d&apos;expérience</div>
          </div>
        </div>

        {/* Texte */}
        <div>
          <span
            style={{
              display: "inline-block",
              background: "var(--nv-sage-lt)",
              color: "var(--nv-sage)",
              borderRadius: 100,
              padding: "0.3rem 0.9rem",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Notre histoire
          </span>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              color: "var(--nv-dark)",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
              marginBottom: "1.25rem",
            }}
          >
            Une boutique comme
            <br />
            <span style={{ color: "var(--nv-copper)" }}>on en fait peu</span>
          </h2>

          <p
            style={{
              color: "var(--nv-muted)",
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "1rem",
            }}
          >
            NathVape, c&apos;est avant tout une rencontre. Nathalie a ouvert sa
            boutique à Yssingeaux pour offrir une vraie alternative aux grandes
            chaînes : un espace où l&apos;on prend le temps d&apos;écouter,
            de comprendre votre situation, et de vous guider vers ce qui vous
            correspond vraiment.
          </p>
          <p
            style={{
              color: "var(--nv-muted)",
              fontSize: "1rem",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            Que vous soyez débutant, fumeur qui veut arrêter, ou vapoteur
            expérimenté en quête de nouveautés — vous êtes les bienvenus.
          </p>

          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {atouts.map((a) => (
              <li
                key={a}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "var(--nv-body)",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                }}
              >
                <CheckCircle
                  size={18}
                  style={{ color: "var(--nv-sage)", flexShrink: 0 }}
                />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .boutique-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
