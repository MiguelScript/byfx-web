// Google Analytics event tracking utilities

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID as string, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track specific business events
export const trackServiceView = (serviceName: string) => {
  event({
    action: 'view_service',
    category: 'Services',
    label: serviceName,
  });
};

export const trackWorkView = (workTitle: string) => {
  event({
    action: 'view_work',
    category: 'Portfolio',
    label: workTitle,
  });
};

export const trackContactFormSubmit = () => {
  event({
    action: 'submit_form',
    category: 'Contact',
    label: 'Contact Form',
  });
};

export const trackWhatsAppClick = () => {
  event({
    action: 'click_whatsapp',
    category: 'Contact',
    label: 'WhatsApp Button',
  });
};

export const trackSocialClick = (platform: string) => {
  event({
    action: 'click_social',
    category: 'Social Media',
    label: platform,
  });
};
