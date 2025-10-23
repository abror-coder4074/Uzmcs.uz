import React from "react";

const Hero = () => {
    return (
        <div className="relative w-full h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-white flex items-center justify-center overflow-hidden">

            <div className="absolute top-10 left-10 w-48 h-48 bg-blue-200 rounded-full opacity-30 animate-slow-bounce"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-200 rounded-full opacity-20 animate-slower-bounce"></div>

            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-6">
                    Sizning Sog‘ligingiz – Bizning Ustuvorligimiz
                </h1>
                <p className="text-lg md:text-2xl text-blue-700 max-w-2xl mx-auto mb-8">
                    Tibbiyot sohasida bilim va amaliyot uyg‘unligi orqali kelajakdagi
                    mutaxassislarni tayyorlaymiz.
                </p>
               <a href="#tibbiyot">
                 <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Batafsil
                </button>
               </a>
            </div>
        </div>
    );
};

export default Hero;
