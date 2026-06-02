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
            background={{ variant: "glowing-orb" }}
            buttons={[{ text: "Reserve Your Cosmic Table", href: "#contact" }]}
            imageSrc="http://img.b2bpic.net/free-photo/tasty-plain-cup-latte-wooden-table-coffee-shop-bokeh-lights-background_1268-20258.jpg"
            imageAlt="Luxurious space-themed cafe interior with cosmic views"
            mediaAnimation="blur-reveal"
            buttonAnimation="blur-reveal"
            tagAnimation="blur-reveal"
            imagePosition="right"
            fixedMediaHeight={true}
            useInvertedBackground={false}
          />
        </div>

        <div id="about" data-section="about">
          <MediaAbout
            title="Our Cosmic Journey"
            description="Cafe In Space is a visionary dining experience blending celestial aesthetics with gourmet culinary artistry. Our mission is to transport you to an ethereal realm, offering meticulously crafted beverages and dishes in an ambiance unlike any other. Discover the universe with every sip and bite."
            tag="Our Story"
            imageSrc="http://img.b2bpic.net/free-photo/charming-african-american-woman-model-black-jacket-hat-waist-bag-relaxing-cafe-free-time-with-mobile-phone_627829-5382.jpg"
            imageAlt="Luxurious cafe interior with minimalist design and space-themed elements"
            useInvertedBackground={true}
            mediaAnimation="slide-up"
            buttonAnimation="slide-up"
            tagAnimation="slide-up"
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardTwentySix
            title="Celestial Delights & Unique Ambiance"
            description="Indulge in our signature offerings designed to elevate your senses and captivate your imagination. Each feature is meticulously curated to provide an unparalleled experience."
            features={[
              { title: "Stellar Coffee Blends", description: "Savor meticulously sourced, premium coffee beans brewed to perfection, offering a truly out-of-this-world taste.", imageSrc: "http://img.b2bpic.net/free-photo/still-life-with-tea-cup-organic-background_23-2151775114.jpg", imageAlt: "Gourmet coffee steaming in a mug", buttonIcon: Sparkles },
              { title: "Lunar Pastries", description: "Explore an array of artisan pastries and desserts, freshly baked daily with cosmic inspiration and exquisite flavors.", imageSrc: "http://img.b2bpic.net/free-photo/berry-panna-cotta-dessert-with-fresh-fruits-edible-flowers_84443-94431.jpg", imageAlt: "Artisan pastries on an elegant display", buttonIcon: Star },
              { title: "Astro Cocktails", description: "Our signature cocktails are crafted with rare ingredients, offering visually stunning and uniquely flavored beverages for an elevated experience.", imageSrc: "http://img.b2bpic.net/free-photo/front-view-iced-cocktail-fresh-icing-inside-long-glass-dark-dark-surface-with-drink-juice-cocktail-bar_140725-26176.jpg", imageAlt: "Space-themed glowing cocktail", buttonIcon: Rocket },
              { title: "Nebula Nooks", description: "Enjoy intimate moments in our private, semi-secluded 'Nebula Nooks,' perfect for quiet conversations and romantic evenings.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-friends-mirror-photo_23-2149239041.jpg", imageAlt: "Luxurious private dining nook", buttonIcon: Moon }
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
              { id: "cosmic-espresso", name: "Cosmic Espresso", price: "$5.00", imageSrc: "http://img.b2bpic.net/free-photo/top-view-coffee-press-kit-table_23-2150354561.jpg", imageAlt: "Rich cosmic espresso shot" },
              { id: "galactic-latte", name: "Galactic Latte", price: "$7.50", imageSrc: "http://img.b2bpic.net/free-photo/coffee-cup-terrace-high-angle_23-2149703722.jpg", imageAlt: "Galactic latte with artistic foam" },
              { id: "meteorite-muffin", name: "Meteorite Muffin", price: "$4.00", imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-cupcakes-with-orange-blue-papers-white-background_181624-33709.jpg", imageAlt: "Delicious meteorite blueberry muffin" },
              { id: "andromeda-cheesecake", name: "Andromeda Cheesecake", price: "$9.00", imageSrc: "http://img.b2bpic.net/free-photo/chocolate-cake_23-2148018927.jpg", imageAlt: "Andromeda cheesecake slice with cosmic swirl" },
              { id: "supernova-smoothie", name: "Supernova Smoothie", price: "$8.50", imageSrc: "http://img.b2bpic.net/free-photo/man-hand-takes-transparent-rustic-jar-with-tasty-healthly-freshly-made-yellow-smoothie-from-mango_346278-707.jpg", imageAlt: "Vibrant supernova fruit smoothie" },
              { id: "dark-matter-delight", name: "Dark Matter Delight", price: "$10.00", imageSrc: "http://img.b2bpic.net/free-photo/slice-chocolate-cake-with-fruits-cup-tea-top-view_114579-17549.jpg", imageAlt: "Decadent dark matter chocolate dessert" }
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
              { id: "1", name: "Elara Vance", role: "Luxury Lifestyle Blogger", testimonial: "Cafe In Space is an absolute masterpiece! The ambiance is truly out of this world, and the Celestial Delights cocktail was simply divine. A must-visit for anyone seeking an extraordinary experience.", imageSrc: "http://img.b2bpic.net/free-photo/business-woman-holding-cup-posing-white-wall_114579-46991.jpg", imageAlt: "Portrait of Elara Vance" },
              { id: "2", name: "Jax Orion", role: "Art Director", testimonial: "Every detail at Cafe In Space, from the minimalist design to the gourmet coffee, speaks volumes of luxury. It's an inspiring retreat that ignites creativity.", imageSrc: "http://img.b2bpic.net/free-photo/smiley-man-sitting-desk-medium-shot_23-2149308472.jpg", imageAlt: "Portrait of Jax Orion" },
              { id: "3", name: "Seraphina Nova", role: "Fashion Editor", testimonial: "The perfect blend of aesthetic beauty and culinary excellence. Cafe In Space offers a truly 'Instagram-worthy' experience that feels exclusive and deeply satisfying. I'm already planning my next visit!", imageSrc: "http://img.b2bpic.net/free-photo/pretty-lady-long-dress-black-sandals-enjoying-lunch-outdoor-cafe-looking-away-fascinating-blonde-girl-hat-waiting-friend-eat-croissants-together_197531-4275.jpg", imageAlt: "Portrait of Seraphina Nova" },
              { id: "4", name: "Caspian Zenith", role: "Tech Entrepreneur", testimonial: "As a connoisseur of unique experiences, I can confidently say Cafe In Space exceeds expectations. The 'Dine Among the Stars' promise is fulfilled, delivering an unforgettable escape.", imageSrc: "http://img.b2bpic.net/free-photo/stylish-businessman-working-office_1157-21026.jpg", imageAlt: "Portrait of Caspian Zenith" },
              { id: "5", name: "Lyra Astra", role: "Travel Influencer", testimonial: "This cafe is a hidden gem! The atmosphere is captivating, and the Lunar Pastries are a dream. It's more than just a cafe; it's an adventure for the senses. Highly recommended!", imageSrc: "http://img.b2bpic.net/free-photo/young-adult-enjoying-virtual-date_23-2149328219.jpg", imageAlt: "Portrait of Lyra Astra" }
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
            imageSrc="http://img.b2bpic.net/free-photo/food-celebrating-world-tapas-day_23-2149361477.jpg"
            imageAlt="Luxurious cafe lounge area with comfortable seating"
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
            background={{ variant: "sparkles-gradient" }}
            useInvertedBackground={true}
            tagAnimation="slide-up"
            buttonAnimation="slide-up"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            imageSrc="http://img.b2bpic.net/free-photo/attrctive-woman-couch-with-champagne_23-2147651931.jpg"
            imageAlt="Elegant space-themed cafe ambiance"
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
