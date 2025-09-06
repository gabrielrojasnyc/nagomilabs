import React from 'react';
import { motion } from 'framer-motion';
export const Logo: React.FC = () => {
  return <motion.div className="w-16 h-16 relative" whileHover={{
    scale: 1.05,
    rotate: 5
  }} transition={{
    type: 'spring',
    stiffness: 300,
    damping: 15
  }}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a253a" />
            <stop offset="100%" stopColor="#1a4d6e" />
          </linearGradient>
          <linearGradient id="eyeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e47168" />
            <stop offset="100%" stopColor="#f8d0c9" />
          </linearGradient>
        </defs>
        {/* Outline */}
        <motion.path d="M50,8 L78,20 L78,60 L50,72 L22,60 L22,20 Z" fill="none" stroke="#e9ddc3" strokeWidth="2" initial={{
        opacity: 0
      }} animate={{
        opacity: 1,
        scale: [1, 1.02, 1]
      }} transition={{
        opacity: {
          duration: 0.5
        },
        scale: {
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }
      }} />
        {/* Robot head - hexagon */}
        <motion.path d="M50,15 L72,25 L72,55 L50,65 L28,55 L28,25 Z" fill="url(#logoGradient)" initial={{
        opacity: 0
      }} animate={{
        opacity: 1,
        y: [0, -1, 0]
      }} transition={{
        opacity: {
          duration: 0.5
        },
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }
      }} />
        {/* Left antenna */}
        <motion.path d="M38,15 L42,5 L46,15" fill="none" stroke="#e9ddc3" strokeWidth="2" strokeLinecap="round" initial={{
        opacity: 0
      }} animate={{
        opacity: 1,
        rotate: [-2, 2, -2]
      }} transition={{
        opacity: {
          duration: 0.5
        },
        rotate: {
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }
      }} style={{
        transformOrigin: '42px 15px'
      }} />
        {/* Right antenna */}
        <motion.path d="M54,15 L58,5 L62,15" fill="none" stroke="#e9ddc3" strokeWidth="2" strokeLinecap="round" initial={{
        opacity: 0
      }} animate={{
        opacity: 1,
        rotate: [2, -2, 2]
      }} transition={{
        opacity: {
          duration: 0.5
        },
        rotate: {
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 0.5
        }
      }} style={{
        transformOrigin: '58px 15px'
      }} />
        {/* Left eye */}
        <motion.circle cx="38" cy="40" r="7" fill="url(#eyeGradient)" initial={{
        opacity: 0
      }} animate={{
        opacity: 1,
        r: [7, 7.5, 7],
        fill: ['#e47168', '#f8d0c9', '#e47168']
      }} transition={{
        opacity: {
          duration: 0.5
        },
        r: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        },
        fill: {
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }
      }} />
        {/* Right eye */}
        <motion.circle cx="62" cy="40" r="7" fill="url(#eyeGradient)" initial={{
        opacity: 0
      }} animate={{
        opacity: 1,
        r: [7, 7.5, 7],
        fill: ['#e47168', '#f8d0c9', '#e47168']
      }} transition={{
        opacity: {
          duration: 0.5
        },
        r: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 0.3
        },
        fill: {
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 0.3
        }
      }} />
        {/* Robot body */}
        <motion.rect x="35" y="65" width="30" height="20" rx="3" ry="3" fill="url(#logoGradient)" stroke="#e9ddc3" strokeWidth="1" initial={{
        opacity: 0
      }} animate={{
        opacity: 1,
        y: [65, 66, 65]
      }} transition={{
        opacity: {
          duration: 0.5
        },
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 0.2
        }
      }} />
        {/* Left arm */}
        <motion.path d="M35,72 L20,78 L25,85" fill="none" stroke="#e9ddc3" strokeWidth="2" strokeLinecap="round" initial={{
        opacity: 0
      }} animate={{
        opacity: 1,
        x: [0, -1, 0]
      }} transition={{
        opacity: {
          duration: 0.5
        },
        x: {
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }
      }} />
        {/* Right arm */}
        <motion.path d="M65,72 L80,78 L75,85" fill="none" stroke="#e9ddc3" strokeWidth="2" strokeLinecap="round" initial={{
        opacity: 0
      }} animate={{
        opacity: 1,
        x: [0, 1, 0]
      }} transition={{
        opacity: {
          duration: 0.5
        },
        x: {
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 0.5
        }
      }} />
      </svg>
    </motion.div>;
};