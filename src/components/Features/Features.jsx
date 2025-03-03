import React from "react";
import "./Features.css";
import { FaRocket, FaLock, FaUsers } from "react-icons/fa";

const Features = () => {
  return (
    <section className="features">
      <h2>Öne Çıkan Özellikler</h2>
      <div className="features-list">
        <div className="feature-item">
          <FaRocket className="feature-icon" />
          <h3>Hızlı ve Güvenilir</h3>
          <p>Yazılımınız en iyi performans için optimize edilmiştir.</p>
        </div>
        <div className="feature-item">
          <FaLock className="feature-icon" />
          <h3>Güvenlik Önceliğimiz</h3>
          <p>Verileriniz en yüksek güvenlik standartlarına göre korunur.</p>
        </div>
        <div className="feature-item">
          <FaUsers className="feature-icon" />
          <h3>Kullanıcı Dostu</h3>
          <p>Basit ve anlaşılır arayüz sayesinde kullanım kolaylığı sağlar.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
