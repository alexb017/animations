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
          <Link to="/transforms" className="link">
            Transforms
          </Link>
          <Link to="/springs" className="link">
            Springs
          </Link>
          <Link to="/exit-animation" className="link">
            Exit animations
          </Link>
          <Link to="/layout" className="link">
            Layout animations
          </Link>
          <Link to="/layout-with-text" className="link">
            Layout with text
          </Link>
          <Link to="/layout-with-cards" className="link">
            Layout with cards
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
