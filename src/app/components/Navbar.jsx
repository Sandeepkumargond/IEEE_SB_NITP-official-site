export default function Navbar() {
  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between',
      padding: '10px 30px', backgroundColor: '#264b87',
      color: 'white', alignItems: 'center'
    }}>
      <div style={{fontWeight: 'bold', fontSize: 18}}>IEEE NITP STUDENT BRANCH</div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: 20, margin: 0, padding: 0, fontSize: 14 }}>
        {['About', 'Committee', 'Events', 'E-Certificate', 'Blogs', 'Gallery', 'Join IEEE', 'Admin'].map(item => (
          <li key={item} style={{cursor: 'pointer'}}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}