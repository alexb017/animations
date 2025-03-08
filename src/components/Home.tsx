import { Link } from 'react-router';

export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Animations</h1>
        <div className="list">
          <Link to="/simple" className="link">
            Simple fade in with pulse effect while hover
          </Link>
          <Link to="/layout-with-cards" className="link">
            Layout with cards
          </Link>
          <Link to="/layout-transform" className="link">
            Layout transform
          </Link>
          <Link to="/menu-transition" className="link">
            Menu transition
          </Link>
        </div>
      </div>
    </div>
  );
}
