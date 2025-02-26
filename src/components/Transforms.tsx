import { Link } from 'react-router';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import * as motion from 'motion/react-client';

export default function Transforms() {
  return (
    <div className="transforms">
      <div className="a-content">
        <div className="top">
          <h1>Transform (rotate)</h1>
          <Link to="/">Home</Link>
        </div>
        {/* Rotate animation */}
        <motion.div
          style={box}
          animate={{ rotate: 360 }}
          transition={{ duration: 1 }}
        />
        {/* End animation */}
        <div className="nav-btns">
          <Link to="/simple" className="btn">
            <ChevronLeftIcon style={{ width: '16px' }} />
            Simple
          </Link>
          <Link to="/springs" className="btn">
            Springs
            <ChevronRightIcon style={{ width: '16px' }} />
          </Link>
        </div>
      </div>
    </div>
  );
}

// Styles for the box
const box = {
  width: 100,
  height: 100,
  background: '#ff0088',
  borderRadius: 5,
};
