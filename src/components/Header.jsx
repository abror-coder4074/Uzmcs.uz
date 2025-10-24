import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [kafedraHover, setKafedraHover] = useState(false);
  const [kafedraOpen, setKafedraOpen] = useState(false);

  const links = [
    { name: "Bosh sahifa", href: "/" },
    { name: "Biz haqimizda", scrollTo: "about" }, 
    { name: "Yo'nalishlar", href: "/yonalishlar" },
    { name: "Rahbariyat", scrollTo: "leadership" },
    { name: "Kafedralar", dropdown: true },
    { name: "Yangiliklar", scrollTo: "news" },
    { name: "Aloqa", scrollTo: "contact" },
  ];

  const kafedralar = [
    { name: "Umumkasbiy kafedra", href: "/kafedralar/umumkasbiy" },
    { name: "Hamshiralik kafedrasi", href: "/kafedralar/hamshiralik" },
    { name: "Klinik fanalar kafedrasi", href: "/kafedralar/klinikfanlar" },
    { name: "Farmatsiya kafedrasi", href: "/kafedralar/farmatsiya" },
    { name: "Labaratoriya ishi kafedrasi", href: "/kafedralar/biotexnologiya" },
  ];

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9MPdSiyhkt5Z-Bl9l348wHczWMuJIISlGA&s"
            alt="logo"
            className="w-10 h-10 rounded-3xl"
          />
          <h1 className="text-xl font-bold text-[#0077b6] uppercase">
            UZSMC Texnikum
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setKafedraHover(true)}
                onMouseLeave={() => setKafedraHover(false)}
              >
                <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-[#0077b6] transition">
                  {link.name}
                  <ChevronDown size={16} />
                </button>

                <div
                  className={`absolute left-0 top-8 w-60 bg-white shadow-lg rounded-lg border border-gray-100 transition-all duration-200 ease-out
                  ${kafedraHover ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                  onMouseEnter={() => setKafedraHover(true)}
                  onMouseLeave={() => setKafedraHover(false)}
                >
                  {kafedralar.map((item) => (
                    <RouterLink
                      key={item.name}
                      to={item.href}
                      className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#0077b6] transition"
                    >
                      {item.name}
                    </RouterLink>
                  ))}
                </div>
              </div>
            ) : link.scrollTo ? (
              <ScrollLink
                key={link.name}
                to={link.scrollTo}
                smooth={true}
                duration={500}
                offset={-80} 
                className="text-gray-700 font-medium hover:text-[#0077b6] transition cursor-pointer"
              >
                {link.name}
              </ScrollLink>
            ) : (
              <RouterLink
                key={link.name}
                to={link.href}
                className="text-gray-700 font-medium hover:text-[#0077b6] transition"
              >
                {link.name}
              </RouterLink>
            )
          )}
          <button className="bg-[#0077b6] text-white px-4 py-2 rounded-full hover:bg-[#0096c7] transition">
            Kirish
          </button>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col items-center gap-4 py-5">
            {links.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="w-full text-center">
                  <button
                    onClick={() => setKafedraOpen(!kafedraOpen)}
                    className="flex items-center justify-center gap-1 w-full text-gray-700 font-medium hover:text-[#0077b6] transition"
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`transform transition ${kafedraOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {kafedraOpen && (
                    <div className="flex flex-col items-center mt-2 gap-2">
                      {kafedralar.map((item) => (
                        <RouterLink
                          key={item.name}
                          to={item.href}
                          className="text-gray-600 hover:text-[#0077b6] transition text-sm"
                          onClick={() => setOpen(false)}
                        >
                          {item.name}
                        </RouterLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.scrollTo ? (
                <ScrollLink
                  key={link.name}
                  to={link.scrollTo}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-gray-700 font-medium hover:text-[#0077b6] transition cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 font-medium hover:text-[#0077b6] transition"
                >
                  {link.name}
                </RouterLink>
              )
            )}
            <button className="bg-[#0077b6] text-white px-6 py-2 rounded-full hover:bg-[#0096c7] transition">
              Kirish
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
