import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Simple() {
  return (
    <div className="simple">
      <div className="a-content">
        <div className="top">
          <h1>Simple fade in with pulse effect while hover</h1>
          <Link to="/">Go Home</Link>
        </div>

        {/* Popup animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          whileHover={{
            scale: [1, 1.1, 1],
            transition: {
              scale: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              },
            },
          }}
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'var(--orange)',
            borderRadius: '50%',
          }}
        />
        {/* End animation */}

        <div className="nav-btns">
          <Link to="/" className="btn">
            <ChevronLeftIcon style={{ width: '16px' }} />
            Home
          </Link>
          <Link to="/layout-with-cards" className="btn">
            Layout with cards
            <ChevronRightIcon style={{ width: '16px' }} />
          </Link>
        </div>
      </div>
    </div>
  );
}
