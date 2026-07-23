import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Toast from './components/Toast';
import IntroLanding from './components/IntroLanding';
import Home from './pages/Home';
import CategoryGallery from './pages/CategoryGallery';

function App() {
  const [isIntroActive, setIsIntroActive] = useState(true);

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
    <>
      {isIntroActive && <IntroLanding onComplete={() => setIsIntroActive(false)} />}
      <Header onBookClick={openBookingModal} />
      
      <main>
        <Routes>
          <Route path="/" element={<Home onBookClick={openBookingModal} onContactSubmit={handleContactSubmit} />} />
          <Route path="/gallery/:category" element={<CategoryGallery />} />
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
      
      <Toast 
        isVisible={isToastVisible} 
        message={toastMessage} 
      />
    </>
  );
}

export default App;
