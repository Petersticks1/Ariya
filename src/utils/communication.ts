const WHATSAPP_NUMBER = "2348139084131";

export const formatWhatsAppMessage = (header: any, data: any) => {
  let message = `*${header.toUpperCase()}*\n\n`;
  
  Object.entries(data).forEach(([key, value]) => {
    if (value) {
      const label = key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase());
      message += `${label}: ${value}\n`;
    }
  });
  
  message += `\n_Time: ${new Date().toLocaleString('en-NG')}_`;
  
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const formatEmailLink = (subject: any, data: any) => {
  let body = `Details for ${subject}:\n\n`;
  
  Object.entries(data).forEach(([key, value]) => {
    if (value) {
      const label = key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase());
      body += `${label}: ${value}\n`;
    }
  });

  const mailto = `mailto:adebayopetergvmc68@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return mailto;
};
