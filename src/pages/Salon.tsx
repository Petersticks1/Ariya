import { useState } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, Wand2, VenetianMask } from 'lucide-react';
import BookingForm from '../components/BookingForm';

const Salon = () => {
  const salonServices = [
    { name: 'Haircut & Styling', icon: Scissors, price: '₦5,000+', description: 'Expert cuts and personalized styling for all hair types.' },
    { name: 'Bridal & Occasion', icon: Wand2, price: '₦15,000+', description: 'Exquisite bridal makeup and traditional head wrap (Gele).' },
    { name: 'Facial & Skin Care', icon: Sparkles, price: '₦8,000+', description: 'Deep cleansing and rejuvenating skin treatments.' },
    { name: 'Manicure & Pedicure', icon: VenetianMask, price: '₦6,000+', description: 'Deluxe nail care and spa treatments for hands and feet.' },
  ];

  const bookingFields = [
    { name: 'fullName', label: 'Full Name', required: true },
    { name: 'phoneNumber', label: 'Phone Number', type: 'tel', required: true },
    { name: 'serviceType', label: 'Service Type', type: 'select', options: ['Hair', 'Nails', 'Makeup', 'Braiding', 'Other'], required: true },
    { name: 'stylistPreference', label: 'Stylist Preference', type: 'select', options: ['No Preference', 'Senior Stylist', 'Junior Stylist'] },
    { name: 'preferredDate', label: 'Preferred Date', type: 'date', required: true },
    { name: 'preferredTime', label: 'Preferred Time', type: 'select', options: ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'], required: true },
    { name: 'notes', label: 'Additional Notes', type: 'textarea' },
  ];

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          <div className="lg:w-1/2">
            <h6 className="text-[12px] uppercase tracking-[4px] text-primary mb-4">Ariya Salon</h6>
            <h1 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-[1px] leading-tight mb-8">Luxury Grooming & <br /><span className="text-primary italic">Exquisite Styling</span></h1>
            <p className="text-text-muted text-lg leading-relaxed mb-12">
              Our salon offers a premium experience where modern trends meet timeless elegance.
            </p>
            
            <div className="space-y-6">
              {salonServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex gap-6 p-8 bg-white/5 border border-primary/10 rounded-2xl hover:border-primary/40 transition-all card-gold-accent"
                >
                  <div className="bg-primary/10 p-4 rounded-xl text-primary h-fit group-hover:bg-primary group-hover:text-background transition-colors">
                    <service.icon size={24} />
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-serif text-white uppercase tracking-[1px]">{service.name}</h3>
                      <span className="text-primary font-bold text-sm">{service.price}</span>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-background-cream p-1 rounded-3xl sticky top-32">
               <div className="bg-background p-8 md:p-12 rounded-[22px]">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif text-white uppercase tracking-[1px] mb-4">Book Appointment</h2>
                    <p className="text-text-muted text-xs uppercase tracking-[2px]">Treat yourself to the ARIYA experience.</p>
                  </div>
                  <BookingForm title="Salon Booking" fields={bookingFields} />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salon;
