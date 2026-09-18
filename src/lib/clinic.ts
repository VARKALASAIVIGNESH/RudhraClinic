export const clinic = {
  name: "Rudhra Homoeopathy Clinic",
  doctor: "Dr. Soundarya",
  qualifications: "B.H.M.S | D.Y.T",
  registration: "Reg. No. TS-NCH/14829",
  council: "Board of Homoeopathic Medical Examination & NCH",
  tagline: "Personalised Healing Through Homoeopathy, Yoga & Diet.",
  address: "NH44, Opp Bus Stop, Shadnagar – 509216",
  email: "rudhrahomoeopathyclinic@gmail.com",
  instagram: "@rudhrahomoeoclinicshadnagar",
  instagramUrl: "https://instagram.com/rudhrahomoeoclinicshadnagar",
  hours: "10:00 AM – 2:00 PM & 4:00 PM – 7:30 PM",
  whatsappNumber: "917995318298",
  phone: "7995318298",
  phoneDisplay: "+91 79953 18298",
  googleMapsUrl: "https://maps.app.goo.gl/HAURXdssDM6JKWc56",
  disclaimer:
    "Rudhra Homoeopathy Clinic provides outpatient, holistic constitutional healthcare. In case of acute medical emergencies, severe chest pain, breathlessness, or trauma, please visit the nearest hospital emergency room or dial emergency services (108 in India) immediately.",
};

export function whatsappLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${clinic.whatsappNumber}?text=${text}`;
}

export const defaultWhatsAppMessage =
  `Hello Dr. Soundarya, I'd like to book a consultation at Rudhra Homoeopathy Clinic.`;

export interface ClinicStatus {
  isOpen: boolean;
  label: string;
  subLabel: string;
}

export function getClinicStatus(): ClinicStatus {
  // Convert current time to IST (UTC + 5:30)
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const ist = new Date(utc + 5.5 * 3600000);
  const hours = ist.getHours();
  const minutes = ist.getMinutes();
  const currentMinutes = hours * 60 + minutes;

  // Morning: 10:00 AM to 2:00 PM (600 to 840 mins)
  const morningStart = 10 * 60;
  const morningEnd = 14 * 60;

  // Evening: 4:00 PM to 7:30 PM (960 to 1170 mins)
  const eveningStart = 16 * 60;
  const eveningEnd = 19 * 60 + 30;

  if (currentMinutes >= morningStart && currentMinutes < morningEnd) {
    return {
      isOpen: true,
      label: "Open Now",
      subLabel: "Closes at 2:00 PM",
    };
  }

  if (currentMinutes >= eveningStart && currentMinutes < eveningEnd) {
    return {
      isOpen: true,
      label: "Open Now",
      subLabel: "Closes at 7:30 PM",
    };
  }

  if (currentMinutes < morningStart) {
    return {
      isOpen: false,
      label: "Closed Now",
      subLabel: "Opens today at 10:00 AM",
    };
  }

  if (currentMinutes >= morningEnd && currentMinutes < eveningStart) {
    return {
      isOpen: false,
      label: "Afternoon Break",
      subLabel: "Re-opens at 4:00 PM",
    };
  }

  return {
    isOpen: false,
    label: "Closed Now",
    subLabel: "Opens tomorrow at 10:00 AM",
  };
}
