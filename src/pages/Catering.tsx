import BookingForm from '../components/BookingForm';

const Catering = () => {
  const cateringFields = [
    { name: 'fullName', label: 'Full Name', required: true },
    { name: 'phoneNumber', label: 'Phone Number', type: 'tel', required: true },
    { name: 'email', label: 'Email Address', type: 'email', required: true },
    { name: 'eventType', label: 'Event Type', type: 'select', options: ['Wedding', 'Corporate', 'Birthday', 'Funeral', 'Other'], required: true },
    { name: 'eventDate', label: 'Event Date', type: 'date', required: true },
    { name: 'location', label: 'Event Location / Address', required: true },
    { name: 'guestCount', label: 'Expected Guest Count', type: 'number', required: true },
    { name: 'menuPreferences', label: 'Menu Preferences / Dietary Needs', type: 'textarea', required: true },
    { name: 'budgetRange', label: 'Budget Range', type: 'select', options: ['Under ₦500k', '₦500k – ₦1.5M', '₦1.5M – ₦5M', 'Above ₦5M'] },
    { name: 'notes', label: 'Additional Notes', type: 'textarea' },
  ];

  return (
    <div className="section-padding overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <img src="/img/restaurant/3.jpg" className="w-full h-full object-cover opacity-10" alt="ARIYA Background" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h6 className="text-[12px] uppercase tracking-[4px] text-primary mb-4">Ariya Catering</h6>
          <h1 className="text-4xl md:text-6xl font-serif text-text uppercase tracking-[1px] leading-tight mb-8">Exquisite Flavors For <br /><span className="text-primary italic">Every Occasion</span></h1>
          <p className="text-text-muted text-lg leading-relaxed">
            Elevate your event with ARIYA's signature cuisine. From intimate dinners to massive celebrations, we bring the best tastes to you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-text uppercase tracking-[1px] mb-4">Request a Quote</h2>
            <p className="text-text-muted uppercase tracking-[2px] text-sm">Tell us about your event and menu desires.</p>
          </div>
          <BookingForm title="Catering Request" fields={cateringFields} dualContact={true} />
        </div>
      </div>
    </div>
  );
};

export default Catering;
