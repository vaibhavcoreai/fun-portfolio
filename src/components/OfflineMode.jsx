/* Offline Mode Section */
import { motion } from 'framer-motion';

const OfflineMode = () => {
    const sectionPadding = 'py-20';
    const hobbies = [
        /* ... hobbies keys ... */
        {
            name: "Singing",
            emoji: "🎤",
            color: "#FFB6C1",
        },
        {
            name: "Writing",
            emoji: "✍️",
            color: "#B4E4FF",
        },
        {
            name: "Fitness",
            emoji: "💪",
            color: "#D4F1D4",
        },
        {
            name: "Thinking about AI & Humans",
            emoji: "🤔",
            color: "#FFE5B4",
        },
    ];

    return (
        <section className={`${sectionPadding} px-6`}>
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-5xl md:text-6xl font-scratchy text-gray-800 text-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    OfflineMode 🧩
                </motion.h2>
                <p className="text-center text-gray-600 font-body text-lg mb-16">
                    When I'm not teaching computers to think...
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    {hobbies.map((hobby, index) => (
                        <motion.div
                            key={hobby.name}
                            className="px-8 py-6 rounded-full shadow-lg border-2 border-gray-800"
                            style={{
                                backgroundColor: hobby.color,
                            }}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 200,
                                damping: 10,
                            }}
                            whileHover={{
                                scale: 1.1,
                                y: -5,
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                },
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-3xl">{hobby.emoji}</span>
                                <span className="text-xl font-body text-gray-800 font-semibold whitespace-nowrap">
                                    {hobby.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfflineMode;
