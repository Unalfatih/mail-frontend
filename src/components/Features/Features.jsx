import React from "react";
import "./Features.css";


const Features = () => {
  return (
    <div className="features">
      <h2>Mailim'in Ayrıcalıklı Dünyası</h2>
      <p>Kurumunuz için ihtiyaç duyduğunuz hızlı ve güvenli e-posta servisi</p>
      <div className="features-grid">
        <div className="feature-item">
          <img src="/public/img/security.svg" alt="Güvenlik" className="feature-icon" />
          <div className="feature-text">
            <h3>Güvenlik</h3>
            <p>Verileriniz Türkiye’deki veri merkezlerinde güvenle saklanır.</p>
        </div>
      </div>

    <div className="feature-item">
      <img src="/public/img/adaptive.svg" alt="Erişim" className="feature-icon" />
      <div className="feature-text">
        <h3>Tüm Kanallardan Erişim</h3>
        <p>Web ve mobil uygulamalarla e-postalarınıza kolayca erişebilirsiniz.</p>
      </div>
    </div>
    <div className="feature-item">
      <img src="/public/img/setting.svg" alt="Yönetim Paneli" className="feature-icon" />
      <div className="feature-text">
        <h3>Sade Yönetim Paneli</h3>
        <p>Kullanımı kolay yönetim paneli ile e-postalarınızı rahatça yönetin.</p>
      </div>
    </div>

    <div className="feature-item">
      <img src="/public/img/user.svg" alt="Çoklu Hesap" className="feature-icon" />
      <div className="feature-text">
        <h3>Çoklu Hesap Desteği</h3>
        <p>Birden fazla hesabı aynı anda kullanabilirsiniz.</p>
      </div>
    </div>

    <div className="feature-item">
      <img src="/public/img/calendar.svg" alt="İş Takibi" className="feature-icon" />
      <div className="feature-text">
        <h3>İş Takibi</h3>
        <p>Takvimler, kurallar ve otomatik yanıtlayıcılar ile işlerinizi yönetin.</p>
      </div>
    </div>

    <div className="feature-item">
      <img src="/public/img/list.svg" alt="Genelge ile Uyum" className="feature-icon" />
      <div className="feature-text">
        <h3>Genelge ile Uyum</h3>
        <p>Bilgi güvenliği düzenlemelerine tam uyumluluk sağlar.</p>
      </div>
    </div>

    <div className="feature-item">
      <img src="/public/img/corporate.svg" alt="Kurumsal Özellikler" className="feature-icon" />
      <div className="feature-text">
        <h3>Kurumsal Özellikler</h3>
        <p>Global adres defteri, LDAP ve relay entegrasyonu içerir.</p>
      </div>
    </div>

    <div className="feature-item">
      <img src="/public/img/offline.svg" alt="Çevrimdışı Kullanım" className="feature-icon" />
      <div className="feature-text">
        <h3>Çevrimdışı Kullanım</h3>
        <p>Bağlantı olmadan bile e-postalarınızı yönetin.</p>
      </div>
    </div>

 
  </div>
</div>

  );
};

export default Features;