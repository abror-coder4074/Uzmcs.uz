import React from "react";

const TibbiyotSection = () => {
    return (
        <section
            id="tibbiyot"
            className="relative h-[80vh] md:h-screen flex items-center justify-center text-center bg-fixed bg-center bg-cover"
            style={{
                backgroundImage:
                    "url('https://tviibb.uz/public/uploads/news/a9d6592291ba4fbb90d07d3681441b79.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 max-w-3xl px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Tibbiyotga Oid yo‘nalishlar
                </h2>
                <p className="text-gray-200 text-lg md:text-xl mb-8">
                    Bizning texnikumda tibbiyotning eng muhim yo‘nalishlari — hamshiralik,
                    farmatsiya, laboratoriya ishi va klinik fanlar bo‘yicha chuqur
                    bilimlarga ega bo‘lasiz.
                </p>
                <a href="https://www.medicalnewstoday.com/">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
                        Batafsil ma’lumot
                    </button>
                </a>
            </div>
        </section>
    );
};

export default TibbiyotSection;
