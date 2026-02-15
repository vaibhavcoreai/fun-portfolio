/* Minimal Dot + Floating Ring Cursor System */
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
    // Only show on non-touch devices
    const [isVisible, setIsVisible] = useState(false);

    // Interaction States
    const [interactionType, setInteractionType] = useState('default');
    const [isClicking, setIsClicking] = useState(false);
    const [showRipple, setShowRipple] = useState(false);

    // Refs for RAF-based smooth movement
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const dotPos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });
    const rafId = useRef(null);

    // Lerp interpolation for smooth follow
    const lerp = (start, end, factor) => start + (end - start) * factor;

    useEffect(() => {
        // Detect if device supports hover (not mobile)
        if (window.matchMedia("(pointer: fine)").matches) {
            setIsVisible(true);
        } else {
            return;
        }

        const moveCursor = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseDown = () => {
            setIsClicking(true);
            setShowRipple(true);
        };

        const handleMouseUp = () => {
            setIsClicking(false);
            setTimeout(() => setShowRipple(false), 600);
        };

        // Hover Detection Logic
        const handleMouseOver = (e) => {
            const target = e.target;

            // Check for buttons first
            if (target.tagName.toLowerCase() === 'button' ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')) {
                setInteractionType('button');
            }
            // Check for links
            else if (target.tagName.toLowerCase() === 'a' ||
                target.closest('a')) {
                setInteractionType('link');
            }
            // Check for hero heading
            else if (target.closest('.hero-name') ||
                target.tagName.toLowerCase() === 'h1' ||
                target.closest('h1')) {
                setInteractionType('heading');
            }
            // Check for any text content
            else if (target.tagName.toLowerCase() === 'p' ||
                target.tagName.toLowerCase() === 'span' ||
                target.tagName.toLowerCase() === 'h2' ||
                target.tagName.toLowerCase() === 'h3') {
                setInteractionType('text');
            }
            else {
                setInteractionType('default');
            }
        };

        // RAF loop for smooth cursor movement
        const animate = () => {
            // Dot follows instantly (no lag)
            dotPos.current.x = mousePos.current.x;
            dotPos.current.y = mousePos.current.y;

            // Ring follows with smooth lag (lerp)
            const ringLerpFactor = 0.15;
            ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, ringLerpFactor);
            ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, ringLerpFactor);

            // Update positions using transform3d
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0)`;
            }
            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
            }

            rafId.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);

        rafId.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    if (!isVisible) return null;

    // Cursor state based on interaction
    const getCursorState = () => {
        switch (interactionType) {
            case 'button':
                return {
                    ringScale: 1.4,
                    ringBorderRadius: '16px',
                    ringBorderWidth: '2.5px',
                    dotScale: 1.2,
                    dotHeight: '8px',
                    dotWidth: '8px',
                };
            case 'link':
                return {
                    ringScale: 1.4,
                    ringBorderRadius: '50%',
                    ringBorderWidth: '2.5px',
                    dotScale: 1.2,
                    dotHeight: '8px',
                    dotWidth: '8px',
                };
            case 'heading':
                return {
                    ringScale: 1.6,
                    ringBorderRadius: '50%',
                    ringBorderWidth: '2px',
                    dotScale: 1,
                    dotHeight: '8px',
                    dotWidth: '8px',
                };
            case 'text':
                return {
                    ringScale: 0.9,
                    ringBorderRadius: '50%',
                    ringBorderWidth: '1.5px',
                    dotScale: 1,
                    dotHeight: '16px',
                    dotWidth: '2px',
                };
            default:
                return {
                    ringScale: 1,
                    ringBorderRadius: '50%',
                    ringBorderWidth: '1.5px',
                    dotScale: 1,
                    dotHeight: '8px',
                    dotWidth: '8px',
                };
        }
    };

    const cursorState = getCursorState();

    return (
        <>
            {/* Inner Dot - Follows instantly */}
            <div
                ref={dotRef}
                className="fixed top-0 left-0 z-[9999] pointer-events-none"
                style={{
                    willChange: 'transform',
                }}
            >
                <motion.div
                    className="bg-black rounded-full"
                    style={{
                        width: cursorState.dotWidth,
                        height: cursorState.dotHeight,
                        marginLeft: `-${parseInt(cursorState.dotWidth) / 2}px`,
                        marginTop: `-${parseInt(cursorState.dotHeight) / 2}px`,
                    }}
                    animate={{
                        scale: isClicking ? cursorState.dotScale * 1.3 : cursorState.dotScale,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 28
                    }}
                />
            </div>

            {/* Outer Ring - Follows with delay */}
            <div
                ref={ringRef}
                className="fixed top-0 left-0 z-[9998] pointer-events-none"
                style={{
                    willChange: 'transform',
                }}
            >
                <motion.div
                    className="border-black"
                    style={{
                        width: '32px',
                        height: '32px',
                        marginLeft: '-16px',
                        marginTop: '-16px',
                        borderWidth: cursorState.ringBorderWidth,
                        opacity: 0.6,
                    }}
                    animate={{
                        scale: isClicking ? cursorState.ringScale * 0.85 : [cursorState.ringScale, cursorState.ringScale * 1.05, cursorState.ringScale],
                        borderRadius: cursorState.ringBorderRadius,
                        opacity: interactionType !== 'default' ? 0.8 : 0.6,
                    }}
                    transition={{
                        scale: {
                            duration: interactionType === 'default' ? 3.5 : 0.2,
                            repeat: interactionType === 'default' ? Infinity : 0,
                            ease: "easeInOut"
                        },
                        borderRadius: { duration: 0.3, ease: 'easeOut' },
                        opacity: { duration: 0.2 }
                    }}
                />

                {/* Click Ripple Effect */}
                <AnimatePresence>
                    {showRipple && (
                        <motion.div
                            className="absolute border-2 border-black rounded-full"
                            style={{
                                width: '32px',
                                height: '32px',
                                top: '0',
                                left: '0',
                                opacity: 0.4,
                            }}
                            initial={{ scale: 1, opacity: 0.4 }}
                            animate={{ scale: 1.8, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        />
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default CustomCursor;
