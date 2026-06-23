import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Small Baby's Breath sprig tucked in box ribbon
const BoxBabysBreath = () => (
  <svg
    viewBox="0 0 100 100"
    style={{
      position: 'absolute',
      bottom: '16px',
      right: '16px',
      width: '76px',
      height: '76px',
      zIndex: 4,
      pointerEvents: 'none'
    }}
  >
    {/* Small stems */}
    <path d="M25 75 C40 60 48 45 55 30" stroke="#8CA095" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M40 52 C52 48 65 40 72 28" stroke="#8CA095" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M32 64 C44 58 52 52 64 42" stroke="#8CA095" strokeWidth="1.2" strokeLinecap="round" />
    {/* White buds */}
    <circle cx="55" cy="30" r="4" fill="#FFFFFF" stroke="#8CA095" strokeWidth="0.6" />
    <circle cx="55" cy="30" r="1.2" fill="#E8D26C" />

    <circle cx="72" cy="28" r="3.5" fill="#FFFFFF" stroke="#8CA095" strokeWidth="0.6" />
    <circle cx="72" cy="28" r="1.2" fill="#E8D26C" />

    <circle cx="64" cy="42" r="4" fill="#FFFFFF" stroke="#8CA095" strokeWidth="0.6" />
    <circle cx="64" cy="42" r="1.2" fill="#E8D26C" />

    {/* Filler buds */}
    <circle cx="46" cy="40" r="2.2" fill="#FFFFFF" />
    <circle cx="58" cy="36" r="2.2" fill="#FFFFFF" />
  </svg>
);

// Satin Ribbon Bow on Gift Box
const GiftBow = () => (
  <svg
    viewBox="0 0 100 80"
    style={{
      position: 'absolute',
      top: 'calc(50% - 38px)',
      left: 'calc(50% - 48px)',
      width: '96px',
      height: '76px',
      zIndex: 3,
      filter: 'drop-shadow(0 2.5px 4px rgba(49, 68, 74, 0.1))'
    }}
  >
    {/* Loops */}
    <path d="M50 40 C35 15 15 15 15 32 C15 48 35 43 50 40" fill="rgba(176, 215, 215, 0.95)" stroke="var(--mint-blue)" strokeWidth="1.2" />
    <path d="M50 40 C65 15 85 15 85 32 C85 48 65 43 50 40" fill="rgba(176, 215, 215, 0.95)" stroke="var(--mint-blue)" strokeWidth="1.2" />

    {/* Tails */}
    <path d="M50 40 C46 55 35 70 20 74" fill="none" stroke="rgba(176, 215, 215, 0.95)" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M50 40 C46 55 35 70 20 74" fill="none" stroke="var(--mint-blue)" strokeWidth="1" strokeLinecap="round" />

    <path d="M50 40 C54 55 65 70 80 74" fill="none" stroke="rgba(176, 215, 215, 0.95)" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M50 40 C54 55 65 70 80 74" fill="none" stroke="var(--mint-blue)" strokeWidth="1" strokeLinecap="round" />

    {/* Knot */}
    <circle cx="50" cy="40" r="5.5" fill="#FFFFFF" stroke="var(--mint-blue)" strokeWidth="1.2" />
    <circle cx="50" cy="40" r="2.2" fill="#EAD575" />
  </svg>
);

// Gift Box Component with Liftable Lid
const GiftBox = () => {
  return (
    <div className="giftbox-wrapper">
      <style>{`
        .giftbox-wrapper {
          position: relative;
          width: 220px;
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .giftbox-bg {
          position: absolute;
          inset: 0;
          background: #FFFFFF; /* High contrast white gift card */
          border-radius: 28px;
          box-shadow: 
            inset 0 2px 4px rgba(255,255,255,1), 
            0 12px 30px rgba(111,184,184,0.12);
          border: 1px solid rgba(255,255,255,0.9);
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
          left: calc(50% - 13px);
          top: 0;
          width: 26px;
          height: 100%;
          background: rgba(176, 215, 215, 0.6); /* Soft light-satin ribbon */
          border-left: 1px solid rgba(111, 184, 184, 0.15);
          border-right: 1px solid rgba(111, 184, 184, 0.15);
          z-index: 2;
        }

        .ribbon-horizontal {
          position: absolute;
          top: calc(50% - 13px);
          left: 0;
          width: 100%;
          height: 26px;
          background: rgba(176, 215, 215, 0.6);
          border-top: 1px solid rgba(111, 184, 184, 0.15);
          border-bottom: 1px solid rgba(111, 184, 184, 0.15);
          z-index: 2;
        }

        /* Lid lifting effect */
        .box-lid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 50%;
          border-bottom: 1px dashed rgba(111, 184, 184, 0.2);
          z-index: 5;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: top center;
        }

        .giftbox-wrapper:hover .box-lid {
          transform: translateY(-8px);
        }
      `}</style>

      <div className="giftbox-bg">
        {/* Lid (Top Half) */}
        <div className="box-lid">
          <div className="ribbon-vertical" style={{ height: '100%' }}></div>
        </div>

        {/* Ribbons */}
        <div className="ribbon-vertical"></div>
        <div className="ribbon-horizontal"></div>

        {/* Bow Knot */}
        <GiftBow />

        {/* Baby's breath flower sprig tucked behind bow */}
        <BoxBabysBreath />
      </div>
    </div>
  );
};

// Side decorative baby's breath SVG stems
const CornerBabysBreath = ({ style, scale = 1, rotate = 0 }) => (
  <svg
    viewBox="0 0 150 300"
    fill="none"
    className="corner-deco"
    style={{
      position: 'absolute',
      width: '180px',
      height: '360px',
      pointerEvents: 'none',
      zIndex: 1,
      transform: `scale(${scale}) rotate(${rotate}deg)`,
      ...style
    }}
  >
    <path d="M75 280 C70 190 45 140 30 100" stroke="#8CA095" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M75 280 C78 200 92 150 110 110" stroke="#8CA095" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M58 210 C48 180 35 160 25 150" stroke="#8CA095" strokeWidth="1.0" />
    <path d="M88 220 C98 190 108 170 118 160" stroke="#8CA095" strokeWidth="1.0" />
    {/* Flower Buds */}
    <circle cx="30" cy="100" r="3.5" fill="#FFFFFF" stroke="#8CA095" strokeWidth="0.4" />
    <circle cx="30" cy="100" r="1" fill="#E8D26C" />
    <circle cx="25" cy="150" r="3.5" fill="#FFFFFF" stroke="#8CA095" strokeWidth="0.4" />
    <circle cx="110" cy="110" r="3.5" fill="#FFFFFF" stroke="#8CA095" strokeWidth="0.4" />
    <circle cx="110" cy="110" r="1" fill="#E8D26C" />
    <circle cx="118" cy="160" r="3.5" fill="#FFFFFF" stroke="#8CA095" strokeWidth="0.4" />
  </svg>
);

// Flowy satin ribbon tail decoration
const CornerRibbon = ({ isLeft }) => (
  <svg
    viewBox="0 0 300 120"
    className="corner-deco"
    style={{
      position: 'absolute',
      bottom: '-30px',
      [isLeft ? 'left' : 'right']: '-50px',
      width: '320px',
      height: '128px',
      zIndex: 1,
      pointerEvents: 'none',
      transform: isLeft ? 'none' : 'scaleX(-1)',
      filter: 'drop-shadow(0 6px 12px rgba(49, 68, 74, 0.08))'
    }}
  >
    <path
      d="M 10,100 C 90,120 120,40 190,80 C 230,100 260,110 290,90"
      fill="none"
      stroke="rgba(207, 232, 225, 0.7)"
      strokeWidth="20"
      strokeLinecap="round"
    />
    <path
      d="M 10,100 C 90,120 120,40 190,80 C 230,100 260,110 290,90"
      fill="none"
      stroke="rgba(111, 184, 184, 0.25)"
      strokeWidth="21"
      strokeLinecap="round"
      strokeDasharray="1 15"
    />
  </svg>
);

// Decorative Outline Heart
const FloatingHeart = ({ style }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--mint-blue)"
    strokeWidth="1.2"
    style={{
      position: 'absolute',
      width: '24px',
      height: '24px',
      opacity: 0.45,
      pointerEvents: 'none',
      ...style
    }}
  >
    <path d="M12 21 C12 21 3 13.5 3 8.5 C3 5.5 5.5 3 8.5 3 C10.5 3 11.5 4.5 12 5 C12.5 4.5 13.5 3 15.5 3 C18.5 3 21 5.5 21 8.5 C21 13.5 12 21 12 21 Z" />
  </svg>
);

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
          max-width: 950px;
          min-height: 85vh;
          position: relative;
          z-index: 10;
        }

        .dashboard-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
        }

        .dashboard-intro-hint {
          font-family: var(--font-hand);
          font-size: 24px;
          color: #EAD575; /* Soft metallic gold */
          font-weight: bold;
          margin-bottom: 6px;
          text-shadow: 0 1px 3px rgba(30, 62, 62, 0.2);
        }

        .dashboard-title-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          position: relative;
        }

        .breeze-lines {
          font-size: 20px;
          color: #FFFFFF; /* High contrast white */
          transform: translateY(-8px);
          opacity: 0.85;
        }

        .title-heart {
          font-size: 24px;
          color: #FFFFFF; /* High contrast white */
          margin-left: 2px;
          opacity: 0.9;
          display: inline-block;
          transform: translateY(2px);
        }

        .dashboard-title {
          font-family: var(--font-serif);
          font-size: 44px;
          font-weight: 400;
          color: #FFFFFF; /* High contrast white */
          margin: 0;
          text-shadow: 0 2px 10px rgba(30, 62, 62, 0.25);
        }

        .dashboard-desc {
          font-family: var(--font-serif);
          font-size: 15px;
          font-style: italic;
          line-height: 1.6;
          color: #E8F2EF; /* Ivory white description */
          opacity: 0.9;
          max-width: 520px;
          margin: 14px auto 0 auto;
          text-shadow: 0 1px 4px rgba(30, 62, 62, 0.15);
        }

        .boxes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 45px;
          width: 100%;
          margin-bottom: 50px;
          justify-items: center;
          position: relative;
          z-index: 5;
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
          font-size: 22px;
          color: var(--text);
          margin-top: 24px;
          font-weight: 500;
        }

        .box-sub-text {
          font-family: var(--font-hand);
          font-size: 17px;
          color: var(--mint-blue);
          opacity: 0.85;
          margin-top: 6px;
          margin-bottom: 12px;
        }

        .status-badge {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          color: var(--mint-blue);
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .status-badge.unopened {
          opacity: 0.6;
          color: var(--text);
        }

        .garden-btn-container {
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 5;
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
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .box-card-container {
            min-width: 0;
            width: 100%;
          }

          .box-card-container:nth-child(3) {
            grid-column: span 2;
          }

          .giftbox-wrapper {
            transform: scale(0.58);
            transform-origin: top center;
            margin-bottom: -90px;
          }

          .box-title-text {
            font-size: 16px;
            margin-top: 5px;
          }

          .box-sub-text {
            font-size: 13px;
            margin-top: 3px;
            margin-bottom: 6px;
          }

          .status-badge {
            font-size: 10px;
          }
          
          .dashboard-title {
            font-size: 32px;
          }

          .corner-deco {
            display: none !important;
          }
        }
      `}</style>

      {/* Decorative Baby's Breath at Dashboard corners */}
      <CornerBabysBreath style={{ left: '-80px', bottom: '-40px' }} scale={1} rotate={22} />
      <CornerBabysBreath style={{ right: '-80px', bottom: '-40px' }} scale={1} rotate={-22} />

      {/* Decorative Ribbon Tails at Bottom corners */}
      <CornerRibbon isLeft={true} />
      <CornerRibbon isLeft={false} />

      {/* Decorative Floating Hearts and Sparkles */}
      <FloatingHeart style={{ left: '8%', top: '35%' }} />
      <FloatingHeart style={{ right: '10%', top: '38%' }} />
      <span style={{ position: 'absolute', left: '20%', top: '55%', color: 'var(--mint-blue)', opacity: 0.4, fontSize: '18px', pointerEvents: 'none' }}>✦</span>
      <span style={{ position: 'absolute', right: '22%', top: '58%', color: 'var(--mint-blue)', opacity: 0.4, fontSize: '18px', pointerEvents: 'none' }}>✦</span>

      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-intro-hint">you're in ✦</div>
        <div className="dashboard-title-wrapper">
          <span className="breeze-lines">ミ</span>
          <h1 className="dashboard-title">Choose Your Surprise</h1>
          <span className="title-heart">♡</span>
        </div>
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
                // Soft cute shake animation
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
                <div className="status-badge">
                  🌿 OPENED 🌿
                </div>
              ) : (
                <div className="status-badge unopened">
                  🌿 MYSTERY BOX 🌿
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
