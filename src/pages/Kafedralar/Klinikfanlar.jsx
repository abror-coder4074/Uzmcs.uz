import React from "react";

const Klinikfanlar = () => {
    return (
        <div className="bg-gray-50 text-gray-800">
            <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-24 text-center">
                <div className="max-w-5xl mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-4">Klinik fanlar kafedrasi </h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        Klinik fanlar kafedrasi — bu sog‘liqni saqlash tizimining amaliy
                        poydevorini shakllantiruvchi asosiy bo‘lim bo‘lib, talabalarni
                        klinik fikrlash va amaliy ko‘nikmalar bilan ta’minlaydi.
                    </p>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                <img
                    src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
                    alt="Kafedra rasmi"
                    className="rounded-2xl shadow-lg"
                />
                <div>
                    <h2 className="text-3xl font-bold text-[#0077b6] mb-4">
                        Klinik fanlar kafedrasi
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        'Klinik fanlar'' kafedrasini maksadi va vazifasi o'quvchilarga
                        klinik fanlardan nazariy va amaliy bilimlari puxta egallashiga
                        yordam berish.Tibbiyot xodimi kaysi soxada ishlashidan qat'iy
                        nazar kasalliklarning asosiy xususiyyatlarini biladigan , bemorlarni
                        sub'ektiv va ob'ektiv, instrumental va laborator tekshirish usullarini
                        bajara oladigan, shifokorgacha bulgan shoshilinch yordam choralarini
                        ko'rsata oladigan, xamshiralik parvarishini amalga oshira oladigan,
                        jaxon standartlariga javob bera oladigan raqobatdosh kadrlarni tayyorlashdan iborat.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">
                        Kafedra mudiri
                    </h2>
                    <img
                        src="https://optim.tildacdn.one/tild3935-6332-4039-b133-383537303933/-/cover/320x320/center/center/-/format/webp/Boboyeva_Nigora.jpg.webp"
                        alt="Kafedra mudiri"
                        className="w-40 h-40 mx-auto rounded-full mb-4 object-cover shadow-lg"
                    />
                    <h3 className="text-2xl font-semibold">Boboyeva Nigora Sodiqovna </h3>
                    <p className="text-blue-600 font-medium">
                        "Klinik fanlar" kafedrasi mudiri
                    </p>
                    <p className="text-gray-600 mt-1">📞  +998 71 290 11 94</p>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Kafedra a’zolari
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {[
                            {
                                name: "Axmedov Maxsudjon Mahamadovich",
                                title: "Oliy ma’lumotli o’qituvchi",
                                img: "https://optim.tildacdn.one/tild3030-6365-4864-b737-323839323165/-/cover/520x520/center/center/-/format/webp/AXMEDOV.jpg.webp",
                            },
                            {
                                name: "Utanova Dilobar Artikbayevna",
                                title: "Yetakchi o’qituvchi",
                                img: "https://optim.tildacdn.one/tild3665-6332-4534-b131-633330653538/-/cover/520x520/center/center/-/format/webp/Dilorom.jpg.webp",
                            },
                            {
                                name: "Eshboboyeva Saboxat Qulmurodovnaa",
                                title: "Yetakchi o'qituvchi",
                                img: "https://static.tildacdn.one/tild6166-3263-4132-b738-633366393164/SEVARA.jpg",
                            },
                            {
                                name: "Sattarova Raisa Xabibovna",
                                title: "Oliy ma’lumotli o’qituvchi",
                                img: "https://static.tildacdn.one/tild6439-6463-4430-a161-316636623866/RAISA.jpg",
                            },
                            {
                                name: "AlijonovaMatluba Otajonovna",
                                title: "Bosh o'qituvchi",
                                img: "https://static.tildacdn.one/tild3564-3665-4333-b434-326434363732/kibiryo.jpg",
                            },
                            {
                                name: "Muxiddinova Marg`uba Xojiakbarovna",
                                title: "Bosh o'qituvchi",
                                img: "https://static.tildacdn.one/tild6166-3263-4132-b738-633366393164/SEVARA.jpg",
                            },
                            {
                                name: "Isroilova Hamida Yuldashevna",
                                title: "Yetakchi o’qituvchi",
                                img: "https://optim.tildacdn.one/tild6131-6162-4436-a435-343764636433/-/cover/520x520/center/center/-/format/webp/XAMIDA.jpg.webp",
                            },
                            {
                                name: "Pardayeva Zarnigor Sharobidinovna",
                                title: "Oliy ma’lumotli o’qituvchi",
                                img: "https://static.tildacdn.one/tild6336-3766-4465-b932-306466333161/zarnigor.jpg",
                            },
                            {
                                name: "Ziyadova Sevara Jahongirovna",
                                title: "Katta o’qituvchi",
                                img: "https://static.tildacdn.one/tild6464-6363-4033-a635-666666383463/ziyodova.jpg",
                            },
                        ].map((member, i) => (
                            <div
                                key={i}
                                className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition"
                            >
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-28 h-28 mx-auto rounded-full object-cover mb-3"
                                />
                                <h3 className="font-semibold text-lg">{member.name}</h3>
                                <p className="text-sm text-gray-500">{member.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        “Hamshiralik ishi” kafedrasi haqida
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        “Hamshiralik ishi” kafedrasi o‘qituvchilari haqida ma’lumot.
                        Kafedrada jami 14 ta o‘qituvchi faoliyat yuritadi. Shulardan
                        2 ta bosh o‘qituvchi, 2 ta yetakchi o‘qituvchi, 4 ta katta
                        o‘qituvchi, 1 ta C1 darajali va 1 ta B2 darajali o‘qituvchi,
                        hamda 4 ta oliy ma’lumotli o‘qituvchilar mavjud.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Klinikfanlar;
