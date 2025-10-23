import React from "react";

const Umumkasbiy = () => {
    const mudir = {
        name: "Ahmadova Feruza Azamatovna",
        lavozim: "Umumkasbiy fanlar kafedrasi mudiri",
        img: "https://optim.tildacdn.one/tild3866-6137-4666-b066-326235613633/-/cover/320x320/center/center/-/format/webp/photo_2025-01-31_08-.jpg.webp",
        tel: " +998 93 545-79-96",
    };

    const azolar = [
        {
            id: 1,
            name: "Abdullayev Dilshod Xayrulla o‘g‘li",
            lavozim: "Katta o‘qituvchi",
            img: "https://optim.tildacdn.one/tild6131-6635-4531-b261-663139356130/-/cover/520x520/center/center/-/format/webp/photo_2025-01-31_08-.jpg.webp",
            tel: "+998903527450",
        },
        {
            id: 2,
            name: "Egamberdiyeva Xonzoda Toshpo'latovna",
            lavozim: "Oliy ma'lumotli o‘qituvchi",
            img: "https://optim.tildacdn.one/tild3263-3132-4938-b238-383136333433/-/cover/520x520/center/center/-/format/webp/photo_2025-01-31_08-.jpg.webp",
            tel: "+998909382667",
        },
        {
            id: 3,
            name: "G‘ofurova Shoira Djumayevna",
            lavozim: "Bosh o‘qituvchi",
            img: "https://optim.tildacdn.one/tild6663-3136-4337-b961-363566323635/-/cover/520x520/center/center/-/format/webp/photo_2025-01-31_08-.jpg.webp",
            tel: "+998998021518",
        },
        {
            id: 4,
            name: "Ollonazarova Xabiba Xolmatovna",
            lavozim: "Bosh O‘qituvchi",
            img: "https://optim.tildacdn.one/tild3565-3765-4362-b638-373531386561/-/cover/520x520/center/center/-/format/webp/photo_2025-01-31_08-.jpg.webp",
            tel: "+998977257250",
        },
        {
            id: 5,
            name: "Tangriyeva Ma’mura Qo‘ldoshovna",
            lavozim: "Katta o‘qituvchi",
            img: "https://optim.tildacdn.one/tild6534-3333-4233-b730-643862633131/-/cover/520x520/center/center/-/format/webp/photo_2025-01-31_08-.jpg.webp",
            tel: "+998933957171",
        },
    ];

    return (
        <div className="pt-20 font-[Poppins]">
            {/* HERO */}
            <section
                className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1596495577886-d920f1fb7238')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0077b6]/90 to-[#00b4d8]/70"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Umumkasbiy fanlar kafedrasi
                    </h1>
                    <p className="text-lg md:text-2xl font-light">
                        “Ilm, mehnat va ma’rifat — bizning yo‘limiz!”
                    </p>
                </div>
            </section>

            {/* KAFEDRA HAQIDA */}
            <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                <img
                    src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
                    alt="Kafedra rasmi"
                    className="rounded-2xl shadow-lg"
                />
                <div>
                    <h2 className="text-3xl font-bold text-[#0077b6] mb-4">
                        Umumkasbiy fanlar kafedrasi haqida
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Umumkasbiy fanlar” kafedrasining asosiy maqsadi zamonaviy
                        innovatsion texnologiyalarni keng joriy etish orqali sog`liqni
                        saqlash tizimi uchun jaxon andozalaridagi ilmiy-amaliy, klinik
                        standartlar negizida yuqori malakali mutaxassislar tayyorlash.
                        Shu munosabat bilan zamonaviy
                        rivojlanish bosqichi an'anaviy ta'lim dasturlaridan fanlararo
                        integratsiyalangan dasturlarga o'tib borilmoqda. Ta'lim dasturlaridan
                        zamonaviy sog`liqni saqlash tizimida toboro keng qo'llanilatgan texnologiyalarning
                        va samarali davolash usullarining puxta o'zlashtirilishini ta'minmoqda. “Umumkasbiy
                        fanlar” kafedrasida Tibbiyotda xorijiy til, Tibbiyotda axborot texnologiyalari,
                        Anatomiya fiziologiya va patalogiya, Lotin tili va ttibiy teminologiya, Jismoniy
                        tarbiya va sport, Kasbiy faoliyatda rus tili, Tibbiyot psixologiyasi va shaxslararo
                        muloqot, Tibbiy va Bialogik fezika kabi fanlar o'tiladi.
                    </p>
                </div>
            </section>

            {/* MUDIR */}
            <section className="bg-[#f1fbff] py-16 text-center">
                <h2 className="text-3xl font-semibold text-[#0077b6] mb-10">
                    Kafedra mudiri
                </h2>
                <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-8">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#0077b6]/40 shadow-md">
                        <img
                            src={mudir.img}
                            alt={mudir.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0077b6]">{mudir.name}</h3>
                    <p className="text-gray-600 font-semibold mb-2">{mudir.lavozim}</p>
                    <span className="text-blue-600 font-bold">{mudir.tel}</span>
                </div>
            </section>

            {/* A’ZOLAR */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-semibold text-[#0077b6] mb-10 text-center">
                    Kafedra a’zolari
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {azolar.map((azo) => (
                        <div
                            key={azo.id}
                            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:-translate-y-2 hover:shadow-2xl transition-transform"
                        >
                            <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#0077b6]/30 shadow-md">
                                <img
                                    src={
                                        azo.img ||
                                        "https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                    }
                                    alt={azo.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-semibold text-lg text-[#0077b6]">
                                {azo.name}
                            </h3>
                            <p className="text-gray-600 font-bold">{azo.lavozim}</p>
                            <span className="text-blue-600 font-bold">{azo.tel}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Umumkasbiy;
