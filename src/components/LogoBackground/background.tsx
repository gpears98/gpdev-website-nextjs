"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const logos = [
  "/logos/aws-black.png",
  "/logos/azure-black.png",
  "/logos/google-black.png",
  "/logos/js-black.png",
  "/logos/kotlin-black.svg",
  "/logos/python-black.png",
  "/logos/rust-black.png",
  "/logos/swift-black.png",
  "/logos/terraform-black.png",
];

interface LogoPosition {
  src: string;
  top: number;
  left: number;
  width: number;
  height: number
  rotate: number;
}

const LogoBackground = () => {
  const [positions, setPositions] = useState<LogoPosition[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const generatePositions = () => {
      const maxLogos = 25; // Adjust this to control the total number of logos displayed
      const newPositions: LogoPosition[] = [];
      const usedPositions: { top: number; left: number; width: number; height: number }[] = [];
      const maxAttempts = 500;

      Array.from({ length: maxLogos }).forEach(() => {
        const src = logos[Math.floor(Math.random() * logos.length)];
        let attempts = 0;
        let fits = false;
        let position: LogoPosition = { src, top: 0, left: 0, width: 0, height: 0, rotate: 0 };
        while (attempts < maxAttempts && !fits) {
          const width = Math.random() * 50 + 50;
          const height = width;
          const top = Math.random() * (window.innerHeight - height);
          const left = Math.random() * (window.innerWidth - width);

          const rotate = Math.random() * 360; // Random rotation angle
          position = { src, top, left, width, height, rotate };

          fits = !usedPositions.some(
            (pos) =>
              left < pos.left + pos.width + 10 &&
              left + width + 10 > pos.left &&
              top < pos.top + pos.height + 10 &&
              top + height + 10 > pos.top
          );

          attempts++;
        }

        if (fits) {
          newPositions.push(position);
          usedPositions.push(position);
        }
      });

      setPositions(newPositions);
    };

    generatePositions();

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(generatePositions, 300);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {positions.map((pos, index) => (
        <motion.img 
          key={index} 
          src={pos.src} 
          alt="" 
          initial={{ scale: 0, opacity: 0, rotate: pos.rotate }} 
          animate={{ scale: 1, opacity: 1, rotate: pos.rotate }} 
          transition={{ duration: 0.3, ease: 'easeIn' }} 
          style={{ 
            position: "absolute",
            top: pos.top,
            left: pos.left,
            width: pos.width,
            height: pos.height,
            opacity: 0.5,
          }}
        />      
      ))}
    </div>
  );
};

export default LogoBackground;