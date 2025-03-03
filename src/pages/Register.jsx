export default function Register() {
    return (
      <div className="container mt-5">
        <h2>Kayıt Ol</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Ad Soyad</label>
            <input type="text" className="form-control" placeholder="Adınızı girin" />
          </div>
          <div className="mb-3">
            <label className="form-label">E-posta</label>
            <input type="email" className="form-control" placeholder="E-postanızı girin" />
          </div>
          <div className="mb-3">
            <label className="form-label">Şifre</label>
            <input type="password" className="form-control" placeholder="Şifrenizi girin" />
          </div>
          <button type="submit" className="btn btn-success">Kayıt Ol</button>
        </form>
      </div>
    );
  }
  