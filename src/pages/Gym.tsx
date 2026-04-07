import { useState } from 'react';
import { motion } from 'framer-motion';
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/image3.jpeg" alt="Ariya Gym" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/60"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h6 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold uppercase tracking-[6px] mb-4"
          >
            Ariya Gym
          </motion.h6>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif text-white uppercase tracking-[4px]"
          >
            Premium <span className="text-primary italic">Fitness</span>
          </motion.h1>
        </div>
      </section>

      <div className="section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif text-text uppercase tracking-[1px] leading-tight mb-8">Personalized <br /><span className="text-primary italic">Wellness Coaching</span></h2>
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
                onSelect={(name: string) => {
                  setSelectedPlan(name);
                  const el = document.getElementById('enrollment-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }} 
              />
            ))}
          </div>

          <div id="enrollment-form" className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif text-text uppercase tracking-[1px] mb-4">Membership Registration</h2>
              <p className="text-text-muted uppercase tracking-[2px] text-sm">Join the ARIYA community today.</p>
            </div>
            <BookingForm title="Gym Membership Registration" fields={gymFields} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gym;
