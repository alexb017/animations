import { Link } from 'react-router';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

enum LayoutType {
  full = 'full',
  half = 'half',
}

export default function TransformLayout() {
  const [layout, setLayout] = useState<LayoutType>(LayoutType.full);

  const handleLayoutChange = () => {
    setLayout(layout === LayoutType.full ? LayoutType.half : LayoutType.full);
  };

  const width = layout === LayoutType.full ? '100%' : 'calc(50% - 5px)';

  return (
    <div className="transforms">
      <div className="a-content">
        <div className="top">
          <h1>Transform layout</h1>
          <Link to="/">Go Home</Link>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <button className="btn btn-primary" onClick={handleLayoutChange}>
            {layout === LayoutType.full ? 'Half layout' : 'Full layout'}
          </button>

          {/* Animation */}
          <AnimatePresence>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                width: '400px',
              }}
            >
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  layout
                  transition={{
                    type: 'tween',
                    duration: 0.5,
                  }}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: `${width}`,
                    height: '200px',
                    backgroundColor: 'whitesmoke',
                    borderRadius: '10px',
                  }}
                >
                  {i + 1}
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
          {/* End animation */}
        </div>

        <div className="nav-btns">
          <Link to="/layout-with-cards" className="btn">
            <ChevronLeftIcon style={{ width: '16px' }} />
            Layout with cards
          </Link>
          <Link to="/" className="btn">
            ...
            <ChevronRightIcon style={{ width: '16px' }} />
          </Link>
        </div>
      </div>
    </div>
  );
}
