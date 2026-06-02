"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Sparkles, Star, Rocket, Moon } from "lucide-react";

import { Raleway } from "next/font/google";

const raleway = Raleway({
  variable: "--font-raleway",  subsets: ["latin"],
});

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="largeSmall"
      background="fluid"
      cardStyle="gradient-radial"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="extrabold"
    >
      <div className={`${raleway.variable} font-sans`}>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            brandName="Cafe In Space"
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hbshvj"
            logoAlt="Cafe In Space Logo"
            navItems={[
              { name: "Home", id: "#hero" },
              { name: "About", id: "#about" },
              { name: "Menu", id: "#menu" },
              { name: "Experiences", id: "#features" },
              { name: "Testimonials", id: "#testimonials" },
              { name: "Contact", id: "#contact" }
            ]}
            button={{
              text: "Reserve Table",              href: "#contact"
            }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroSplit
            title="A Galactic Culinary Journey Awaits"
            description="Step into Cafe In Space, where the cosmos meets cuisine. Indulge in an exquisite menu surrounded by breathtaking celestial views, offering an escape beyond Earth's bounds."
            background={{ variant: "animated-grid" }}
            buttons={[{ text: "Reserve Your Cosmic Table", href: "#contact" }]}
            imageSrc="https://i.imgur.com/rQ0R7pG.jpg"
            imageAlt="Astronaut floating in space looking at a distant galaxy"
            mediaAnimation="blur-reveal"
            buttonAnimation="blur-reveal"
            tagAnimation="blur-reveal"
            imagePosition="right"
            fixedMediaHeight={true}
            marqueeItems={[{ type: "text", text: "Journey into the Cosmos" }, { type: "text-icon", text: "Reserve Your Table", icon: Sparkles }]}/>
        </div>

        <div id="about" data-section="about">
          <MediaAbout
            title="Journey Through Our Stellar Story"
            description="Cafe In Space reimagines dining as an art form, blending futuristic design with a menu inspired by the cosmos. Our commitment to exceptional quality and an immersive atmosphere creates a unique haven for explorers and dreamers alike. Discover how we're redefining the culinary universe."
            tag="Our Story"
            imageSrc="https://i.imgur.com/z0T04v2.jpg"
            imageAlt="A conceptual artwork of a futuristic cafe interior with celestial elements"
            useInvertedBackground={true}
            buttonAnimation="slide-up"
            tagAnimation="slide-up"
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardTwentySix
            title="Unveiling Our Stellar Offerings"
            description="Explore the core experiences that define Cafe In Space, from exclusive amenities to our gourmet culinary delights, each designed to transport you."
            features={[
              { title: "Stellar Coffee Blends", description: "Taste the universe with our bespoke coffee blends, crafted from rare, ethically sourced beans, offering a perfect cosmic kick-start.", imageSrc: "https://i.imgur.com/Y1Z1Q4r.jpg?_wi=1", imageAlt: "Milky Way stars in a cosmic background", buttonIcon: Sparkles },
              { title: "Lunar Pastries", description: "Delight in our artisanal pastries and desserts, baked fresh daily, combining classic flavors with a celestial twist.", imageSrc: "https://i.imgur.com/bMv9R2S.jpg?_wi=1", imageAlt: "Swirling galaxy abstract art", buttonIcon: Star },
              { title: "Astro Cocktails", description: "Our mixologists craft signature cocktails that are not only visually stunning but also feature unique, exotic ingredients from around the 'galaxy'.", imageSrc: "https://i.imgur.com/L7E1tXy.jpg", imageAlt: "View from a spaceship cockpit with stars", buttonIcon: Rocket },
              { title: "Nebula Nooks", description: "Find solace in our exclusive 'Nebula Nooks,' providing intimate, semi-private spaces for cherished moments under a canopy of simulated stars.", imageSrc: "https://i.imgur.com/G4P4q12.jpg", imageAlt: "Planet Earth viewed from space", buttonIcon: Moon }
            ]}
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>

        <div id="menu" data-section="menu">
          <ProductCardOne
            title="Your Guide to Galactic Gastronomy"
            description="Embark on a culinary adventure with our meticulously crafted menu, where every dish and drink is a tribute to the cosmos."
            products={[
              { id: "cosmic-espresso", name: "Cosmic Aurora Espresso", price: "$5.00", imageSrc: "https://i.imgur.com/Y1Z1Q4r.jpg?_wi=2", imageAlt: "Cosmic dust swirling in the shape of an espresso" },
              { id: "galactic-latte", name: "Stardust Vanilla Latte", price: "$7.50", imageSrc: "https://i.imgur.com/bMv9R2S.jpg?_wi=2", imageAlt: "Galactic latte art resembling a nebula" },
              { id: "meteorite-muffin", name: "Lunar Lava Muffin", price: "$4.00", imageSrc: "https://i.imgur.com/M7q1z6f.jpg", imageAlt: "Meteorite-like muffin on a dark, rocky surface" },
              { id: "andromeda-cheesecake", name: "Nebula Berry Cheesecake", price: "$9.00", imageSrc: "https://i.imgur.com/L4Z4v9p.jpg", imageAlt: "Cheesecake with a vibrant Andromeda galaxy swirl" },
              { id: "supernova-smoothie", name: "Solar Flare Smoothie", price: "$8.50", imageSrc: "https://i.imgur.com/eB8B8g1.jpg", imageAlt: "Smoothie glowing like a supernova with an astronaut silhouette" },
              { id: "dark-matter-delight", name: "Black Hole Brownie", price: "$10.00", imageSrc: "https://i.imgur.com/H7q7q0P.jpg", imageAlt: "Decadent dark matter chocolate dessert" }
            ]}
            gridVariant="bento-grid"
            animationType="scale-rotate"
            textboxLayout="default"
            useInvertedBackground={true}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardTwo
            title="Voices from the Void: Guest Testimonials"
            description="Our patrons share their extraordinary encounters and culinary highlights from their visits to Cafe In Space."
            testimonials={[
              { id: "1", name: "Elara Vance", role: "Luxury Lifestyle Blogger", testimonial: "Cafe In Space is an absolute masterpiece! The celestial ambiance and the Astro Cocktails are truly out of this world. A must-visit for anyone seeking an extraordinary dining experience.", imageSrc: "https://i.imgur.com/sS4w4wM.jpg", imageAlt: "Portrait of a space explorer, Elara Vance" },
              { id: "2", name: "Jax Orion", role: "Art Director", testimonial: "Every detail, from the avant-garde design to the exquisitely crafted menu, speaks volumes of luxury. It's an inspiring retreat that ignites all senses.", imageSrc: "https://i.imgur.com/V9V9v9g.jpg", imageAlt: "Portrait of a tech visionary with Earth in background, Jax Orion" },
              { id: "3", name: "Seraphina Nova", role: "Fashion Editor", testimonial: "The perfect fusion of aesthetic beauty and gourmet excellence. Cafe In Space offers a truly captivating experience that feels both exclusive and deeply satisfying. I'm eager for my next visit!", imageSrc: "https://i.imgur.com/f0f0f0f.jpg", imageAlt: "Portrait of a fashion editor against a cosmic backdrop, Seraphina Nova" },
              { id: "4", name: "Caspian Zenith", role: "Tech Entrepreneur", testimonial: "As a connoisseur of unique experiences, Cafe In Space consistently exceeds expectations. The promise of 'Dine Among the Stars' is perfectly fulfilled, offering an unforgettable escape.", imageSrc: "https://i.imgur.com/d2d2d2d.jpg", imageAlt: "Portrait of an entrepreneur with abstract galaxy, Caspian Zenith" },
              { id: "5", name: "Lyra Astra", role: "Travel Influencer", testimonial: "This cafe is a celestial marvel! The atmosphere is mesmerizing, and the Lunar Pastries are a dream come true. It's more than a meal; it's an adventure for the soul. Highly recommended!", imageSrc: "https://i.imgur.com/a5a5a5a.jpg", imageAlt: "Portrait of a travel influencer in a nebula setting, Lyra Astra" }
            ]}
            animationType="blur-reveal"
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>

        <div id="social-proof" data-section="social-proof">
          <SocialProofOne
            title="Celestial Endorsements"
            description="Celebrated by leading culinary critics and cosmic explorers, Cafe In Space is recognized for its groundbreaking approach to dining."
            names={["Galactic Gourmet", "Starfield Magazine", "Astro Chef Review", "Cosmic Traveler", "Orbital Digest", "Universe Today", "Planetary Plates"]}
            textboxLayout="default"
            useInvertedBackground={true}
            showCard={false}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitMedia
            title="Cosmic Queries: Your Questions Answered"
            description="Navigate our frequently asked questions for detailed information on reservations, special events, and what to expect during your visit to Cafe In Space."
            faqs={[
              { id: "1", title: "How do I make a reservation?", content: "Securing your table among the stars is simple! You can make reservations directly through our website’s 'Initiate Reservation' button or by contacting our concierge service. Advance booking is highly recommended." },
              { id: "2", title: "What are your opening hours?", content: "Cafe In Space welcomes you from Tuesday to Sunday, 10:00 AM to 10:00 PM. We observe Cosmic Maintenance Days on Mondays." },
              { id: "3", title: "Do you cater to dietary restrictions?", content: "Absolutely, our culinary team is adept at accommodating various dietary needs and allergies. Kindly inform us of any requirements when booking or upon your arrival." },
              { id: "4", title: "Is there a dress code?", content: "We encourage 'Cosmic Chic' or smart casual attire to enhance our luxurious ambiance. While not mandatory, many guests enjoy dressing for an elevated interstellar experience." }
            ]}
            imageSrc="https://i.imgur.com/g8g8g8g.jpg"
            imageAlt="Astronaut reading a holographic tablet in a futuristic setting"
            mediaAnimation="blur-reveal"
            faqsAnimation="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCTA
            tag="Connect with the Cosmos"
            title="Begin Your Interstellar Reservation"
            description="Secure your passage to an unforgettable dining experience. Our team is ready to assist you in planning your visit to Cafe In Space."
            buttons={[{ text: "Initiate Reservation", href: "#" }]}
            background={{ variant: "animated-grid" }}
            useInvertedBackground={true}
            tagAnimation="slide-up"
            buttonAnimation="slide-up"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            imageSrc="https://i.imgur.com/j1j1j1j.jpg"
            imageAlt="Stunning panorama of a galaxy with millions of stars"
            logoText="Cafe In Space"
            columns={[
              { title: "About Us", items: [{ label: "Our Galaxy", href: "#about" }, { label: "Our Mission", href: "#" }, { label: "Pioneers", href: "#" }] },
              { title: "Menu", items: [{ label: "Cosmic Beverages", href: "#menu" }, { label: "Lunar Sweets", href: "#menu" }, { label: "Star Signatures", href: "#menu" }] },
              { title: "Reservations", items: [{ label: "Book Passage", href: "#contact" }, { label: "Celestial Events", href: "#" }, { label: "Private Voyages", href: "#" }] },
              { title: "Contact", items: [{ label: "Starport Location", href: "#" }, { label: "Reach Out", href: "#contact" }, { label: "Cosmic FAQ", href: "#faq" }] }
            ]}
            copyrightText="© 2225 Cafe In Space. All rights reserved."
          />
        </div>
      </div>
    </ThemeProvider>
  );
}