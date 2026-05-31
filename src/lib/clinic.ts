export const clinic = {
  name: "Rudhra Homoeopathy Clinic",
  doctor: "Dr. Soundarya",
  qualifications: "B.H.M.S | D.Y.T",
  tagline: "Personalised Healing Through Homoeopathy, Yoga & Diet.",
  address: "NH44, Opp Bus Stop, Shadnagar – 509216",
  email: "rudhrahomoeopathyclinic@gmail.com",
  instagram: "@rudhrahomoeoclinicshadnagar",
  instagramUrl: "https://instagram.com/rudhrahomoeoclinicshadnagar",
  hours: "10AM–2PM & 4PM–7:30PM",
  // TODO: replace with the clinic's actual WhatsApp number (country code, no +, no spaces)
  whatsappNumber: "919999999999",
};

export function whatsappLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${clinic.whatsappNumber}?text=${text}`;
}

export const defaultWhatsAppMessage =
  `Hello Dr. Soundarya, I'd like to book a consultation at Rudhra Homoeopathy Clinic.`;
