import React from 'react';

const Header = ({ currentPage, changePage, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-section" onClick={() => changePage('home')} style={{cursor: 'pointer'}}>
            <div className="logo">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <div className="logo-text">
              <h2>Desa Arcawinangun</h2>
              <p>Kabupaten Banyumas</p>
            </div>
          </div>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>

          <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
            <a onClick={() => changePage('home')}>Beranda</a>
            <a onClick={() => changePage('profil')}>Profil</a>
            <a onClick={() => changePage('pemerintahan')}>Pemerintahan</a>
            <a onClick={() => changePage('layanan')}>Layanan</a>
            <a onClick={() => changePage('umkm')}>UMKM</a>
            <a onClick={() => changePage('galeri')}>Galeri</a>
            <a onClick={() => changePage('berita')}>Berita</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;