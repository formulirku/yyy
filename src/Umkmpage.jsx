import React from 'react';
import { umkmData } from './data';

const UMKMPage = () => {
  return (
    <section className="page-content">
      <div className="container-full">
        <div className="page-header">
          <h1 className="page-title">UMKM Desa</h1>
          <p className="page-subtitle">Usaha mikro, kecil, dan menengah di Desa Arcawinangun</p>
        </div>
        <div className="umkm-grid">
          {umkmData.map((umkm, index) => (
            <div key={index} className="umkm-card">
              <div className="umkm-image">
                <img src={umkm.foto} alt={umkm.nama} />
              </div>
              <div className="umkm-content">
                <h3>{umkm.nama}</h3>
                <p><strong>Pemilik:</strong> {umkm.pemilik}</p>
                <p><strong>Produk:</strong> {umkm.produk}</p>
                <p><strong>Alamat:</strong> {umkm.alamat}</p>
                <p className="kontak">📞 {umkm.kontak}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UMKMPage;