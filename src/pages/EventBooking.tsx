import BookingForm from '../components/BookingForm';

const EventBooking = () => {
  const eventFields = [
    { name: 'fullName', label: 'Full Name', required: true },
    { name: 'phoneNumber', label: 'Phone Number', type: 'tel', required: true },
    { name: 'email', label: 'Email Address', type: 'email', required: true },
    { name: 'eventType', label: 'Event Type', type: 'select', options: ['Wedding', 'Corporate', 'Birthday', 'Other'], required: true },
    { name: 'eventDate', label: 'Event Date', type: 'date', required: true },
    { name: 'guestCount', label: 'Expected Guest Count', type: 'number', required: true },
    { name: 'equipmentNeeds', label: 'Equipment Needs', placeholder: 'PA, Projector, Chairs, Lighting etc.' },
    { name: 'menuPreferences', label: 'Menu / Catering Preference', type: 'textarea' },
    { name: 'notes', label: 'Additional Notes', type: 'textarea' },
  ];

  return (
    <div className="section-padding overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <img src="/img/slider/4.jpg" className="w-full h-full object-cover opacity-10" alt="ARIYA Background" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h6 className="text-[12px] uppercase tracking-[4px] text-primary mb-4">Ariya Event Centre</h6>
          <h1 className="text-4xl md:text-6xl font-serif text-text uppercase tracking-[1px] leading-tight mb-8">Memorable Space For <br /><span className="text-primary italic">Your Special Occasions</span></h1>
          <p className="text-text-muted text-lg leading-relaxed">
            From intimate gatherings to grand celebrations, our venue offers the perfect backdrop for moments that last a lifetime.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-text uppercase tracking-[1px] mb-4">Inquire Now</h2>
            <p className="text-text-muted uppercase tracking-[2px] text-sm">Tell us about your event and we'll get back to you shortly.</p>
          </div>
          <BookingForm title="Event Centre Booking Request" fields={eventFields} dualContact={true} />
        </div>
      </div>
    </div>
  );
};

export default EventBooking;
