import { useState } from 'react';
import { packages } from '../data/packages';
import PackageCard from '../components/PackageCard';
import BookingForm from '../components/BookingForm';

const CarWash = () => {
  const [selectedPlan, setSelectedPlan] = useState('');

  const carWashFields = [
    { name: 'fullName', label: 'Full Name', required: true },
    { name: 'phoneNumber', label: 'Phone Number', type: 'tel', required: true },
    { name: 'carDetails', label: 'Car Make & Model', required: true },
    { name: 'plateNumber', label: 'Plate Number', required: true },
    { name: 'selectedPlan', label: 'Selected Plan', type: 'select', options: ['Weekly', 'Monthly Basic', 'Monthly Premium', 'Monthly Deluxe'], required: true },
    { name: 'startDate', label: 'Preferred Start Date', type: 'date', required: true },
  ];

  return (
    <div className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h6 className="text-[12px] uppercase tracking-[4px] text-primary mb-4">Ariya Car Wash</h6>
          <h1 className="text-4xl md:text-6xl font-serif text-text uppercase tracking-[1px] leading-tight mb-8">Professional Car Care <br /><span className="text-primary italic">& Detailing</span></h1>
          <p className="text-text-muted text-lg leading-relaxed">
            Give your vehicle the premium treatment it deserves. Our expert team ensures your car looks its best, every single time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {packages.carwash.map((item, index) => (
            <PackageCard 
              key={item.id} 
              item={item} 
              index={index} 
              onSelect={(name) => {
                setSelectedPlan(name);
                document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
              }} 
            />
          ))}
        </div>

        <div id="order-form" className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-text uppercase tracking-[1px] mb-4">Car Wash Membership</h2>
            <p className="text-text-muted uppercase tracking-[2px] text-sm">Select a plan and tell us about your vehicle.</p>
          </div>
          <BookingForm title="Car Wash Membership" fields={carWashFields} />
        </div>
      </div>
    </div>
  );
};

export default CarWash;
