import React from 'react';
import { beritaData } from './data';

const BeritaPage = ({ openBerita }) => {
  return (
    <section className="page-content">
      <div className="container-full">
        <div className="page-header">
          <h1 className="page-title">Berita Desa</h1>
          <p className="page-subtitle">Informasi terbaru dari Desa Arcawinangun</p>
        </div>
        <div className="berita-grid">
          {beritaData.map((berita) => (
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
      </div>
    </section>
  );
};

export default BeritaPage;