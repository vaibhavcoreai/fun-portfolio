/* Level-Up Timeline Section */
import { motion } from 'framer-motion';
import DoodleWrapper from './DoodleWrapper';

const LevelUpTimeline = () => {
    const sectionPadding = 'py-20';
    const skills = [
        /* ... existing skills ... */
        {
            title: "Foundation Arc",
            items: ["Python", "SQL", "Statistics", "Linear Algebra"],
            color: "#FFE5B4", // Peach
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect x="8" y="15" width="24" height="18" fill="none" stroke="#2d2d2d" strokeWidth="2" rx="2" />
                    <path d="M8 15 L20 8 L32 15" fill="none" stroke="#2d2d2d" strokeWidth="2" strokeLinejoin="round" />
                    <rect x="16" y="22" width="8" height="11" fill="#2d2d2d" />
                </svg>
            ),
        },
        {
            title: "Data Explorer Mode",
            items: ["Pandas", "Matplotlib", "EDA"],
            color: "#B4E4FF", // Light blue
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="12" fill="none" stroke="#2d2d2d" strokeWidth="2" />
                    <path d="M28 28 L35 35" stroke="#2d2d2d" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="20" cy="20" r="6" fill="#4CAF50" opacity="0.3" />
                </svg>
            ),
        },
        {
            title: "Teaching Machines Stuff",
            items: ["Linear Regression", "Logistic Regression", "ML Mini Projects"],
            color: "#D4F1D4", // Mint green
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect x="8" y="12" width="24" height="16" fill="none" stroke="#2d2d2d" strokeWidth="2" rx="2" />
                    <path d="M12 20 L18 16 L24 22 L30 18" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <circle cx="18" cy="16" r="2" fill="#FF6B6B" />
                    <circle cx="24" cy="22" r="2" fill="#FF6B6B" />
                    <circle cx="30" cy="18" r="2" fill="#FF6B6B" />
                </svg>
            ),
        },
        {
            title: "Currently Loading...",
            items: ["Neural Networks", "AI + Human Behavior"],
            color: "#FFD6E8", // Pink
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="10" fill="none" stroke="#2d2d2d" strokeWidth="2" strokeDasharray="4 4">
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 20 20"
                            to="360 20 20"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </circle>
                    <path d="M20 15 L20 20 L25 20" stroke="#2d2d2d" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
        },
    ];

    return (
        <section className={`${sectionPadding} px-6`}>
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-5xl md:text-6xl font-scratchy text-gray-800 text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    My Level-Up Timeline 🎮
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            className="relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <motion.div
                                className="p-6 rounded-2xl shadow-lg border-2 border-gray-800 h-full"
                                style={{
                                    backgroundColor: skill.color,
                                    transform: `rotate(${Math.random() * 4 - 2}deg)`,
                                }}
                                whileHover={{
                                    y: -8,
                                    rotate: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 15,
                                    },
                                }}
                            >
                                {/* Doodle Icon */}
                                <div className="mb-4 flex justify-center">
                                    <DoodleWrapper>{skill.icon}</DoodleWrapper>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-scratchy text-gray-800 mb-4 text-center">
                                    {skill.title}
                                </h3>

                                {/* Skills List */}
                                <ul className="space-y-2">
                                    {skill.items.map((item) => (
                                        <li
                                            key={item}
                                            className="text-gray-700 font-body flex items-start"
                                        >
                                            <span className="mr-2">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LevelUpTimeline;
