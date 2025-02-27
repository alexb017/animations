import { spring } from 'motion';
import { useState } from 'react';
import { Link } from 'react-router';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Springs() {
  const [state, setState] = useState(false);

  return (
    <div className="springs">
      <div className="a-content">
        <div className="top">
          <h1>CSS Springs</h1>
          <Link to="/">Home</Link>
        </div>
        {/* Spring animation */}
        <div className="spring-animation">
          <div className="box" data-state={state} />
          <button onClick={() => setState(!state)}>Toggle</button>
        </div>
        {/* End animation */}
        <div className="nav-btns">
          <Link to="/transforms" className="btn">
            <ChevronLeftIcon style={{ width: '16px' }} />
            Transforms
          </Link>
          <Link to="/exit-animation" className="btn">
            Exit animations
            <ChevronRightIcon style={{ width: '16px' }} />
          </Link>
        </div>
      </div>

      <style>
        {`
                    .springs {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 20px;
                    }

                    .springs .box {
                        width: 100px;
                        height: 100px;
                        background-color: #4ff0b7;
                        border-radius: 10px;
                        transition: transform ${spring(0.5, 0.8)};
                        transform: translateX(-100%);
                    }

                    .springs .box[data-state="true"] {
                        transform: translateX(100%) rotate(180deg);
                    }

                    .springs button {
                        background-color: #4ff0b7;
                        color: #0f1115;
                        border-radius: 5px;
                        padding: 10px;
                        margin: 10px;
                    }
                `}
      </style>
    </div>
  );
}
