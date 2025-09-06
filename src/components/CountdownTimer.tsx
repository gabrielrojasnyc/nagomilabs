import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
interface CountdownTimerProps {
  targetDate: Date;
}
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(difference / (1000 * 60 * 60) % 24);
        const minutes = Math.floor(difference / 1000 / 60 % 60);
        const seconds = Math.floor(difference / 1000 % 60);
        setTimeLeft({
          days,
          hours,
          minutes,
          seconds
        });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  const timeBlocks = [{
    value: timeLeft.days,
    label: 'Days'
  }, {
    value: timeLeft.hours,
    label: 'Hours'
  }, {
    value: timeLeft.minutes,
    label: 'Minutes'
  }, {
    value: timeLeft.seconds,
    label: 'Seconds'
  }];
  return <div className="flex justify-center gap-5 flex-wrap">
      {timeBlocks.map((block, index) => <motion.div key={index} className="relative" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: index * 0.1 + 0.5
    }}>
          <div className="absolute inset-0 bg-[#e47168] rounded-[30px] transform rotate-3 opacity-10 blur-sm"></div>
          <div className="relative flex flex-col items-center p-6 w-28 h-28" style={{
        background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)`,
        borderRadius: '30px 15px 25px 20px',
        boxShadow: `
                0 4px 15px rgba(0,0,0,0.2),
                inset 0 1px 1px rgba(255,255,255,0.15),
                inset 0 -1px 1px rgba(0,0,0,0.15)
              `,
        backdropFilter: 'blur(5px)',
        transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`
      }}>
            <motion.div className="text-4xl font-light text-[#f8d0c9] font-['Gill_Sans'] mb-1" animate={{
          scale: [1, 1.05, 1],
          opacity: [0.9, 1, 0.9]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: index * 0.2
        }}>
              {block.value}
            </motion.div>
            <div className="text-sm text-[#e9ddc3] font-['Gill_Sans'] opacity-80">
              {block.label}
            </div>
          </div>
        </motion.div>)}
    </div>;
};