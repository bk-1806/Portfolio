"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useSpring, motion, AnimatePresence } from "framer-motion";

function StoryText({ 
  progress, 
  text, 
  range 
}: { 
  progress: any, 
  text: string, 
  range: [number, number, number, number] 
}) {
  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const y = useTransform(progress, range, [40, 0, 0, -40]);
  const scale = useTransform(progress, range, [0.95, 1, 1, 1.05]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-x-0 bottom-[15vh] flex justify-center pointer-events-none px-6 text-center"
    >
      <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-2xl max-w-5xl leading-tight text-balance">
        {text}
      </h2>
    </motion.div>
  );
}

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [textIndex, setTextIndex] = useState(0);
  const rotatingWords = ["AI", "Data", "Digital Marketing", "Business Analytics"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [rotatingWords]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001
  });

  // Let the canvas stay visible so the character remains rendered behind the Portfolio UI
  const canvasOpacity = useTransform(smoothProgress, [0.8, 1], [1, 0.8]);

  const frameCount = 120;

  const currentFrame = useTransform(
    smoothProgress,
    [0, 1],
    [0, frameCount - 1]
  );

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d")!;

    const render = (index: number) => {
      const img = loadedImages[index];
      if (!img || !img.complete) return;

      const dpr = window.devicePixelRatio || 1;
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const canvasRatio = canvasWidth / canvasHeight;
      const imgRatio = img.width / img.height;

      let drawWidth = canvasWidth;
      let drawHeight = canvasHeight;
      let offsetX = 0;
      let offsetY = 0;

      // Object-fit: cover logic
      if (canvasRatio > imgRatio) {
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgRatio;
        offsetY = (canvasHeight - drawHeight) / 2;
      } else {
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imgRatio;
        offsetX = (canvasWidth - drawWidth) / 2;
      }

      // Scale up by 15% to fully crop out the bottom-right Veo watermark seamlessly
      const scaleToHideWatermark = 1.15;
      const prevDrawWidth = drawWidth;
      const prevDrawHeight = drawHeight;
      
      drawWidth *= scaleToHideWatermark;
      drawHeight *= scaleToHideWatermark;
      
      offsetX -= (drawWidth - prevDrawWidth) / 2;
      offsetY -= (drawHeight - prevDrawHeight) / 2;

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      render(Math.floor(currentFrame.get()));
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = `/sequence/frame_${String(i).padStart(4, "0")}.webp`;

      img.onload = () => {
        loadedCount++;
        if (i === 1) render(0);
        if (loadedCount === frameCount) {
          render(Math.floor(currentFrame.get()));
        }
      };

      loadedImages.push(img);
    }

    const unsubscribe = currentFrame.on("change", (latest) => {
      render(Math.floor(latest));
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      unsubscribe();
    };
  }, []);

  return (
    <div ref={containerRef} className="h-[120vh] bg-[#121212] relative z-20 pointer-events-none">
      <motion.div 
        style={{ opacity: canvasOpacity }} 
        className="sticky top-0 h-screen w-full bg-background overflow-hidden"
      >
        {/* Cinematic Canvas Background */}
        <canvas
          ref={canvasRef}
          className="w-full h-full block absolute inset-0 z-0 opacity-100 object-cover scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-0 pointer-events-none" />

        {/* Hero Overlay (Top) */}
        <div className="relative z-10 w-full flex flex-col pt-32 sm:pt-40 items-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tighter text-white drop-shadow-[0_0_25px_rgba(249,115,22,0.6)] mb-2"
          >
            BHAVAN KOTHALANKA
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-4 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-xl md:text-2xl font-semibold uppercase tracking-[0.2em] drop-shadow-md text-white w-full max-w-5xl"
          >
            <span className="text-center md:text-right">Strategic Impact Through</span>
            <div className="relative h-[40px] w-full md:w-[380px] overflow-hidden flex items-center">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={textIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-x-0 mx-auto w-max md:mx-0 md:left-0 text-[#f97316] drop-shadow-[0_0_15px_rgba(249,115,22,0.8)] whitespace-nowrap"
                >
                  {rotatingWords[textIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-3 text-sm md:text-base text-white/60 font-semibold uppercase tracking-widest max-w-lg text-center"
          >
            Business Analytics & Tech Aspirant
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-4 text-[0.8rem] md:text-sm text-white/40 tracking-wide max-w-md text-center leading-relaxed"
          >
            Building data-driven solutions and translating insights into real business impact
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}