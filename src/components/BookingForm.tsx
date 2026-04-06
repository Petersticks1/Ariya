import { useForm } from 'react-hook-form';
import { formatWhatsAppMessage, formatEmailLink } from '../utils/communication';
import { Send, Mail } from 'lucide-react';

const BookingForm = ({ title, fields, dualContact = false }: any) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onWhatsAppSubmit = (data: any) => {
    const url = formatWhatsAppMessage(title, data);
    window.open(url, '_blank');
  };

  const onEmailSubmit = (data: any) => {
    const url = formatEmailLink(title, data);
    window.location.href = url;
  };

  return (
    <form className="space-y-8 bg-white/5 p-8 md:p-12 rounded-2xl border border-primary/10 shadow-2xl relative overflow-hidden backdrop-blur-sm">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {fields.map((field) => (
          <div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
            <label className="text-[10px] uppercase tracking-[2px] text-primary font-bold mb-2 block">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                {...register(field.name, { required: field.required })}
                placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}`}
                rows={4}
                className="bg-transparent border-b border-primary/20 focus:border-primary text-white w-full py-3 resize-none"
              />
            ) : field.type === 'select' ? (
              <select
                {...register(field.name, { required: field.required })}
                className="bg-background/50 border-b border-primary/20 focus:border-primary text-white w-full py-3 outline-none"
              >
                <option value="">Select {field.label}</option>
                {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            ) : (
              <input
                type={field.type || 'text'}
                {...register(field.name, { required: field.required })}
                placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}`}
                className="bg-transparent border-b border-primary/20 focus:border-primary text-white w-full py-3 transition-all"
              />
            )}
            {errors[field.name] && <p className="text-red-400 text-[10px] mt-1 uppercase tracking-[1px]">This field is required</p>}
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 pt-8">
        <button
          type="button"
          onClick={handleSubmit(onWhatsAppSubmit)}
          className="flex-grow primary flex items-center justify-center gap-3 active:scale-95 transition-transform"
        >
          <Send size={18} /> Send via WhatsApp
        </button>
        {dualContact && (
          <button
            type="button"
            onClick={handleSubmit(onEmailSubmit)}
            className="flex-grow secondary flex items-center justify-center gap-3 active:scale-95 transition-transform"
          >
            <Mail size={18} /> Send via Email
          </button>
        )}
      </div>

      <p className="text-[10px] text-text-muted italic text-center mt-6">
        By submitting this form, you agree to being contacted via the selected channel to finalize your request.
      </p>
    </form>
  );
};

export default BookingForm;
