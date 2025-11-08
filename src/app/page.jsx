import React from "react";

export default function Home() {
  return (
    <div style={{ padding: "2rem", maxWidth: 820, margin: "0 auto", fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial" }}>
      <h1>IEEE SB NITP — Quick Start</h1>

      <ul>
        <li>Prerequisites: Node.js (&gt;=14) and npm or yarn.</li>
        <li>Install: <code>npm install</code></li>
        <li>Run dev server: <code>npm run dev</code> → open <code>http://localhost:3000</code></li>
      </ul>

      <p>
        Contribute by forking, creating a feature branch, and opening a PR. See <code>Contribution-guide.md</code>
        for details.
      </p>

      <p>Questions? Open an issue or mention maintainers in your PR.</p>
    </div>
  );
}