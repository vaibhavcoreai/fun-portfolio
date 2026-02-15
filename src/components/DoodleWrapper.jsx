/* STEP 4: DoodleWrapper Component - Enhanced Mode-Aware Animation System */
import { motion } from 'framer-motion';

const DoodleWrapper = ({ children, className = '' }) => {
    // Mode-specific animation settings (Permanent Day Mode)
    const isDay = true;

    // Random initial rotation
    const randomRotation = Math.random() * 10 - 5;

    // Duration based on mode
    const floatDuration = 3 + Math.random();

    // Hover scale based on mode
    const hoverScale = 1.15;

    // Spring physics (Bouncy)
    const springConfig = { stiffness: 400, damping: 10 };

    // Floating animation configuration
    const floatingAnimation = {
        y: [0, -8, 0],
        transition: {
            duration: floatDuration,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    };

    // Hover rotation animation based on mode
    const hoverRotation = isDay
        ? {
            rotate: [0, -8, 8, -5, 5, 0], // Wiggle animation
            transition: {
                duration: 0.4,
                ease: 'easeInOut',
            },
        }
        : {
            rotate: randomRotation + 2, // Slight rotate (1-2 degrees)
            transition: {
                type: 'spring',
                ...springConfig,
            },
        };

    return (
        <motion.div
            className={`inline-block cursor-pointer ${className}`}
            style={{ willChange: 'transform' }} // Performance optimization
            initial={{ rotate: randomRotation }}
            animate={floatingAnimation}
            whileHover={{
                scale: hoverScale,
                ...hoverRotation,
            }}
            whileTap={{
                scale: 0.9,
                transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 15,
                },
            }}
        >
            {children}
        </motion.div>
    );
};

export default DoodleWrapper;
