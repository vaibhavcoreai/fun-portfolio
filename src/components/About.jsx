/* About Section Component */
import { motion } from 'framer-motion';
import DoodleWrapper from './DoodleWrapper';

const About = () => {
    const isDay = true;

    return (
        <section id="about" className={`relative ${isDay ? 'py-20' : 'py-32'} px-6 overflow-hidden`}>
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left Side - Doodle Image */}
                    <motion.div
                        className="relative flex justify-center md:justify-end"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            {/* Decorative blob background */}
                            <div className={`absolute inset-0 rounded-full ${isDay ? 'bg-secondary/20 animate-blob' : 'bg-gray-200/50'} blur-xl transform scale-110`}></div>

                            <DoodleWrapper disabled={!isDay}>
                                <img
                                    src="/images/about-doodle.png"
                                    alt="Vaibhav Doodle"
                                    className={`w-full h-full object-contain drop-shadow-lg transform transition-transform duration-500 ${isDay ? 'hover:scale-110 hover:rotate-3' : 'hover:scale-105'}`}
                                />
                            </DoodleWrapper>

                            {/* Floating decorative elements around image */}
                            <motion.div
                                className="absolute -top-4 -right-4 text-4xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                ✨
                            </motion.div>
                            <motion.div
                                className="absolute -bottom-4 -left-4 text-4xl"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                            >
                                🙈
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side - Text Content */}
                    <motion.div
                        className="space-y-6 text-center md:text-left"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-scratchy text-gray-800">
                            A Little About Me 👨‍💻
                        </h2>

                        <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-body">
                            <p>
                                Hey there! I'm <span className="font-bold text-gray-900">Vaibhav</span>, a creative developer who loves blending code with chaos (the good kind!).
                            </p>
                            <p>
                                I build things with <span className="bg-primary/20 px-1 rounded transform -rotate-1 inline-block">Artificial Intelligence</span> and
                                <span className="bg-secondary/20 px-1 rounded transform rotate-1 inline-block mx-1">Web Development</span>.
                                My goal is to build digital experiences that are not just functional, but also fun and memorable.
                            </p>
                            <p> I love mixing logic with creativity. Clean code on the inside, playful design on the outside.
                            </p>
                            <p>    
                                When I'm not debugging, exploring new tech, vibe-coding something unnecessary but fun, or just wondering why my code works (or doesn't).
                            </p>
                        </div>

                        {/* Fun Stats or Tags */}
                        <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-3">
                            {['🚀 Problem Solver', '🎶Singer', '🤖 AI Enthusiast', '☕ Coffee Lover','🎹 Instruments Player'].map((tag, index) => (
                                <motion.span
                                    key={tag}
                                    className={`px-4 py-2 rounded-full border-2 border-gray-800 text-sm font-bold ${isDay ? 'bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-gray-800' : 'bg-gray-100 text-gray-800'}`}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: 'spring', stiffness: 400 }}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
