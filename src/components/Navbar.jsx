/* Navigation Menu - Hand-drawn Style */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Work', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <>
            {/* Desktop & Mobile Navbar Container */}
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-6'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <div className={`max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-end transition-all duration-300`}>
                    {/* Desktop Menu */}
                    <div className={`hidden md:flex items-center gap-8 ${scrolled
                        ? 'bg-white/80 backdrop-blur-md px-8 py-3 rounded-full shadow-sm border border-white/50'
                        : ''
                        } transition-all duration-300`}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative font-scratchy text-xl text-gray-700 hover:text-gray-900 transition-colors group"
                            >
                                {link.name}
                                {/* Hand-drawn circle hover effect */}
                                <svg
                                    className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    viewBox="0 0 100 60"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M10,30 Q25,50 50,50 T90,30 Q80,10 50,10 T10,30"
                                        fill="none"
                                        stroke="#FFD700"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        pathLength="1"
                                        strokeDasharray="1"
                                        strokeDashoffset="0"
                                    />
                                </svg>
                            </a>
                        ))}

                        {/* Resume Button */}
                        <motion.a
                            href="https://github.com/vaibhavcoreai/fun-portfolio"
                            className="bg-gray-800 text-white font-scratchy text-lg px-5 py-2 rounded-full hover:bg-gray-900 transition-colors"
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            GitHub
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden z-50 relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        whileTap={{ scale: 0.9 }}
                    >
                        {/* Hamburger Lines with Animation */}
                        <motion.span
                            className="w-8 h-0.5 bg-gray-800 rounded-full block"
                            animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
                        />
                        <motion.span
                            className="w-6 h-0.5 bg-gray-800 rounded-full block"
                            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                        />
                        <motion.span
                            className="w-8 h-0.5 bg-gray-800 rounded-full block"
                            animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }}
                        />
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-beige flex flex-col items-center justify-center"
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        {/* Background Doodles */}
                        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                            <div className="absolute top-20 left-10 text-6xl rotate-12">☁️</div>
                            <div className="absolute bottom-20 right-10 text-6xl -rotate-12">🌱</div>
                            <div className="absolute top-1/2 left-4 text-4xl rotate-45">✨</div>
                        </div>

                        {/* Mobile Links */}
                        <div className="flex flex-col items-center gap-8 z-10">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="font-scratchy text-5xl text-gray-800 hover:text-primary transition-colors cursor-pointer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 3 : -3 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}

                            <motion.a
                                href="https://github.com/vaibhavcoreai/fun-portfolio"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-8 px-8 py-3 bg-gray-800 text-white font-scratchy text-2xl rounded-full"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                GitHub
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
