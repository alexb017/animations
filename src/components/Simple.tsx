import { Link } from 'react-router';
import * as motion from 'motion/react-client';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Simple() {
  return (
    <div className="simple">
      <div className="a-content">
        <div className="top">
          <h1>Simple (popup)</h1>
          <Link to="/">Home</Link>
        </div>
        {/* Popup animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
          }}
          style={ball}
        />
        {/* End animation */}
        <div className="nav-btns">
          <Link to="/" className="btn">
            <ChevronLeftIcon style={{ width: '16px' }} />
            Home
          </Link>
          <Link to="/transforms" className="btn">
            Transforms
            <ChevronRightIcon style={{ width: '16px' }} />
          </Link>
        </div>
      </div>
    </div>
  );
}

// Styles for the ball
const ball = {
  width: 100,
  height: 100,
  background: '#dd00ee',
  borderRadius: '50%',
};
