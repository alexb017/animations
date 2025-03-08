'use client';

import * as motion from 'motion/react-client';
import { Variants } from 'motion/react';
import { Link } from 'react-router';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function MenuTransition() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu">
      <div className="a-content">
        <div className="top">
          <h1>Menu Transition</h1>
          <Link to="/">Go Home</Link>
        </div>

        {/* Animation */}
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          style={nav}
        >
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
          <Navigation />
        </motion.nav>
        {/* Animation */}

        <div className="nav-btns">
          <Link to="/layout-transform" className="btn">
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

const nav: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 20,
};

const navList = ['Home', 'About', 'Services', 'Contact'];

const Navigation = () => (
  <motion.ul
    style={list}
    variants={{
      closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
      },
      open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
      },
    }}
  >
    {navList.map((nav, i) => (
      <motion.li
        key={i}
        style={listItem}
        whileHover={{ scale: 1.1 }}
        variants={{
          closed: {
            x: -20,
            opacity: 0,
            transition: {
              x: { stiffness: 1000 },
            },
          },
          open: {
            x: 0,
            opacity: 1,
            transition: {
              x: { stiffness: 1000, velocity: -100 },
            },
          },
        }}
      >
        {nav}
      </motion.li>
    ))}
  </motion.ul>
);

const list: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  gap: 20,
};

const listItem: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  letterSpacing: -0.5,
  fontSize: 16,
  cursor: 'pointer',
};

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button style={toggleContainer} onClick={toggle}>
    <svg width="24" height="24" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);

const toggleContainer: React.CSSProperties = {
  outline: 'none',
  border: 'none',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  cursor: 'pointer',
  width: 24,
  height: 24,
  background: 'transparent',
};
