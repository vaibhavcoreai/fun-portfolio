/* Header Clouds Container - Decorative Sky & Clouds with Scene Elements */
import HeaderCloud from './HeaderCloud';
import HeaderSun from './HeaderSun';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import DoodleWrapper from './DoodleWrapper';

// Simple Star Component (Silly Mode - Golden)
const HeaderStar = ({ top, left, delay, size = 30 }) => (
    <motion.div
        className="absolute pointer-events-none opacity-60"
        style={{ top, left }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 10, -10, 0]
        }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{
            duration: 3,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
        }}
    >
        <svg width={size} height={size} viewBox="0 0 30 30" fill="none">
            <path
                d="M15 0 L18 12 L30 15 L18 18 L15 30 L12 18 L0 15 L12 12 Z"
                fill="none"
                stroke="#FFD700" // Golden stroke
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </motion.div>
);

// Flying Bird Component
const HeaderBird = ({ top, delay, duration, size = 30 }) => (
    <motion.div
        className="absolute left-[-10%] pointer-events-none opacity-80"
        style={{ top }}
        animate={{
            x: ['0vw', '120vw'],
            y: [0, -15, 0, 15, 0] // Gentle wave motion
        }}
        transition={{
            x: {
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "linear"
            },
            y: {
                duration: duration / 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }}
    >
        <svg width={size} height={size} viewBox="0 0 50 40" fill="none">
            {/* Left Wing */}
            <motion.path
                d="M5 25 Q15 15, 25 25"
                stroke="#64748b" // Blue-grey color
                strokeWidth="3"
                strokeLinecap="round"
                animate={{ d: ["M5 25 Q15 15, 25 25", "M5 15 Q15 25, 25 25", "M5 25 Q15 15, 25 25"] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Right Wing */}
            <motion.path
                d="M25 25 Q35 15, 45 25"
                stroke="#64748b"
                strokeWidth="3"
                strokeLinecap="round"
                animate={{ d: ["M25 25 Q35 15, 45 25", "M25 25 Q35 25, 45 15", "M25 25 Q35 15, 45 25"] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            />
        </svg>
    </motion.div>
);

// Drifting Cloud Wrapper
const DriftingCloud = ({ children, duration, delay, top }) => (
    <motion.div
        className="absolute pointer-events-auto"
        initial={{ x: "-20vw", opacity: 0 }}
        animate={{
            x: ["-20vw", "120vw"],
            opacity: [0, 1, 1, 0]
        }}
        transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "linear"
        }}
        style={{ top }}
    >
        {children}
    </motion.div>
);

const HeaderClouds = () => {
    const isDay = true;
    const isNight = false;

    return (
        <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
            {/* Day Sky Background */}
            <motion.div
                className="absolute inset-0"
                style={{
                    // Layer 1: Dot Pattern (Top)
                    // Layer 2: Pastel Sky Gradient (Bottom)
                    backgroundImage: `
                        radial-gradient(circle, #d7cfc4 1px, transparent 1px),
                        linear-gradient(180deg, #dbeafe 0%, #fdfbf7 80%, rgba(253,251,247,0) 100%)
                    `,
                    backgroundSize: '20px 20px, 100% 100%',
                    backgroundPosition: '0 0, 0 0'
                }}
                initial={{ opacity: 1 }}
                animate={{
                    opacity: 1,
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Interactive Celestial Body (Sun/Moon) */}
            <HeaderSun />

            {/* Clouds System - Drifting & Static Mix */}
            <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none h-[400px]">
                {/* Static Interactive Clouds (Keep reachable for clicks) */}
                <div className="max-w-7xl mx-auto relative h-full">
                    <div className="absolute left-4 top-4 md:left-10 md:top-8 pointer-events-auto scale-75 md:scale-100 origin-top-left">
                        <HeaderCloud size="medium" delay={0} initialX={0} />
                    </div>
                    <div className="absolute right-4 top-4 md:right-32 md:top-4 pointer-events-auto scale-75 md:scale-100 origin-top-right">
                        <HeaderCloud size="large" delay={0.3} initialX={10} />
                    </div>
                </div>

                {/* Drifting Background Clouds (Atmosphere) */}
                {isDay && (
                    <>
                        <DriftingCloud top="15%" duration={45} delay={0}>
                            <div className="opacity-60 scale-75 blur-[1px]">
                                <HeaderCloud size="small" />
                            </div>
                        </DriftingCloud>
                        <DriftingCloud top="5%" duration={60} delay={20}>
                            <div className="opacity-40 scale-50 blur-[2px]">
                                <HeaderCloud size="small" />
                            </div>
                        </DriftingCloud>
                    </>
                )}
            </div>

            {/* Flying Birds - Day Mode Only */}
            <AnimatePresence>
                {isDay && (
                    <div className="fixed top-0 left-0 right-0 h-60 z-20 pointer-events-none overflow-hidden">
                        <HeaderBird top="15%" delay={0} duration={15} size={30} />
                        <HeaderBird top="25%" delay={5} duration={18} size={25} />
                        <HeaderBird top="10%" delay={8} duration={20} size={20} />
                    </div>
                )}
            </AnimatePresence>

            {/* Floating Stars - Day Mode (Golden) */}
            <AnimatePresence>
                {isDay && (
                    <div className="fixed top-0 left-0 right-0 h-40 z-30 pointer-events-none max-w-7xl mx-auto">
                        <HeaderStar top="15%" left="20%" delay={0.5} size={25} />
                        <HeaderStar top="25%" left="45%" delay={1.2} size={35} />
                        <HeaderStar top="10%" left="75%" delay={2.0} size={20} />
                        <HeaderStar top="30%" left="85%" delay={0.8} size={28} />
                        {/* Sparkle */}
                        <motion.div
                            className="absolute top-8 left-1/2 opacity-50"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1, rotate: 180 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="#FFD700" />
                            </svg>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>


        </div>
    );
};

export default HeaderClouds;
