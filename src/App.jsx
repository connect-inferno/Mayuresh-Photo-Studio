import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Lightbox from './components/Lightbox';
import Toast from './components/Toast';

import { PORTFOLIO_ITEMS } from './constants/data';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';

function App() {
  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev === 0 ? PORTFOLIO_ITEMS.length - 1 : prev - 1));
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev === PORTFOLIO_ITEMS.length - 1 ? 0 : prev + 1));
  };

  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingGenre, setBookingGenre] = useState('portraits');

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState(null);
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = (message) => {
    setToastMessage(message);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 3000);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    showToast('Booking submitted successfully!');
    setIsBookingOpen(false);
    e.target.reset();
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    showToast('Message sent successfully!');
    e.target.reset();
  };

  const openBookingModal = (genre = 'portraits') => {
    setBookingGenre(genre);
    setIsBookingOpen(true);
  };

  return (
    <BrowserRouter>
      <Header onBookClick={openBookingModal} />
      
      <main style={{ minHeight: '100vh' }}>
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                openBookingModal={openBookingModal} 
                setLightboxIndex={setLightboxIndex} 
                handleContactSubmit={handleContactSubmit} 
              />
            } 
          />
          <Route 
            path="/service/:slug" 
            element={
              <ServicePage 
                openBookingModal={openBookingModal} 
                setLightboxIndex={setLightboxIndex} 
              />
            } 
          />
        </Routes>
      </main>

      <Footer />
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        genre={bookingGenre} 
        setGenre={setBookingGenre} 
        onSubmit={handleBookingSubmit} 
      />
      
      <Lightbox 
        index={lightboxIndex} 
        onClose={() => setLightboxIndex(null)} 
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
      />
      
      <Toast 
        isVisible={isToastVisible} 
        message={toastMessage} 
      />
    </BrowserRouter>
  );
}

export default App;
