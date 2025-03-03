import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';

interface Image {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  subtitle?: string;
}

// Sample image data - replace with your actual images
const images = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1734917141553-274732d788cb?q=80&w=2606&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Night Galaxy Sky',
    title: 'Night Galaxy Sky',
    subtitle: 'Space',
    description:
      'A beautiful night sky with stars and a galaxy in the background. The image is dark and moody. The stars are bright and twinkling. The galaxy is colorful and vibrant.',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1733690567161-326d5294d3bb?q=80&w=2172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Blue Mountains',
    title: 'Blue Mountains',
    subtitle: 'Nature',
    description:
      'A beautiful landscape of blue mountains. The image is serene and peaceful. The mountains are tall and majestic. The sky is clear and blue.',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1736149989327-834d28d4577b?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Blur Leaves',
    title: 'Blur Leaves',
    subtitle: 'Nature',
    description:
      'A close-up image of green leaves. The leaves are blurry and out of focus. The image is abstract and artistic. The colors are vibrant and rich.',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1738941329663-4401102e9dab?q=80&w=2090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Wall with Leaves',
    title: 'Wall with Leaves',
    subtitle: 'Architecture',
    description:
      'A wall covered with green leaves. The leaves are lush and vibrant. The image is natural and organic. The wall is textured and colorful with green leaves.',
  },
] as Image[];

export default function SharedLayoutWithTextAnimation() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="layout">
      <div className="a-content">
        <div className="top">
          <h1>Layout with text</h1>
          <Link to="/">Home</Link>
        </div>

        {/* Image grid */}
        <div className="image-grid">
          {images.map((image: Image) => (
            <motion.div
              onClick={() => setSelectedId(image.id)}
              className="image-item"
              key={image.id}
              whileHover={{ scale: 1.02 }}
              layoutId={`image-container-${image.id}`}
            >
              <motion.div
                layoutId={`image-${image.id}`}
                className="image-container"
              >
                <img src={image.src} alt={image.alt} />
              </motion.div>
              <motion.div className="image-text">
                <motion.p
                  layoutId={`subtitle-${image.id}`}
                  className="image-subtitle"
                >
                  {image.subtitle}
                </motion.p>
                <motion.h3
                  layoutId={`title-${image.id}`}
                  className="image-title"
                >
                  {image.title}
                </motion.h3>
              </motion.div>
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
              <motion.div
                className="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                layoutId={`image-container-${selectedId}`}
              >
                <motion.div className="modal-content">
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

                  <motion.div className="modal-title">
                    <motion.p
                      layoutId={`subtitle-${selectedId}`}
                      className="image-subtitle"
                    >
                      {images.find((img) => img.id === selectedId)?.subtitle}
                    </motion.p>
                    <motion.h3
                      layoutId={`title-${selectedId}`}
                      className="image-title"
                    >
                      {images.find((img) => img.id === selectedId)?.title}
                    </motion.h3>
                  </motion.div>

                  <motion.div className="modal-decription">
                    <p className="text-description">
                      {images.find((img) => img.id === selectedId)?.description}
                    </p>
                  </motion.div>
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
          <Link to="/layout" className="btn">
            <ChevronLeftIcon style={{ width: '16px' }} />
            Layout
          </Link>
          <Link to="/layout-with-cards" className="btn">
            Layout with cards
            <ChevronRightIcon style={{ width: '16px' }} />
          </Link>
        </div>

        <style>
          {`
.layout {
  max-width: 800px;
}

.image-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.image-item {
  position: relative;
  flex: 0 0 40%;
  height: 260px;
  padding: 0px;
  border-radius: 8px;
  overflow: hidden;
}

.image-item:nth-child(4n + 1),
.image-item:nth-child(4n + 4) {
  flex: 0 1 calc(60% - 16px);
}

.image-container {
  height: 260px;
  overflow: hidden;
}

.image-item img {
  width: 100%;
  height: 260px;
  object-fit: cover;
}

.image-text {
  position: absolute;
  inset: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.image-subtitle {
  font-size: 12px;
  font-weight: 500;
  color: var(--white);
  text-transform: uppercase;
}

.image-title {
  font-size: 24px;
  line-height: 1.1;
  letter-spacing: -1px;
  font-weight: 600;
  color: var(--white);
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
  width: 100%;
  max-width: 500px;
  z-index: 100;
}
  
.modal-content {
  display: flex;
  flex-direction: column;
  background: var(--dark-gray);
  border-radius: 20px;
  overflow: hidden;
}

.modal-image-container {
  position: relative;
  display: flex;
  justify-content: stretch;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  height: 420px;
  overflow: hidden;
  border-radius: 8px;
}

.modal-image-container img {
  width: 100%;
  height: 100%;
}

.modal-title {
  position: absolute;
  top: 16px;
  left: 16px;
}

.modal-decription {
  padding: 32px;
}

.text-description {
  font-size: 16px;
  color: var(--white);
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
