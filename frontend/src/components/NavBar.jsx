import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="topbar">
      <Link to="/">Dashboard</Link>
      <Link to="/asteroids">Asteroids</Link>
    </nav>
  );
}
