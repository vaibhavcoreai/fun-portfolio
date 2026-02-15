/* STEP 5: ClickBurst Component - Particle Animation */
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ClickBurst = ({ children }) => {
    const [particles, setParticles] = useState([]);

    const handleClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Create 6 star particles
        const newParticles = Array.from({ length: 6 }, (_, i) => ({
            id: Date.now() + i,
            x,
            y,
            angle: (360 / 6) * i,
        }));

        setParticles((prev) => [...prev, ...newParticles]);

        // Remove particles after animation
        setTimeout(() => {
            setParticles((prev) => prev.filter((p) => !newParticles.includes(p)));
        }, 400);
    };

    return (
        <div className="relative inline-block" onClick={handleClick}>
            {children}
            <AnimatePresence>
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute pointer-events-none"
                        style={{
                            left: particle.x,
                            top: particle.y,
                        }}
                        initial={{
                            scale: 0,
                            x: 0,
                            y: 0,
                            opacity: 1,
                        }}
                        animate={{
                            scale: 1.2,
                            x: Math.cos((particle.angle * Math.PI) / 180) * 30,
                            y: Math.sin((particle.angle * Math.PI) / 180) * 30,
                            opacity: 0,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <Star />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

// Star SVG component
const Star = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="#FFD700"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
);

export default ClickBurst;
