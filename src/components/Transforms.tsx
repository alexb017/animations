import { Link } from 'react-router';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'motion/react';

export default function Transforms() {
  return (
    <div className="transforms">
      <div className="a-content">
        <div className="top">
          <h1>Transform rotate 360</h1>
          <Link to="/">Go Home</Link>
        </div>

        {/* Rotate animation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1 }}
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'var(--orange)',
            borderRadius: '10px',
          }}
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
