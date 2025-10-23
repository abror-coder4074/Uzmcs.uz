import React from "react";

const About = () => {
    return (
        <section className="py-20 bg-gray-50 text-center px-4">
            <div className="flex justify-center mb-8">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9MPdSiyhkt5Z-Bl9l348wHczWMuJIISlGA&s"
                    alt="Texnikum Logosi"
                    className="w-50 h-50 object-contain"
                />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Biz haqimizda
            </h2>

            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>

            <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">

                1984 yil 31 iyunda Temir yo'llari Vazirligining № 9223350-sonli qaroriga asosida Temir yo'l tibbiyot bilim yurti tashkil qilingan. Keyinchalik
                O'zbekiston Respublikasi Vazirlar Mahkamasining 1998 yil 13 may 203-sonli qarori hamda "O'zbekiston Respublikasida umumiy ta'limni qayta tashkil etish to'g’risida”gi qarori bilan Toshkent shahar hokimiyatining 2002 yil 18 yanvardagi 25-sonli qarori va Sergeli tuman hokimiyatining 2001 yil 1 martdagi 192-sonli qarori bilan Davlat ro'yxatiga olingan. 2002 yil 29 mart 260-sonli qaroriga asosan Sergeli tibbiyot bilim yurti nomi bilan, keyinchalik
                2004 yildan Sergeli tibbiyot kolleji sifatida o'z faoliyatini boshlagan.
                <br /><br />
                O'zbekiston Respublikasi Prezidentining 5812- sonli farmoni bilan Sergeli tibbiyot kolleji Sirg'ali tibbiyot kollejiga aylantirilgan.Shuningdek O'zbekiston Respublikasi Prezidentining 2023-yil 20-iyundagi PQ-197-son qaroriga asosan Sergeli Abu Ali ibn Sino nomidagi Jamoat salomatligi texnikumi o'z faoliyatini boshlagan.
                O'zbekiston Respublikasi Prezidentining 16.10.2024 yildagi 158-Farmoni bilan Sergeli Abu Ali ibn Sino nomidagi Jamoat salomatligi texnikumi O'zbekiston Respublikasi Sog'liqni Saqlash Vazirligi tasarrufidan Oliy ta'lim, fan va innovatsiyalar vazirligi tasarrufiga o'tkazildi.
            </p>
            <a href="https://uzsmc.uz/batafsil">
                <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                    Batafsil ma’lumot
                </button>
            </a>
        </section>
    );
};

export default About;
