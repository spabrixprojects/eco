import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  productName?: string;
}

const WhatsAppButton = ({ productName }: WhatsAppButtonProps) => {
  const handleClick = () => {
    const message = productName
      ? encodeURIComponent(`Hi, I'm interested in "${productName}". Please share more details and pricing.`)
      : encodeURIComponent("Hi, I'm interested in your electrical products. Please share details.");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 lg:w-16 lg:h-16 bg-whatsapp rounded-full flex items-center justify-center shadow-whatsapp animate-pulse-glow hover:scale-110 transition-transform duration-200"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 lg:w-8 lg:h-8 text-white fill-white" />
    </button>
  );
};

export default WhatsAppButton;
