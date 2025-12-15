import React from 'react';

const Footer = ({ changePage }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <div className="logo">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3>Desa Arcawinangun</h3>
            </div>
            <p>Kecamatan Purwokerto Timur</p>
            <p>Kabupaten Banyumas</p>
            <p>Provinsi Jawa Tengah 53113</p>
          </div>
          
          <div className="footer-col">
            <h4>Kontak Desa</h4>
            <p>📞 (0281) 1234567</p>
            <p>📧 desaarca@gmail.com</p>
            <p>🕒 Senin - Jumat</p>
            <p>08.00 - 15.00 WIB</p>
          </div>
          
          <div className="footer-col">
            <h4>Link Penting</h4>
            <ul>
              <li><a onClick={() => changePage('profil')}>Profil Desa</a></li>
              <li><a onClick={() => changePage('pemerintahan')}>Pemerintahan</a></li>
              <li><a onClick={() => changePage('layanan')}>Layanan Publik</a></li>
              <li><a onClick={() => changePage('umkm')}>UMKM Desa</a></li>
              <li><a onClick={() => changePage('galeri')}>Galeri</a></li>
              <li><a onClick={() => changePage('berita')}>Berita Desa</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Media Sosial</h4>
            <div className="social-links">
              <a href="#" className="social-icon">📘 Facebook</a>
              <a href="#" className="social-icon">📷 Instagram</a>
              <a href="#" className="social-icon">▶️ YouTube</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Desa Arcawinangun. All rights reserved.</p>
          <p>Powered by Sistem Informasi Desa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;