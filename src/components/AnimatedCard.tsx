import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function AnimatedCard({
  id,
  imageUrl,
  title,
  subtitle,
  description,
}: {
  id: string;
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        layoutId={`card-${id}`}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        whileHover={{ scale: 1.02 }}
        onClick={() => setIsOpen(true)}
        style={{
          position: 'relative',
          height: '300px',
          width: '100%',
          overflow: 'hidden',
          borderRadius: '20px',
        }}
      >
        <motion.div
          layoutId={`card-image-container-${id}`}
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
            layoutId={`card-image-${id}`}
            src={imageUrl}
            alt="Card image"
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          />
        </motion.div>
        <motion.div
          layoutId={`card-title-container-${id}`}
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
            layoutId={`card-subtitle-${id}`}
            style={{
              fontSize: '12px',
              color: 'white',
              textTransform: 'uppercase',
            }}
          >
            {subtitle}
          </motion.p>
          <motion.h2
            layoutId={`card-title-${id}`}
            style={{ fontSize: '24px', color: 'white' }}
          >
            {title}
          </motion.h2>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.8)',
                zIndex: 99,
                willChange: 'opacity',
              }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'fixed',
                left: '0px',
                top: '0px',
                right: '0px',
                width: '100%',
                height: '100%',
                zIndex: 100,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                overflow: 'hidden',
                pointerEvents: 'none',
              }}
            >
              <motion.div
                layoutId={`card-${id}`}
                style={{
                  position: 'relative',
                  width: 'unset',
                  height: 'unset',
                  maxWidth: '400px',
                  backgroundColor: 'black',
                  overflow: 'hidden',
                  borderRadius: '20px',
                  margin: '0 auto',
                  pointerEvents: 'none',
                }}
              >
                <motion.div
                  layoutId={`card-image-container-${id}`}
                  style={{
                    position: 'relative',
                    height: '300px',
                    overflow: 'hidden',
                  }}
                >
                  <motion.img
                    layoutId={`card-image-${id}`}
                    src={imageUrl}
                    alt="Card image"
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </motion.div>
                <motion.div
                  layoutId={`card-title-container-${id}`}
                  style={{
                    position: 'absolute',
                    top: '32px',
                    left: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <motion.p
                    layoutId={`card-subtitle-${id}`}
                    style={{
                      fontSize: '12px',
                      color: 'white',
                      textTransform: 'uppercase',
                    }}
                  >
                    {subtitle}
                  </motion.p>
                  <motion.h2
                    layoutId={`card-title-${id}`}
                    style={{ fontSize: '24px', color: 'white' }}
                  >
                    {title}
                  </motion.h2>
                </motion.div>
                <motion.div style={{ padding: '32px' }}>
                  <p style={{ color: 'white' }}>{description}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
