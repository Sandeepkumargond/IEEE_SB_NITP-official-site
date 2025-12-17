'use client';
import React, { useMemo, useState } from 'react';
import Navbar from '../Navbar';

const MEMBERS = [
  { id: 'suryansh-verma', name: 'Suryansh Verma', dept: 'Electrical Engineering Department', photo: '/img1.jpeg', linkedin: 'https://www.linkedin.com/in/suryansh-verma' },
  { id: 'aditya-raj', name: 'Aditya Raj', dept: 'Computer Science Department', photo: '/img1.jpeg', linkedin: 'https://www.linkedin.com/in/aditya-raj' },
  { id: 'manu-gupta', name: 'Manu Gupta', dept: 'Computer Science Department', photo: '/img1.jpeg', linkedin: 'https://www.linkedin.com/in/manu-gupta' },
  { id: 'rutbaosh-pandey', name: 'Rutbaosh Pandey', dept: 'Civil Engineering Department', photo: '/img1.jpeg', linkedin: 'https://www.linkedin.com/in/rutbaosh-pandey' },
  { id: 'anshu-kant', name: 'Anshu Kant', dept: 'Computer Science Department', photo: '/img1.jpeg', linkedin: 'https://www.linkedin.com/in/anshu-kant' },
  { id: 'anshu-manoj-mahato', name: 'Anshu Manoj Mahato', dept: 'Computer Science Department', photo: '/img1.jpeg', linkedin: 'https://www.linkedin.com/in/anshu-manoj-mahato' },
  { id: 'harshit-verma', name: 'Harshit Verma', dept: '', photo: '/img1.jpeg', linkedin: 'https://www.linkedin.com/in/harshit-verma' },
  { id: 'vasu-chouhan', name: 'Vasu Chouhan', dept: '', photo: '/img1.jpeg', linkedin: 'https://www.linkedin.com/in/vasu-chouhan' }
];

export default function AI() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return MEMBERS;
    return MEMBERS.filter(m => (m.name + ' ' + (m.dept || '')).toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      <Navbar />

      <main
        style={{
          '--accent': '#4f46e5',
          position: 'relative',
          minHeight: '100vh',
          color: '#000',
          overflow: 'hidden',
          paddingTop: 88,
          paddingBottom: 80,
          background: 'transparent',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        }}
        aria-labelledby="team-heading"
      >
        <img
          src="/mobile-vector-1.svg"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            minWidth: '220%',
            minHeight: '220%',
            width: 'auto',
            height: 'auto',
            transform: 'translate(-50%, -50%) rotate(-3.5deg) scale(1.01)',
            transformOrigin: '50% 50%',
            zIndex: 0,
            pointerEvents: 'none',
            display: 'block'
          }}
        />

        <div
          style={{
            position: 'absolute',
            right: '-20%',
            top: '-10%',
            width: '60%',
            height: '140%',
            transform: 'rotate(-10deg)',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0))',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />

        <section style={{ position: 'relative', zIndex: 1, padding: '24px 20px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
              <div>
                <h2 id="team-heading" style={{ margin: 0, fontSize: 34, fontWeight: 800, color: '#0b1220' }}>
                  Web-Dev Team Members
                </h2>
                <p style={{ margin: '6px 0 0', color: '#1f2937', opacity: 0.9 }}>
                  Developers and contributors across departments
                </p>
              </div>

              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <input
                  aria-label="Search members"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search members or department"
                  style={{
                    padding: '10px 12px',
                    minWidth: 220,
                    borderRadius: 10,
                    border: '1px solid rgba(15,15,15,0.08)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)',
                    outline: 'none'
                  }}
                />
                <button
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  style={{
                    padding: '10px 14px',
                    borderRadius: 10,
                    border: 'none',
                    background: 'linear-gradient(90deg,var(--accent),#06b6d4)',
                    color: '#fff',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 6px 18px rgba(79,70,229,0.18)'
                  }}
                >
                  Clear
                </button>
              </div>
            </div>

            <div
              className="cards-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 20,
                alignItems: 'stretch'
              }}
            >
              {filtered.map((member, idx) => (
                <article
                  key={member.id}
                  aria-labelledby={`${member.id}-name`}
                  className="member-card"
                  style={{
                    backgroundImage: 'url("/mobile-vector-2.svg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: 14,
                    padding: 18,
                    boxShadow: '0 8px 26px rgba(2,6,23,0.06)',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 220ms cubic-bezier(.2,.9,.2,1), box-shadow 220ms',
                    transformOrigin: 'center',
                    cursor: 'pointer',
                    animation: `fadeUp 420ms ease ${idx * 30}ms both`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 48px rgba(2,6,23,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = '0 8px 26px rgba(2,6,23,0.06)';
                  }}
                >
                  <div className="member-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                    <div style={{
                      width: 128,
                      height: 128,
                      borderRadius: 14,
                      padding: 6,
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.75))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 12px',
                      flexShrink: 0
                    }}>
                      <img
                        src={member.photo}
                        alt={member.name}
                        loading="lazy"
                        width={116}
                        height={116}
                        style={{
                          width: 116,
                          height: 116,
                          borderRadius: 10,
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                    </div>

                    <div style={{ padding: '0 10px', flexGrow: 1 }}>
                      <h3 id={`${member.id}-name`} style={{ margin: '6px 0 6px', fontSize: 16, fontWeight: 800, color: '#071126' }}>
                        {member.name}
                      </h3>

                      <p style={{ margin: 0, fontSize: 13, color: '#0b1220', opacity: 0.85 }}>
                        {member.dept || 'Department not listed'}
                      </p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 12 }}>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: '8px 12px',
                          borderRadius: 8,
                          background: 'rgba(255,255,255,0.92)',
                          color: '#0b1220',
                          fontWeight: 700,
                          textDecoration: 'none',
                          boxShadow: '0 6px 18px rgba(2,6,23,0.06)'
                        }}
                      >
                        Message
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filtered.length === 0 && (
              <p style={{ marginTop: 22, textAlign: 'center', color: '#374151' }}>
                No matching members found.
              </p>
            )}
          </div>
        </section>
      </main>

      

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px) scale(0.995); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Make all cards equal height and keep internal layout balanced */
        .cards-grid { align-items: stretch; }
        .member-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 360px; /* fixed visual height for equal sizing */
        }

        /* Make height responsive on smaller screens */
        @media (max-width: 520px) {
          .member-card { height: auto; min-height: 360px; }
        }

        /* Keep inner content vertically spaced */
        .member-card .member-inner { height: 100%; display: flex; flex-direction: column; justify-content: space-between; }
      `}</style>
    </>
  );
}