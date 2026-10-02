/**
 * WhatsApp Lead Submission Utilities
 * Directs all website form submissions straight to official WhatsApp number: +91 7979098902
 */

export const WHATSAPP_LEAD_PHONE = '917979098902';
export const WHATSAPP_LEAD_DISPLAY = '+91 7979098902';

export interface FormLeadData {
  formName: string;
  name: string;
  phone: string;
  email?: string;
  location?: string;
  project?: string;
  requirements?: string;
  [key: string]: string | undefined;
}

/**
 * Formats a clean, professional, readable WhatsApp message with all lead details.
 */
export function buildWhatsAppLeadMessage(data: FormLeadData): string {
  const parts: string[] = [
    `*New Property Inquiry - JameenWale*`,
    `━━━━━━━━━━━━━━━━━━━━━`,
    `👤 *Name:* ${data.name.trim()}`,
    `📱 *Phone:* ${data.phone.trim()}`,
  ];

  if (data.email && data.email.trim()) {
    parts.push(`📧 *Email:* ${data.email.trim()}`);
  }

  if (data.location && data.location.trim()) {
    parts.push(`📍 *Location / Preference:* ${data.location.trim()}`);
  }

  if (data.project && data.project.trim()) {
    parts.push(`🏷️ *Project / Context:* ${data.project.trim()}`);
  }

  if (data.requirements && data.requirements.trim()) {
    parts.push(`💬 *Requirements:* ${data.requirements.trim()}`);
  }

  parts.push(`📄 *Source:* ${data.formName}`);
  parts.push(`━━━━━━━━━━━━━━━━━━━━━`);
  parts.push(`_Sent via JameenWale (https://jameenwale.vercel.app)_`);

  return parts.join('\n');
}

/**
 * Constructs the wa.me deep-link URL.
 */
export function getWhatsAppLeadUrl(data: FormLeadData): string {
  const message = buildWhatsAppLeadMessage(data);
  return `https://wa.me/${WHATSAPP_LEAD_PHONE}?text=${encodeURIComponent(message)}`;
}

/**
 * Opens the lead submission directly in WhatsApp (+91 7979098902).
 * Works seamlessly across mobile (opens WhatsApp app) and desktop (opens WhatsApp Web / App).
 */
export function submitLeadToWhatsApp(data: FormLeadData): string {
  const url = getWhatsAppLeadUrl(data);
  try {
    const opened = window.open(url, '_blank', 'noopener,noreferrer');
    if (!opened || opened.closed || typeof opened.closed === 'undefined') {
      window.location.href = url;
    }
  } catch {
    window.location.href = url;
  }
  return url;
}
