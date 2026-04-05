import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plane, Star, BookOpen, MapPin, CheckCircle, ChevronRight, Mail, Phone, Map, X, Heart } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send an API request to a backend service (like Formspree or Resend)
    // to send the email to hakanyorganci@gmail.com
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={onClose}
            className="absolute inset-0 bg-[#0A1128]/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="relative w-full max-w-2xl bg-white rounded-sm shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            <div className="bg-[#1B2A4A] p-6 text-white flex justify-between items-center shrink-0">
              <div>
                <h3 className="text-2xl font-serif text-[#D4AF37]">Begin Your Pilgrimage</h3>
                <p className="text-sm font-light text-gray-300 mt-1">Contact us or request a full brochure.</p>
              </div>
              <button onClick={onClose} className="text-gray-300 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-2xl font-serif text-[#1B2A4A] mb-2">Message Sent Successfully</h4>
                  <p className="text-gray-600 font-light">
                    Thank you for reaching out. A copy of your request has been sent to <strong>hakanyorganci@gmail.com</strong>. Our team will contact you shortly to plan your spiritual journey.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1B2A4A] mb-2">First Name *</label>
                      <input required type="text" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1B2A4A] mb-2">Last Name *</label>
                      <input required type="text" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#1B2A4A] mb-2">Email Address *</label>
                    <input required type="email" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="john@example.com" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1B2A4A] mb-2">Phone Number <span className="text-gray-400 font-light">(Optional)</span></label>
                      <input type="tel" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1B2A4A] mb-2">Address <span className="text-gray-400 font-light">(Optional)</span></label>
                      <input type="text" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="City, State" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1B2A4A] mb-2">Your Message *</label>
                    <textarea required rows={4} className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none" placeholder="Tell us about your church group or your desired travel dates..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-[#D4AF37] text-[#1B2A4A] font-medium text-lg py-4 rounded-sm hover:bg-[#C5A059] transition-colors">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1596423735880-5f2a689b903e?q=80&w=2940&auto=format&fit=crop"
          alt="Ancient Ruins of Ephesus"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B2A4A]/80 via-[#1B2A4A]/60 to-[#1B2A4A]/90 mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm md:text-base font-semibold mb-6">Holy Mary Tours</h2>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6 drop-shadow-lg">
            Walk Where the <br className="hidden md:block" />
            <span className="italic text-[#EAE6DF]">Apostles Walked.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Exclusive, all-inclusive luxury Christian pilgrimages to the Biblical sites of Asia Minor. Direct from Texas.
          </p>
          <motion.button 
            onClick={() => {
              document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D4AF37] text-[#1B2A4A] px-8 py-4 rounded-sm font-medium tracking-wide hover:bg-[#C5A059] transition-colors duration-300"
          >
            Discover Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const Experience = () => {
  const features = [
    {
      icon: <Plane className="w-8 h-8 text-[#D4AF37]" />,
      title: "Direct from Texas",
      description: "Seamless roundtrip flight bookings directly from DFW (Dallas/Fort Worth). We handle every detail so your pilgrimage begins the moment you leave home."
    },
    {
      icon: <Star className="w-8 h-8 text-[#D4AF37]" />,
      title: "White-Glove Logistics",
      description: "5-Star Luxury Accommodations (Sea-view guaranteed), all premium meals including upscale marina dining, and VIP Transport in Private Mercedes-Benz Sprinter vans."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#D4AF37]" />,
      title: "Biblical Scholars",
      description: "Guided by experts who bring the scriptures to life, including exclusive skip-the-line access to historical ruins and private moments for prayer and reflection."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-[#1B2A4A] mb-4"
          >
            The White-Glove Promise
          </motion.h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-10 rounded-sm shadow-xl shadow-black/5 border border-gray-100 text-center group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="w-16 h-16 mx-auto bg-[#1B2A4A]/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1B2A4A] group-hover:text-white transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-[#1B2A4A] mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Packages = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const packages = [
    {
      title: "The Ephesus Pilgrimage",
      price: "$2,899",
      duration: "5 Days",
      accommodations: "Korumar Ephesus Beach & Spa Resort (Kuşadası - 5 Star Premium)",
      description: "A profound spiritual journey to the heart of early Christianity. Walk the marble streets where St. Paul preached to the Ephesians. Experience the overwhelming peace of the House of the Virgin Mary (Meryem Ana Evi), where you can light a candle and pray in the very place she spent her final days. This is not just a tour; it is a deeply moving pilgrimage that connects you to the roots of your faith.",
      itinerary: [
        "Day 1: Arrive in Istanbul. VIP transfer and overnight stay.",
        "Day 2: Istanbul highlights (St. Sophia, Topkapi Palace, Blue Mosque, Grand Bazaar). Evening flight to Izmir.",
        "Day 3: Izmir (Smyrna), Philadelphia, and Sardis. Scenic drive to Pamukkale.",
        "Day 4: Pamukkale thermal pools, ancient Hierapolis, and Laodicea. Drive to Kuşadası.",
        "Day 5: Extensive tour of Ephesus ruins, House of the Virgin Mary, Magnesian Gate, and St. Paul's paths. Departure."
      ],
      image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Celsus_Library%2C_Ephesus.jpg",
      highlight: true
    },
    {
      title: "The Revelation Journey",
      price: "$5,499",
      duration: "11 Days",
      accommodations: "DoubleTree by Hilton (Istanbul) & Charisma De Luxe Hotel (Kuşadası - 5 Star Premium)",
      description: "An expansive, 11-day expedition covering the Seven Churches of Revelation. Discover the historical context of the apocalyptic letters and witness the monumental scale of the Greco-Roman world that the early Christians navigated.",
      itinerary: [
        "Day 1: Arrival in Istanbul, VIP transfer to hotel.",
        "Day 2: Istanbul Tour (Hippodrome, Blue Mosque, Topkapi Palace, St. Sophia). Afternoon flight to Adana.",
        "Day 3: Antioch (Hatay), St. Peter's Grotto, Mosaic Museum.",
        "Day 4: Tarsus (St. Paul's Well & Arch), coastal drive to Alanya.",
        "Day 5: Aspendos, Perge, Colossae, Pamukkale.",
        "Day 6: Hierapolis, Aphrodisias, Laodicea.",
        "Day 7: Ephesus (St. John's Basilica, Ancient Site, Museum), Izmir.",
        "Day 8: Izmir (Smyrna), Sardis, Philadelphia, Thyatira.",
        "Day 9: Pergamum, Troas, Çanakkale.",
        "Day 10: Troy, Dardanelles, Istanbul.",
        "Day 11: Private transfer to airport for departure."
      ],
      image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Ephesos_amphitheatre.jpg",
      highlight: false
    }
  ];

  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-[#1B2A4A] mb-4"
          >
            Our Signature Packages
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg">
            Immersive, all-inclusive journeys designed for profound spiritual enrichment and absolute comfort.
          </p>
        </div>

        <div className="space-y-24">
          {packages.map((pkg, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {pkg.highlight && (
                    <div className="absolute top-6 left-6 bg-[#D4AF37] text-[#1B2A4A] px-4 py-2 rounded-sm font-medium flex items-center gap-2 shadow-lg">
                      <Heart className="w-4 h-4 fill-current" /> Most Sacred Journey
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#1B2A4A] text-white p-6 rounded-sm shadow-xl hidden md:block">
                  <p className="text-sm text-[#D4AF37] uppercase tracking-wider mb-1">All-Inclusive</p>
                  <p className="text-3xl font-serif">{pkg.price} <span className="text-sm font-sans font-light text-gray-300">/ person</span></p>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="md:hidden bg-[#1B2A4A] text-white p-6 rounded-sm shadow-xl mb-8 inline-block">
                  <p className="text-sm text-[#D4AF37] uppercase tracking-wider mb-1">All-Inclusive</p>
                  <p className="text-3xl font-serif">{pkg.price} <span className="text-sm font-sans font-light text-gray-300">/ person</span></p>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-[#1B2A4A] mb-2">{pkg.title}</h3>
                <p className="text-[#D4AF37] font-medium tracking-wide mb-6">{pkg.duration} of Spiritual Discovery</p>
                
                <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">
                  {pkg.description}
                </p>

                <div className="mb-8 bg-[#F5F5F0] p-6 rounded-sm border-l-4 border-[#D4AF37]">
                  <h4 className="font-serif text-[#1B2A4A] text-lg mb-2 flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#D4AF37]" /> Luxury Accommodations
                  </h4>
                  <p className="text-gray-600 font-light">{pkg.accommodations}</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-serif text-[#1B2A4A] text-xl mb-4 border-b border-gray-200 pb-2">Itinerary Highlights</h4>
                  <ul className="space-y-3">
                    {pkg.itinerary.map((day, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="text-gray-600 font-light leading-relaxed">{day}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={onOpenModal}
                  className="mt-10 flex items-center gap-2 text-[#1B2A4A] font-medium hover:text-[#D4AF37] transition-colors group"
                >
                  Request Full Brochure <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#1B2A4A] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1548625361-ec8492004210?q=80&w=2940&auto=format&fit=crop" 
          alt="Texture" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-8 text-[#D4AF37]">Texas Heart. Turkish Expertise.</h2>
          <div className="w-16 h-px bg-white/30 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-light leading-relaxed text-gray-300 mb-8">
            We are based right here in Texas. Founded by Hakan & Ece, Holy Mary Tours bridges the heart of the American church with the ancient roots of Christianity. 
          </p>
          <p className="text-lg md:text-xl font-light leading-relaxed text-gray-300">
            While we manage your flawless booking and pre-flight experience from the US, your ground operations, security, and logistics in Turkey are flawlessly executed by our dedicated 40-year partner, <span className="text-white font-medium">Azim Tours</span>. Your pilgrimage is safe, luxurious, and spiritually profound.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0A1128] text-gray-400 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="https://drive.google.com/uc?export=view&id=1vU3owWVLs1u4MN9dW_Cy6OQW0xly2P9C" 
                alt="Holy Mary Tours Logo" 
                className="h-16 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-light text-sm leading-relaxed max-w-xs">
              Exclusive, all-inclusive luxury Christian pilgrimages to the Biblical sites of Asia Minor.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 font-light text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                McKinney, TX 75071
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                info@holymarytours.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                (469) 555-MARY
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Trust & Safety</h4>
            <p className="font-light text-sm leading-relaxed">
              We are fully bonded and insured for US travelers. Your peace of mind is our highest priority, from Texas to Turkey and back home.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-light">
          <p>&copy; {new Date().getFullYear()} Holy Mary Tours. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Operated in partnership with Azim Tours (Est. 1975)</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] font-sans selection:bg-[#D4AF37] selection:text-[#1B2A4A]">
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://drive.google.com/uc?export=view&id=1vU3owWVLs1u4MN9dW_Cy6OQW0xly2P9C" 
            alt="Holy Mary Tours Logo" 
            className="h-12 md:h-16 object-contain drop-shadow-lg"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="hidden md:flex items-center gap-8 text-white/90 text-sm font-medium tracking-wide">
          <button onClick={() => scrollToSection('experience')} className="hover:text-[#D4AF37] transition-colors drop-shadow-md">The Experience</button>
          <button onClick={() => scrollToSection('packages')} className="hover:text-[#D4AF37] transition-colors drop-shadow-md">Packages</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-[#D4AF37] transition-colors drop-shadow-md">About Us</button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="border border-[#D4AF37] text-[#D4AF37] px-5 py-2 rounded-sm hover:bg-[#D4AF37] hover:text-[#1B2A4A] transition-all bg-[#1B2A4A]/30 backdrop-blur-sm"
          >
            Book Consultation
          </button>
        </div>
      </nav>

      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Experience />
      <Packages onOpenModal={() => setIsModalOpen(true)} />
      <About />
      <Footer />

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

