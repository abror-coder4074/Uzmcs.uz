import React from "react";
import { motion } from "framer-motion";

const leaders = [
  {
    name: "Tursunob Sobir Turdiyevich",
    title: "Direktor",
    description:
      "Sergeli Abu Ali ibn Sino nomidagi Jamoat salomatligi texnikumi Direktori, pedagogika fanlari doktori, professor",
    img: "https://optim.tildacdn.one/tild6363-3735-4430-b831-633764663136/-/resize/600x800/-/format/webp/photo_2022-10-13_10-.jpg.webp",
  },
  {
    name: "Normurodova Zuxra Norbutayeva",
    title: "Direktor O'rinbosari",
    description:
      "Sergeli Abu Ali ibn Sino nomidagi Jamoat salomatligi texnikumi o'quv ishlar bo'yicha direktor o'rinbosari .",
    img: "https://optim.tildacdn.one/tild3965-3263-4131-a230-633435316538/-/resize/600x800/-/format/webp/IMG_4078.JPG.webp",
  },
  {
    name: "Dr. Anvar Z.",
    title: "Direktor O'rinbosari",
    description:
      "Sergeli Abu Ali ibn Sino nomidagi Jamoat salomatligi texnikumi ishlab chiqarish ta'limi bo'yicha direktor o'rinbosari",
    img: "https://optim.tildacdn.one/tild6564-6433-4761-a565-316336623132/-/resize/520x/-/format/webp/photo_2025-10-15_14-.jpg.webp",
  },
  {
    name: "Dr. Dilshod R.",
    title: "Direktor O'rinbosari",
    description:
      "Sergeli Abu Ali ibn Sino nomidagi Jamoat salomatligi texnikumi yoshlar bilan ishlash bo'yicha direktor o'rinbosari.",
    img: "https://static.tildacdn.one/tild6662-6331-4133-a232-306439326630/photo_2024-01-15_14-.jpg",
  },
];

export default function Raxbariyat() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-blue-900 mb-6"
        >
          Raxbariyat
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg"
        >
          Bizning rahbariyat — tibbiyot sohasida katta tajribaga ega, zamonaviy
          texnologiyalarni joriy etishga va bemorlar farovonligiga sodiq
          yetakchilar jamoasi.
        </motion.p>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-white/80 backdrop-blur-md border border-blue-100 shadow-lg hover:shadow-2xl rounded-3xl p-6 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-100/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

              <motion.img
                whileHover={{ scale: 1.05 }}
                src={leader.img}
                alt={leader.name}
                className="w-36 h-36 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-md"
              />

              <h3 className="text-lg font-semibold text-blue-900 mb-1">
                {leader.name}
              </h3>
              <p className="text-blue-600 font-medium mb-3">{leader.title}</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {leader.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
