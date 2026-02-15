/* Projects Section */
import { motion } from 'framer-motion';

const Projects = () => {
    const isDay = true;
    const sectionPadding = 'py-20';

    /* ... keeping projects array same ... */
    const projects = [
        {
            title: "Writer",
            description: "A sanctuary for your thoughts. Distraction-free writing platform for modern storytellers, featuring real-time sync, focus mode, and a public library for readers.",
            tech: ["React 19", "Firebase Auth", "Cloud Firestore","Vercel","Typescript"],
            github: "https://github.com/vaibhavcoreai/writer.",
            doodle: (
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <circle cx="15" cy="15" r="10" fill="none" stroke="#FFD93D" strokeWidth="2" />
                    <circle cx="11" cy="12" r="1.5" fill="#2d2d2d" />
                    <circle cx="19" cy="12" r="1.5" fill="#2d2d2d" />
                    <path d="M10 18 Q15 22, 20 18" stroke="#2d2d2d" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
            ),
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio created to document my learning journey and growth in technology.",
            tech: ["React", "Tailwind CSS", "Vite","Framer Motion","Typescript","Git & GitHub"],
            github: "https://github.com/vaibhavcoreai/My-portfolio",
            doodle: (
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <circle cx="15" cy="15" r="10" fill="none" stroke="#FFD93D" strokeWidth="2" />
                    <circle cx="11" cy="12" r="1.5" fill="#2d2d2d" />
                    <circle cx="19" cy="12" r="1.5" fill="#2d2d2d" />
                    <path d="M10 18 Q15 22, 20 18" stroke="#2d2d2d" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
            ),
        },
        {
            title: "Playful Interactive Portfolio Website",
            description: "Collection of interactive data visualizations exploring various datasets and storytelling.",
            tech: ["React", "Tailwind CSS", "Vite","Framer Motion","Typescript","Git & GitHub"],
            github: "#",
            doodle: (
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <rect x="5" y="10" width="4" height="15" fill="#FF6B6B" />
                    <rect x="11" y="7" width="4" height="18" fill="#4CAF50" />
                    <rect x="17" y="12" width="4" height="13" fill="#FFD93D" />
                    <rect x="23" y="5" width="4" height="20" fill="#A8DAFF" />
                </svg>
            ),
        },
    ];

    // Mode-aware hover animation
    const getHoverAnimation = () => {
        return {
            scale: 1.05,
            rotate: [0, -8, 8, -5, 5, 0], // Wiggle animation
            transition: {
                rotate: { duration: 0.4, ease: 'easeInOut' },
                scale: { type: 'spring', stiffness: 300, damping: 15 },
            },
        };
    };

    return (
        <section id="projects" className={`${sectionPadding} px-6 bg-white/30`}>
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-5xl md:text-6xl font-scratchy text-gray-800 text-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Things I Built When I Should've Been Studying
                </motion.h2>
                <p className="text-center text-gray-600 font-body text-lg mb-16">
                    (No regrets though 😅)
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-200 relative overflow-hidden"
                            style={{ willChange: 'transform' }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={getHoverAnimation()}
                        >
                            {/* Doodle Accent */}
                            <div className="absolute top-4 right-4 opacity-50">
                                {project.doodle}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-scratchy text-gray-800 mb-3 pr-10">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 font-body mb-4 line-clamp-2">
                                {project.description}
                            </p>

                            {/* Tech Stack Badges */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-body border border-gray-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* GitHub Button */}
                            <motion.a
                                href={project.github}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full font-body text-sm"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                                View Code
                            </motion.a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
