import React from 'react';
import { motion } from 'framer-motion';
interface VinePatternProps {
  className?: string;
}
export const VinePattern: React.FC<VinePatternProps> = ({
  className = ''
}) => {
  return <div className={className}>
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none" style={{
      position: 'absolute',
      top: 0,
      left: 0,
      pointerEvents: 'none'
    }}>
        {/* Top left vine */}
        <motion.path d="M0,0 C100,100 150,50 200,150 C250,250 150,300 250,350 C350,400 300,500 400,450" fill="none" stroke="#e9ddc3" strokeWidth="2" strokeLinecap="round" initial={{
        pathLength: 0,
        opacity: 0
      }} animate={{
        pathLength: [0, 1, 1, 0],
        opacity: [0, 0.3, 0.3, 0],
        x: [0, 10, 0],
        y: [0, 5, 0],
        rotate: [0, 2, 0]
      }} transition={{
        pathLength: {
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        },
        opacity: {
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        },
        x: {
          duration: 12,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        },
        y: {
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        },
        rotate: {
          duration: 16,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }
      }} />
        {/* Top right vine */}
        <motion.path d="M1000,0 C900,100 850,50 800,150 C750,250 850,300 750,350 C650,400 700,500 600,450" fill="none" stroke="#e9ddc3" strokeWidth="2" strokeLinecap="round" initial={{
        pathLength: 0,
        opacity: 0
      }} animate={{
        pathLength: [0, 1, 1, 0],
        opacity: [0, 0.3, 0.3, 0],
        x: [0, -8, 0],
        y: [0, 7, 0],
        rotate: [0, -1.5, 0]
      }} transition={{
        pathLength: {
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        },
        opacity: {
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        },
        x: {
          duration: 14,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 1
        },
        y: {
          duration: 11,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 1
        },
        rotate: {
          duration: 18,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 1
        }
      }} />
        {/* Bottom left vine */}
        <motion.path d="M0,1000 C100,900 150,950 200,850 C250,750 150,700 250,650 C350,600 300,500 400,550" fill="none" stroke="#e9ddc3" strokeWidth="2" strokeLinecap="round" initial={{
        pathLength: 0,
        opacity: 0
      }} animate={{
        pathLength: [0, 1, 1, 0],
        opacity: [0, 0.3, 0.3, 0],
        x: [0, 12, 0],
        y: [0, -6, 0],
        rotate: [0, 1.8, 0]
      }} transition={{
        pathLength: {
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4
        },
        opacity: {
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4
        },
        x: {
          duration: 13,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 2
        },
        y: {
          duration: 12,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 2
        },
        rotate: {
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 2
        }
      }} />
        {/* Bottom right vine */}
        <motion.path d="M1000,1000 C900,900 850,950 800,850 C750,750 850,700 750,650 C650,600 700,500 600,550" fill="none" stroke="#e9ddc3" strokeWidth="2" strokeLinecap="round" initial={{
        pathLength: 0,
        opacity: 0
      }} animate={{
        pathLength: [0, 1, 1, 0],
        opacity: [0, 0.3, 0.3, 0],
        x: [0, -15, 0],
        y: [0, -8, 0],
        rotate: [0, -2.2, 0]
      }} transition={{
        pathLength: {
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 6
        },
        opacity: {
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 6
        },
        x: {
          duration: 17,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 3
        },
        y: {
          duration: 13,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 3
        },
        rotate: {
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 3
        }
      }} />
        {/* Small decorative elements */}
        {[...Array(12)].map((_, i) => <motion.circle key={i} cx={100 + i * 70} cy={i % 2 === 0 ? 100 : 900} r="3" fill="#e47168" initial={{
        opacity: 0
      }} animate={{
        opacity: [0, 0.5, 0],
        y: [0, i % 2 === 0 ? 10 : -10, 0],
        x: [0, Math.sin(i) * 5, 0],
        scale: [1, 1.2, 1]
      }} transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: 'reverse',
        delay: i * 0.3
      }} />)}
      </svg>
    </div>;
};