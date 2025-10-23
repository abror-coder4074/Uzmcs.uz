import React from "react";

const yonalishlar = [
    {
        title: "Hamshiralik ishi",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBpbGdjyOucIC0az5GtOjPubUYu5ha_3aFQ&s",
        desc: "40910203 - Hamshiralik ishi ",
        prop: "Kvalifikasiya nomi  I .Tibbiyot hamshirasi  2. Maktab va maktabgacha ta’lim tashkiloti hamshirasi  3. Fizioterapivtik(massaj) xonalari hamshirasi",
        time: "Ta'lim muddati: 3 yil",
        dre: "Kundugi",
    },
    {
        title: "Fel'dsherlik ishi",
        img: "https://optim.tildacdn.one/tild6230-3863-4433-a536-383739373731/-/cover/720x800/center/center/-/format/webp/photo.jpg.webp",
        desc: "4091020 I - Feldsherlik ishi",
        prop: "Kvalifikasiya nomi  I .Shoshilinch va tez tibbiy yordam ko‘rsatish stansiya (bo‘ lim) feldsheri  2. Oilaviy shifokor yordamchisi.",
        time: "Ta'lim muddati: 3 yil",
        dre: "Kundugi",
    },
    {
        title: "Farmatsiya ishi ",
        img: "https://optim.tildacdn.one/tild6239-6233-4330-b737-626333343930/-/cover/720x800/center/center/-/format/webp/farmacevt.jpg.webp",
        desc: "40910401 - Farmatsiya ishi",
        prop: "Kvalifikasiya nomi  I .Dori preparatlari ishlab chiqarish operatori 2. Dori vositalarini saqlash, tarqatish va ta’minlash bo’yicha farmâsevt assistenti ",
        time: "Ta'lim muddati: 3 yil",
        dre: "Kundugi",
    },
    {
        title: "Stomatologiya ishi",
        img: "https://optim.tildacdn.one/tild3031-6336-4737-b934-653235613837/-/cover/720x800/center/center/-/format/webp/photo.jpg.webp",
        desc: "50910101 - Stomatologiya ishi",
        prop: "Kvalifikasiya nomi  I .Kvalifikasiya nomi 2. Stomatolog yordamchis",
        time: "Ta'lim muddati: 3 yil",
        dre: "Kundugi",
    },
    {
        title: "Tibbiyot brigadasi hamshirasi",
        img: "https://optim.tildacdn.one/tild6662-6661-4266-b635-373736393061/-/cover/720x800/center/center/-/format/webp/images.jpg.webp",
        desc: "40910203 - Tibbiyot brigadasi hamshirasi",
        prop: "Kvalifikasiya nomi  I .Tibbiyot hamshirasi  2. Maktab va maktabgacha ta’lim tashkiloti hamshirasi  3. Fizioterapivtik(massaj) xonalari hamshirasi",
        time: "Ta'lim muddati: 3 yil",
        dre: "Kundugi",
    },
    {
        title: "Funktsional diagnostika ishi",
        img: "https://optim.tildacdn.one/tild6638-6132-4335-b439-613732613039/-/cover/720x800/center/center/-/format/webp/noroot.jpg.webp",
        desc: "50910205- Funktsional diagnostika ishi",
        prop: "Kvalifikasiya nomi  I ..Funktsional diagnostika va tibbiy laboratoriya ishi mutaxassisi",
        time: "Ta'lim muddati: 3 yil",
        dre: "Kundugi",
    },
];

const Yonalishlar = () => {
    return (
        <div className="bg-gray-50 min-h-screen text-gray-800">
            <section className="relative bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white py-24 text-center">
                <div className="max-w-5xl mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-4">Yo‘nalishlar</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        Institutda ta’lim turli yo‘nalishlarda olib boriladi. Har bir yo‘nalish
                        zamonaviy tibbiyot, parvarish va sog‘lom turmush asoslariga tayangan.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Bizning o‘quv yo‘nalishlarimiz
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {yonalishlar.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-100 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-semibold mb-2 text-[#0077b6]">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                    <p className="text-gray-600 text-sm">{item.prop}</p>
                                    <p className="text-gray-600 text-sm">{item.time}</p>
                                    <p className="text-gray-600 text-sm">{item.dre}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Yonalishlar;
