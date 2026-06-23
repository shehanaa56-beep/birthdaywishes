import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function MemoryLaneBox({ onBack, onComplete }) {
  const memories = [
    {
      id: '01',
      title: 'First Chat',
      subtitle: 'THE VERY BEGINNING',
      rotation: -3,
      isGradient: false,
    },
    {
      id: '02',
      title: 'Best Memory',
      subtitle: 'THAT GOLDEN EVENING',
      rotation: 0,
      isGradient: false,
    },
    {
      id: '03',
      title: 'Funniest Day',
      subtitle: 'WE COULDN\'T BREATHE',
      rotation: 2.5,
      isGradient: false,
    },
    {
      id: '04',
      title: 'Favorite Photo',
      subtitle: 'YOU, EXACTLY YOU',
      rotation: -2,
      isGradient: false,
    },
    {
      id: '05',
      title: 'Today 🖤',
      subtitle: 'AND ALL THE REST',
      rotation: 0.5,
      isGradient: true,
    },
  ];

  const handleReturn = () => {
    onComplete();
    onBack();
  };

  return (
    <div className="memory-lane-container">
      <style>{`
        .memory-lane-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 950px;
          min-height: 80vh;
          position: relative;
          z-index: 10;
        }

        .back-link {
          align-self: flex-start;
          font-family: var(--font-hand);
          font-size: 20px;
          color: var(--text);
          opacity: 0.6;
          cursor: pointer;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 30px;
          transition: all 0.2s ease;
        }

        .back-link:hover {
          opacity: 1;
          transform: translateX(-3px);
        }

        .memory-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .memory-intro-hint {
          font-family: var(--font-hand);
          font-size: 24px;
          color: var(--mint-blue);
          margin-bottom: 6px;
        }

        .memory-title {
          font-family: var(--font-serif);
          font-size: 40px;
          font-weight: 400;
          color: var(--text);
          margin-bottom: 8px;
        }

        .memory-desc {
          font-size: 13px;
          color: var(--text);
          opacity: 0.6;
          max-width: 450px;
          margin: 0 auto;
        }

        /* Scrapbook board grid layout */
        .scrapbook-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px 40px;
          width: 100%;
          margin-bottom: 50px;
        }

        /* Row connecting arrows styling */
        .grid-arrow-cell {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 30px;
          color: var(--mint-blue);
          opacity: 0.5;
        }

        /* Polaroid inner design specifically for memory lane */
        .memory-polaroid {
          cursor: pointer;
          width: 100%;
          max-width: 250px;
          margin: 0 auto;
        }

        .polaroid-inner-box {
          width: 100%;
          aspect-ratio: 0.85;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
        }

        .polaroid-inner-box.solid {
          background-color: var(--mint-green);
        }

        .polaroid-inner-box.gradient {
          background: linear-gradient(135deg, #CFE8E1 0%, #6FB8B8 100%);
        }

        .polaroid-num-text {
          font-family: var(--font-serif);
          font-size: 48px;
          font-weight: 300;
          color: var(--white);
          opacity: 0.85;
          user-select: none;
        }

        .polaroid-caption-main {
          font-family: var(--font-hand);
          font-size: 20px;
          font-weight: bold;
          color: var(--text);
          margin-top: 10px;
          line-height: 1.1;
        }

        .polaroid-caption-sub {
          font-size: 10px;
          letter-spacing: 1px;
          color: var(--text);
          opacity: 0.5;
          margin-top: 4px;
          font-weight: 500;
          text-transform: uppercase;
        }

        .return-btn-container {
          margin-top: 20px;
          margin-bottom: 40px;
        }

        @media (max-width: 768px) {
          .scrapbook-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .grid-arrow-cell {
            transform: rotate(-90deg); /* align arrow horizontally if stacked */
            height: 20px;
            margin: 10px 0;
          }
        }
      `}</style>

      {/* Back link */}
      <button className="back-link" onClick={onBack}>
        ← back to the boxes
      </button>

      {/* Header */}
      <div className="memory-header">
        <div className="memory-intro-hint">box two</div>
        <h1 className="memory-title">Memory Lane</h1>
        <p className="memory-desc">
          A little scrapbook. Hover the polaroids — they remember being held.
        </p>
      </div>

      {/* Grid containing Polaroids and arrows */}
      <div className="scrapbook-grid">
        {/* Row 1 Polaroids */}
        <div className="grid-cell">
          <motion.div
            className="polaroid memory-polaroid"
            style={{ rotate: memories[0].rotation }}
            whileHover={{
              rotate: 0,
              scale: 1.05,
              y: -8,
              boxShadow: '0 20px 40px rgba(49, 68, 74, 0.18)',
            }}
          >
            <div className="polaroid-tape" />
            <div className="polaroid-inner-box" style={{ position: 'relative', overflow: 'hidden' }}>
              <img src="/images/1.jpeg" alt={memories[0].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: 'rgba(49, 68, 74, 0.7)',
                color: '#fff',
                fontSize: '11px',
                fontWeight: 'bold',
                padding: '2px 6px',
                borderRadius: '10px',
                backdropFilter: 'blur(2px)'
              }}>{memories[0].id}</div>
            </div>
            <div className="polaroid-caption-main">{memories[0].title}</div>
            <div className="polaroid-caption-sub">{memories[0].subtitle}</div>
          </motion.div>
        </div>

        <div className="grid-cell">
          <motion.div
            className="polaroid memory-polaroid"
            style={{ rotate: memories[1].rotation }}
            whileHover={{
              rotate: 0,
              scale: 1.05,
              y: -8,
              boxShadow: '0 20px 40px rgba(49, 68, 74, 0.18)',
            }}
          >
            <div className="polaroid-tape" />
            <div className="polaroid-inner-box" style={{ position: 'relative', overflow: 'hidden' }}>
              <img src="/images/1.jpeg" alt={memories[1].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: 'rgba(49, 68, 74, 0.7)',
                color: '#fff',
                fontSize: '11px',
                fontWeight: 'bold',
                padding: '2px 6px',
                borderRadius: '10px',
                backdropFilter: 'blur(2px)'
              }}>{memories[1].id}</div>
            </div>
            <div className="polaroid-caption-main">{memories[1].title}</div>
            <div className="polaroid-caption-sub">{memories[1].subtitle}</div>
          </motion.div>
        </div>

        <div className="grid-cell">
          <motion.div
            className="polaroid memory-polaroid"
            style={{ rotate: memories[2].rotation }}
            whileHover={{
              rotate: 0,
              scale: 1.05,
              y: -8,
              boxShadow: '0 20px 40px rgba(49, 68, 74, 0.18)',
            }}
          >
            <div className="polaroid-tape" />
            <div className="polaroid-inner-box" style={{ position: 'relative', overflow: 'hidden' }}>
              <img src="/images/1.jpeg" alt={memories[2].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: 'rgba(49, 68, 74, 0.7)',
                color: '#fff',
                fontSize: '11px',
                fontWeight: 'bold',
                padding: '2px 6px',
                borderRadius: '10px',
                backdropFilter: 'blur(2px)'
              }}>{memories[2].id}</div>
            </div>
            <div className="polaroid-caption-main">{memories[2].title}</div>
            <div className="polaroid-caption-sub">{memories[2].subtitle}</div>
          </motion.div>
        </div>

        {/* Row 2 Arrows */}
        <div className="grid-arrow-cell">
          <ArrowDown size={18} strokeWidth={1.5} />
        </div>
        <div className="grid-arrow-cell">
          <ArrowDown size={18} strokeWidth={1.5} />
        </div>
        <div className="grid-arrow-cell">
          <ArrowDown size={18} strokeWidth={1.5} />
        </div>

        {/* Row 3 Polaroids (Bottom Row) */}
        <div className="grid-cell">
          <motion.div
            className="polaroid memory-polaroid"
            style={{ rotate: memories[3].rotation }}
            whileHover={{
              rotate: 0,
              scale: 1.05,
              y: -8,
              boxShadow: '0 20px 40px rgba(49, 68, 74, 0.18)',
            }}
          >
            <div className="polaroid-tape" />
            <div className="polaroid-inner-box" style={{ position: 'relative', overflow: 'hidden' }}>
              <img src="/images/1.jpeg" alt={memories[3].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: 'rgba(49, 68, 74, 0.7)',
                color: '#fff',
                fontSize: '11px',
                fontWeight: 'bold',
                padding: '2px 6px',
                borderRadius: '10px',
                backdropFilter: 'blur(2px)'
              }}>{memories[3].id}</div>
            </div>
            <div className="polaroid-caption-main">{memories[3].title}</div>
            <div className="polaroid-caption-sub">{memories[3].subtitle}</div>
          </motion.div>
        </div>

        <div className="grid-cell">
          <motion.div
            className="polaroid memory-polaroid"
            style={{ rotate: memories[4].rotation }}
            whileHover={{
              rotate: 0,
              scale: 1.05,
              y: -8,
              boxShadow: '0 20px 40px rgba(49, 68, 74, 0.18)',
            }}
          >
            <div className="polaroid-tape" />
            <div className="polaroid-inner-box" style={{ position: 'relative', overflow: 'hidden' }}>
              <img src="/images/1.jpeg" alt={memories[4].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: 'rgba(49, 68, 74, 0.7)',
                color: '#fff',
                fontSize: '11px',
                fontWeight: 'bold',
                padding: '2px 6px',
                borderRadius: '10px',
                backdropFilter: 'blur(2px)'
              }}>{memories[4].id}</div>
            </div>
            <div className="polaroid-caption-main">{memories[4].title}</div>
            <div className="polaroid-caption-sub">{memories[4].subtitle}</div>
          </motion.div>
        </div>

        <div className="grid-cell">
          {/* Empty slot on bottom right matching the layout */}
        </div>

        {/* Bottom row arrows */}
        <div className="grid-arrow-cell">
          <ArrowDown size={18} strokeWidth={1.5} />
        </div>
        <div className="grid-arrow-cell">
          {/* Empty Arrow Slot */}
        </div>
        <div className="grid-arrow-cell">
          {/* Empty Arrow Slot */}
        </div>
      </div>

      {/* Return button */}
      <div className="return-btn-container">
        <button className="glass-button" onClick={handleReturn}>
          RETURN TO THE BOXES
        </button>
      </div>
    </div>
  );
}
