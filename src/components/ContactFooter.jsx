/* Contact Footer Section */
import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

const SocialButton = ({ href, icon, label, color }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2 group"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
    >
        <div
            className={`w-14 h-14 flex items-center justify-center rounded-full text-white shadow-md transition-shadow group-hover:shadow-xl`}
            style={{ backgroundColor: color }}
        >
            {icon}
        </div>
        <span className="text-sm font-body text-gray-600 font-medium group-hover:text-gray-900 transition-colors">
            {label}
        </span>
    </motion.a>
);

const ContactFooter = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (

        <section id="contact" className="relative z-50 py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-5xl md:text-6xl font-scratchy text-gray-800 mb-8">
                    Let's Build Something Cool Together 💌
                </h2>

                {/* Animated Envelope Illustration */}
                <motion.div
                    className="relative w-64 h-48 mx-auto mb-16 cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {/* Envelope Body */}
                    <svg width="100%" height="100%" viewBox="0 0 200 150" fill="none">
                        {/* Shadow */}
                        <ellipse cx="100" cy="140" rx="90" ry="10" fill="#000" opacity="0.1" />

                        {/* Base */}
                        <rect x="20" y="40" width="160" height="100" rx="5" fill="#fce7f3" stroke="#2d2d2d" strokeWidth="3" />

                        {/* Flap (Animated) */}
                        <motion.path
                            d="M20 40 L100 90 L180 40"
                            fill="#fbcfe8"
                            stroke="#2d2d2d"
                            strokeWidth="3"
                            strokeLinecap="round"
                            style={{ originY: 0 }} // Rotate from top
                            animate={{
                                scaleY: isHovered ? -1 : 1,
                                y: isHovered ? -20 : 0
                            }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        />

                        {/* Note inside (Revealed on hover) */}
                        <motion.rect
                            x="40" y="20" width="120" height="80" rx="2" fill="#fff" stroke="#e5e7eb" strokeWidth="2"
                            initial={{ y: 40, opacity: 0 }}
                            animate={{
                                y: isHovered ? -40 : 40,
                                opacity: isHovered ? 1 : 0
                            }}
                            transition={{ delay: 0.1 }}
                        />
                        <motion.path
                            d="M50 0 L150 0"
                            stroke="#2d2d2d" strokeWidth="2" strokeDasharray="4 4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHovered ? 1 : 0 }}
                            transform="translate(0, -20)"
                        />

                        {/* Diagonal Lines */}
                        <path d="M20 140 L100 90 L180 140" fill="none" stroke="#2d2d2d" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
                    </svg>
                </motion.div>

                <p className="text-xl text-gray-600 font-body mb-12">
                    Have an idea? Creating a startup? Or just want to say hi? <br />
                    My inbox is always open!
                </p>

                {/* Social Links Grid */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    <SocialButton
                        href="vaibhavmanaji43@gmail.com"
                        label="Email"
                        color="#EA4335"
                        icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>}
                    />
                    <SocialButton
                        href="https://www.linkedin.com/in/vaibhav-manaji-40a9ab290/"
                        label="LinkedIn"
                        color="#0A66C2"
                        icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>}
                    />
                    <SocialButton
                        href="https://github.com/vaibhavcoreai"
                        label="GitHub"
                        color="#333333"
                        icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>}
                    />
                    <SocialButton
                        href="https://www.kaggle.com/vaibhavmanaji05"
                        label="Kaggle"
                        color="#20BEFF"
                        icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.825 23.859c-.022.092-.117.141-.235.141h-3.17c-.112 0-.21-.033-.289-.118l-6.155-6.935-1.696 1.636v5.278c0 .117-.07.141-.14.141h-3.07c-.117 0-.14-.047-.14-.141v-23.718c0-.094.047-.141.14-.141h3.07c.094 0 .14.047.14.141v14.496l7.465-8.526c.07-.094.164-.118.281-.118h3.333c.118 0 .211.094.142.235l-5.698 6.079 5.961 11.393c.047.094.059.13.062.157z" /></svg>}
                    />
                    <SocialButton
                        href="https://leetcode.com/u/vaibhavaicore/"
                        label="LeetCode"
                        color="#FFA116"
                        icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.56 5.704a2.895 2.895 0 0 0 .159 4.296A2.895 2.895 0 0 0 11.9 9.876l2.97-4.482A1.374 1.374 0 0 0 13.483 0zM5.316 4.417A5.684 5.684 0 0 0 0 10.038v7.054a5.684 5.684 0 0 0 5.684 5.684h11.23a5.684 5.684 0 0 0 5.685-5.684v-2.09a1.442 1.442 0 0 0-2.885 0v2.09a2.8 2.8 0 0 1-2.8 2.8h-11.23a2.8 2.8 0 0 1-2.8-2.8v-7.054a2.8 2.8 0 0 1 2.8-2.8h2.09a1.442 1.442 0 0 0 0-2.885zM21.2 10.297a1.414 1.414 0 0 0-1.002.444l-6.837 7.21a1.415 1.415 0 0 0 2.053 1.948l6.837-7.21a1.415 1.415 0 0 0-1.05-2.392zM15.42 8.019a1.328 1.328 0 0 0-.916.385l-7.397 7.042a1.328 1.328 0 1 0 1.83 1.921l7.397-7.043a1.328 1.328 0 0 0-.914-2.305z" /></svg>}
                    />
                </div>

                <div className="mt-20 text-sm text-gray-500 font-body">
                    © {new Date().getFullYear()} <a href="https://vaibhavmanaji.in" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors underline decoration-dotted">Vaibhav Manaji</a>. Made with 💙 and ☕
                </div>
            </div>
        </section>
    );
};

export default ContactFooter;
