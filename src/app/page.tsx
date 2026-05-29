"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="largeSmall"
        background="fluid"
        cardStyle="solid"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "About Us",          id: "#about"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Products",          id: "#products"},
        {
          name: "Metrics",          id: "#metrics"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/100-nature-organic-freshly-picked-healthy-eating_53876-123702.jpg"
      logoAlt="The Lord Heals Co. Logo"
      brandName="The Lord Heals Co."
      button={{
        text: "Get a Quote",        href: "#contact"}}
      animateOnLoad={true}
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated-grid"}}
      title="Empowering Ghanaian Agriculture on the Global Stage"
      description="The Lord Heals Company Limited is your trusted partner for premium raw cocoa beans and sustainable cocoa by-products, connecting local farmers to international markets with integrity and efficiency."
      tag="From Ghana to the World"
      tagAnimation="slide-up"
      buttons={[
        {
          text: "Explore Our Products",          href: "#products"},
        {
          text: "Partner With Us",          href: "#contact"},
      ]}
      buttonAnimation="slide-up"
      carouselItems={[
        {
          id: "carousel-item-1",          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-perspective-tree-with-beautiful-canopy_23-2151305130.jpg",          imageAlt: "Ghanaian cocoa farm at sunset"},
        {
          id: "carousel-item-2",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-pistachios-sack-gray-texture-horizontal-1_176474-1345.jpg",          imageAlt: "Close-up of raw cocoa beans"},
        {
          id: "carousel-item-3",          imageSrc: "http://img.b2bpic.net/free-photo/still-life-supply-chain-representation_23-2149827259.jpg",          imageAlt: "Cargo ship being loaded at a port"},
        {
          id: "carousel-item-4",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-reaching-out-his-hand-camera_23-2148231904.jpg",          imageAlt: "Smiling Ghanaian farmer"},
        {
          id: "carousel-item-5",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-scientist-with-seeds_23-2148918075.jpg",          imageAlt: "Quality control inspection of cocoa beans"},
        {
          id: "carousel-item-6",          imageSrc: "http://img.b2bpic.net/free-photo/global-logistics-transportation-network_23-2152005448.jpg",          imageAlt: "Global trade map with routes"},
      ]}
      autoPlay={true}
      autoPlayInterval={5000}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",          content: "Connecting Ghana's Rich Agriculture to Global Markets"},
      ]}
      buttons={[
        {
          text: "Learn More",          href: "#services"},
      ]}
      buttonAnimation="slide-up"
      imageWrapperClassName="w-full md:w-1/2 lg:w-2/5"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",          title: "Sustainable Sourcing",          descriptions: [
            "Partnering directly with local Ghanaian farmers to ensure fair trade practices and sustainable cultivation methods. We invest in communities and promote eco-friendly agriculture."],
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-girl-with-red-hair-smiles-sweetly-shows-that-she-is-fine_197531-12275.jpg",          imageAlt: "Hand holding a green sprout, symbolizing sustainability"},
        {
          id: "f2",          title: "Rigorous Quality Control",          descriptions: [
            "Our dedicated team implements strict quality assurance protocols from harvest to packaging. Every batch of cocoa beans undergoes thorough inspection to meet international standards."],
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-chocolate-concept_23-2148549912.jpg",          imageAlt: "Hand inspecting cocoa beans, symbolizing quality"},
        {
          id: "f3",          title: "Global Logistics & Export",          descriptions: [
            "With GACC registration and a robust supply chain network, we efficiently export our commodities to key markets like China and Malaysia, ensuring timely and secure delivery."],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-hand-using-mobile-app-rental-electric-scooter_169016-36215.jpg",          imageAlt: "Cargo containers at a port, symbolizing global logistics"},
      ]}
      title="Our Expert Services"
      description="We ensure a seamless and sustainable journey from farm to market."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          brand: "The Lord Heals Co.",          name: "Raw Cocoa Beans (Grade A)",          price: "Market Price",          rating: 5,
          reviewCount: "240",          imageSrc: "http://img.b2bpic.net/free-photo/blue-small-plate-full-nuts-marble-background-high-quality-photo_114579-38141.jpg",          imageAlt: "Pile of raw cocoa beans"},
        {
          id: "p2",          brand: "The Lord Heals Co.",          name: "Cocoa Bean Shells (Waste)",          price: "Inquire",          rating: 4,
          reviewCount: "85",          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-chocolate-chunks-plate-with-cocoa-powder-beans_23-2148569657.jpg",          imageAlt: "Close-up of cocoa bean shells"},
        {
          id: "p3",          brand: "Sustainable Ghana",          name: "Certified Organic Cocoa",          price: "Premium",          rating: 5,
          reviewCount: "180",          imageSrc: "http://img.b2bpic.net/free-photo/100-nature-organic-freshly-picked-healthy-eating_53876-13899.jpg",          imageAlt: "Bag of certified organic cocoa beans"},
        {
          id: "p4",          brand: "Origin Ghana",          name: "Ghanaian Origin Cocoa",          price: "Best Value",          rating: 5,
          reviewCount: "300",          imageSrc: "http://img.b2bpic.net/free-photo/concept-tasty-snack-hot-drink-cookies-shape-coffee-seeds_185193-110877.jpg",          imageAlt: "Map of Ghana with cocoa beans"},
        {
          id: "p5",          brand: "Bulk Supply",          name: "Industrial Cocoa Supply",          price: "Custom Quote",          rating: 5,
          reviewCount: "120",          imageSrc: "http://img.b2bpic.net/free-photo/man-processing-coffee-beans_181624-56849.jpg",          imageAlt: "Warehouse with bulk cocoa sacks"},
        {
          id: "p6",          brand: "EcoPack",          name: "Cocoa in Sustainable Packaging",          price: "Inquire",          rating: 5,
          reviewCount: "95",          imageSrc: "http://img.b2bpic.net/free-photo/selling-plant-online-close-up-hands-holding-shipping-box-full-with-pots-plants_1150-26649.jpg",          imageAlt: "Cocoa beans in eco-friendly packaging"},
      ]}
      title="Our Premium Agricultural Products"
      description="Discover our range of high-quality cocoa products, sourced sustainably from Ghana."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      animationType="slide-up"
      metrics={[
        {
          id: "m1",          value: "200+",          description: "Ghanaian Farmers Empowered"},
        {
          id: "m2",          value: "15,000+",          description: "Tons of Cocoa Exported Annually"},
        {
          id: "m3",          value: "5+",          description: "International Export Destinations"},
      ]}
      title="Impact & Growth"
      description="Our commitment to excellence drives tangible results and fosters strong partnerships."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "General Administration of Customs of the People's Republic of China (GACC)",        "Ministry of Food and Agriculture, Ghana",        "International Cocoa Organization",        "Ghana Export Promotion Authority",        "Port of Tema",        "Malaysia Palm Oil Council (for related waste products)",        "China Customs"]}
      title="Global Trust & Recognition"
      description="Proudly recognized by leading international trade authorities and partnering with key global markets."
      speed={35}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          title: "Reliable & Ethical Partner",          quote: "The Lord Heals Company has transformed our livelihoods. Their fair pricing and commitment to sustainable practices make them a truly ethical and reliable partner for Ghanaian cocoa farmers.",          name: "Kwame Nkrumah",          role: "Cocoa Farmer, Eastern Region",          imageSrc: "http://img.b2bpic.net/free-photo/photorealistic-woman-organic-sustainable-garden-harvesting-produce_23-2151463009.jpg",          imageAlt: "Kwame Nkrumah, Ghanaian Cocoa Farmer"},
        {
          id: "t2",          title: "Exceptional Quality & Service",          quote: "We rely on The Lord Heals Company for consistent, high-quality raw cocoa beans. Their professionalism and efficient supply chain ensure our production runs smoothly. Highly recommended!",          name: "Chen Li",          role: "Procurement Manager, SinoFood Co.",          imageSrc: "http://img.b2bpic.net/free-photo/elegant-business-men_1098-62.jpg",          imageAlt: "Chen Li, Procurement Manager"},
        {
          id: "t3",          title: "Innovative Waste Solutions",          quote: "Their cocoa bean shells have provided an excellent sustainable raw material for our manufacturing. The Lord Heals Company's commitment to reducing waste is truly commendable.",          name: "Aisha Rahman",          role: "R&D Director, EcoMaterials Malaysia",          imageSrc: "http://img.b2bpic.net/free-photo/happy-male-worker-using-laptop-factory_107420-96505.jpg",          imageAlt: "Aisha Rahman, R&D Director"},
        {
          id: "t4",          title: "Seamless International Trade",          quote: "Navigating international trade can be complex, but The Lord Heals Company makes it effortless. Their GACC registration and logistical expertise are invaluable to our import operations.",          name: "David Mensah",          role: "Logistics Head, Global Trade Ghana",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman-doing-video-selfie-cafe_7502-7210.jpg",          imageAlt: "David Mensah, Logistics Head"},
        {
          id: "t5",          title: "A True Supply-Chain Partner",          quote: "From field to our factory, their supply chain is transparent and dependable. The quality of their cocoa beans speaks for itself, and their team is always a pleasure to work with.",          name: "Sarah Ofori",          role: "Operations Manager, West Africa Sweets",          imageSrc: "http://img.b2bpic.net/free-photo/middle-aged-delivery-woman-blue-uniform-cap-holding-cardboard-box-looking-clipboard-with-serious-face-standing-pink-wall_141793-64475.jpg",          imageAlt: "Sarah Ofori, Operations Manager"},
      ]}
      title="What Our Partners Say"
      description="Hear from the farmers, partners, and clients who trust The Lord Heals Company Limited."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Get In Touch"
      description="Have questions about our products, sourcing, or international export? Reach out to our team."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
        {
          name: "company",          type: "text",          placeholder: "Your Company (Optional)"},
      ]}
      multiSelect={{
        name: "inquiry_type",        label: "Type of Inquiry",        options: [
          "Raw Cocoa Beans",          "Cocoa Bean Shells",          "Partnership Inquiry",          "General Inquiry"],
      }}
      textarea={{
        name: "message",        placeholder: "Your Message",        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/view-futuristic-high-tech-earth_23-2151100375.jpg"
      imageAlt="Modern office building exterior"
      mediaAnimation="opacity"
      mediaPosition="right"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Products",          items: [
            {
              label: "Raw Cocoa Beans",              href: "#products"},
            {
              label: "Cocoa Bean Shells",              href: "#products"},
            {
              label: "Sustainable Sourcing",              href: "#services"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Our Services",              href: "#services"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="© 2024 The Lord Heals Company Limited. All rights reserved."
      bottomRightText="Accra, Ghana"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
