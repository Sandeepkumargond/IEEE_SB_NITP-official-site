// src/app/teams/page.jsx
"use client";
import Link from "next/link";

const domains = [
  { key: "web-dev", title: "Web Dev", image: "/web.jpg" },
  { key: "blockchain", title: "Blockchain", image: "/blockchain.jpg" },
  { key: "ai", title: "AI-ML", image: "/ai.jpeg" },
  { key: "flutter", title: "Flutter", image: "/flutter.jpeg" },
  { key: "kotlin", title: "Kotlin", image: "/kotlin.jpeg" },
  { key: "uiux", title: "UI/UX", image: "/ui.jpeg" },
];

export default function TeamsPage() {
  return (
    <section
      style={{
        paddingLeft: "120px",
        paddingRight: "120px",
        paddingTop: "60px",
        paddingBottom: "60px",
        minHeight: "100vh",
        backgroundImage: "url('/mobile-vector-1.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "42px",
          fontWeight: "800",
          color: "#000",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
        }}
      >
        Our Domains
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 320px)",
          justifyContent: "center",
          columnGap: "15px",
          rowGap: "20px",
          alignItems: "start",
        }}
      >
        {domains.map(({ key, title, image }) => (
          <Link
            key={key}
            href={`/teams/${key}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {/* wrapper without shadow */}
            <div
              style={{
                width: "320px",
                borderRadius: "16px",
                display: "flex",
                margin: "0 auto",
                transition: "transform 0.28s ease, border-color 0.28s ease, filter 0.28s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.01)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
              }}
            >
              {/* inner card with visible gray border, no shadow */}
              <div
                style={{
                  width: "100%",
                  borderRadius: "14px",
                  overflow: "hidden",
                  background: "#ffffff",
                  border: "2px solid rgba(167, 169, 172, 0.48)", // visible grayish border
                  boxSizing: "border-box",
                  cursor: "pointer",
                }}
              >
                <img
                  src={image}
                  alt={title}
                  style={{
                    width: "100%",
                    height: "210px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    padding: "14px",
                    textAlign: "center",
                    borderTop: "1px solid rgba(30,41,59,0.06)",
                    background: "#fff",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "800",
                      margin: 0,
                      color: "#111827",
                    }}
                  >
                    {title}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}