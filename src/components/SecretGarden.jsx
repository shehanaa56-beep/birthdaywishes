import React from 'react';
import { motion } from 'framer-motion';

// Individual Daisy Flower Component
const DaisySvg = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="32" 
    height="32" 
    style={{ color: 'var(--white)', margin: '0 6px' }}
  >
    {/* Center mint-blue core */}
    <circle cx="12" cy="12" r="3" fill="var(--mint-blue)" />
    {/* Petals */}
    <circle cx="12" cy="5" r="3.2" fill="currentColor" />
    <circle cx="12" cy="19" r="3.2" fill="currentColor" />
    <circle cx="5" cy="12" r="3.2" fill="currentColor" />
    <circle cx="19" cy="12" r="3.2" fill="currentColor" />
    <circle cx="7" cy="7" r="3.2" fill="currentColor" />
    <circle cx="17" cy="17" r="3.2" fill="currentColor" />
    <circle cx="7" cy="17" r="3.2" fill="currentColor" />
    <circle cx="17" cy="7" r="3.2" fill="currentColor" />
  </svg>
);

export default function SecretGarden({ onBack }) {
  return (
    <div className="secret-garden-container">
      <style>{`
        .secret-garden-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 800px;
          min-height: 80vh;
          text-align: center;
          z-index: 10;
          position: relative;
        }

        .garden-intro-hint {
          font-family: var(--font-hand);
          font-size: 26px;
          color: #EAD575; /* Soft metallic gold */
          font-weight: bold;
          margin-bottom: 24px;
          letter-spacing: 1px;
          text-shadow: 0 1px 3px rgba(30, 62, 62, 0.2);
        }

        .garden-quote {
          font-family: var(--font-serif);
          font-size: 48px;
          font-weight: 300;
          line-height: 1.45;
          color: #FFFFFF; /* High contrast white */
          max-width: 650px;
          margin-bottom: 35px;
          text-shadow: 0 2px 10px rgba(30, 62, 62, 0.25);
        }

        .daisy-row {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 30px;
        }

        .garden-subtitle {
          font-family: var(--font-hand);
          font-size: 28px;
          color: var(--text);
          opacity: 0.85;
          margin-bottom: 50px;
        }

        .garden-back-btn-container {
          display: flex;
          justify-content: center;
        }

        .garden-btn {
          background-color: var(--mint-blue);
          color: var(--white);
          font-family: var(--font-serif);
          font-size: 15px;
          letter-spacing: 1.5px;
          padding: 16px 36px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(111, 184, 184, 0.35);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .garden-btn:hover {
          background-color: #5AA1A1;
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 12px 30px rgba(111, 184, 184, 0.45);
        }

        .garden-btn:active {
          transform: translateY(1px) scale(0.99);
        }

        @media (max-width: 768px) {
          .garden-intro-hint {
            font-size: 20px;
            margin-bottom: 16px;
          }
          .garden-quote {
            font-size: 32px;
            line-height: 1.35;
            margin-bottom: 24px;
          }
          .daisy-row {
            margin-bottom: 24px;
          }
          .daisy-row svg {
            width: 24px;
            height: 24px;
            margin: 0 4px;
          }
          .garden-subtitle {
            font-size: 24px;
            margin-bottom: 40px;
          }
          .garden-btn {
            font-size: 14px;
            padding: 14px 28px;
            letter-spacing: 1px;
          }
        }

        @media (max-width: 480px) {
          .garden-intro-hint {
            font-size: 18px;
            margin-bottom: 12px;
          }
          .garden-quote {
            font-size: 24px;
            line-height: 1.3;
            margin-bottom: 20px;
          }
          .daisy-row {
            margin-bottom: 20px;
          }
          .daisy-row svg {
            width: 20px;
            height: 20px;
            margin: 0 3px;
          }
          .garden-subtitle {
            font-size: 20px;
            margin-bottom: 30px;
          }
          .garden-btn {
            font-size: 13px;
            padding: 12px 24px;
          }
        }
      `}</style>

      {/* Floating Garden-only Petals for extra density */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="garden-extra-sparkle"
          initial={{
            x: Math.random() * 800 - 400,
            y: Math.random() * 600 - 300,
            scale: Math.random() * 0.5 + 0.5,
            opacity: 0
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            x: [null, Math.random() * 50 - 25],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 4
          }}
          style={{
            position: 'absolute',
            color: 'var(--white)',
            fontSize: '24px',
            pointerEvents: 'none',
            userSelect: 'none'
          }}
        >
          ✦
        </motion.div>
      ))}

      {/* Title */}
      <motion.div
        className="garden-intro-hint"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        the secret garden ✦
      </motion.div>

      {/* Main Quote */}
      <motion.h1
        className="garden-quote"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
      >
        Thank you for being the most beautiful part of my life.
      </motion.h1>

      {/* Daisies */}
      <motion.div
        className="daisy-row"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <DaisySvg />
        <DaisySvg />
        <DaisySvg />
        <DaisySvg />
        <DaisySvg />
      </motion.div>

      {/* Subheading */}
      <motion.div
        className="garden-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        happy birthday, always 🖤
      </motion.div>

      {/* Back Button */}
      <motion.div
        className="garden-back-btn-container"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <button className="garden-btn" onClick={onBack}>
          BACK TO THE BOXES
        </button>
      </motion.div>
    </div>
  );
}
