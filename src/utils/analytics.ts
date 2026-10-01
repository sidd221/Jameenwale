declare global {
  interface Window {
    dataLayer?: any[];
  }
}

/**
 * Dispatches custom events to Google Tag Manager / Google Analytics 4 dataLayer.
 * Safe for execution in all browser and SSR environments.
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...params,
      timestamp: new Date().toISOString(),
    });
  }
}

export function trackLeadSubmission(formName: string, additionalData: Record<string, any> = {}) {
  trackEvent('generate_lead', {
    form_name: formName,
    ...additionalData,
  });
}

export function trackWhatsAppClick(locationOrContext: string) {
  trackEvent('whatsapp_click', {
    click_location: locationOrContext,
    destination: 'https://wa.me/916287220163',
  });
}

export function trackPhoneClick(locationOrContext: string) {
  trackEvent('phone_click', {
    click_location: locationOrContext,
    destination: 'tel:+916287220163',
  });
}

export function trackBrochureDownload(brochureName: string) {
  trackEvent('brochure_download', {
    brochure_name: brochureName,
  });
}
