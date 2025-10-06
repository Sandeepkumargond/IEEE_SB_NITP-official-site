import Card from '../components/BlogCard';

export default function Home() {
  const cards = [
    {
      title: 'CRISPR-Cas9',
      description: 'Human body has been under constant surveillance si',
      details:
        'Human body has been under constant surveillance since ages with various breakthroughs in gene editing and biotechnology using CRISPR-Cas9 technology.',
      date: '2020-10-15',
    },
    {
      title: 'AI Chips : A Step Forward...',
      description: 'We can keep all the arguments and discussions asid',
      details:
        'AI chips keep improving the argument and discussions aside, becoming the backbone for cutting-edge technologies in machine learning and neural networks.',
      date: '2020-01-19',
    },
    {
      title: 'Wireless Electricity...',
      description: 'sample',
      details:
        'Sample detailed content on the future of wireless electricity transmission technology.',
      date: '2020-10-15',
    },
  ];

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Rotated page background image */}
      <img
        src="/mobile-vector-1.svg"
        alt="Background"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 'auto',
          height: '150%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%) rotate(90deg)',
          transformOrigin: 'center',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />

      {/* Page content */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <header
          style={{
            backgroundColor: '#195289',
            color: 'white',
            width: '100%',
            padding: '25px 80px',
            fontFamily: 'Arial, sans-serif',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src="/logo.svg" alt="IEEE Logo" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
            <div>
              <div style={{ fontSize: 18, fontWeight: 'bold' }}>IEEE | NITP</div>
              <div style={{ fontSize: 14 }}>Student Branch</div>
            </div>
          </div>

          <nav style={{ display: 'flex', gap: '25px', fontSize: 14 }}>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Committee</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Events</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>E-Certificate</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Blogs</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Gallery</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Join IEEE</a>
          </nav>
        </header>

        <div
          style={{
            height: '150px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: '80px',
          }}
        >
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Search..."
              style={{
                width: '400px',
                height: '55px',
                borderRadius: '10px',
                border: '1px solid #ccc',
                padding: '0 15px',
                fontSize: '15px',
                backgroundColor: 'white',
                color: '#000',
                boxSizing: 'border-box',
                boxShadow: '2px 2px 6px rgba(0,0,0,0.2)',
              }}
            />
            <div
              style={{
                height: '55px',
                width: '55px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #80D1F9, #BCE5FB, #F0F9FF)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 6px rgba(0,0,0,0.1)',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            padding: '40px 0',
            flexWrap: 'wrap',
          }}
        >
          {cards.map(({ title, description, details, date }, idx) => (
            <div
              key={idx}
              style={{
                width: '415px',
                height: '375px',
                backgroundColor: 'transparent',
                display: 'block',
                overflow: 'hidden',
              }}
            >
              {/* Top blue strip */}
              <div
                style={{
                  height: '70px',
                  width: '100%',
                  backgroundColor: '#195289',
                  borderTopLeftRadius: '50px',
                  borderTopRightRadius: '50px',
                }}
              />
{/* Card body (absolute background layer + overlay + content) */}
<div
  style={{
    height: '305px',
    width: '100%',
    position: 'relative',
    borderBottomLeftRadius: '50px',
    borderBottomRightRadius: '50px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'stretch',
  }}
>
  {/* 1) Absolute background layer (fills card) */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      backgroundImage: 'url("/mobile-vector-2.svg")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      pointerEvents: 'none',
      transform: 'translateZ(0)',
    }}
  />

  {/* 2) Optional overlay for readability (lower opacity if it hides SVG) */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      backgroundColor: 'rgba(255,255,255,0.45)',
      pointerEvents: 'none',
    }}
  />

  {/* 3) Content wrapper above background and overlay */}
  <div style={{ position: 'relative', zIndex: 2, width: '100%', padding: '18px 20px', boxSizing: 'border-box' }}>
    <Card title={title} description={description} details={details} date={date} background="transparent" />
  </div>
</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer
          style={{
            backgroundColor: '#195289',
            color: 'white',
            width: '100%',
            padding: '40px 80px 20px',
            fontFamily: 'Arial, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div style={{ lineHeight: '1.6' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <img src="/logo.svg" alt="IEEE Logo" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                <div>
                  <div style={{ fontSize: 16, fontWeight: 'bold' }}>IEEE | NITP</div>
                  <div style={{ fontSize: 14 }}>Student Branch</div>
                </div>
              </div>
              <div style={{ fontSize: 13, marginTop: 10, maxWidth: '300px' }}>
                National Institute of Technology Patna, Bihar (800005), India
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '25px', fontSize: 13 }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About IEEE</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>IEEE Renew</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>IEEE Xplore</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>IEEE Membership</a>
              </div>
              <div style={{ display: 'flex', gap: '25px', fontSize: 13 }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Old Website</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</a>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Projects</a>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
            <a href="#" style={{ color: 'white' }} aria-label="GitHub"><i className="fab fa-github" style={{ fontSize: 20 }} /></a>
            <a href="#" style={{ color: 'white' }} aria-label="Facebook"><i className="fab fa-facebook" style={{ fontSize: 20 }} /></a>
            <a href="#" style={{ color: 'white' }} aria-label="Instagram"><i className="fab fa-instagram" style={{ fontSize: 20 }} /></a>
            <a href="#" style={{ color: 'white' }} aria-label="LinkedIn"><i className="fab fa-linkedin" style={{ fontSize: 20 }} /></a>
          </div>

          <div style={{ textAlign: 'center', fontSize: 12, marginTop: '20px' }}>
            © 2024 IEEE SB NITP. All Rights Reserved.
          </div>
        </footer>
      </div>
    </div>



  );
}