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
            title="Dine Among the Stars, Earth Below"
            description="Experience luxury meets cosmos at Cafe In Space—where minimalist design, premium coffee, and celestial ambiance create an unforgettable escape. Reserve your table in the universe."
            background={{ variant: "animated-grid" }}
            buttons={[{ text: "Reserve Your Cosmic Table", href: "#contact" }]} 
            imageSrc="https://i.imgur.com/rQ0R7pG.jpg"
            imageAlt="Astronaut floating in space looking at a distant galaxy"
            mediaAnimation="blur-reveal"
            buttonAnimation="blur-reveal"
            tagAnimation="blur-reveal"
            imagePosition="right"
            fixedMediaHeight={true}
          />
        </div>

        <div id="about" data-section="about">
          <MediaAbout
            title="Our Cosmic Journey"
            description="Cafe In Space is a visionary dining experience blending celestial aesthetics with gourmet culinary artistry. Our mission is to transport you to an ethereal realm, offering meticulously crafted beverages and dishes in an ambiance unlike any other. Discover the universe with every sip and bite."
            tag="Our Story"
            imageSrc="https://i.imgur.com/z0T04v2.jpg"
            imageAlt="Advanced telescope observing a vibrant nebula"
            useInvertedBackground={true}
            buttonAnimation="slide-up"
            tagAnimation="slide-up"
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardTwentySix
            title="Celestial Delights & Unique Ambiance"
            description="Indulge in our signature offerings designed to elevate your senses and captivate your imagination. Each feature is meticulously curated to provide an unparalleled experience."
            features={[
              { title: "Stellar Coffee Blends", description: "Savor meticulously sourced, premium coffee beans brewed to perfection, offering a truly out-of-this-world taste.", imageSrc: "https://i.imgur.com/Y1Z1Q4r.jpg", imageAlt: "Milky Way stars in a cosmic background", buttonIcon: Sparkles },
              { title: "Lunar Pastries", description: "Explore an array of artisan pastries and desserts, freshly baked daily with cosmic inspiration and exquisite flavors.", imageSrc: "https://i.imgur.com/bMv9R2S.jpg", imageAlt: "Swirling galaxy abstract art", buttonIcon: Star },
              { title: "Astro Cocktails", description: "Our signature cocktails are crafted with rare ingredients, offering visually stunning and uniquely flavored beverages for an elevated experience.", imageSrc: "https://i.imgur.com/L7E1tXy.jpg", imageAlt: "View from a spaceship cockpit with stars", buttonIcon: Rocket },
              { title: "Nebula Nooks", description: "Enjoy intimate moments in our private, semi-secluded 'Nebula Nooks,' perfect for quiet conversations and romantic evenings.", imageSrc: "https://i.imgur.com/G4P4q12.jpg", imageAlt: "Planet Earth viewed from space", buttonIcon: Moon }
            ]}
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>

        <div id="menu" data-section="menu">
          <ProductCardOne
            title="Our Signature Menu"
            description="Explore a galaxy of flavors with our specially curated menu, featuring interstellar culinary creations and premium beverages."
            products={[
              { id: "cosmic-espresso", name: "Cosmic Espresso", price: "$5.00", imageSrc: "https://i.imgur.com/Y1Z1Q4r.jpg", imageAlt: "Cosmic dust swirling in the shape of an espresso" },
              { id: "galactic-latte", name: "Galactic Latte", price: "$7.50", imageSrc: "https://i.imgur.com/bMv9R2S.jpg", imageAlt: "Galactic latte art resembling a nebula" },
              { id: "meteorite-muffin", name: "Meteorite Muffin", price: "$4.00", imageSrc: "https://i.imgur.com/M7q1z6f.jpg", imageAlt: "Meteorite-like muffin on a dark, rocky surface" },
              { id: "andromeda-cheesecake", name: "Andromeda Cheesecake", price: "$9.00", imageSrc: "https://i.imgur.com/L4Z4v9p.jpg", imageAlt: "Cheesecake with a vibrant Andromeda galaxy swirl" },
              { id: "supernova-smoothie", name: "Supernova Smoothie", price: "$8.50", imageSrc: "https://i.imgur.com/eB8B8g1.jpg", imageAlt: "Smoothie glowing like a supernova with an astronaut silhouette" },
              { id: "dark-matter-delight", name: "Dark Matter Delight", price: "$10.00", imageSrc: "https://i.imgur.com/H7q7q0P.jpg", imageAlt: "Decadent dark matter chocolate dessert" }
            ]}
            gridVariant="bento-grid"
            animationType="scale-rotate"
            textboxLayout="default"
            useInvertedBackground={true}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardTwo
            title="What Our Stargazers Say"
            description="Hear from guests who have embarked on a culinary journey at Cafe In Space, sharing their unforgettable moments."
            testimonials={[
              { id: "1", name: "Elara Vance", role: "Luxury Lifestyle Blogger", testimonial: "Cafe In Space is an absolute masterpiece! The ambiance is truly out of this world, and the Celestial Delights cocktail was simply divine. A must-visit for anyone seeking an extraordinary experience.", imageSrc: "https://i.imgur.com/sS4w4wM.jpg", imageAlt: "Portrait of a space explorer, Elara Vance" },
              { id: "2", name: "Jax Orion", role: "Art Director", testimonial: "Every detail at Cafe In Space, from the minimalist design to the gourmet coffee, speaks volumes of luxury. It's an inspiring retreat that ignites creativity.", imageSrc: "https://i.imgur.com/V9V9v9g.jpg", imageAlt: "Portrait of a tech visionary with Earth in background, Jax Orion" },
              { id: "3", name: "Seraphina Nova", role: "Fashion Editor", testimonial: "The perfect blend of aesthetic beauty and culinary excellence. Cafe In Space offers a truly 'Instagram-worthy' experience that feels exclusive and deeply satisfying. I'm already planning my next visit!", imageSrc: "https://i.imgur.com/f0f0f0f.jpg", imageAlt: "Portrait of a fashion editor against a cosmic backdrop, Seraphina Nova" },
              { id: "4", name: "Caspian Zenith", role: "Tech Entrepreneur", testimonial: "As a connoisseur of unique experiences, I can confidently say Cafe In Space exceeds expectations. The 'Dine Among the Stars' promise is fulfilled, delivering an unforgettable escape.", imageSrc: "https://i.imgur.com/d2d2d2d.jpg", imageAlt: "Portrait of an entrepreneur with abstract galaxy, Caspian Zenith" },
              { id: "5", name: "Lyra Astra", role: "Travel Influencer", testimonial: "This cafe is a hidden gem! The atmosphere is captivating, and the Lunar Pastries are a dream. It's more than just a cafe; it's an adventure for the senses. Highly recommended!", imageSrc: "https://i.imgur.com/a5a5a5a.jpg", imageAlt: "Portrait of a travel influencer in a nebula setting, Lyra Astra" }
            ]}
            animationType="blur-reveal"
            textboxLayout="default"
            useInvertedBackground={false}
          />
        </div>

        <div id="social-proof" data-section="social-proof">
          <SocialProofOne
            title="Featured In & Loved By"
            description="Our unique space-themed dining experience has captivated critics and customers alike, earning accolades across the culinary universe."
            names={["Cosmo Eats", "Star Critic", "Urban Explorer", "Luxury Life", "The Daily Blend", "Gourmet Galaxy", "Planet Palate"]}
            textboxLayout="default"
            useInvertedBackground={true}
            showCard={false}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitMedia
            title="Frequently Asked Questions"
            description="Find answers to common inquiries about reservations, menu, and our unique space-themed experience."
            faqs={[
              { id: "1", title: "How do I make a reservation?", content: "Reservations can be made easily through our website's 'Reserve Table' button or by calling us directly. We recommend booking in advance, especially for weekend evenings." },
              { id: "2", title: "What are your opening hours?", content: "Cafe In Space is open Tuesday to Sunday, from 10:00 AM to 10:00 PM. We are closed on Mondays for cosmic maintenance." },
              { id: "3", title: "Do you cater to dietary restrictions?", content: "Yes, our culinary team is happy to accommodate most dietary restrictions and allergies. Please inform us when making your reservation or upon arrival." },
              { id: "4", title: "Is there a dress code?", content: "We encourage smart casual attire to complement our luxurious ambiance. While not strictly enforced, many guests enjoy dressing up for the occasion." }
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
            tag="Reserve Now"
            title="Your Table Among the Stars Awaits"
            description="Join us for an unparalleled dining experience. Reserve your table today and prepare for a cosmic culinary adventure."
            buttons={[{ text: "Book Your Experience", href: "#" }]}
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
              { title: "About Us", items: [{ label: "Our Story", href: "#about" }, { label: "Philosophy", href: "#" }, { label: "Team", href: "#" }] },
              { title: "Menu", items: [{ label: "Beverages", href: "#menu" }, { label: "Pastries", href: "#menu" }, { label: "Specialty Items", href: "#menu" }] },
              { title: "Reservations", items: [{ label: "Book a Table", href: "#contact" }, { label: "Events", href: "#" }, { label: "Private Dining", href: "#" }] },
              { title: "Contact", items: [{ label: "Location", href: "#" }, { label: "Get in Touch", href: "#contact" }, { label: "FAQs", href: "#faq" }] }
            ]}
            copyrightText="© 2225 Cafe In Space. All rights reserved."
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
