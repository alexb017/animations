import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Image {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  subtitle: string;
}

export default function AnimatedCard({ images }: { images: Image[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <>
      {/* grid images */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'flex-start',
          gap: '16px',
        }}
      >
        {images.map((image: Image) => (
          <motion.div key={image.id} className="card">
            <motion.div
              layoutId={`card-${image.id}`}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedId(image.id)}
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                borderRadius: '20px',
                pointerEvents: 'auto',
                backgroundColor: 'var(--black)',
                zIndex: 1,
              }}
            >
              <motion.div
                layoutId={`card-image-container-${image.id}`}
                style={{
                  position: 'relative',
                  height: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'stretch',
                  overflow: 'hidden',
                }}
              >
                <motion.img
                  layoutId={`card-image-${image.id}`}
                  src={image.src}
                  alt="Card image"
                  style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                />
              </motion.div>
              <motion.div
                layoutId={`card-title-container-${image.id}`}
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <motion.p
                  layoutId={`card-subtitle-${image.id}`}
                  style={{
                    fontSize: '12px',
                    color: 'var(--white)',
                    textTransform: 'uppercase',
                  }}
                >
                  {image.subtitle}
                </motion.p>
                <motion.h2
                  layoutId={`card-title-${image.id}`}
                  style={{ fontSize: '24px', color: 'var(--white)' }}
                >
                  {image.title}
                </motion.h2>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <style>
        {`
          .card {
            position: relative;
            height: 300px;
            padding: 0;
            flex: 0 0 40%;
          }
          .card:nth-child(4n + 1),
          .card:nth-child(4n + 4) {
            flex: 0 1 calc(60% - 16px) !important;
          }
        `}
      </style>

      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.8)',
                zIndex: 999,
                willChange: 'opacity',
              }}
              onClick={() => setSelectedId(null)}
            />
            <motion.div
              style={{
                position: 'fixed',
                left: '0px',
                top: '0px',
                right: '0px',
                width: '100%',
                height: '100%',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                overflow: 'hidden',
                pointerEvents: 'none',
              }}
            >
              <motion.div
                layoutId={`card-${selectedId}`}
                style={{
                  position: 'relative',
                  width: 'unset',
                  height: 'unset',
                  maxWidth: '400px',
                  backgroundColor: 'var(--black)',
                  overflow: 'hidden',
                  borderRadius: '20px',
                  margin: '0 auto',
                  pointerEvents: 'none',
                }}
              >
                <motion.div
                  layoutId={`card-image-container-${selectedId}`}
                  style={{
                    position: 'relative',
                    height: '300px',
                    overflow: 'hidden',
                    zIndex: 1,
                  }}
                >
                  <motion.img
                    layoutId={`card-image-${selectedId}`}
                    src={images.find((image) => image.id === selectedId)?.src}
                    alt="Card image"
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </motion.div>
                <motion.div
                  layoutId={`card-title-container-${selectedId}`}
                  style={{
                    position: 'absolute',
                    top: '32px',
                    left: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    zIndex: 1,
                  }}
                >
                  <motion.p
                    layoutId={`card-subtitle-${selectedId}`}
                    style={{
                      fontSize: '12px',
                      color: 'var(--white)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {images.find((image) => image.id === selectedId)?.subtitle}
                  </motion.p>
                  <motion.h2
                    layoutId={`card-title-${selectedId}`}
                    style={{ fontSize: '24px', color: 'var(--white)' }}
                  >
                    {images.find((image) => image.id === selectedId)?.title}
                  </motion.h2>
                </motion.div>
                <motion.div style={{ padding: '32px' }}>
                  <p style={{ color: 'var(--white)' }}>
                    {
                      images.find((image) => image.id === selectedId)
                        ?.description
                    }
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
