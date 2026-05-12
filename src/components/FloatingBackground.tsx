import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  CakeSlice,
  Cookie,
  Candy,
  IceCream,
  Croissant,
  Donut,
  LucideIcon,
} from "lucide-react";

const icons = [
  { Icon: CakeSlice, size: 24 },
  { Icon: Cookie, size: 20 },
  { Icon: Candy, size: 18 },
  { Icon: IceCream, size: 22 },
  { Icon: Croissant, size: 26 },
  { Icon: Donut, size: 24 },
];

const FloatingIcon = ({
  Icon,
  size,
  index,
}: {
  Icon: LucideIcon;
  size: number;
  index: number;
}) => {
  const [randomPos, setRandomPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setRandomPos({
      x: Math.random() * 100,
      y: Math.random() * 100,
    });
  }, []);

  return (
    <motion.div
      className="absolute pointer-events-none text-primary/30"
      style={{
        left: `${randomPos.x}%`,
        top: `${randomPos.y}%`,
      }}
      animate={{
        y: [0, -100, 0],
        x: [0, (Math.random() - 0.5) * 50, 0],
        rotateX: [0, 360],
        rotateY: [0, 360],
        rotateZ: [0, 360],
        scale: [0.8, 1.2, 0.8],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 20 + Math.random() * 20,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.5,
      }}
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full scale-150" />
        <Icon
          size={size}
          className="drop-shadow-[0_0_20px_rgba(255,100,150,0.6)]"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 bg-primary/20 blur-md rounded-full -z-10"
        />
      </div>
    </motion.div>
  );
};

export function FloatingBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-background">
      {/* Dynamic Aura */}
      <motion.div 
        animate={{ 
          background: [
            "radial-gradient(circle at 10% 10%, rgba(255,182,193,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 90% 90%, rgba(255,182,193,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 10% 90%, rgba(255,182,193,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 90% 10%, rgba(255,182,193,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 10% 10%, rgba(255,182,193,0.15) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      />
      
      {/* Large Slow Floating Orbs */}
      <motion.div 
        animate={{ x: [-100, 100, -100], y: [-50, 50, -50] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full"
      />
      <motion.div 
        animate={{ x: [100, -100, 100], y: [50, -50, 50] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-accent/5 blur-[150px] rounded-full"
      />

      {/* Floating Pastry Icons */}
      {Array.from({ length: 35 }).map((_, i) => {
        const item = icons[i % icons.length];
        return (
          <FloatingIcon 
            key={i} 
            Icon={item.Icon} 
            size={item.size + Math.random() * 30} 
            index={i}
          />
        );
      })}
    </div>
  );
}
