/* Header Sun Component - Scroll-Interactive Celestial Body (Sun/Moon) */
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const HeaderSun = () => {
    const isDay = true;
    const [isClicked, setIsClicked] = useState(false);

    // Scroll Animations
    const { scrollY } = useScroll();

    // Parallax mapping: As user scrolls down...
    // Sun/Moon moves UP, RIGHT, Fades OUT
    const y = useTransform(scrollY, [0, 300], [0, -80]);
    const x = useTransform(scrollY, [0, 300], [0, 30]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]); // Fade out completely
    const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 500);
    };

    return (
        <div className="fixed top-4 left-4 md:top-8 md:left-8 z-30 pointer-events-auto cursor-pointer scale-75 md:scale-100 origin-top-left">
            <motion.div
                className="relative"
                style={{
                    y,
                    x,
                    opacity,
                    scale,
                    willChange: 'transform, opacity'
                }}
                onClick={handleClick}
                whileHover={{
                    scale: 1.1,
                    rotate: 15,
                    transition: { type: "spring", stiffness: 300 }
                }}

                animate={{
                    rotate: [0, 5, -5, 0],
                    y: [0, -5, 0] // Gentle bounce
                }}
                transition={{
                    rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
            >
                <AnimatePresence mode="wait">
                    {/* SUN SVG (Permanent) */}
                    <motion.svg
                        key="sun"
                        width="100" height="100" viewBox="0 0 100 100" fill="none"
                        initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Sun Rays */}
                        <motion.g
                            initial={{ opacity: 0.8 }}
                            animate={isClicked ? { scale: 1.2, opacity: 1 } : { scale: 1, opacity: 0.8 }}
                            transition={{ duration: 0.3 }}
                            style={{ originX: "50px", originY: "50px" }}
                        >
                            <motion.g
                                animate={{ rotate: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                style={{ originX: "50px", originY: "50px" }}
                            >
                                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                                    <motion.line
                                        key={i}
                                        x1="50" y1="50"
                                        x2="50" y2="10"
                                        stroke="#FFD700"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        transform={`rotate(${angle} 50 50)`}
                                        animate={{ y2: [10, 5, 10] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.1,
                                            ease: "easeInOut"
                                        }}
                                    />
                                ))}
                            </motion.g>
                        </motion.g>

                        {/* Sun Body */}
                        <motion.path
                            d="M50 20 C65 20 80 35 80 50 C80 65 65 80 50 80 C35 80 20 65 20 50 C20 35 35 20 50 20 Z"
                            fill="#FFEB3B"
                            stroke="#FBC02D"
                            strokeWidth="2.5"
                            animate={isClicked ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                            transition={{ duration: 0.4 }}
                            style={{ originX: "50px", originY: "50px" }}
                        />

                        {/* Face */}
                        <motion.g
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{ originX: "50px", originY: "50px" }}
                        >
                            <circle cx="40" cy="45" r="3" fill="#333" />
                            <circle cx="60" cy="45" r="3" fill="#333" />
                            <path d="M40 60 Q50 65 60 60" stroke="#333" strokeWidth="2" strokeLinecap="round" fill="none" />
                        </motion.g>
                    </motion.svg>
                </AnimatePresence>

                {/* Sparkles on Click */}
                <AnimatePresence>
                    {isClicked && (
                        <>
                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-yellow-400"
                                    initial={{ scale: 0, x: 0, y: 0 }}
                                    animate={{
                                        scale: [0, 1, 0],
                                        x: (Math.random() - 0.5) * 60,
                                        y: (Math.random() - 0.5) * 60
                                    }}
                                    exit={{ scale: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                />
                            ))}
                        </>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default HeaderSun;
