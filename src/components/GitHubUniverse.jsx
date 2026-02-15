/* GitHub Universe Section */
import { motion } from 'framer-motion';

const GitHubUniverse = () => {
    // Generate a grid of "contribution" squares
    // 7 rows, ~20 columns for a visual stripe
    const rows = 5;
    const cols = 15;
    const squares = Array.from({ length: rows * cols }, (_, i) => ({
        id: i,
        // Randomize "contribution" level (0-4)
        level: Math.floor(Math.random() * 5),
    }));

    const getLevelColor = (level) => {
        switch (level) {
            case 0: return '#ebedf0'; // Empty
            case 1: return '#9be9a8'; // Light green
            case 2: return '#40c463'; // Medium green
            case 3: return '#30a14e'; // Deep green
            case 4: return '#216e39'; // Dark green
            default: return '#ebedf0';
        }
    };

    return (

        <section className="relative z-50 py-20 px-6 bg-white/90 border-t-2 border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl md:text-6xl font-scratchy text-gray-800 mb-6">
                    My GitHub Universe 🌌
                </h2>

                <p className="text-xl text-gray-600 font-body mb-10 max-w-2xl mx-auto">
                    I treat my commit history like a daily journal. Some days are poetic functionality, others are just fixing typos in comments.
                </p>

                {/* Decorative Contribution Grid */}
                <div className="flex justify-center mb-12 overflow-hidden">
                    <div
                        className="grid gap-1 p-4 bg-white rounded-xl shadow-inner border border-gray-200"
                        style={{
                            gridTemplateColumns: `repeat(${cols}, 12px)`,
                            gridTemplateRows: `repeat(${rows}, 12px)`
                        }}
                    >
                        {squares.map((sq, i) => (
                            <motion.div
                                key={sq.id}
                                className="w-3 h-3 rounded-[2px]"
                                style={{ backgroundColor: getLevelColor(sq.level) }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    delay: i * 0.005,
                                    type: 'spring',
                                    stiffness: 200,
                                    damping: 10
                                }}
                                whileHover={{
                                    scale: 1.5,
                                    zIndex: 10,
                                    transition: { duration: 0.1 }
                                }}
                            />
                        ))}
                    </div>
                </div>

                <motion.a
                    href="https://github.com/vaibhavcoreai" // Replace with actual user info later
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-body font-bold text-lg shadow-lg hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.98 6.14 17.98C5.68 16.82 5.03 16.32 5.03 16.32C4.13 15.7 5.1 15.71 5.1 15.71C6.1 15.78 6.63 16.74 6.63 16.74C7.52 18.28 8.96 17.82 9.54 17.55C9.63 16.9 9.89 16.46 10.17 16.22C7.96 15.97 5.63 15.11 5.63 11.26C5.63 10.17 6.02 9.27 6.67 8.57C6.56 8.31 6.21 7.3 6.77 5.89C6.77 5.89 7.61 5.63 9.53 6.92C10.33 6.7 11.18 6.6 12.03 6.6C12.87 6.6 13.73 6.7 14.53 6.92C16.45 5.62 17.29 5.89 17.29 5.89C17.85 7.3 17.5 8.31 17.4 8.57C18.05 9.27 18.44 10.17 18.44 11.26C18.44 15.12 16.11 15.96 13.89 16.21C14.24 16.51 14.56 17.11 14.56 18.03C14.56 19.34 14.55 20.4 14.55 20.99C14.55 21.26 14.71 21.58 15.22 21.49C19.18 20.16 22.05 16.41 22.05 11.99C22.05 6.48 17.57 2 12 2Z" />
                    </svg>
                    Explore My Code
                </motion.a>
            </div>
        </section>
    );
};

export default GitHubUniverse;
