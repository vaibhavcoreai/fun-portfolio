/* CloudDoodle - Interactive Mode-Aware Cloud with Rain */
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const CloudDoodle = () => {
    // Permanent 'Silly' (Day) Mode
    const [raindrops, setRaindrops] = useState([]);
    const isSilly = true;

    // Float duration based on mode
    const floatDuration = 4;

    const handleClick = (e) => {
        // Always rain on click now

        // Create raindrops
        const newRaindrops = Array.from({ length: 6 }, (_, i) => ({
            id: Date.now() + i,
            x: -20 + i * 8, // Spread across cloud width
        }));

        setRaindrops((prev) => [...prev, ...newRaindrops]);

        // Remove raindrops after animation
        setTimeout(() => {
            setRaindrops((prev) => prev.filter((drop) => !newRaindrops.includes(drop)));
        }, 800);
    };

    return (
        <div className="relative inline-block">
            <motion.div
                drag={isSilly}
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                dragElastic={0.2}
                onClick={handleClick}
                className={isSilly ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'}
                animate={{
                    y: [0, -12, 0],
                }}
                transition={{
                    duration: floatDuration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                whileHover={{
                    scale: isSilly ? 1.15 : 1.05,
                    transition: {
                        type: 'spring',
                        stiffness: isSilly ? 400 : 200,
                        damping: isSilly ? 10 : 20,
                    },
                }}
            >
                {/* Cloud SVG */}
                <svg width="80" height="50" viewBox="0 0 80 50" fill="none">
                    <path
                        d="M15 30 Q10 25, 15 20 Q20 15, 30 18 Q35 10, 45 15 Q55 12, 60 20 Q70 22, 65 30 Q68 35, 60 38 Q55 42, 45 38 Q35 42, 25 38 Q15 40, 15 30 Z"
                        fill="#A8DAFF"
                        stroke="#2d2d2d"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </motion.div>

            {/* Rain Animation */}
            <AnimatePresence>
                {raindrops.map((drop) => (
                    <motion.div
                        key={drop.id}
                        className="absolute pointer-events-none"
                        style={{
                            left: `calc(50% + ${drop.x}px)`,
                            top: '50px',
                        }}
                        initial={{
                            y: 0,
                            opacity: 1,
                        }}
                        animate={{
                            y: 60,
                            opacity: 0,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.7,
                            ease: 'easeIn',
                        }}
                    >
                        {/* Raindrop SVG */}
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                            <path
                                d="M4 0 Q6 4, 6 8 Q6 10, 4 10 Q2 10, 2 8 Q2 4, 4 0 Z"
                                fill="#6BB6FF"
                                opacity="0.7"
                            />
                        </svg>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default CloudDoodle;
