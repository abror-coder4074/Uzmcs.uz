import React from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaFacebookF,
  FaVk,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-0 px-3">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-gray-700">
        
        <div className="text-center md:text-left ">
            <img className="rounded-[120px] " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9MPdSiyhkt5Z-Bl9l348wHczWMuJIISlGA&s" alt="Logo" />
          <h2 className="text-2xl font-bold mb-4 text-center">Tibbiyot Markazi</h2>
          <p className="text-gray-300 text-sm text-center">
            Biz sog‘lom hayot sari yo‘l ochamiz. Zamonaviy tibbiy xizmat, ishonchli
            shifokorlar va texnologiyalar siz uchun.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Aloqa</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <FaPhoneAlt className="inline mr-2 text-blue-400" /> +998 (71) 290-11-94
            </li>
            <li>📍 100198, Toshkent shahar, Sergeli tumani, Qo’yliq-5, A.Shermatov ko’chasi 252 uy.</li>
            <li>✉️ info@uzsmc.uz</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Foydali havolalar</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-blue-400">Bosh sahifa</a></li>
            <li><a href="#" className="hover:text-blue-400">Biz haqimizda</a></li>
            <li><a href="#" className="hover:text-blue-400">Yangiliklar</a></li>
            <li><a href="#" className="hover:text-blue-400">Aloqa</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Biz ijtimoiy tarmoqlarda</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400"><FaTelegramPlane size={20} /></a>
            <a href="#" className="hover:text-pink-400"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-blue-500"><FaLinkedin size={20} /></a>
            <a href="#" className="hover:text-red-500"><FaYoutube size={20} /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-blue-600"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-blue-300"><FaVk size={20} /></a>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <iframe
          title="Tibbiyot markazi joylashuvi"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.875687020262!2d69.2400735!3d41.2994958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b32e4b2f9ad%3A0xf7c7a52d7d8287f8!2sTashkent!5e0!3m2!1sen!2suz!4v1678888888888!5m2!1sen!2suz"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="bg-gray-800 text-center py-4 text-sm text-gray-400">
        © 2025 Tibbiyot Markazi. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;
