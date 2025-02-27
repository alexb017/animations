import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { useState } from 'react';
import { Link } from 'react-router';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function ExitAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="exit-animation">
      <div className="a-content">
        <div className="top">
          <h1>Exit animation</h1>
          <Link to="/">Home</Link>
        </div>
        {/* Exit animation */}
        <div style={container}>
          <AnimatePresence initial={false}>
            {isVisible ? (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                style={box}
                key="box"
              />
            ) : null}
          </AnimatePresence>
          <motion.button
            style={button}
            onClick={() => setIsVisible(!isVisible)}
            whileTap={{ y: 1 }}
          >
            {isVisible ? 'Hide' : 'Show'}
          </motion.button>
        </div>
        {/* End animation */}
        <div className="nav-btns">
          <Link to="/springs" className="btn">
            <ChevronLeftIcon style={{ width: '16px' }} />
            Springs
          </Link>
          <Link to="/layout" className="btn">
            Layout
            <ChevronRightIcon style={{ width: '16px' }} />
          </Link>
        </div>
      </div>
    </div>
  );
}

// Styles for the container

const container: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: 100,
  height: 160,
  position: 'relative',
};

const box: React.CSSProperties = {
  width: 100,
  height: 100,
  backgroundColor: '#0cdcf7',
  borderRadius: '10px',
};

const button: React.CSSProperties = {
  backgroundColor: '#0cdcf7',
  borderRadius: '10px',
  padding: '10px 20px',
  color: '#0f1115',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
};
