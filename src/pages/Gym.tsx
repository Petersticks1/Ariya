import { useState } from 'react';
import { packages } from '../data/packages';
import PackageCard from '../components/PackageCard';
import BookingForm from '../components/BookingForm';

const Gym = () => {
  const [selectedPlan, setSelectedPlan] = useState('');

  const gymFields = [
    { name: 'fullName', label: 'Full Name', required: true },
    { name: 'phoneNumber', label: 'Phone Number', type: 'tel', required: true },
    { name: 'selectedPackage', label: 'Membership Plan', type: 'select', options: ['Bronze', 'Silver', 'Gold'], defaultValue: selectedPlan, required: true },
    { name: 'startDate', label: 'Preferred Start Date', type: 'date', required: true },
    { name: 'healthNotes', label: 'Health Notes / Conditions', type: 'textarea', placeholder: 'Any health conditions we should know about?' },
  ];

  return (
    <div className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h6 className="text-[12px] uppercase tracking-[4px] text-primary mb-4">Ariya Gym</h6>
          <h1 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-[1px] leading-tight mb-8">Premium Fitness & <br /><span className="text-primary italic">Wellness Coaching</span></h1>
          <p className="text-text-muted text-lg leading-relaxed">
            Elevate your fitness journey with our state-of-the-art facilities and personalized training plans designed for your unique goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {packages.gym.map((item, index) => (
            <PackageCard 
              key={item.id} 
              item={item} 
              index={index} 
              onSelect={(name) => {
                setSelectedPlan(name);
                document.getElementById('enrollment-form').scrollIntoView({ behavior: 'smooth' });
              }} 
            />
          ))}
        </div>

        <div id="enrollment-form" className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-[1px] mb-4">Membership Registration</h2>
            <p className="text-text-muted uppercase tracking-[2px] text-sm">Join the ARIYA community today.</p>
          </div>
          <BookingForm title="Gym Membership Registration" fields={gymFields} />
        </div>
      </div>
    </div>
  );
};

export default Gym;
