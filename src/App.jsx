import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import TibbiyotSection from "./components/TibbiyotSection";
import KafedraMudirlari from "./components/KafedraMudirlari";
import Yangiliklar from "./components/Yangiliklar";
import Footer from "./components/Footer";
import LeadershipCarousel from "./components/YangiRahbariyat";
import Loading from "./components/Loading";
import Umumkasbiy from "./pages/Kafedralar/Umumkasbiy";
import Hamshiralik from "./pages/Kafedralar/Hamshiralik";
import Klinikfanlar from "./pages/Kafedralar/Klinikfanlar";
import Yonalishlar from "./pages/Yonaishlar/Yonalishlar";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="overflow-x-hidden">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <TibbiyotSection />
              <LeadershipCarousel />
              <KafedraMudirlari />
              <Yangiliklar />
            </>
          }
        />
        <Route path="/kafedralar/umumkasbiy" element={<Umumkasbiy />} />
        <Route path="/kafedralar/hamshiralik" element={<Hamshiralik />} />
        <Route path="/kafedralar/klinikfanlar" element={<Klinikfanlar />} />
        <Route path="/yonalishlar" element={<Yonalishlar />} />



      </Routes>

      <Footer />
    </div>
  );
};

export default App;
