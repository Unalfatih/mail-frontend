import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Yazılımınızı Daha İleriye Taşıyın</h1>
        <p>Gelişmiş özelliklerimizle işlerinizi kolaylaştırın ve verimliliğinizi artırın.</p>
        <button className="cta-btn">Hemen Başlayın</button>
      </div>
    </section>
  );
};

export default Hero;
