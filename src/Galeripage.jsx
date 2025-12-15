import React from 'react';
import { galeriData } from './data';

const GaleriPage = () => {
  return (
    <section className="page-content">
      <div className="container-full">
        <div className="page-header">
          <h1 className="page-title">Galeri Desa</h1>
          <p className="page-subtitle">Dokumentasi kegiatan dan fasilitas desa</p>
        </div>
        <div className="galeri-grid">
          {galeriData.map((foto) => (
            <div key={foto.id} className="galeri-item">
              <img src={foto.foto} alt={foto.judul} />
              <div className="galeri-overlay">
                <span className="galeri-kategori">{foto.kategori}</span>
                <h4>{foto.judul}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GaleriPage;