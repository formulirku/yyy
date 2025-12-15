import React from 'react';

const ProfilPage = () => {
  return (
    <section className="page-content profil-page">
      <div className="container-full">
        <div className="page-header">
          <h1 className="page-title">Profil Desa Arcawinangun</h1>
          <p className="page-subtitle">Mengenal lebih dekat Desa Arcawinangun</p>
        </div>
        
        <div className="profil-content">
          <div className="profil-main">
            <div className="profil-section">
              <div className="section-icon">📜</div>
              <h3>Sejarah Desa</h3>
              <p>
                Desa Arcawinangun merupakan salah satu desa yang terletak di Kecamatan Purwokerto Timur, 
                Kabupaten Banyumas, Provinsi Jawa Tengah. Nama "Arcawinangun" berasal dari bahasa Jawa kuno 
                yang memiliki makna mendalam terkait dengan sejarah dan budaya lokal. 
              </p>
              <p>
                Desa ini telah berkembang sejak era kolonial Belanda dan terus mengalami modernisasi hingga saat ini. 
                Masyarakat Arcawinangun dikenal dengan semangat gotong royong yang tinggi dan menjunjung tinggi 
                nilai-nilai kearifan lokal.
              </p>
            </div>

            <div className="profil-section">
              <div className="section-icon">🎯</div>
              <h3>Visi Desa</h3>
              <div className="visi-box">
                <p>"Terwujudnya Desa Arcawinangun yang Maju, Mandiri, Sejahtera, dan Religius pada Tahun 2025"</p>
              </div>
            </div>

            <div className="profil-section">
              <div className="section-icon">📋</div>
              <h3>Misi Desa</h3>
              <div className="misi-list">
                <div className="misi-item">
                  <span className="misi-number">1</span>
                  <p>Meningkatkan kualitas pelayanan publik yang prima, cepat, dan transparan kepada seluruh masyarakat</p>
                </div>
                <div className="misi-item">
                  <span className="misi-number">2</span>
                  <p>Mengembangkan ekonomi desa berbasis potensi lokal dan memberdayakan UMKM</p>
                </div>
                <div className="misi-item">
                  <span className="misi-number">3</span>
                  <p>Meningkatkan kualitas infrastruktur dan fasilitas umum desa yang memadai</p>
                </div>
                <div className="misi-item">
                  <span className="misi-number">4</span>
                  <p>Memberdayakan masyarakat dalam pembangunan desa yang berkelanjutan</p>
                </div>
                <div className="misi-item">
                  <span className="misi-number">5</span>
                  <p>Melestarikan nilai-nilai budaya, adat istiadat, dan keagamaan</p>
                </div>
              </div>
            </div>

            <div className="profil-section">
              <div className="section-icon">🌍</div>
              <h3>Kondisi Geografis</h3>
              <p>
                Desa Arcawinangun terletak pada ketinggian 95 meter di atas permukaan laut dengan luas wilayah 
                245 hektar. Wilayah desa terdiri dari 4 dusun, 8 RW, dan 32 RT dengan kondisi tanah yang subur 
                dan cocok untuk pertanian.
              </p>
              <p>
                Kondisi topografi desa relatif datar dengan sebagian kecil berbukit, memiliki akses jalan yang baik, 
                dan dilalui oleh saluran irigasi yang memadai untuk mendukung pertanian masyarakat.
              </p>
            </div>

            <div className="profil-section">
              <div className="section-icon">🏛️</div>
              <h3>Potensi Desa</h3>
              <div className="potensi-grid">
                <div className="potensi-card">
                  <div className="potensi-icon">🌾</div>
                  <h4>Pertanian</h4>
                  <p>Lahan sawah yang luas dengan hasil panen padi dan palawija berkualitas</p>
                </div>
                <div className="potensi-card">
                  <div className="potensi-icon">🏪</div>
                  <h4>UMKM</h4>
                  <p>Berbagai usaha mikro dan kecil yang berkembang di masyarakat</p>
                </div>
                <div className="potensi-card">
                  <div className="potensi-icon">👥</div>
                  <h4>SDM</h4>
                  <p>Sumber daya manusia yang produktif dan berdedikasi tinggi</p>
                </div>
                <div className="potensi-card">
                  <div className="potensi-icon">🎨</div>
                  <h4>Budaya</h4>
                  <p>Kearifan lokal dan budaya yang masih terjaga dengan baik</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="profil-sidebar">
            <div className="info-box">
              <h4>📍 Informasi Geografis</h4>
              <div className="info-item">
                <strong>Luas Wilayah:</strong>
                <span>245 Ha</span>
              </div>
              <div className="info-item">
                <strong>Ketinggian:</strong>
                <span>95 mdpl</span>
              </div>
              <div className="info-item">
                <strong>Batas Utara:</strong>
                <span>Desa Kebumen</span>
              </div>
              <div className="info-item">
                <strong>Batas Selatan:</strong>
                <span>Desa Kotayasa</span>
              </div>
              <div className="info-item">
                <strong>Batas Timur:</strong>
                <span>Desa Tambaksogra</span>
              </div>
              <div className="info-item">
                <strong>Batas Barat:</strong>
                <span>Desa Karangsalam</span>
              </div>
            </div>
            
            <div className="info-box">
              <h4>📊 Data Wilayah</h4>
              <div className="info-item">
                <strong>Jumlah Dusun:</strong>
                <span>4 Dusun</span>
              </div>
              <div className="info-item">
                <strong>Jumlah RW:</strong>
                <span>8 RW</span>
              </div>
              <div className="info-item">
                <strong>Jumlah RT:</strong>
                <span>32 RT</span>
              </div>
            </div>

            <div className="info-box">
              <h4>🗺️ Peta Lokasi</h4>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31631.200000000004!2d109.24500000000001!3d-7.415000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655cce9fc00001%3A0x0!2sArcawinangun%2C%20Purwokerto%20Timur%2C%20Kab.%20Banyumas%2C%20Jawa%20Tengah%2053113%2C%20Indonesia!5e0!3m2!1sid!2sid!4v1700000000000"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '8px', marginTop: '10px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div className="info-box">
              <h4>📞 Kontak Desa</h4>
              <div className="info-item">
                <strong>Telepon:</strong>
                <span>(0281) 1234567</span>
              </div>
              <div className="info-item">
                <strong>Email:</strong>
                <span>desaarca@gmail.com</span>
              </div>
              <div className="info-item">
                <strong>Jam Kerja:</strong>
                <span>Senin - Jumat<br/>08.00 - 15.00 WIB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilPage;