export default function Login() {
    return (
      <div className="container mt-5">
        <h2>Giriş Yap</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">E-posta</label>
            <input type="email" className="form-control" placeholder="E-postanızı girin" />
          </div>
          <div className="mb-3">
            <label className="form-label">Şifre</label>
            <input type="password" className="form-control" placeholder="Şifrenizi girin" />
          </div>
          <button type="submit" className="btn btn-primary">Giriş Yap</button>
        </form>
      </div>
    );
  }
  