import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import BookingModal from './BookingModal';

export default function MainLayout() {
  const { pathname } = useLocation();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleBooking = () => setIsBookingOpen(!isBookingOpen);

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      <main className="flex-grow">
        <Outlet context={{ onOpenBooking: () => setIsBookingOpen(true) }} />
      </main>
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
