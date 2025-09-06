import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { CountdownTimer } from './CountdownTimer';
import { Logo } from './Logo';
import { VinePattern } from './VinePattern';
import { BiomorphicButton } from './BiomorphicButton';
import { AboutModal } from './AboutModal';
interface ComingSoonPageProps {
  productName: string;
  targetDate: Date;
}
export const ComingSoonPage: React.FC<ComingSoonPageProps> = ({
  productName,
  targetDate
}) => {
  const controls = useAnimation();
  const [aboutOpen, setAboutOpen] = useState(false);
  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    });
  }, [controls]);
  return <div className="relative flex flex-col items-center justify-between min-h-screen w-full bg-gradient-to-br from-[#1a4d6e] via-[#0d2f45] to-[#0a253a] overflow-hidden">
      <VinePattern className="absolute inset-0 z-0 opacity-15" />
      <motion.div className="absolute top-6 right-6 z-10" initial={{
      opacity: 0,
      scale: 0.8
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: 0.8,
      ease: 'easeOut'
    }}>
        <Logo />
      </motion.div>
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto z-10 px-4">
        <motion.div animate={controls} className="mb-10">
          <motion.div className="w-28 h-28 mx-auto" initial={{
          rotate: -10
        }} animate={{
          rotate: 10
        }} transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <motion.path d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z" fill="none" stroke="#e47168" strokeWidth="3" initial={{
              pathLength: 0
            }} animate={{
              pathLength: 1
            }} transition={{
              duration: 2,
              ease: 'easeInOut'
            }} />
              <motion.circle cx="50" cy="50" r="30" fill="#e47168" opacity="0.2" initial={{
              scale: 0.8
            }} animate={{
              scale: 1.1
            }} transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }} />
              <motion.circle cx="50" cy="50" r="15" fill="#f8d0c9" initial={{
              scale: 0.9
            }} animate={{
              scale: 1.2
            }} transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }} />
            </svg>
          </motion.div>
        </motion.div>
        <motion.h1 className="font-['Gill_Sans'] text-5xl font-light text-center text-[#f8d0c9] mb-4" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }}>
          Coming Soon
        </motion.h1>
        <motion.h2 className="font-['Gill_Sans'] text-6xl font-bold text-center text-[#e47168] mb-8" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }}>
          {productName}
        </motion.h2>
        <motion.p className="font-['Gill_Sans'] text-xl text-center text-[#e9ddc3] mb-16 max-w-2xl" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }}>
          <span className="font-semibold">AI Agents</span> Conducting a Symphony
          of <span className="font-semibold">HCM Harmony</span>
        </motion.p>
        <motion.p className="font-['Gill_Sans'] text-lg text-center text-[#e9ddc3]/90 mb-12 max-w-2xl" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.75
      }}>
          Stop spending hours certifying HCM releases. Our AI Agents handle the steps and evidence, so HR can focus on people.
        </motion.p>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.8
      }}>
          <CountdownTimer targetDate={targetDate} />
        </motion.div>
        <motion.div className="flex flex-wrap gap-6 mt-16 justify-center" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 1
      }}>
          <BiomorphicButton primary onClick={() => {
            window.location.href = 'mailto:hello@nagomilabs.com';
          }}>Contact Us</BiomorphicButton>
          <BiomorphicButton onClick={() => setAboutOpen(true)}>About Us</BiomorphicButton>
        </motion.div>
      </div>
      <motion.div className="mt-12 mb-6 text-sm text-[#e9ddc3] z-10 font-['Gill_Sans']" initial={{
      opacity: 0
    }} animate={{
      opacity: 0.7
    }} transition={{
      duration: 1,
      delay: 1.2
    }}>
        © 2025 Nagomi Labs
      </motion.div>
      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
    </div>;
};