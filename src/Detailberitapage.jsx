import React from 'react';

const DetailBeritaPage = ({ selectedBerita, changePage }) => {
  return (
    <section className="page-content">
      <div className="container-full">
        <button onClick={() => changePage('berita')} className="btn-back">← Kembali ke Berita</button>
        <div className="detail-berita">
          <span className="berita-kategori">{selectedBerita.kategori}</span>
          <h1 className="detail-title">{selectedBerita.title}</h1>
          <div className="detail-meta">
            <span>📅 {selectedBerita.date}</span>
            <span>👤 Admin Desa</span>
          </div>
          <img src={selectedBerita.image} alt={selectedBerita.title} className="detail-image" />
          <div className="detail-content">
            <p>{selectedBerita.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailBeritaPage;