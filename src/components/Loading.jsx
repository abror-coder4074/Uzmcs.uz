import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="relative w-40 h-40 flex items-center justify-center">
        <motion.div
          className="absolute inset-0 border-4 border-blue-200 border-t-blue-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
        ></motion.div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9MPdSiyhkt5Z-Bl9l348wHczWMuJIISlGA&s" 
          alt="Loading"
          className="w-35 h-35 object-cover rounded-full z-10"
        />
      </div>

      <p className="mt-6 text-blue-700 text-lg font-semibold tracking-wide">
        UZMCS
      </p>
    </div>
  );
}
