import { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import HomePage from './Homepage';
import ProfilPage from './Profilpage';
import PemerintahanPage from './Pemerintahanpage';
import LayananPage from './Layananpage';
import UMKMPage from './Umkmpage';
import GaleriPage from './Galeripage';
import BeritaPage from './Beritapage';
import DetailBeritaPage from './Detailberitapage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBerita, setSelectedBerita] = useState(null);

  const changePage = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const openBerita = (berita) => {
    setSelectedBerita(berita);
    setCurrentPage('detail-berita');
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      <Header 
        currentPage={currentPage}
        changePage={changePage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {currentPage === 'home' && <HomePage changePage={changePage} openBerita={openBerita} />}
      {currentPage === 'profil' && <ProfilPage />}
      {currentPage === 'pemerintahan' && <PemerintahanPage />}
      {currentPage === 'layanan' && <LayananPage />}
      {currentPage === 'umkm' && <UMKMPage />}
      {currentPage === 'galeri' && <GaleriPage />}
      {currentPage === 'berita' && <BeritaPage openBerita={openBerita} />}
      {currentPage === 'detail-berita' && <DetailBeritaPage selectedBerita={selectedBerita} changePage={changePage} />}

      <Footer changePage={changePage} />
    </div>
  );
}

export default App;