import React from 'react';
import { motion } from 'framer-motion';

// Gift Box SVG/CSS component with liftable lid
const GiftBox = ({ isHovered }) => {
  return (
    <div className="giftbox-wrapper">
      <style>{`
        .giftbox-wrapper {
          position: relative;
          width: 170px;
          height: 170px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .giftbox-bg {
          position: absolute;
          inset: 0;
          background: #E8F2EF;
          border-radius: 28px;
          box-shadow: inset 0 2px 5px rgba(255,255,255,0.7), 0 8px 24px rgba(111,184,184,0.08);
          border: 1px solid rgba(255,255,255,0.8);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Ribbon Cross */
        .ribbon-vertical {
          position: absolute;
          left: calc(50% - 10px);
          top: 0;
          width: 20px;
          height: 100%;
          background: var(--mint-blue);
          opacity: 0.8;
          z-index: 2;
        }

        .ribbon-horizontal {
          position: absolute;
          top: calc(50% - 10px);
          left: 0;
          width: 100%;
          height: 20px;
          background: var(--mint-blue);
          opacity: 0.8;
          z-index: 2;
        }

        /* Bow Knot SVG */
        .bow-knot {
          position: absolute;
          top: calc(50% - 25px);
          left: calc(50% - 25px);
          width: 50px;
          height: 50px;
          color: var(--mint-blue);
          z-index: 3;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.05));
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .giftbox-wrapper:hover .bow-knot {
          transform: scale(1.1) rotate(5deg);
        }

        /* Sparkles */
        .gift-sparkle {
          position: absolute;
          color: var(--mint-blue);
          opacity: 0;
          pointer-events: none;
          transition: all 0.4s ease;
          z-index: 4;
        }

        .giftbox-wrapper:hover .sparkle-1 {
          opacity: 0.8;
          transform: translate(-45px, -45px) scale(1.2) rotate(45deg);
        }

        .giftbox-wrapper:hover .sparkle-2 {
          opacity: 0.8;
          transform: translate(45px, -35px) scale(1) rotate(-30deg);
        }

        .giftbox-wrapper:hover .sparkle-3 {
          opacity: 0.8;
          transform: translate(-35px, 40px) scale(0.9) rotate(20deg);
        }

        /* Lid lifting effect */
        .box-lid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 50%;
          border-bottom: 2px solid rgba(255,255,255,0.4);
          z-index: 5;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: top center;
        }

        .giftbox-wrapper:hover .box-lid {
          transform: translateY(-8px) rotate(-1deg);
        }
      `}</style>

      {/* Sparks floating when hovered */}
      <span className="gift-sparkle sparkle-1">✦</span>
      <span className="gift-sparkle sparkle-2">✦</span>
      <span className="gift-sparkle sparkle-3">✦</span>

      <div className="giftbox-bg">
        {/* Lid (Top Half) */}
        <div className="box-lid">
          <div className="ribbon-vertical" style={{ height: '100%' }}></div>
        </div>

        {/* Ribbons */}
        <div className="ribbon-vertical"></div>
        <div className="ribbon-horizontal"></div>

        {/* Bow Knot */}
        <svg className="bow-knot" viewBox="0 0 24 24" fill="currentColor">
          {/* Bow Left Loop */}
          <path d="M12 12 C9 7 5 7 5 10 C5 13 9 12 12 12" />
          {/* Bow Right Loop */}
          <path d="M12 12 C15 7 19 7 19 10 C19 13 15 12 12 12" />
          {/* Center Knot */}
          <circle cx="12" cy="12" r="2.5" />
          {/* Left Ribbon tail */}
          <path d="M12 12 C11 15 8 18 6 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          {/* Right Ribbon tail */}
          <path d="M12 12 C13 15 16 18 18 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default function SurpriseDashboard({ completedBoxes, onSelectBox, onEnterGarden }) {
  const allOpened = completedBoxes.box1 && completedBoxes.box2 && completedBoxes.box3;

  const boxes = [
    {
      id: 'box1',
      title: 'Letter For You',
      subtext: 'a few words from my heart',
      completed: completedBoxes.box1,
    },
    {
      id: 'box2',
      title: 'Memory Lane',
      subtext: 'moments we\'ve collected',
      completed: completedBoxes.box2,
    },
    {
      id: 'box3',
      title: 'Birthday Surprise',
      subtext: 'make a wish ✦',
      completed: completedBoxes.box3,
    },
  ];

  return (
    <div className="dashboard-container">
      <style>{`
        .dashboard-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 900px;
          z-index: 10;
        }

        .dashboard-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .dashboard-intro-hint {
          font-family: var(--font-hand);
          font-size: 24px;
          color: var(--mint-blue);
          margin-bottom: 6px;
        }

        .dashboard-title {
          font-family: var(--font-serif);
          font-size: 42px;
          font-weight: 400;
          color: var(--text);
          margin-bottom: 12px;
        }

        .dashboard-desc {
          font-family: var(--font-sans);
          font-size: 14px;
          line-height: 1.6;
          color: var(--text);
          opacity: 0.7;
          max-width: 500px;
          margin: 0 auto;
        }

        .boxes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          width: 100%;
          margin-bottom: 60px;
          justify-items: center;
        }

        .box-card-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
        }

        .box-title-text {
          font-family: var(--font-serif);
          font-size: 20px;
          color: var(--text);
          margin-top: 20px;
          font-weight: 500;
        }

        .box-sub-text {
          font-family: var(--font-hand);
          font-size: 18px;
          color: var(--text);
          opacity: 0.7;
          margin-top: 4px;
          margin-bottom: 8px;
        }

        .opened-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1px;
          color: var(--mint-blue);
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .unopened-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1px;
          color: var(--text);
          opacity: 0.4;
          text-transform: uppercase;
        }

        .garden-btn-container {
          height: 60px;
          display: flex;
          align-items: center;
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
          .boxes-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .dashboard-title {
            font-size: 34px;
          }
        }
      `}</style>

      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-intro-hint">you're in ✦</div>
        <h1 className="dashboard-title">Choose Your Surprise</h1>
        <p className="dashboard-desc">
          Three little boxes, tied with satin. Open them in any order — but open them all.
        </p>
      </div>

      {/* Boxes Grid */}
      <div className="boxes-grid">
        {boxes.map((box) => {
          return (
            <motion.div
              key={box.id}
              className="box-card-container"
              onClick={() => onSelectBox(box.id)}
              whileHover={{ 
                y: -6,
                // Soft shake animation
                rotate: [0, -1.5, 1.5, -1.5, 1.5, 0],
                transition: { 
                  y: { duration: 0.3 },
                  rotate: { duration: 0.5, repeat: Infinity, repeatType: "mirror" }
                }
              }}
            >
              <GiftBox />
              <div className="box-title-text">{box.title}</div>
              <div className="box-sub-text">{box.subtext}</div>
              {box.completed ? (
                <div className="opened-label">
                  OPENED ✓
                </div>
              ) : (
                <div className="unopened-label">
                  MYSTERY BOX
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Secret Garden Button Trigger */}
      <div className="garden-btn-container">
        {allOpened && (
          <motion.button
            className="garden-btn"
            onClick={onEnterGarden}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            ✦ ENTER THE SECRET GARDEN ✦
          </motion.button>
        )}
      </div>
    </div>
  );
}
