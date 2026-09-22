import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { WhatsAppFloat } from "../components/WhatsAppFloat";
import { IntroPreloader } from "../components/IntroPreloader";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Best Homoeopathy Clinic in Shadnagar | Dr. Soundarya (B.H.M.S) — Rudhra Clinic" },
      {
        name: "description",
        content:
          "Top-rated Homoeopathy Clinic in Shadnagar led by Dr. Soundarya (B.H.M.S, D.Y.T, Reg: 1972/H/2023). Specialist in Infertility & Gynaec, Asthma, Allergic Rhinitis, PCOD, Thyroid, Skin & Arthritis. 100% holistic care. Call +91 79953 18298.",
      },
      {
        name: "keywords",
        content:
          "Best Homoeopathy Clinic in Shadnagar, Homoeopathy Doctor in Shadnagar, Dr Soundarya Homoeopath, Infertility Specialist Shadnagar, Asthma Doctor Shadnagar, Allergic Rhinitis Treatment Shadnagar, PCOD Homoeopathy, Arthritis Treatment Shadnagar, Rudhra Homoeopathy Clinic",
      },
      { name: "author", content: "Dr. Soundarya (B.H.M.S, D.Y.T)" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "geo.region", content: "IN-TG" },
      { name: "geo.placename", content: "Shadnagar, Telangana" },
      { name: "geo.position", content: "17.0673828;78.2055206" },
      { name: "ICBM", content: "17.0673828, 78.2055206" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Rudhra Homoeopathy Clinic" },
      { property: "og:title", content: "Best Homoeopathy Clinic in Shadnagar | Dr. Soundarya (B.H.M.S)" },
      {
        property: "og:description",
        content: "Dr. Soundarya (Reg: 1972/H/2023) — Specialist in Infertility & Gynaec, Asthma, Allergic Rhinitis, PCOD, and chronic diseases. Personalized constitutional homoeopathy in Shadnagar.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://a-clinic.vercel.app" },
      { property: "og:image", content: "https://a-clinic.vercel.app/doctor-portrait.jpg" },
      { property: "og:image:alt", content: "Dr. Soundarya - Best Homoeopathy Doctor at Rudhra Clinic Shadnagar" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Best Homoeopathy Clinic in Shadnagar | Dr. Soundarya (B.H.M.S)" },
      {
        name: "twitter:description",
        content: "Top Homoeopathy Clinic in Shadnagar. Specialist in Infertility, Asthma, Allergic Rhinitis, PCOD, Skin & Arthritis.",
      },
      { name: "twitter:image", content: "https://a-clinic.vercel.app/doctor-portrait.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://a-clinic.vercel.app" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "LocalBusiness"],
        "@id": "https://a-clinic.vercel.app/#clinic",
        name: "Rudhra Homoeopathy Clinic",
        alternateName: [
          "Dr. Soundarya Homoeopathy Clinic",
          "Rudhra Clinic Shadnagar",
          "Rudhra Homoeopathy Healing Haven"
        ],
        description:
          "Best Homoeopathy Clinic in Shadnagar offering classical constitutional homoeopathy, therapeutic yoga, and nutritional care led by Dr. Soundarya (B.H.M.S, D.Y.T, Reg: 1972/H/2023). Specialist in Infertility & Gynaec, Asthma, Allergic Rhinitis, PCOD, and chronic diseases.",
        url: "https://a-clinic.vercel.app",
        telephone: "+917995318298",
        image: "https://a-clinic.vercel.app/doctor-portrait.jpg",
        logo: "https://a-clinic.vercel.app/logo.png",
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Google Pay, PhonePe, Paytm, Cards",
        hasMap: "https://maps.app.goo.gl/Kj5yC84yzWyVYJaH8",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Mahabubnagar Road, Near Bus Stand",
          addressLocality: "Shadnagar",
          postalCode: "509216",
          addressRegion: "Telangana",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 17.0673828,
          longitude: 78.2055206,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "10:00",
            closes: "14:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "16:00",
            closes: "19:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday"],
            opens: "10:00",
            closes: "13:00",
          },
        ],
        medicalSpecialty: [
          "Homeopathy",
          "Gynecology",
          "Pulmonology",
          "Dermatology",
          "Endocrinology",
          "HolisticMedicine"
        ],
        availableService: [
          {
            "@type": "MedicalTherapy",
            name: "Infertility and Gynaecological Care (Specialist)",
            description: "Natural constitutional homoeopathic treatment for female & male infertility, irregular cycles, and hormonal health."
          },
          {
            "@type": "MedicalTherapy",
            name: "Asthma & Allergic Rhinitis Treatment (Specialist)",
            description: "Long-term respiratory cure for chronic asthma, wheezing, dust allergies, sinus congestion, and allergic rhinitis."
          },
          {
            "@type": "MedicalTherapy",
            name: "PCOD and Ovarian Cysts Therapy",
            description: "Holistic endocrine reset combining homoeopathic medicine, seed cycling, and targeted yoga."
          },
          {
            "@type": "MedicalTherapy",
            name: "Chronic Skin & Dermatological Care",
            description: "Root-cause healing for psoriasis, eczema, urticaria, stubborn acne, and fungal infections."
          },
          {
            "@type": "MedicalTherapy",
            name: "Arthritis, Cervical & Sciatica Treatment",
            description: "Deep relief for joint inflammation, osteoarthritis, rheumatoid arthritis, cervical spondylosis, and sciatic nerve pain."
          },
          {
            "@type": "MedicalTherapy",
            name: "Thyroid & Metabolic Disorders",
            description: "Constitutional management for hypothyroidism, Hashimoto's, hyperthyroidism, and sluggish metabolism."
          }
        ],
        physician: {
          "@id": "https://a-clinic.vercel.app/#doctor"
        }
      },
      {
        "@type": "Physician",
        "@id": "https://a-clinic.vercel.app/#doctor",
        name: "Dr. Soundarya",
        honorificPrefix: "Dr.",
        jobTitle: "Senior Consultant Homoeopath & Certified Yoga Therapist",
        qualifications: "B.H.M.S, D.Y.T",
        identifier: {
          "@type": "PropertyValue",
          name: "Medical Registration Number",
          value: "1972/H/2023"
        },
        image: "https://a-clinic.vercel.app/doctor-portrait.jpg",
        telephone: "+917995318298",
        worksFor: {
          "@id": "https://a-clinic.vercel.app/#clinic"
        },
        medicalSpecialty: [
          "Homeopathy",
          "Infertility Specialist",
          "Asthma and Allergic Rhinitis Specialist",
          "Clinical Yoga Therapy"
        ],
        knowsAbout: [
          "Infertility and Gynaecology",
          "Asthma & Bronchial Allergies",
          "Allergic Rhinitis & Sinusitis",
          "PCOD & Hormonal Health",
          "Classical Homoeopathy",
          "Therapeutic Pranayama & Yoga Asanas"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://a-clinic.vercel.app/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How does Classical Homoeopathy differ from conventional medicine?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Conventional medicine primarily suppresses isolated symptoms using pharmaceuticals like antihistamines, pain-blockers, or steroid inhalers. Classical Homoeopathy evaluates your full constitutional totality — biological history, mental state, and physical sensitivities — stimulating your innate vital response to cure the root disease permanently without drug dependence."
            }
          },
          {
            "@type": "Question",
            name: "Are homoeopathic medicines safe alongside my ongoing prescriptions?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Classical homoeopathic dilutions are micro-dosed, non-toxic, and do not chemically interfere with conventional allopathic medications like thyroid pills, insulin, or blood pressure drugs. Dr. Soundarya coordinates your treatment plan safely so you never abruptly stop critical prescribed medicines."
            }
          },
          {
            "@type": "Question",
            name: "How soon can I expect measurable improvements in chronic conditions?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Acute flare-ups (colds, acute sinus headaches, minor skin flare) often show notable relief within 24 to 72 hours. For chronic deep-seated complaints like PCOD, asthma, or long-standing arthritis, marked clinical improvement typically occurs within 4 to 12 weeks of constitutional therapy."
            }
          },
          {
            "@type": "Question",
            name: "Why are Yoga Therapy and Diet included in every protocol?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Health is multidimensional. While constitutional remedies correct cellular vitality, targeted Yoga asanas enhance endocrine and organ micro-circulation, Pranayama soothes autonomic hyper-reactivity, and anti-inflammatory nutrition removes metabolic toxins. The triad ensures rapid and lasting recovery."
            }
          },
          {
            "@type": "Question",
            name: "How do Online Consultations work for distant or international patients?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Virtual consultations are conducted via high-definition video call (Google Meet or WhatsApp Video). Dr. Soundarya conducts an in-depth 45-minute case-taking session. Your customized, sealed homoeopathic remedies and detailed yoga/diet guides are then dispatched via courier directly to your doorstep with tracking."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <IntroPreloader />
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <SiteFooter />
        <WhatsAppFloat />
      </div>
    </QueryClientProvider>
  );
}
