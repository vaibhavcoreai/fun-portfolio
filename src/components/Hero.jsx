/* Hero Section Component - Step 6 */
import { motion } from 'framer-motion';
import DoodleWrapper from './DoodleWrapper';
import ClickBurst from './ClickBurst';
import CTAButton from './CTAButton';
import { useState } from 'react';

const CinematicBird = () => {
    return (
        <motion.div
            className="absolute top-[20%] left-[-10%] pointer-events-none z-20"
            initial={{ x: "-10vw", y: 0 }}
            animate={{
                x: "110vw",
                y: [0, -10, 5, -5, 0] // Gentle wave
            }}
            transition={{
                x: { duration: 4, ease: "linear", delay: 1.5 }, // Wait for clouds to open
                y: { duration: 4, ease: "easeInOut", delay: 1.5 }
            }}
        >
            <motion.svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.3, repeat: Infinity }}
            >
                <path
                    d="M2 18 Q10 12, 16 18 Q22 24, 30 18"
                    stroke="#4b5563"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                />
                <path
                    d="M16 18 Q22 10, 28 14"
                    stroke="#4b5563"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                />
            </motion.svg>
        </motion.div>
    );
};

const Hero = () => {
    const [hoveredDoodle, setHoveredDoodle] = useState(null);
    const [birdHasFlown, setBirdHasFlown] = useState(false);

    // Unmount bird after animation (approx duration + delay)
    useState(() => {
        const timer = setTimeout(() => setBirdHasFlown(true), 6000);
        return () => clearTimeout(timer);
    }, []);

    const isDay = true;

    // Mode-aware spacing
    const sectionPadding = 'py-12 md:py-20'; /* Reduced padding for mobile */

    return (
        <section id="home" className={`relative z-10 min-h-screen flex items-center justify-center ${sectionPadding} px-4 md:px-6 overflow-hidden`}>
            {/* Cinematic Bird Flyover - One time only */}
            {!birdHasFlown && <CinematicBird />}

            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 md:gap-16 items-center">

                {/* Left Side - Text Content */}
                <div className="space-y-6">
                    {/* Handwritten Heading */}
                    <motion.div
                        className="hero-name"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: [0, -8, 0] // Gentle floating loop
                        }}
                        transition={{
                            opacity: { duration: 0.6 },
                            y: {
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1 // Start floating after reveal
                            }
                        }}
                        whileHover={{ scale: 1.02, rotate: 1 }}
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-scratchy text-gray-800 leading-tight cursor-default">
                            Hello! I'm
                            Vaibhav Manaji
                        </h1>
                    </motion.div>

                    {/* Subtext */}
                    <motion.p
                        className="text-lg md:text-2xl text-gray-600 font-body"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        I teach computers to think<br />
                        <span className="text-gray-500">(we're both still learning)</span>
                    </motion.p>

                    {/* CTA Button - Mode-Aware */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <CTAButton onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                            Let's Build Cool Stuff 🐣
                        </CTAButton>
                    </motion.div>
                </div>

                {/* Right Side - Floating Doodles (Row on mobile, Floating on desktop) */}
                <div className="relative w-full text-gray-800 mt-12 md:mt-0 h-auto md:h-[500px] flex flex-wrap justify-center items-center gap-6 md:block">
                    {/* Cloud Doodle - Top Left */}
                    <div
                        className="relative md:absolute md:top-8 md:left-12 scale-75 md:scale-100 origin-center md:origin-top-left"
                        onMouseEnter={() => setHoveredDoodle('cloud')}
                        onMouseLeave={() => setHoveredDoodle(null)}
                    >
                        <ClickBurst>
                            <DoodleWrapper>
                                <svg width="144" height="90" viewBox="0 0 80 50" fill="none">
                                    <path
                                        d="M15 30 Q10 25, 15 20 Q20 15, 30 18 Q35 10, 45 15 Q55 12, 60 20 Q70 22, 65 30 Q68 35, 60 38 Q55 42, 45 38 Q35 42, 25 38 Q15 40, 15 30 Z"
                                        fill="#A8DAFF"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </DoodleWrapper>
                        </ClickBurst>
                        {hoveredDoodle === 'cloud' && (
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap"
                            >
                                Dreamy thoughts ☁️
                            </motion.div>
                        )}
                    </div>

                    {/* Brain Doodle - Top Right */}
                    <div
                        className="relative md:absolute md:top-8 md:right-32 scale-75 md:scale-100 origin-center md:origin-top-right"
                        onMouseEnter={() => setHoveredDoodle('brain')}
                        onMouseLeave={() => setHoveredDoodle(null)}
                    >
                        <ClickBurst>
                            <DoodleWrapper>
                                <svg width="126" height="126" viewBox="0 0 70 70" fill="none">
                                    {/* Brain outline */}
                                    <path
                                        d="M25 15 Q15 15, 15 25 Q10 30, 15 35 Q12 40, 18 45 Q20 50, 30 52 Q35 52, 40 50 Q45 48, 50 45 Q55 40, 52 35 Q58 30, 52 25 Q52 15, 42 15 Q38 12, 33 15 Q28 12, 25 15 Z"
                                        fill="#FFB6C1"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                    />
                                    {/* Brain squiggles */}
                                    <path d="M25 25 Q30 28, 25 32" fill="none" stroke="#2d2d2d" strokeWidth="2" />
                                    <path d="M35 22 Q40 25, 35 28" fill="none" stroke="#2d2d2d" strokeWidth="2" />
                                    <path d="M42 28 Q47 30, 42 34" fill="none" stroke="#2d2d2d" strokeWidth="2" />
                                    <path d="M30 35 Q35 38, 30 42" fill="none" stroke="#2d2d2d" strokeWidth="2" />
                                </svg>
                            </DoodleWrapper>
                        </ClickBurst>
                        {hoveredDoodle === 'brain' && (
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap"
                            >
                                AI & ML 🧠
                            </motion.div>
                        )}
                    </div>

                    {/* Heart Doodle - Mid Right */}
                    <div
                        className="relative md:absolute md:top-48 md:right-8 scale-75 md:scale-100 origin-center"
                        onMouseEnter={() => setHoveredDoodle('heart')}
                        onMouseLeave={() => setHoveredDoodle(null)}
                    >
                        <ClickBurst>
                            <DoodleWrapper>
                                <svg width="108" height="108" viewBox="0 0 60 60" fill="none">
                                    <path
                                        d="M30 50 C30 50, 12 35, 12 22 C12 15, 17 12, 22 15 C25 17, 30 23, 30 23 C30 23, 35 17, 38 15 C43 12, 48 15, 48 22 C48 35, 30 50, 30 50 Z"
                                        fill="#FF6B6B"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </DoodleWrapper>
                        </ClickBurst>
                        {hoveredDoodle === 'heart' && (
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap"
                            >
                                Made with love ❤️
                            </motion.div>
                        )}
                    </div>

                    {/* Star Doodle - Mid Left */}
                    <div
                        className="relative md:absolute md:bottom-40 md:left-16 scale-75 md:scale-100 origin-center"
                        onMouseEnter={() => setHoveredDoodle('star')}
                        onMouseLeave={() => setHoveredDoodle(null)}
                    >
                        <ClickBurst>
                            <DoodleWrapper>
                                <svg width="99" height="99" viewBox="0 0 55 55" fill="none">
                                    <path
                                        d="M27.5 5 L32 20 L48 22 L37 32 L40 48 L27.5 40 L15 48 L18 32 L7 22 L23 20 Z"
                                        fill="#FFD700"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </DoodleWrapper>
                        </ClickBurst>
                        {hoveredDoodle === 'star' && (
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap"
                            >
                                Shining bright ⭐
                            </motion.div>
                        )}
                    </div>

                    {/* Sparkle - Bottom Left */}
                    <div
                        className="relative md:absolute md:bottom-8 md:left-12 scale-75 md:scale-100 origin-center md:origin-bottom-left"
                        onMouseEnter={() => setHoveredDoodle('sparkle')}
                        onMouseLeave={() => setHoveredDoodle(null)}
                    >
                        <ClickBurst>
                            <DoodleWrapper>
                                <svg width="90" height="90" viewBox="0 0 50 50" fill="none">
                                    <path
                                        d="M25 5 L27 20 L25 35 L23 20 Z M5 25 L20 27 L35 25 L20 23 Z"
                                        fill="none"
                                        stroke="#FFD700"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </DoodleWrapper>
                        </ClickBurst>
                        {hoveredDoodle === 'sparkle' && (
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap"
                            >
                                Innovation ✨
                            </motion.div>
                        )}
                    </div>

                    {/* Graph Icon - Bottom Right */}
                    <div
                        className="relative md:absolute md:bottom-8 md:right-16 scale-75 md:scale-100 origin-center md:origin-bottom-right"
                        onMouseEnter={() => setHoveredDoodle('graph')}
                        onMouseLeave={() => setHoveredDoodle(null)}
                    >
                        <ClickBurst>
                            <DoodleWrapper>
                                <svg width="108" height="108" viewBox="0 0 60 60" fill="none">
                                    {/* Graph axes */}
                                    <path d="M10 50 L10 10 L50 10" stroke="#2d2d2d" strokeWidth="2.5" strokeLinecap="round" />
                                    {/* Graph line */}
                                    <path
                                        d="M10 45 Q20 35, 30 30 T50 15"
                                        fill="none"
                                        stroke="#4CAF50"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                    {/* Data points */}
                                    <circle cx="10" cy="45" r="3" fill="#4CAF50" />
                                    <circle cx="30" cy="30" r="3" fill="#4CAF50" />
                                    <circle cx="50" cy="15" r="3" fill="#4CAF50" />
                                </svg>
                            </DoodleWrapper>
                        </ClickBurst>
                        {hoveredDoodle === 'graph' && (
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap"
                            >
                                Data Science 📊
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
