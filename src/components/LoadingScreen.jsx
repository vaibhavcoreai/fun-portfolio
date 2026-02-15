/* Cartoon Sky Opening Loader */
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

// Large Bubbly Cloud Path (Hand-drawn style)
const CLOUD_PATH = "M10 35 Q5 25 15 15 Q25 5 40 10 Q55 0 70 10 Q85 5 95 20 Q105 25 95 40 Q100 55 85 55 Q70 60 55 55 Q40 60 25 55 Q10 60 10 35 Z";

const CloudCurtain = ({ className, style, custom, variants, initial = "initial", animate = "animate" }) => (
    <motion.div
        className={`absolute pointer-events-none ${className}`}
        style={style}
        custom={custom}
        initial={initial}
        animate={animate}
        variants={variants}
    >
        <svg
            viewBox="0 0 100 60"
            fill="none"
            className="w-full h-full drop-shadow-lg"
            preserveAspectRatio="none"
        >
            <path
                d={CLOUD_PATH}
                fill="#FFFFFF"
                stroke="#e2e8f0" // Very subtle blue-grey
                strokeWidth="0.5"
            />
        </svg>
    </motion.div>
);

const LoadingScreen = ({ onComplete }) => {
    const [isRevealing, setIsRevealing] = useState(false);
    const [textVisible, setTextVisible] = useState(true);

    useEffect(() => {
        // Sequence Timers
        const revealTimer = setTimeout(() => {
            setTextVisible(false);
            setIsRevealing(true);
        }, 700); // 0.7s Anticipation

        const cleanupTimer = setTimeout(() => {
            if (onComplete) onComplete();
        }, 2200); // 0.7s + 1.5s anim + buffer

        return () => {
            clearTimeout(revealTimer);
            clearTimeout(cleanupTimer);
        };
    }, [onComplete]);

    // Curtain Variants
    const leftCurtainVariants = {
        initial: { x: 0, scale: 1.1 }, // Slight scale overlapping
        animate: {
            x: 0,
            y: [0, -5, 0], // Gentle float
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        },
        reveal: {
            x: '-120%',
            transition: {
                duration: 1.4,
                ease: [0.4, 0.0, 0.2, 1], // Custom cinematic ease
                delay: 0
            }
        }
    };

    const rightCurtainVariants = {
        initial: { x: 0, scale: 1.1, scaleX: -1 }, // Flipped
        animate: {
            x: 0,
            y: [0, 5, 0], // Gentle float opposite
            transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
        },
        reveal: {
            x: '120%',
            transition: {
                duration: 1.4,
                ease: [0.4, 0.0, 0.2, 1],
                delay: 0.1 // Slight stagger
            }
        }
    };

    const secondaryCloudVariants = (custom) => ({
        initial: { y: 0, opacity: 0.9 },
        animate: {
            y: [0, -10, 0],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: custom * 0.5 }
        },
        reveal: {
            y: custom % 2 === 0 ? -200 : 200, // Move up/down
            x: custom % 2 === 0 ? -100 : 100, // Move diagonal
            rotate: custom % 2 === 0 ? 5 : -5,
            transition: { duration: 1.2, ease: "easeIn" }
        }
    });

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-sky-100" // Soft blue sky background
            exit={{ opacity: 0, transition: { duration: 0.5 } }} // Final cleanup fade of the container only
        >
            {/* Background Sky Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />

            {/* Welcome Text */}
            <AnimatePresence>
                {textVisible && (
                    <motion.div
                        className="absolute z-[60] text-center"
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.4 } }}
                    >
                        <h1 className="text-4xl md:text-5xl font-scratchy text-gray-700 tracking-wider">
                            Welcome ☁️
                        </h1>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- FOREGROUND CURTAINS (The Main Event) --- */}

            {/* Left Curtain */}
            <CloudCurtain
                className="top-[-10%] left-[-25%] w-[80vw] h-[120vh]"
                variants={leftCurtainVariants}
                animate={isRevealing ? "reveal" : "animate"}
                style={{ zIndex: 50 }}
            />

            {/* Right Curtain */}
            <CloudCurtain
                className="top-[-10%] right-[-25%] w-[80vw] h-[120vh]"
                variants={rightCurtainVariants}
                animate={isRevealing ? "reveal" : "animate"}
                style={{ zIndex: 50 }}
            />

            {/* --- SECONDARY DEPTH CLOUDS --- */}

            {/* Bottom Center - Drifts down */}
            <CloudCurtain
                className="bottom-[-20%] left-[20%] w-[60vw] h-[60vh] opacity-80"
                variants={secondaryCloudVariants(1)}
                animate={isRevealing ? "reveal" : "animate"}
                style={{ zIndex: 40 }}
            />

            {/* Top Center - Drifts up */}
            <CloudCurtain
                className="top-[-20%] right-[30%] w-[50vw] h-[50vh] opacity-80"
                variants={secondaryCloudVariants(2)}
                animate={isRevealing ? "reveal" : "animate"}
                style={{ zIndex: 30 }}
            />

        </motion.div>
    );
};

export default LoadingScreen;
