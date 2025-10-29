'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './components/Navbar';
import Footer from '../components/Footer';

const DOMAINS = [
  { key: 'web-dev', name: 'Web Dev', image: '/web.jpg', teams: [{ key: 'web-dev', name: 'Web Dev' }] },
  { key: 'ai', name: 'AI-ML', image: '/ai.jpeg', teams: [{ key: 'ai', name: 'AI-ML' }] },
  { key: 'blockchain', name: 'Blockchain Team', image: '/blockchain.jpg', teams: [{ key: 'blockchain', name: 'Blockchain' }] },
  { key: 'kotlin-team', name: 'Kotlin Team', image: '/kotlin.jpeg', teams: [{ key: 'kotlin', name: 'Kotlin' }] },
  { key: 'flutter-team', name: 'Flutter Team', image: '/flutter.jpeg', teams: [{ key: 'flutter', name: 'Flutter' }] },
 
  { key: 'uiux', name: 'UI UX', image: '/ui.jpeg', teams: [{ key: 'uiux', name: 'UI/UX' }] }
];

function chunkArray(arr, size) {
  const res = [];
  for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size));
  return res;
}

export default function Home() {
  const router = useRouter();
  const rows = chunkArray(DOMAINS, 3);
  const [openDomain, setOpenDomain] = useState(null);

  function handleDomainClick(domainKey) {
    const domain = DOMAINS.find(d => d.key === domainKey);
    if (domain && domain.teams && domain.teams.length > 0) {
      router.push(`/teams/${domain.teams[0].key}`);
      return;
    }
    router.push(`/teams/${domainKey}`);
  }

  function handleTeamClick(domainKey, teamKey, e) {
    e.stopPropagation();
    router.push(`/teams/${teamKey}`);
  }

  return (
    <>
      <Navbar />

      <main
        style={{
          padding: 48,
          paddingTop: 120,
          backgroundColor: 'transparent',
          color: '#000',
          minHeight: '100vh',
          width: '100%',
          fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <img
          src="/mobile-vector-1.svg"
          alt="page background"
          style={{
            position: 'absolute',
            zIndex: 0,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%) rotate(-90deg)',
            transformOrigin: 'center center',
            width: '170vh',
            height: 'auto',
            pointerEvents: 'none',
            userSelect: 'none'
          }}
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />

        <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 1200, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
          <h1 style={{ margin: '0 0 36px', fontSize: 68, color: 'black', fontWeight: 900, textAlign: 'center', letterSpacing: '-0.02em' }}>
            Domains
          </h1>

          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 28 }}>
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center', gap: 28, flexWrap: 'wrap' }}>
                {row.map(d => (
                  <div
                    key={d.key}
                    data-domain={d.key}
                    role="button"
                    tabIndex={0}
                    onClick={() => handleDomainClick(d.key)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleDomainClick(d.key); } }}
                    style={{
                      width: 340,
                      height: 300,               // card height increased to fit larger image + name area
                      borderRadius: 16,
                      padding: 0,
                      backgroundImage: `url("/mobile-vector-2.svg")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'top center',
                      backgroundSize: 'cover',
                      border: '2px solid rgba(0,0,0,0.25)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
                      color: '#000',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'stretch',
                      gap: 0,
                      boxSizing: 'border-box',
                      cursor: 'pointer',
                      userSelect: 'none',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <div style={{ width: '100%', display: 'block' }}>
                      <img
                        src={d.image}
                        alt={d.name}
                        style={{
                          width: '100%',           // matches card width exactly
                          height: 225,            // increased image height
                          objectFit: 'cover',     // preserves aspect ratio, crops as needed
                          objectPosition: 'top center', // show top of the image
                          display: 'block'
                        }}
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>

                    <div style={{ padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 8, background: 'transparent' }}>
                      <div style={{ fontWeight: 900, fontSize: 30, textAlign: 'center', color: '#000' }}>
                        {d.teams && d.teams.length === 1 ? d.teams[0].name : d.name}
                      </div>

                      {d.teams && d.teams.length > 1 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                          {d.teams.map(t => (
                            <div
                              key={t.key}
                              role="button"
                              tabIndex={0}
                              onClick={(e) => handleTeamClick(d.key, t.key, e)}
                              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.stopPropagation(); handleTeamClick(d.key, t.key, e); } }}
                              style={{
                                width: '100%',
                                padding: '8px 10px',
                                borderRadius: 8,
                                background: 'rgba(255,255,255,0.95)',
                                color: '#000',
                                justifyContent: 'flex-start',
                                cursor: 'pointer',
                                boxSizing: 'border-box',
                                fontWeight: 700,
                                border: '1px solid rgba(0,0,0,0.08)'
                              }}
                            >
                              {t.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}