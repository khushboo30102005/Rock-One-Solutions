declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function track(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params ?? {});
  }
}

export const trackWhatsApp = () => track("whatsapp_click");

export const trackPhoneCall = () => track("phone_call");

export const trackEmailClick = () => track("email_click");

export const trackLead = () => track("generate_lead");

export {};
