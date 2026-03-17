import React from "react";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  count: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ count }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-500 font-medium mb-2">
        Fetch Count
      </span>
      {/* Using the 'key' prop forces framer-motion to re-trigger the animation 
        from the initial state every time the count changes.
      */}
      <motion.div
        key={count}
        initial={{
          scale: 0.8,
          borderRadius: "50%",
          backgroundColor: "#ef4444",
        }} // Red circle
        animate={{
          scale: [1, 1.4, 1],
          borderRadius: ["50%", "16px", "50%"], // Morphs circle -> rounded square -> circle
          backgroundColor: ["#ef4444", "#10b981", "#3b82f6"], // Red -> Green -> Blue
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-16 h-16 flex items-center justify-center text-white font-bold text-2xl shadow-lg"
      >
        {count}
      </motion.div>
    </div>
  );
};
