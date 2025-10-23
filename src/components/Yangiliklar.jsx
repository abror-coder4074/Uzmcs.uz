import React from "react";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

const newsData = [
  {
    id: 1,
    title: "O‘zbek tiliga davlat tili maqomi berilganining 36 yilligi munosabati bilan tantanali tadbir bo‘lib o‘tdi",
    desc: " Bugun, 21-oktyabr kuni Sergeli Abu Ali Ibn Sino nomidagi Jamoat salomatligi texnikumida “Davlat tili — millat g‘ururi va iftixori” mavzusida ma’naviy-ma’rifiy tadbir o‘tkazildi.",
    date: "2025-10-21",
    img: "https://optim.tildacdn.one/tild6265-6566-4363-b034-363366353566/-/resize/1000x800/-/format/webp/photo_2025-10-21_12-.jpg.webp",
  },
  {
    id: 2,
    title: "'Xalqaro qizlar kun' munosabati bilan uchrashuv.",
    desc: "Joriy yilning 11-oktabr sanasida Sergeli Abu Ali Ibn Sino nomidagi Jamoat salomatligi texnikumida Xalqaro qizlar kuni munosabati bilan “Mahalla xotin-qizlari va yoshlar o‘rtasida uchrashuv” tadbiri bo‘lib o‘tdi.",
    date: "2025-10-11",
    img: "https://optim.tildacdn.one/tild3533-3438-4737-a264-343331353832/-/format/webp/photo_2025-10-15_20-.jpg.webp",
  },
  {
    id: 3,
    title: "'Zakovat' — bilim, tafakkur va iqtidor sinovi",
    desc: "Joriy yilning 10-oktabr sanasida Sergeli Abu Ali Ibn Sino nomidagi Jamoat salomatligi texnikumida Xalqaro qizlar kuni munosabati bilan “Zakovat” intellektual o‘yini o‘tkazildi.",
    date: "2025-10-10",
    img: "https://optim.tildacdn.one/tild3134-3836-4665-b233-663365363232/-/resize/1000x800/-/format/webp/photo_2025-10-21_12-.jpg.webp",
  },
];

const NewsCard = ({ item, reverse }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center mb-24`}
    >
      <motion.div
        style={{ y }}
        className="w-full md:w-1/2 h-80 rounded-3xl overflow-hidden shadow-xl"
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 mt-8 md:mt-0 md:px-12"
      >
        <p className="text-blue-600 font-semibold mb-2">{item.date}</p>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{item.desc}</p>
        <button className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Batafsil
        </button>
      </motion.div>
    </div>
  );
};

const Yangiliklar = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-blue-900 mb-16"
        >
          So‘nggi Yangiliklar
        </motion.h2>

        {newsData.map((item, i) => (
          <NewsCard key={item.id} item={item} reverse={i % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

export default Yangiliklar;
