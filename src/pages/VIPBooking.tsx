import BookingForm from '../components/BookingForm';

const VIPBooking = () => {
  const vipFields = [
    { name: 'fullName', label: 'Full Name', required: true },
    { name: 'phoneNumber', label: 'Phone Number', type: 'tel', required: true },
    { name: 'bookingDate', label: 'Preferred Date', type: 'date', required: true },
    { name: 'timeSlot', label: 'Time Slot', type: 'select', options: ['Morning (9 AM – 1 PM)', 'Afternoon (1 PM – 6 PM)', 'Evening (6 PM – 11 PM)'], required: true },
    { name: 'guestCount', label: 'Number of Guests', type: 'number', required: true },
    { name: 'preOrder', label: 'Menu Pre-Order', type: 'textarea', placeholder: 'Any specific food or drinks you would like us to prepare...' },
    { name: 'specialRequests', label: 'Special Requests / Notes', type: 'textarea' },
  ];

  return (
    <div className="section-padding overflow-hidden relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <img src="/img/rooms/3.jpg" className="w-full h-full object-cover opacity-20" alt="VIP Room" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-background/80 backdrop-blur-md p-10 md:p-20 rounded-3xl border border-primary/20 shadow-2xl">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h6 className="text-[12px] uppercase tracking-[4px] text-primary mb-4">Ariya VIP Room</h6>
            <h1 className="text-4xl md:text-6xl font-serif text-text uppercase tracking-[1px] leading-tight mb-8">Exclusive & <br /><span className="text-primary italic">Sophisticated Space</span></h1>
            <p className="text-text-muted text-lg leading-relaxed">
              Hosting a private board meeting, a celebrate a quiet birthday, or a discrete cocktail experience? Our VIP room provides the ultimate sanctuary.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 mb-12 text-center">
              <p className="text-primary uppercase tracking-[2px] text-sm font-bold">
                ⚠️ Notice: Short-notice bookings (within 72 hours) are subject to availability.
              </p>
            </div>
            
            <BookingForm title="VIP Room Booking" fields={vipFields} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VIPBooking;
