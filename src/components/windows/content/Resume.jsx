import { useEffect, useRef, useState } from "react";
import "./Resume.css";

const MIN_LOAD_SCREEN_MS = 2200;
const NUM_BLOCKS = 20;

function ResumeContent() {
    const [loading, setLoading] = useState(true);
    const [pdfReady, setPdfReady] = useState(false);
    const [progress, setProgress] = useState(0);

    const mountTimeRef = useRef(Date.now());

    // Animate the loading bar
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= NUM_BLOCKS) {
                    clearInterval(interval);
                    return NUM_BLOCKS;
                }

                return prev + 1;
            });
        }, MIN_LOAD_SCREEN_MS / NUM_BLOCKS);

        return () => clearInterval(interval);
    }, []);

    // Don't hide the loading screen until BOTH:
    // 1. The PDF has loaded
    // 2. The minimum animation time has passed
    useEffect(() => {
        if (!pdfReady) {
            return;
        }

        const elapsed = Date.now() - mountTimeRef.current;
        const remaining = Math.max(MIN_LOAD_SCREEN_MS - elapsed, 0);

        const timer = setTimeout(() => {
            setLoading(false);
        }, remaining);

        return () => clearTimeout(timer);
    }, [pdfReady]);

    return (
        <div className="resume-container">

            {loading && (
                <div className="loading-screen">

                    <h2>Opening Resume.pdf...</h2>

                    <div className="progress-bar">
                        {Array.from({ length: NUM_BLOCKS }).map((_, index) => (
                            <div
                                key={index}
                                className={`progress-block ${
                                    index < progress ? "filled" : ""
                                }`}
                            />
                        ))}
                    </div>

                    <p>Please wait...</p>

                </div>
            )}

            <iframe
                src="/Camille_Shreeve_Resume.pdf"
                title="Resume"
                onLoad={() => setPdfReady(true)}
                className="resume-frame"
            />

        </div>
    );
}

export default ResumeContent;
