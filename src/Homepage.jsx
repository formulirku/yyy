import React from 'react';
import { beritaData, statistikData } from './data';

const HomePage = ({ changePage, openBerita }) => {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Selamat Datang di Website Desa Arcawinangun</h1>
            <p className="hero-subtitle">
              Sumber informasi terbaru tentang pemerintahan, potensi, dan kegiatan di Desa Arcawinangun
            </p>
            <div className="hero-buttons">
              <button onClick={() => changePage('profil')} className="btn-primary">Profil Desa</button>
              <button onClick={() => changePage('pemerintahan')} className="btn-secondary">Pemerintahan</button>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-menu">
        <div className="container">
          <div className="menu-grid">
            <div className="menu-item" onClick={() => changePage('profil')}>
              <div className="menu-icon">📄</div>
              <h3>Profil Desa</h3>
            </div>
            <div className="menu-item" onClick={() => changePage('pemerintahan')}>
              <div className="menu-icon">👔</div>
              <h3>Pemerintahan</h3>
            </div>
            <div className="menu-item" onClick={() => changePage('berita')}>
              <div className="menu-icon">📰</div>
              <h3>Berita</h3>
            </div>
            <div className="menu-item" onClick={() => changePage('layanan')}>
              <div className="menu-icon">📋</div>
              <h3>Layanan</h3>
            </div>
            <div className="menu-item" onClick={() => changePage('umkm')}>
              <div className="menu-icon">🏪</div>
              <h3>UMKM</h3>
            </div>
            <div className="menu-item" onClick={() => changePage('galeri')}>
              <div className="menu-icon">📷</div>
              <h3>Galeri</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="sambutan">
        <div className="container">
          <h2 className="section-title">Sambutan Kepala Desa</h2>
          <div className="sambutan-content">
            <div className="sambutan-image">
              <img src="https://png.pngtree.com/png-clipart/20230215/original/pngtree-regional-head-avatar-png-image_8955156.png" alt="Kepala Desa" />
            </div>
            <div className="sambutan-text">
              <p className="kades-name">Bapak Yambuh</p>
              <p className="kades-title">Kepala Desa Arcawinangun</p>
              <p>
                Assalamu'alaikum Warahmatullahi Wabarakatuh, salam sejahtera untuk kita semua. 
                Puji syukur kita panjatkan kehadirat Allah SWT atas limpahan rahmat dan karunia-Nya, 
                sehingga website resmi Desa Arcawinangun dapat hadir sebagai media informasi dan komunikasi 
                antara pemerintah desa dengan masyarakat.
              </p>
              <p>
                Melalui website ini, kami berharap dapat memberikan pelayanan yang lebih baik, 
                transparan, dan akuntabel kepada seluruh warga Desa Arcawinangun.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="statistik">
        <div className="container">
          <h2 className="section-title">Data Kependudukan</h2>
          <p className="section-subtitle">Statistik penduduk Desa Arcawinangun</p>
          <div className="stats-grid">
            {statistikData.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="berita-home">
        <div className="container">
          <h2 className="section-title">Berita Terbaru</h2>
          <p className="section-subtitle">Informasi terkini dari Desa Arcawinangun</p>
          <div className="berita-grid">
            {beritaData.slice(0, 3).map((berita) => (
              <div key={berita.id} className="berita-card" onClick={() => openBerita(berita)}>
                <div className="berita-image">
                  <img src={berita.image} alt={berita.title} />
                  <span className="berita-kategori">{berita.kategori}</span>
                </div>
                <div className="berita-content">
                  <div className="berita-date">📅 {berita.date}</div>
                  <h3>{berita.title}</h3>
                  <p>{berita.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign: 'center', marginTop: '30px'}}>
            <button onClick={() => changePage('berita')} className="btn-primary">Lihat Semua Berita</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;