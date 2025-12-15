import React from 'react';
import { perangkatDesa } from './data';

const PemerintahanPage = () => {
  return (
    <section className="page-content">
      <div className="container-full">
        <div className="page-header">
          <h1 className="page-title">Pemerintahan Desa</h1>
          <p className="page-subtitle">Struktur organisasi pemerintahan Desa Arcawinangun</p>
        </div>
        <div className="perangkat-grid">
          {perangkatDesa.map((perangkat, index) => (
            <div key={index} className="perangkat-card">
              <div className="perangkat-foto">
                <img src={perangkat.foto} alt={perangkat.nama} />
              </div>
              <h4>{perangkat.nama}</h4>
              <p className="jabatan">{perangkat.jabatan}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PemerintahanPage;