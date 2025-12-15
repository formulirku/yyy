import React from 'react';
import { layananData } from './data';

const LayananPage = () => {
  return (
    <section className="page-content">
      <div className="container-full">
        <div className="page-header">
          <h1 className="page-title">Layanan Publik</h1>
          <p className="page-subtitle">Informasi layanan administrasi desa</p>
        </div>
        <div className="layanan-grid">
          {layananData.map((layanan, index) => (
            <div key={index} className="layanan-card">
              <div className="layanan-icon">📄</div>
              <h3>{layanan.nama}</h3>
              <div className="layanan-detail">
                <p><strong>Persyaratan:</strong></p>
                <ul>
                  {layanan.persyaratan.map((syarat, idx) => (
                    <li key={idx}>{syarat}</li>
                  ))}
                </ul>
                <p className="waktu-proses">⏱️ Waktu: {layanan.waktu}</p>
                <p className="biaya">💰 Biaya: {layanan.biaya}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LayananPage;