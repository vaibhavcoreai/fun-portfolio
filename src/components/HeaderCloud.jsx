/* Header Cloud Component - Mode-Aware Decorative Element */
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const HeaderCloud = ({ size = 'medium', delay = 0, initialX = 0 }) => {
    const [raindrops, setRaindrops] = useState([]);
    const [lightning, setLightning] = useState(false);
    const isDay = true;

    // Size variants - Increased for better visibility
    const sizes = {
        small: { width: 100, height: 60, scale: 0.8 },
        medium: { width: 130, height: 80, scale: 1 },
        large: { width: 160, height: 100, scale: 1.2 },
    };

    const cloudSize = sizes[size] || sizes.medium;

    // Mode-aware animation settings
    const floatDuration = 3 + Math.random();
    const randomRotation = Math.random() * 6 - 3;

    // Handle click to create rain (only in day mode)
    const handleClick = () => {
        if (!isDay) return;

        const dropCount = 5 + Math.floor(Math.random() * 4); // 5-8 drops
        const newRaindrops = Array.from({ length: dropCount }, (_, i) => ({
            id: Date.now() + i,
            x: -25 + i * 10, // Spread across cloud width
            delay: i * 0.05, // Stagger the drops slightly
        }));

        setRaindrops((prev) => [...prev, ...newRaindrops]);

        // Remove raindrops after animation
        setTimeout(() => {
            setRaindrops((prev) => prev.filter((drop) => !newRaindrops.includes(drop)));
        }, 800);
    };

    // Handle double-click for lightning (only in day mode)
    const handleDoubleClick = (e) => {
        e.stopPropagation(); // Prevent triggering other events if necessary
        if (!isDay) return;

        setLightning(true);
        setTimeout(() => setLightning(false), 400); // Flash duration
    };

    return (
        <motion.div
            className="relative inline-block"
            style={{ willChange: 'transform' }}
            drag={isDay}
            dragConstraints={{ left: -200, right: 200, top: 0, bottom: 100 }}
            dragElastic={0.1}
            onClick={handleClick}
            onDoubleClick={handleDoubleClick}
            // Shake effect on lightning
            animate={lightning ? { x: [0, -5, 5, -5, 5, 0], transition: { duration: 0.4 } } : {}}
        >
            <motion.div
                className={isDay ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}
                initial={{
                    x: initialX,
                    rotate: randomRotation,
                    opacity: 0,
                }}
                // Combine floating animation with mode-based Morphing
                animate={{
                    x: [initialX, initialX + 15, initialX],
                    y: [0, -8, 0],
                    opacity: 1,
                    scale: isDay ? 1.1 : 1, // Expand in day mode
                }}
                transition={{
                    x: {
                        duration: floatDuration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    },
                    y: {
                        duration: floatDuration * 0.7,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: delay,
                    },
                    opacity: {
                        duration: 0.6,
                        delay: delay,
                    },
                    scale: {
                        duration: 0.8, // Smooth transition between modes
                        ease: "easeInOut"
                    }
                }}
                whileHover={
                    isDay
                        ? {
                            scale: 1.2, // Slightly larger on hover in day mode
                            transition: {
                                type: 'spring',
                                stiffness: 300,
                                damping: 10,
                            },
                        }
                        : {
                            scale: 1.02,
                            transition: {
                                type: 'spring',
                                stiffness: 200,
                                damping: 20,
                            },
                        }
                }
            >
                {/* Hand-drawn Cloud SVG */}
                <svg
                    width={cloudSize.width}
                    height={cloudSize.height}
                    viewBox="0 0 80 50"
                    fill="none"
                    style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                >
                    <motion.path
                        d="M15 30 Q10 25, 15 20 Q20 15, 30 18 Q35 10, 45 15 Q55 12, 60 20 Q70 22, 65 30 Q68 35, 60 38 Q55 42, 45 38 Q35 42, 25 38 Q15 40, 15 30 Z"
                        fill="#FFFFFF"
                        stroke="#2d2d2d"
                        /* Animate stroke width and brightness based on mode */
                        animate={{
                            strokeWidth: isDay ? 2.5 : 1.5,
                            fill: isDay ? "#FFFFFF" : "#F4F6F0", // Slightly dimmer white in calm
                            filter: isDay ? "brightness(1)" : "brightness(0.9)"
                        }}
                        transition={{ duration: 1 }}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                {/* Lightning Bolt SVG - Only visible when lightning is true */}
                <AnimatePresence>
                    {lightning && (
                        <motion.svg
                            width="40"
                            height="60"
                            viewBox="0 0 40 60"
                            fill="none"
                            className="absolute z-50 pointer-events-none"
                            style={{
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -20%)' // Center over cloud
                            }}
                            initial={{ opacity: 0, scale: 0.5, pathLength: 0 }}
                            animate={{ opacity: 1, scale: 1.2, pathLength: 1 }}
                            exit={{ opacity: 0, scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <motion.path
                                d="M20 0 L0 35 H20 L15 60 L35 25 H15 L20 0 Z"
                                fill="#FFD700"
                                stroke="#FFA500"
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.1 }}
                            />
                        </motion.svg>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Rain Animation - Now relative to cloud container */}
            <AnimatePresence>
                {raindrops.map((drop) => (
                    <motion.div
                        key={drop.id}
                        className="absolute pointer-events-none"
                        style={{
                            left: `calc(50% + ${drop.x}px)`,
                            top: `${cloudSize.height - 5}px`,
                        }}
                        initial={{
                            y: 0,
                            opacity: 1,
                        }}
                        animate={{
                            y: 70,
                            opacity: 0,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.7,
                            ease: 'easeIn',
                            delay: drop.delay,
                        }}
                    >
                        {/* Raindrop SVG */}
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                            <path
                                d="M3 0 Q4.5 3, 4.5 6.5 Q4.5 8.5, 3 8.5 Q1.5 8.5, 1.5 6.5 Q1.5 3, 3 0 Z"
                                fill="#6BB6FF"
                                opacity="0.7"
                            />
                        </svg>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
};

export default HeaderCloud;
