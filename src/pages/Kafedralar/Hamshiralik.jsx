import React from "react";

const Hamshiralik = () => {
    return (
        <div className="bg-gray-50 text-gray-800">
            {/* HERO QISMI */}
            <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-24 text-center">
                <div className="max-w-5xl mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-4">Hamshiralik ishi kafedrasi</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        Hamshiralik kafedrasi — tibbiyot tizimining ajralmas qismi bo‘lib,
                        bemorlarni parvarishlash va sog‘lom turmush tarzini targ‘ib qilishda
                        muhim rol o‘ynaydi.
                    </p>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                <img
                    src="https://occupations-container.r2.rolecatcher.com/578.webp"
                    alt="Kafedra rasmi"
                    className="rounded-2xl shadow-lg"
                />
                <div>
                    <h2 className="text-3xl font-bold text-[#0077b6] mb-4">
                        Hamshiralik ishi kafedrasi haqida
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Hamshiralik ishi kafedra ogituvchilari barcha davolash-profilaktika muassasalarida,
                        QVP (qishloq vrachlik punkti) larda, tuman tibbiyot birlashmalari, viloyat va Respublika tibbiyot muassasalarida;
                        - Respublika shoshilinch tibbiy yordam ilmiy markazi va uning filiallarida, ixtisoslashtirilgan ilmiy markazlarida,
                        ilmiy-tekshirish institutlari klinikalarida, tez tibbiy yordam stansiyalarida;
                        - Oilaviy poliklinikalar, fizioterapiya va reabilitasiya bo‘limlarida;
                        - Ijtimoiy ta’minot muassasalarida, shifokor xonasida, muolaja, operasiya, emlash va registratura xonalarida;
                        - Markazlashgan sterilizasiya bo‘limlarida;
                        - Fizioterapiya bo‘limlarida aholi sog‘lig‘ini saqlash va bemorlarga yo‘naltirilgan hamshiralik ishini amalga oshiradi,
                        shuningdek parxez ovqatlanish, davolovchi jismoniy tarbiya va massaj hamshirasi,
                        tibbiyot statisti sifatida faoliyat yurituvchi malakali hamshiralarni etishtiradi.
                    </p>
                </div>
            </section>

            {/* KAFEDRA MUDIRI */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">
                        Kafedra mudiri
                    </h2>
                    <img
                        src="https://optim.tildacdn.one/tild3664-3836-4365-a665-383232643936/-/cover/520x692/center/center/-/format/webp/IMG_5574.JPG.webp"
                        alt="Kafedra mudiri"
                        className="w-40 h-40 mx-auto rounded-full mb-4 object-cover shadow-lg"
                    />
                    <h3 className="text-2xl font-semibold">Omonova Husniya Raxmatovna </h3>
                    <p className="text-blue-600 font-medium">
                        Hamshiralik ishi kafedrasi mudiri. Bosh o'qituvchi
                    </p>
                    <p className="text-gray-600 mt-1">📞 +998 97 783 45 06</p>
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
                                name: "Abdurahmonova Iroda Anvarovna",
                                title: "Yetakchi o'qituvchi",
                                img: "https://optim.tildacdn.one/tild3135-3330-4536-b063-626264663634/-/cover/520x520/center/center/-/format/webp/Abduraxmonova_Iroda.jpg.webp",
                            },
                            {
                                name: "Ibragimova Dilorom Ismoildjanovna",
                                title: "Bosh o‘qituvchi",
                                img: "https://optim.tildacdn.one/tild3665-6332-4534-b131-633330653538/-/cover/520x520/center/center/-/format/webp/Dilorom.jpg.webp",
                            },
                            {
                                name: "Eshboboyeva Saboxat Qulmurodovnaa",
                                title: "Yetakchi o'qituvchi",
                                img: "https://optim.tildacdn.one/tild6465-3739-4231-b930-613863643332/-/cover/520x520/center/center/-/format/webp/Eshboboyeva_Sabohat.jpg.webp",
                            },
                            {
                                name: "Xayitboyeva Nodira Abduvohidovna",
                                title: "Bosh o'qituvchi",
                                img: "https://optim.tildacdn.one/tild3165-3231-4635-a165-356566303563/-/cover/520x520/center/center/-/format/webp/Hayitboyeva_Nodira.jpg.webp",
                            },
                            {
                                name: "AlijonovaMatluba Otajonovna",
                                title: "Bosh o'qituvchi",
                                img: "https://optim.tildacdn.one/tild3139-3464-4031-a662-313436613134/-/cover/520x520/center/center/-/format/webp/Matluba.jpg.webp",
                            },
                            {
                                name: "Muxiddinova Marg`uba Xojiakbarovna",
                                title: "Bosh o'qituvchi",
                                img: "https://optim.tildacdn.one/tild6231-3736-4531-b737-623566303436/-/cover/520x520/center/center/-/format/webp/Muhiddinova_Marguba.jpg.webp",
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

export default Hamshiralik;
