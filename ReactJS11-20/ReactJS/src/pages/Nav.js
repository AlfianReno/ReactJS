import { Link } from 'react-router-dom';
function Nav() {
  return (
    <div className="App">
      <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/Sejarah">
            <li>Sejarah</li>
          </Link>

          <Link to="/Tentang">
            <li>Tentang</li>
          </Link>

          <Link to="/Kontak">
            <li>Kontak</li>
          </Link>

          <Link to="/Siswa">
            <li>Siswa</li>
          </Link>

          <Link to="/Menu">
            <li>Menu</li>
          </Link>
      </ul>
    </div>
  );
}

export default Nav;
