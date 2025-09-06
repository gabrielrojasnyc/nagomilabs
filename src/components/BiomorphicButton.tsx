import React from 'react';
import { motion } from 'framer-motion';
interface BiomorphicButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
}
export const BiomorphicButton: React.FC<BiomorphicButtonProps> = ({
  children,
  primary = false,
  onClick
}) => {
  return <motion.button onClick={onClick} className={`
        relative px-10 py-4 text-lg font-['Gill_Sans'] 
        ${primary ? 'bg-[#e47168] text-[#0a253a]' : 'bg-transparent text-[#e9ddc3] border-2 border-[#e9ddc3]'}
        overflow-hidden
      `} style={{
    borderRadius: '30px 15px 25px 20px',
    boxShadow: primary ? '0 4px 15px rgba(228, 113, 104, 0.3), inset 0 1px 1px rgba(255,255,255,0.2)' : '0 4px 15px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.1)'
  }} whileHover="hover" initial="initial" variants={{
    initial: {
      scale: 1
    },
    hover: {
      scale: 1.02
    }
  }} transition={{
    type: 'spring',
    stiffness: 400,
    damping: 10
  }}>
      <motion.div className="absolute inset-0 w-full h-full" variants={{
      initial: {
        background: primary ? 'linear-gradient(135deg, rgba(228, 113, 104, 1) 0%, rgba(228, 113, 104, 0.9) 100%)' : 'linear-gradient(135deg, rgba(10, 37, 58, 0.1) 0%, rgba(10, 37, 58, 0.05) 100%)'
      },
      hover: {
        background: primary ? 'linear-gradient(135deg, rgba(228, 113, 104, 1) 0%, rgba(248, 208, 201, 0.9) 100%)' : 'linear-gradient(135deg, rgba(10, 37, 58, 0.2) 0%, rgba(10, 37, 58, 0.1) 100%)'
      }
    }} />
      <motion.span className="relative z-10" variants={{
      initial: {
        y: 0
      },
      hover: {
        y: -2
      }
    }}>
        {children}
      </motion.span>
      <motion.div className={`absolute bottom-0 left-0 w-full h-1 ${primary ? 'bg-[#0a253a]' : 'bg-[#e9ddc3]'} opacity-20`} variants={{
      initial: {
        scaleX: 0.3,
        opacity: 0.2
      },
      hover: {
        scaleX: 0.8,
        opacity: 0.4
      }
    }} style={{
      transformOrigin: 'left'
    }} />
      <motion.div className="absolute -top-10 -right-10 w-20 h-20 rounded-full opacity-20" style={{
      background: primary ? '#f8d0c9' : '#e9ddc3'
    }} variants={{
      initial: {
        scale: 0,
        opacity: 0
      },
      hover: {
        scale: 1,
        opacity: 0.2
      }
    }} transition={{
      type: 'spring',
      stiffness: 300,
      damping: 15
    }} />
    </motion.button>;
};