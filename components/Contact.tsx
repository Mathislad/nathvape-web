import Image from "next/image";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const horaires = [
  { jour: "Lundi", h: "10h – 12h30 · 14h – 19h" },
  { jour: "Mardi", h: "10h – 12h30 · 14h – 19h" },
  { jour: "Mercredi", h: "10h – 12h30 · 14h – 19h" },
  { jour: "Jeudi", h: "10h – 12h30 · 14h – 19h" },
  { jour: "Vendredi", h: "10h – 12h30 · 14h – 19h" },
  { jour: "Samedi", h: "10h – 13h" },
  { jour: "Dimanche", h: "Fermé" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "var(--nv-dark)",
        padding: "5rem 1.5rem 3rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fond image décorative atténuée */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.08 }}>
        <Image
          src="/images/nathvape-ambiance.jpg"
          alt=""
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          aria-hidden
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {/* Titre */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(160,113,79,0.2)",
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
            Venir nous voir
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              color: "#FAF8F4",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
            }}
          >
            On est là pour vous,{" "}
            <span style={{ color: "var(--nv-copper)" }}>venez nous dire bonjour</span>
          </h2>
        </div>

        {/* Grille infos */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
          className="contact-grid"
        >
          {/* Adresse */}
          <div
            style={{
              background: "rgba(250,248,244,0.06)",
              border: "1px solid rgba(250,248,244,0.1)",
              borderRadius: 16,
              padding: "1.75rem",
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 10,
                background: "rgba(160,113,79,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <MapPin size={18} color="var(--nv-copper)" />
            </div>
            <h3
              style={{
                color: "#FAF8F4",
                fontWeight: 700,
                marginBottom: "0.5rem",
                fontSize: "0.95rem",
              }}
            >
              Adresse
            </h3>
            <p style={{ color: "rgba(250,248,244,0.65)", fontSize: "0.9rem", lineHeight: 1.6 }}>
              15 rue de Chante Barbe
              <br />
              43200 Yssingeaux
            </p>
            <a
              href="https://maps.google.com/?q=15+rue+de+Chante+Barbe+43200+Yssingeaux"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
                color: "var(--nv-copper)",
                fontSize: "0.83rem",
                fontWeight: 600,
                textDecoration: "none",
                marginTop: "0.75rem",
              }}
            >
              Voir sur Google Maps
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Téléphone */}
          <div
            style={{
              background: "rgba(250,248,244,0.06)",
              border: "1px solid rgba(250,248,244,0.1)",
              borderRadius: 16,
              padding: "1.75rem",
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 10,
                background: "rgba(160,113,79,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <Phone size={18} color="var(--nv-copper)" />
            </div>
            <h3
              style={{
                color: "#FAF8F4",
                fontWeight: 700,
                marginBottom: "0.5rem",
                fontSize: "0.95rem",
              }}
            >
              Téléphone
            </h3>
            <a
              href="tel:0614571753"
              style={{
                color: "rgba(250,248,244,0.65)",
                fontSize: "1.1rem",
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "0.03em",
              }}
            >
              06 14 57 17 53
            </a>
            <p
              style={{
                color: "rgba(250,248,244,0.4)",
                fontSize: "0.82rem",
                marginTop: "0.4rem",
              }}
            >
              Appelez-nous directement
            </p>
          </div>

          {/* Horaires */}
          <div
            style={{
              background: "rgba(250,248,244,0.06)",
              border: "1px solid rgba(250,248,244,0.1)",
              borderRadius: 16,
              padding: "1.75rem",
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 10,
                background: "rgba(160,113,79,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <Clock size={18} color="var(--nv-copper)" />
            </div>
            <h3
              style={{
                color: "#FAF8F4",
                fontWeight: 700,
                marginBottom: "0.75rem",
                fontSize: "0.95rem",
              }}
            >
              Horaires
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
              {horaires.map((h) => (
                <li
                  key={h.jour}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.82rem",
                    color: h.h === "Fermé" ? "rgba(250,248,244,0.3)" : "rgba(250,248,244,0.65)",
                  }}
                >
                  <span style={{ fontWeight: 500 }}>{h.jour}</span>
                  <span>{h.h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA final */}
        <div
          style={{
            background: "linear-gradient(135deg, var(--nv-copper) 0%, var(--nv-copper-h) 100%)",
            borderRadius: 20,
            padding: "2.5rem",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <h3
            style={{
              color: "#fff",
              fontWeight: 800,
              fontSize: "clamp(1.3rem, 3vw, 1.9rem)",
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            Prêt(e) à passer à la vape ?
          </h3>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "1rem",
              marginBottom: "1.75rem",
            }}
          >
            Venez nous voir ou appelez-nous — on vous répond avec plaisir.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://maps.google.com/?q=15+rue+de+Chante+Barbe+43200+Yssingeaux"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#fff",
                color: "var(--nv-copper)",
                padding: "0.8rem 1.8rem",
                borderRadius: 100,
                fontWeight: 700,
                fontSize: "0.9rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <MapPin size={15} />
              Nous trouver
            </a>
            <a
              href="tel:0614571753"
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "1.5px solid rgba(255,255,255,0.5)",
                color: "#fff",
                padding: "0.8rem 1.8rem",
                borderRadius: 100,
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <Phone size={15} />
              06 14 57 17 53
            </a>
          </div>
        </div>

        {/* Footer bas */}
        <div
          style={{
            borderTop: "1px solid rgba(250,248,244,0.1)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <span
            style={{
              fontWeight: 700,
              fontSize: "1rem",
              color: "#FAF8F4",
            }}
          >
            Nath<span style={{ color: "var(--nv-copper)" }}>Vape</span>
          </span>
          <p style={{ color: "rgba(250,248,244,0.35)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} NathVape · 15 rue de Chante Barbe, 43200 Yssingeaux
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
