import { Link } from 'react-router';

export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Animations</h1>
        <div className="list">
          <Link to="/simple" className="link">
            Simple
          </Link>
          <Link to="/a2" className="link">
            Transforms
          </Link>
          <Link to="/a3" className="link">
            Springs
          </Link>
          <Link to="/a4" className="link">
            Exit animations
          </Link>
          <Link to="/a5" className="link">
            Layout animations
          </Link>
          <Link to="/a6" className="link">
            Gestures
          </Link>
          <Link to="/a7" className="link">
            Timeline
          </Link>
        </div>
      </div>
    </div>
  );
}
