/* Decorative Floating Elements - Conditionally Rendered */
import { motion } from 'framer-motion';
import DoodleWrapper from './DoodleWrapper';

const FloatingDecorations = () => {
    const decorations = [
        {
            id: 'star1',
            icon: (
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path
                        d="M15 2 L17 12 L15 22 L13 12 Z M2 15 L12 17 L22 15 L12 13 Z"
                        fill="none"
                        stroke="#FFD93D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            position: 'top-20 left-10',
        },
        {
            id: 'star2',
            icon: (
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path
                        d="M12.5 1 L14 10 L12.5 18 L11 10 Z M1 12.5 L10 14 L18 12.5 L10 11 Z"
                        fill="none"
                        stroke="#FF6B6B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            position: 'top-40 right-20',
        },
        {
            id: 'cloud1',
            icon: (
                <svg width="50" height="30" viewBox="0 0 50 30" fill="none">
                    <path
                        d="M10 20 Q8 17, 10 14 Q12 10, 18 12 Q22 8, 28 10 Q35 8, 38 14 Q42 15, 40 20 Q42 23, 38 24 Q35 26, 28 23 Q22 26, 18 23 Q10 25, 10 20 Z"
                        fill="#A8DAFF"
                        stroke="#2d2d2d"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            position: 'bottom-40 left-20',
        },
        {
            id: 'sparkle1',
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M10 2 L11 9 L10 16 L9 9 Z M2 10 L9 11 L16 10 L9 9 Z"
                        fill="#4CAF50"
                    />
                </svg>
            ),
            position: 'top-60 right-40',
        },
    ];

    return (
        <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
            {decorations.map((deco, index) => (
                <div key={deco.id} className={`absolute ${deco.position}`}>
                    <DoodleWrapper>
                        {deco.icon}
                    </DoodleWrapper>
                </div>
            ))}
        </div>
    );
};

export default FloatingDecorations;
