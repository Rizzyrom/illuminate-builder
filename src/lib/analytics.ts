// Google Analytics 4 implementation
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID as string, {
      page_location: url,
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
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formType: string) => {
  event({
    action: 'form_submit',
    category: 'engagement',
    label: formType,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  event({
    action: 'button_click',
    category: 'engagement',
    label: `${buttonName} - ${location}`,
  });
};

// Track page scroll depth
export const trackScrollDepth = (depth: number) => {
  event({
    action: 'scroll_depth',
    category: 'engagement',
    value: depth,
  });
};