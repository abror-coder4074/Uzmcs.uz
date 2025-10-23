import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const KafedraMudirlar = () => {
  const mudirlar = [
    {
      name: "Omonova Husniya Raxmatovna",
      title: "Bosh O'qituvchi",
      img: "https://optim.tildacdn.one/tild3664-3836-4365-a665-383232643936/-/cover/520x692/center/center/-/format/webp/IMG_5574.JPG.webp",
      bio: "Sergeli Abu Ali ibn Sino nomidagi Jamoat salomatligi texnikumi 'Hamshiralik ishi' kafedra mudiri",
    },
    {
        name: "Xodjasheva Muyassar Durdiyevna",
        title: "Katta O'qituvchi",
        img: "https://optim.tildacdn.one/tild6538-3962-4664-b362-613439616536/-/cover/520x692/center/center/-/format/webp/IMG_4973.JPG.webp",
        bio: "Sergeli Abu Ali ibn Sino nomidagi Jamoat salomatligi texnikumi 'Terapiya' kafedra mudiri",
    },
    {
      name: "Babayeva Dona Abdukadirovna",
      title: "2-Umumkasbiya fanlar kafedrasi mudiri.",
      img: "https://optim.tildacdn.one/tild3531-6361-4165-a636-326564306234/-/cover/520x692/center/center/-/format/webp/photo_2025-10-15_14-.jpg.webp",
      bio: "Sergeli Abu Ali ibn Sino nomidagi Jamoat salomatligi texnikumi '2-Umumkasbiya fanlar' kafedrasi mudiri.",
    },
    {
      name: "Ahmadva Feruza Azamatovna",
      title: "Katta O'qituvchi",
      img: "https://optim.tildacdn.one/tild6632-3134-4366-b563-613839383431/-/cover/520x692/center/center/-/format/webp/Feruza_opa.jpg.webp",
      bio: "Sergeli Abu Ali ibn Sino nomidagi Jamoat salomatligi texnikumi '1-Umumkasbiy fanlar' kafedra mudiri ",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          Kafedra mudirlari
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Texnikumdagi barcha kafedralar o‘z sohasining malakali rahbarlari
          tomonidan boshqariladi.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={40}
          slidesPerView={1}
          className="pb-10"
        >
          {mudirlar.map((mudir, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg p-10 max-w-lg mx-auto text-center border-t-4 border-blue-400 hover:shadow-2xl transition">
                <div className="flex justify-center mb-6">
                  <img
                    src={mudir.img}
                    alt={mudir.name}
                    className="w-40 h-50 rounded-full object-cover border-4 border-none shadow-md"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  {mudir.name}
                </h3>
                <p className="text-blue-500 font-medium mb-4">{mudir.title}</p>
                <p className="text-gray-600 leading-relaxed">{mudir.bio}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default KafedraMudirlar;
