import { MessageCircle } from "lucide-react";
import { whatsappLink, defaultWhatsAppMessage } from "@/lib/clinic";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(defaultWhatsAppMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[var(--whatsapp)] text-white shadow-elegant transition-transform hover:scale-110 animate-float"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -top-1 -right-1 grid h-4 w-4 place-items-center rounded-full bg-copper text-[9px] font-bold text-ivory">
        1
      </span>
    </a>
  );
}
