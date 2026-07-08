import React, { useState, useEffect } from 'react';
import { PORTFOLIO_ITEMS, TESTIMONIALS } from './constants/data';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Lightbox from './components/Lightbox';
import Toast from './components/Toast';
import IntroLanding from './components/IntroLanding';

function App() {
  const [isIntroActive, setIsIntroActive] = useState(true);
  const [activeTab, setActiveTab] = useState('portraits');

  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingGenre, setBookingGenre] = useState('portraits');

  // Review Carousel State
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState(null);
  const [isToastVisible, setIsToastVisible] = useState(false);

  // Review Carousel Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReviewIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

  const handleMinorCategoryClick = (genre) => {
    setActiveTab(genre);
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev === 0 ? PORTFOLIO_ITEMS.length - 1 : prev - 1));
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev === PORTFOLIO_ITEMS.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {isIntroActive && <IntroLanding onComplete={() => setIsIntroActive(false)} />}
      <Header onBookClick={openBookingModal} />
      <Hero onBookClick={openBookingModal} />
      <Stats />
      <Services 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onBookClick={openBookingModal} 
        onMinorCategoryClick={handleMinorCategoryClick} 
      />
      <Portfolio onImageClick={setLightboxIndex} />
      <About />
      <Reviews 
        activeReviewIndex={activeReviewIndex} 
        setActiveReviewIndex={setActiveReviewIndex} 
      />
      <Contact onSubmit={handleContactSubmit} />
      <Footer onMinorCategoryClick={handleMinorCategoryClick} />
      
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
    </>
  );
}

export default App;
