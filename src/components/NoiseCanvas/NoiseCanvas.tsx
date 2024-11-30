import React, { useEffect, useRef } from "react";
import styles from '@/styles/Header.module.css';

const NoiseCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const FRAME_INTERVAL = 50; // Reducir intervalo a 50ms
    let lastFrameTime = 0;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");

        const resizeCanvas = () => {
            if (canvas && ctx) {
                const width = window.innerWidth;
                const height = window.innerHeight;
                canvas.width = width;
                canvas.height = height;
                ctx.scale(1, 1);
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const generateNoise = () => {
            if (!ctx) return;
            const imageData = ctx.createImageData(window.innerWidth, window.innerHeight);
            for (let i = 0; i < imageData.data.length; i += 4) {
                const gray = Math.random() * 255;
                imageData.data[i] = gray;
                imageData.data[i + 1] = gray;
                imageData.data[i + 2] = gray;
                imageData.data[i + 3] = 255;
            }
            ctx.putImageData(imageData, 0, 0);
        };

        const render = (timestamp: number) => {
            if (timestamp - lastFrameTime > FRAME_INTERVAL) {
                generateNoise();
                lastFrameTime = timestamp;
            }
            requestAnimationFrame(render);
        };

        requestAnimationFrame(render);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} className={`${styles.noiseCanvas}`}></canvas>;
};

export default NoiseCanvas;