import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import LevelUpTimeline from './components/LevelUpTimeline';
import Projects from './components/Projects';
import OfflineMode from './components/OfflineMode';
import HeaderClouds from './components/HeaderClouds';
import GitHubUniverse from './components/GitHubUniverse';
import ContactFooter from './components/ContactFooter';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor'; // Import Cursor
import Navbar from './components/Navbar';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    // Prevent scrolling while loading and force scroll to top
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden';
            window.scrollTo(0, 0);
        } else {
            document.body.style.overflow = 'unset';
            // Optional: Ensure we stay at top when loading finishes
            window.scrollTo(0, 0);
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isLoading]);

    return (
        <div className="min-h-screen transition-colors duration-700 ease-in-out bg-beige text-gray-900 overflow-x-hidden">
            {/* Custom Cursor System */}
            <CustomCursor />

            <AnimatePresence mode="wait">
                {isLoading && (
                    <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
                )}
            </AnimatePresence>

            {/* Navigation Menu */}
            {!isLoading && <Navbar />}

            {/* Main Content - Loads behind but reveals after */}
            <div
                className={`transition-all duration-1000 ease-out transform origin-top 
                    ${isLoading ? 'scale-[0.98] brightness-95' : 'scale-100 brightness-100'}
                `}
            >
                {/* Header Clouds - Decorative Top Elements */}
                <HeaderClouds />

                {/* Hero Section */}
                <Hero />

                {/* About Section */}
                <About />

                {/* Level-Up Timeline Section */}
                <LevelUpTimeline />

                {/* Projects Section */}
                <Projects />

                {/* Offline Mode Section */}
                <OfflineMode />

                {/* GitHub Universe Section */}
                <GitHubUniverse />

                {/* Contact Footer Section */}
                <ContactFooter />
            </div>
        </div>
    );
}

export default App;
