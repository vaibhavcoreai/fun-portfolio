/* Mode-Aware CTA Button Component */
import { motion } from 'framer-motion';

const CTAButton = ({ children, onClick, className = '' }) => {
    const isDay = true;

    // Animation settings (Day Mode)
    const hoverScale = 1.15;
    const tapScale = 0.8;
    const stiffness = 500;

    return (
        <motion.button
            onClick={onClick}
            className={`bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-body font-semibold shadow-lg border-2 border-gray-800 ${className}`}
            style={{ willChange: 'transform' }}
            whileHover={{
                scale: hoverScale,
                y: -5,
                transition: {
                    type: 'spring',
                    stiffness: stiffness,
                    damping: isDay ? 8 : 10, // More bounce in silly mode
                },
            }}
            whileTap={{
                scale: tapScale,
                y: 0,
                transition: {
                    type: 'spring',
                    stiffness: 600,
                    damping: 15,
                },
            }}
        >
            {children}
        </motion.button>
    );
};

export default CTAButton;
