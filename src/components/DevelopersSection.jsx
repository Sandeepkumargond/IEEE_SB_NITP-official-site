"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

export default function DevelopersSection() {
  const topDevelopers = [
    {
      name: "Website Lead Name",
      email: "lead@example.com",
      role: "Website Lead",
      profilePic: "/office_bearers/placeholder.jpg",
      githubLink: "https://github.com",
      linkedInLink: "https://linkedin.com",
    },
    {
      name: "Website POC Name",
      email: "poc@example.com",
      role: "Website POC",
      profilePic: "/office_bearers/placeholder.jpg",
      githubLink: "https://github.com",
      linkedInLink: "https://linkedin.com",
    },
  ];

  const otherDevelopers = [
    {
      name: "Developer Name 1",
      email: "dev1@example.com",
      role: "Full Stack Developer",
      profilePic: "/office_bearers/placeholder.jpg",
      githubLink: "https://github.com",
      linkedInLink: "https://linkedin.com",
    },
    {
      name: "Developer Name 2",
      email: "dev2@example.com",
      role: "Frontend Developer",
      profilePic: "/office_bearers/placeholder.jpg",
      githubLink: "https://github.com",
      linkedInLink: "https://linkedin.com",
    },
    {
      name: "Developer Name 3",
      email: "dev3@example.com",
      role: "Backend Developer",
      profilePic: "/office_bearers/placeholder.jpg",
      githubLink: "https://github.com",
      linkedInLink: "https://linkedin.com",
    },
    {
      name: "Developer Name 4",
      email: "dev4@example.com",
      role: "UI/UX Designer",
      profilePic: "/office_bearers/placeholder.jpg",
      githubLink: "https://github.com",
      linkedInLink: "https://linkedin.com",
    },
    {
      name: "Developer Name 5",
      email: "dev5@example.com",
      role: "Database Engineer",
      profilePic: "/office_bearers/placeholder.jpg",
      githubLink: "https://github.com",
      linkedInLink: "https://linkedin.com",
    },
    {
      name: "Developer Name 6",
      email: "dev6@example.com",
      role: "DevOps Engineer",
      profilePic: "/office_bearers/placeholder.jpg",
      githubLink: "https://github.com",
      linkedInLink: "https://linkedin.com",
    },
  ];

  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "120px 24px",
        fontFamily: "'Segoe UI', 'Roboto', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/hero-bg.png"
          alt="IEEE background"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(2, 8, 23, 0.7), rgba(15, 20, 25, 0.85))",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2
            style={{
              fontSize: "48px",
              fontWeight: 800,
              marginBottom: "16px",
              background: "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-1px",
            }}
          >
            Meet Our Development Team
          </h2>

          <div
            style={{
              width: "60px",
              height: "4px",
              background: "linear-gradient(90deg, #38bdf8, #0ea5e9)",
              margin: "20px auto 30px",
              borderRadius: "2px",
            }}
          />

          <p
            style={{
              fontSize: "18px",
              color: "#e0e7ff",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.8",
              fontWeight: 500,
            }}
          >
            The talented developers crafting innovative solutions for IEEE NIT Patna. 
            Passionate about code, design, and building exceptional digital experiences.
          </p>
        </div>

        {/* Top Developers Section - Website Lead & POC */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            marginBottom: "80px",
            flexWrap: "wrap",
          }}
        >
          {topDevelopers.map((dev, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIdx(`top-${idx}`)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                background: "#1a1f2e",
                borderRadius: "16px",
                padding: "25px 28px",
                textAlign: "center",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow:
                  hoveredIdx === `top-${idx}`
                    ? "0 25px 50px rgba(56, 189, 248, 0.2)"
                    : "0 10px 30px rgba(0, 0, 0, 0.4)",
                transform: hoveredIdx === `top-${idx}` ? "translateY(-10px)" : "translateY(0)",
                border: "2px solid #38bdf8",
                maxWidth: "280px",
                minWidth: "260px",
              }}
            >
              {/* Profile Image */}
              <div
                style={{
                  position: "relative",
                  width: "130px",
                  height: "130px",
                  margin: "0 auto 14px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #195289, #0f3a5e)",
                  padding: "4px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={dev.profilePic}
                  alt={dev.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                    transform: hoveredIdx === `top-${idx}` ? "scale(1.05)" : "scale(1)",
                  }}
                />
              </div>

              {/* Name */}
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  color: "#f1f5f9",
                  margin: "10px 0 8px",
                  letterSpacing: "-0.5px",
                }}
              >
                {dev.name}
              </h3>

              {/* Role */}
              <div
                style={{
                  display: "inline-block",
                  padding: "5px 14px",
                  backgroundColor: "#38bdf8",
                  color: "#0f1419",
                  borderRadius: "20px",
                  fontSize: "11px",
                  fontWeight: 700,
                  marginBottom: "8px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                {dev.role}
              </div>

              {/* Email */}
              <p
                style={{
                  fontSize: "12px",
                  color: "#cbd5e1",
                  margin: "8px 0",
                  wordBreak: "break-all",
                  fontWeight: 500,
                }}
              >
                {dev.email}
              </p>

              {/* Social Links */}
              <div
                style={{
                  marginTop: "12px",
                  paddingTop: "12px",
                  borderTop: "2px solid #334155",
                  display: "flex",
                  justifyContent: "center",
                  gap: "12px",
                }}
              >
                <a
                  href={dev.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${dev.name} GitHub`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "38px",
                    height: "38px",
                    borderRadius: "8px",
                    background: hoveredIdx === `top-${idx}` ? "#38bdf8" : "#2d3748",
                    color: hoveredIdx === `top-${idx}` ? "#0f1419" : "#e0e7ff",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}
                >
                  <FaGithub style={{ fontSize: "18px" }} />
                </a>
                <a
                  href={dev.linkedInLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${dev.name} LinkedIn`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "38px",
                    height: "38px",
                    borderRadius: "8px",
                    background: hoveredIdx === `top-${idx}` ? "#0ea5e9" : "#2d3748",
                    color: hoveredIdx === `top-${idx}` ? "#0f1419" : "#e0e7ff",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}
                >
                  <FaLinkedin style={{ fontSize: "18px" }} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "linear-gradient(90deg, transparent, #38bdf8, transparent)",
            margin: "40px auto 60px",
            borderRadius: "2px",
          }}
        />

        {/* Other Members Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
            padding: "0 20px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {otherDevelopers.map((dev, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIdx(`dev-${idx}`)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                background: "#1a1f2e",
                borderRadius: "16px",
                padding: "28px 20px",
                textAlign: "center",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow:
                  hoveredIdx === `dev-${idx}`
                    ? "0 20px 40px rgba(56, 189, 248, 0.15)"
                    : "0 8px 24px rgba(0, 0, 0, 0.3)",
                transform: hoveredIdx === `dev-${idx}` ? "translateY(-8px)" : "translateY(0)",
                border: "1px solid rgba(56, 189, 248, 0.2)",
              }}
            >
              {/* Profile Image */}
              <div
                style={{
                  position: "relative",
                  width: "130px",
                  height: "130px",
                  margin: "0 auto 16px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
                  padding: "4px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={dev.profilePic}
                  alt={dev.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                    transform: hoveredIdx === `dev-${idx}` ? "scale(1.05)" : "scale(1)",
                  }}
                />
              </div>

              {/* Name */}
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#f1f5f9",
                  margin: "12px 0 6px",
                  letterSpacing: "-0.5px",
                }}
              >
                {dev.name}
              </h3>

              {/* Role */}
              <div
                style={{
                  display: "inline-block",
                  padding: "6px 16px",
                  backgroundColor: "#e0f2fe",
                  color: "#0c4a6e",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: 700,
                  marginBottom: "12px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                {dev.role}
              </div>

              {/* Email */}
              <p
                style={{
                  fontSize: "12px",
                  color: "#cbd5e1",
                  margin: "8px 0",
                  wordBreak: "break-all",
                  fontWeight: 500,
                }}
              >
                {dev.email}
              </p>

              {/* Social Links */}
              <div
                style={{
                  marginTop: "16px",
                  paddingTop: "14px",
                  borderTop: "1px solid #334155",
                  display: "flex",
                  justifyContent: "center",
                  gap: "12px",
                }}
              >
                <a
                  href={dev.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${dev.name} GitHub`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: hoveredIdx === `dev-${idx}` ? "#38bdf8" : "#2d3748",
                    color: hoveredIdx === `dev-${idx}` ? "#0f1419" : "#e0e7ff",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}
                >
                  <FaGithub style={{ fontSize: "18px" }} />
                </a>
                <a
                  href={dev.linkedInLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${dev.name} LinkedIn`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: hoveredIdx === `dev-${idx}` ? "#0ea5e9" : "#2d3748",
                    color: hoveredIdx === `dev-${idx}` ? "#0f1419" : "#e0e7ff",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}
                >
                  <FaLinkedin style={{ fontSize: "18px" }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
