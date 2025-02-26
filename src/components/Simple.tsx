import { Link } from 'react-router';
import * as motion from 'motion/react-client';

export default function Simple() {
  return (
    <div className="simple">
      <div className="a-content">
        <h1>Simple</h1>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
          }}
          style={ball}
        />
        <div className="nav-btns">
          <Link to="/" className="btn">
            Home
          </Link>
          <Link to="/a2" className="btn">
            Transforms
          </Link>
        </div>
      </div>
    </div>
  );
}

const ball = {
  width: 100,
  height: 100,
  background: '#dd00ee',
  borderRadius: '50%',
};
