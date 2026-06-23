import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LetterBox({ onBack, onComplete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBroken, setIsBroken] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsBroken(true); // Crack the seal
    setTimeout(() => {
      setIsOpen(true); // Open envelope
    }, 600);
  };

  const handleReturn = () => {
    onComplete(); // Mark completed
    onBack(); // Go back
  };

  return (
    <div className="letter-box-container">
      <style>{`
        .letter-box-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 700px;
          min-height: 80vh;
          position: relative;
          z-index: 10;
        }

        .back-link {
          align-self: flex-start;
          font-family: var(--font-hand);
          font-size: 20px;
          color: #E8F2EF;
          opacity: 0.8;
          cursor: pointer;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 30px;
          transition: all 0.2s ease;
          text-shadow: 0 1px 3px rgba(30, 62, 62, 0.15);
        }

        .back-link:hover {
          opacity: 1;
          color: #FFFFFF;
          transform: translateX(-3px);
        }

        .letter-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .letter-intro-hint {
          font-family: var(--font-hand);
          font-size: 24px;
          color: #EAD575; /* Soft metallic gold */
          font-weight: bold;
          margin-bottom: 6px;
          text-shadow: 0 1px 3px rgba(30, 62, 62, 0.2);
        }

        .letter-title {
          font-family: var(--font-serif);
          font-size: 44px;
          font-weight: 400;
          color: #FFFFFF; /* High contrast white */
          text-shadow: 0 2px 10px rgba(30, 62, 62, 0.25);
        }

        /* 3D Envelope Container */
        .envelope-wrapper {
          position: relative;
          width: 440px;
          height: 280px;
          background: rgba(255, 255, 255, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 12px;
          box-shadow: 0 16px 36px rgba(111, 184, 184, 0.08);
          perspective: 1000px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .envelope-wrapper:hover {
          transform: translateY(-4px);
        }

        /* Front/Back paper folds of envelope */
        .envelope-body {
          position: absolute;
          inset: 0;
          border-radius: 12px;
          overflow: hidden;
          z-index: 1;
        }

        /* Bottom triangle fold */
        .envelope-fold-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 0;
          border-left: 220px solid transparent;
          border-right: 220px solid transparent;
          border-bottom: 150px solid rgba(232, 242, 239, 0.85);
          z-index: 3;
        }

        /* Left/Right side folds */
        .envelope-fold-left {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-top: 140px solid transparent;
          border-bottom: 140px solid transparent;
          border-left: 230px solid rgba(207, 232, 225, 0.5);
          z-index: 2;
        }

        .envelope-fold-right {
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          height: 0;
          border-top: 140px solid transparent;
          border-bottom: 140px solid transparent;
          border-right: 230px solid rgba(207, 232, 225, 0.55);
          z-index: 2;
        }

        /* Flap */
        .envelope-flap {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-left: 220px solid transparent;
          border-right: 220px solid transparent;
          border-top: 150px solid rgba(232, 242, 239, 0.95);
          transform-origin: top center;
          z-index: 4;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .envelope-flap.open {
          transform: rotateX(180deg);
          z-index: 1;
        }

        /* Wax Seal Styling */
        .wax-seal {
          position: absolute;
          top: calc(50% - 30px);
          left: calc(50% - 30px);
          width: 60px;
          height: 60px;
          background: var(--mint-blue);
          border-radius: 50%;
          border: 2px dashed rgba(255,255,255,0.4);
          box-shadow: 0 4px 10px rgba(111, 184, 184, 0.3);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          font-family: var(--font-serif);
          font-size: 26px;
          font-weight: bold;
          user-select: none;
          transition: all 0.3s ease;
        }

        .wax-seal:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 14px rgba(111, 184, 184, 0.4);
        }

        .wax-seal.cracked {
          animation: breakSeal 0.6s forwards ease;
        }

        @keyframes breakSeal {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1) rotate(5deg); opacity: 0.8; }
          100% { transform: scale(0.6) rotate(-10deg); opacity: 0; filter: blur(4px); }
        }

        .tap-prompt {
          font-family: var(--font-hand);
          font-size: 22px;
          color: var(--mint-blue);
          margin-top: 24px;
          text-align: center;
        }

        /* Sliding Letter Paper */
        .letter-paper {
          width: 100%;
          max-width: 500px;
          background: #D9EFE9; /* custom light mint */
          background-image: 
            linear-gradient(rgba(111, 184, 184, 0.15) 1px, transparent 1px);
          background-size: 100% 28px;
          border-radius: 16px;
          padding: 40px 35px;
          box-shadow: 0 16px 40px rgba(49, 68, 74, 0.15);
          position: relative;
          z-index: 12;
          border: 1px solid rgba(255, 255, 255, 0.4);
          overflow: hidden;
        }

        .letter-content {
          font-family: var(--font-hand);
          font-size: 23px;
          line-height: 28px;
          color: var(--text);
          text-align: left;
        }

        .letter-salutation {
          margin-bottom: 24px;
          color: var(--text);
        }

        .letter-paragraph {
          margin-bottom: 28px;
          text-indent: 15px;
        }

        .letter-signoff {
          text-align: right;
          margin-top: 36px;
          color: var(--text);
        }

        .return-btn-container {
          margin-top: 36px;
          display: flex;
          justify-content: center;
        }

        .return-btn {
          background-color: var(--mint-blue);
          color: var(--white);
          font-family: var(--font-serif);
          font-size: 14px;
          letter-spacing: 1px;
          padding: 12px 30px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(111, 184, 184, 0.2);
          transition: all 0.3s ease;
        }

        .return-btn:hover {
          background-color: #5AA1A1;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(111, 184, 184, 0.3);
        }

        /* Falling letter petals */
        .letter-petal {
          position: absolute;
          width: 8px;
          height: 12px;
          background: rgba(255,255,255,0.7);
          border-radius: 50% 0 50% 50%;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .letter-title {
            font-size: 34px;
          }
        }

        @media (max-width: 480px) {
          .letter-title {
            font-size: 28px;
          }
          .back-link {
            font-size: 18px;
            margin-bottom: 20px;
          }
          .envelope-wrapper {
            width: 290px;
            height: 180px;
          }
          .envelope-fold-bottom {
            border-left-width: 145px;
            border-right-width: 145px;
            border-bottom-width: 100px;
          }
          .envelope-fold-left {
            border-top-width: 90px;
            border-bottom-width: 90px;
            border-left-width: 155px;
          }
          .envelope-fold-right {
            border-top-width: 90px;
            border-bottom-width: 90px;
            border-right-width: 155px;
          }
          .envelope-flap {
            border-left-width: 145px;
            border-right-width: 145px;
            border-top-width: 100px;
          }
          .wax-seal {
            width: 45px;
            height: 45px;
            font-size: 20px;
          }
          .letter-paper {
            padding: 24px 16px;
          }
          .letter-content {
            font-size: 17px;
            line-height: 22px;
          }
          .letter-salutation {
            margin-bottom: 14px;
          }
          .letter-paragraph {
            margin-bottom: 16px;
            text-indent: 10px;
          }
          .letter-signoff {
            margin-top: 20px;
          }
          .return-btn-container {
            margin-top: 20px;
          }
          .return-btn {
            font-size: 12px;
            padding: 10px 22px;
            letter-spacing: 0.5px;
          }
        }
      `}</style>

      {/* Back button */}
      <button className="back-link" onClick={onBack}>
        ← back to the boxes
      </button>

      {/* Header */}
      <div className="letter-header">
        <div className="letter-intro-hint">✦ box one ✦</div>
        <h1 className="letter-title">A Letter For You</h1>
      </div>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope-view"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: 50, transition: { duration: 0.5 } }}
            className="envelope-container"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {/* Envelope */}
            <div className="envelope-wrapper" onClick={handleOpen}>
              {/* Flap */}
              <div className={`envelope-flap ${isOpen ? 'open' : ''}`}></div>

              {/* Folds */}
              <div className="envelope-body">
                <div className="envelope-fold-left"></div>
                <div className="envelope-fold-right"></div>
                <div className="envelope-fold-bottom"></div>
              </div>

              {/* Wax Seal */}
              <div className={`wax-seal ${isBroken ? 'cracked' : ''}`}>
                B
              </div>
            </div>

            <div className="tap-prompt">tap to open ✦</div>
          </motion.div>
        ) : (
          <motion.div
            key="letter-view"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 70, damping: 15 }}
            className="letter-paper"
          >
            {/* Ruled lines and message */}
            <div className="letter-content">
              <div className="letter-salutation">my dearest,</div>
              <div className="letter-paragraph">
                Today the world spins a little softer because it's your day. I wanted to tuck this letter into a quiet corner of the internet so you could find it like a pressed flower in an old book.
              </div>
              <div className="letter-paragraph">
                Thank you for your laughter – the kind that makes ordinary afternoons feel like something worth remembering. Thank you for every late night conversation, every silly voice note, every time you've made me feel seen.
              </div>
              <div className="letter-paragraph">
                I hope this year brings you slow mornings, warm tea, plans that don't fall through, and the kind of love that doesn't ask you to shrink. You deserve all of it, and then some.
              </div>
              <div className="letter-paragraph">
                Happy birthday, lovely soul. The world is luckier with you in it.
              </div>
              <div className="letter-signoff">
                — always, me 🩵
              </div>
            </div>

            {/* Local Petals inside letter card */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="letter-petal"
                initial={{ 
                  x: Math.random() * 400 - 50, 
                  y: -20, 
                  opacity: 0, 
                  rotate: Math.random() * 360 
                }}
                animate={{
                  y: 500,
                  x: `calc(${Math.random() * 300}px + ${Math.sin(i) * 50}px)`,
                  opacity: [0, 0.7, 0.7, 0],
                  rotate: Math.random() * 360 + 360
                }}
                transition={{
                  duration: Math.random() * 4 + 4,
                  repeat: Infinity,
                  delay: Math.random() * 3
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.65)',
                  boxShadow: '0 1px 2px rgba(111,184,184,0.1)',
                }}
              />
            ))}

            <div className="return-btn-container">
              <button className="return-btn" onClick={handleReturn}>
                RETURN TO THE BOXES
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
