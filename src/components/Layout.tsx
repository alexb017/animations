import { useState } from 'react';
import * as motion from 'motion/react-client';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { AnimatePresence } from 'motion/react';
import { Link } from 'react-router';

interface Image {
  id: string;
  src: string;
  alt: string;
}

// Sample image data - replace with your actual images
const images = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1734917141553-274732d788cb?q=80&w=2606&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 1',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1733690567161-326d5294d3bb?q=80&w=2172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 2',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1736149989327-834d28d4577b?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 3',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1738941329663-4401102e9dab?q=80&w=2090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 4',
  },
] as Image[];

export default function SharedLayoutAnimation() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="layout">
      <div className="a-content">
        <div className="top">
          <h1>Shared Layout Animation</h1>
          <Link to="/">Home</Link>
        </div>

        {/* Image grid */}
        <div className="image-grid">
          {images.map((image: Image) => (
            <motion.div
              layoutId={`image-${image.id}`}
              onClick={() => setSelectedId(image.id)}
              className="image-item"
              key={image.id}
              whileHover={{ scale: 1.02 }}
            >
              <img src={image.src} alt={image.alt} />
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div
                className="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
              ></motion.div>
              <motion.div className="modal">
                <motion.div
                  layoutId={`image-${selectedId}`}
                  className="modal-image-container"
                >
                  {(() => {
                    const selectedImage = images.find(
                      (img) => img.id === selectedId
                    );
                    return selectedImage ? (
                      <img src={selectedImage.src} alt={selectedImage.alt} />
                    ) : null;
                  })()}
                </motion.div>

                {/* <motion.button
              className="close-button"
              onClick={() => setSelectedId(null)}
              whileHover={{ scale: 1.1 }}
            >
              <XMarkIcon style={{ width: '16px', height: '16px' }} />
            </motion.button> */}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div className="nav-btns">
          <Link to="/transforms" className="btn">
            <ChevronLeftIcon style={{ width: '16px' }} />
            Transforms
          </Link>
          <Link to="/layout-with-text" className="btn">
            Layout with text
            <ChevronRightIcon style={{ width: '16px' }} />
          </Link>
        </div>

        <style>
          {`
.layout {
  max-width: 600px;
}

.image-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.image-item {
  position: relative;
  flex: 0 0 40%;
  height: 200px;
  padding: 0px;
  border-radius: 8px;
  overflow: hidden;
}

.image-item:nth-child(4n + 1),
.image-item:nth-child(4n + 4) {
  flex: 0 1 calc(60% - 16px);
}

.image-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99;
  will-change: opacity;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}

.modal-image-container {
  max-width: 50vw;
  max-height: 50vh;
  overflow: hidden;
  border-radius: 8px;
}

.modal-image-container img {
  max-width: 100%;
  max-height: 50vh;
  display: block;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
            `}
        </style>
      </div>
    </div>
  );
}
