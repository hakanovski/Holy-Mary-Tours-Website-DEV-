import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plane, Star, BookOpen, MapPin, CheckCircle, ChevronRight, Mail, Phone, Map, X, Heart, Sun, Cross, Crown, Flame, Facebook, Instagram, Linkedin } from 'lucide-react';

type TourDay = {
  day: number;
  title: string;
  description: string;
  image?: string;
};

type TourData = {
  id: 'tour-paul' | 'tour-revelation';
  title: string;
  duration: string;
  price: string;
  heroImage: string;
  overview: string;
  days: TourDay[];
};

const paulTour: TourData = {
  id: 'tour-paul',
  title: "Footsteps of Saint Paul",
  duration: "5 Days",
  price: "$2,899",
  heroImage: "https://en.wikipedia.org/wiki/Special:FilePath/Celsus_Library%2C_Ephesus.jpg?width=1920",
  overview: "A profound spiritual journey to the heart of early Christianity. Walk the marble streets where St. Paul preached to the Ephesians. Experience the overwhelming peace of the House of the Virgin Mary (Meryem Ana Evi), where you can light a candle and pray in the very place she spent her final days. This is not just a tour; it is a deeply moving pilgrimage that connects you to the roots of your faith.",
  days: [
    {
      day: 1,
      title: "Arrival in Istanbul",
      description: "Welcome to Turkey! Upon your arrival at Istanbul Airport, you will be greeted by our VIP representative and transferred to your luxury hotel. Spend the evening resting and preparing your heart for the spiritual journey ahead. Enjoy a welcome dinner featuring exquisite Turkish cuisine.",
      image: "https://en.wikipedia.org/wiki/Special:FilePath/Blue_Mosque_Courtyard_Dusk.jpg?width=1280",
    },
    {
      day: 2,
      title: "The Splendors of Istanbul & Flight to Izmir",
      description: "Begin your day exploring the historical peninsula of Istanbul. Marvel at the architectural masterpiece of Hagia Sophia, once the largest cathedral in the world, taking in its breathtaking ancient mosaics. Visit the Blue Mosque, renowned for its stunning Iznik tiles, and explore the opulent Topkapi Palace. In the afternoon, wander through the vibrant Grand Bazaar before taking an evening flight to Izmir (ancient Smyrna).",
      image: "https://en.wikipedia.org/wiki/Special:FilePath/Interior_of_Hagia_Sophia_in_Istanbul.jpg?width=1280",
    },
    {
      day: 3,
      title: "Smyrna, Philadelphia, and Sardis",
      description: "Explore Izmir, the site of ancient Smyrna, one of the Seven Churches of Revelation. Continue to Philadelphia, the city of brotherly love, and then to Sardis, the capital of the ancient kingdom of Lydia. Walk through the impressive ruins of the Temple of Artemis and the ancient synagogue. Enjoy a scenic drive to Pamukkale for your overnight stay.",
      image: "https://en.wikipedia.org/wiki/Special:FilePath/Sardis_Gymnasium_2007.jpg?width=1280",
    },
    {
      day: 4,
      title: "Hierapolis, Laodicea, and the Cotton Castle",
      description: "Start your day at the breathtaking white travertine terraces of Pamukkale (the 'Cotton Castle'). Explore the ancient city of Hierapolis, where the Apostle Philip was martyred. Next, visit Laodicea, the 'lukewarm' church mentioned in Revelation. Discover its ancient theaters, stadium, and aqueducts before driving to the coastal town of Kuşadası.",
      image: "https://en.wikipedia.org/wiki/Special:FilePath/Pamukkale_00.JPG?width=1280",
    },
    {
      day: 5,
      title: "Ephesus and the House of the Virgin Mary",
      description: "A deeply moving day awaits as you explore Ephesus, the most well-preserved classical city in the Eastern Mediterranean. Walk the same marble streets as St. Paul and St. John. Stand in the Great Theater where Paul faced the silversmiths. Visit the tranquil House of the Virgin Mary (Meryem Ana Evi) on Mt. Koressos, a sacred site for both Christians and Muslims. Conclude your pilgrimage with a transfer to the airport for your departure.",
      image: "https://en.wikipedia.org/wiki/Special:FilePath/House_of_the_Virgin_Mary_in_Ephesus.jpg?width=1280",
    }
  ]
};

const revelationTour: TourData = {
  id: 'tour-revelation',
  title: "The Seven Churches of Revelation",
  duration: "11 Days",
  price: "$5,499",
  heroImage: "https://en.wikipedia.org/wiki/Special:FilePath/Hagia_Sophia_Deesis_mosaic.jpg?width=1920",
  overview: "An expansive, 11-day expedition covering the Seven Churches of Revelation. Discover the historical context of the apocalyptic letters and witness the monumental scale of the Greco-Roman world that the early Christians navigated.",
  days: [
    {
      day: 1,
      title: "Arrival in Istanbul",
      description: "Welcome to the crossroads of Europe and Asia. Upon arrival at Istanbul Airport, you will be met by our representative and transferred to your luxury hotel. Relax and enjoy a welcome dinner as you prepare for this epic biblical journey.",
      image: "https://en.wikipedia.org/wiki/Special:FilePath/Blue_Mosque_Courtyard_Dusk.jpg?width=1280",
    },
    {
      day: 2,
      title: "Istanbul's Christian Heritage & Flight to Adana",
      description: "Explore the Hippodrome, the Blue Mosque, and the magnificent Hagia Sophia, the pinnacle of Byzantine architecture. Visit the Topkapi Palace, the former residence of Ottoman Sultans. In the afternoon, take a flight to Adana, located in the heart of the Cilician plain.",
      image: "https://en.wikipedia.org/wiki/Special:FilePath/Interior_of_Hagia_Sophia_in_Istanbul.jpg?width=1280",
    },
    {
      day: 3,
      title: "Antioch: Where They Were First Called Christians",
      description: "Drive to Antioch (modern Antakya), a pivotal city in early Christianity. Visit the Cave Church of St. Peter, widely considered one of the oldest Christian churches in the world, where St. Peter, St. Paul, and St. Barnabas preached. Explore the Hatay Archaeology Museum, home to a stunning collection of Roman mosaics.",
      image: "https://en.wikipedia.org/wiki/Special:FilePath/Antakya_St_Peter_church_8284.jpg?width=1280",
    },
    {
      day: 4,
      title: "Tarsus, the Birthplace of St. Paul",
      description: "Travel to Tarsus, the birthplace of the Apostle Paul. Visit St. Paul's Well and the ancient Roman street. Reflect on the early life of Saul before his conversion. Enjoy a scenic coastal drive along the Mediterranean to the beautiful resort city of Alanya.",
      image: "https://en.wikipedia.org/wiki/Special:FilePath/Tarsus_St_Paul_Well_0332.jpg?width=1280",
    },
    {
      day: 5,
      title: "Aspendos, Perge, and Colossae",
      description: "Visit the incredibly well-preserved Roman theater of Aspendos. Continue to Perge, where St. Paul preached his first sermon in Pamphylia. Drive inland to the unexcavated mound of Colossae, the recipient of Paul's Epistle to the Colossians. Arrive in Pamukkale for dinner and overnight.",
      image: "https://en.wikipedia.org/wiki/Special:FilePath/Aspendos_Theater.jpg?width=1280",
    },
    {
      day: 6,
      title: "Hierapolis, Aphrodisias, and Laodicea",
      description: "Explore Hierapolis and the white terraces of Pamukkale. Visit the Martyrium of St. Philip. Drive to Aphrodisias, the city of the goddess of love, renowned for its sculpture school and well-preserved stadium. Conclude the day at Laodicea, the 'lukewarm' church of Revelation.",
      image: "https://en.wikipedia.org/wiki/Special:FilePath/Laodicea_on_the_Lycus_-_Syrian_Street.jpg?width=1280",
    },
    {
      day: 7,
      title: "Ephesus: The First Church of Revelation",
      description: "Spend the day in Ephesus, the most important of the Seven Churches. Visit the Basilica of St. John, believed to be the burial site of the Apostle. Explore the extensive ruins of Ephesus, including the Celsus Library and the Great Theater. Visit the Ephesus Archaeological Museum. Drive to Izmir for overnight.",
      image: "https://en.wikipedia.org/wiki/Special:FilePath/Celsus_Library%2C_Ephesus.jpg?width=1280",
    },
    {
      day: 8,
      title: "Smyrna, Sardis, Philadelphia, and Thyatira",
      description: "Visit the ancient agora of Smyrna (Izmir), the persecuted church. Travel to Sardis, the 'dead' church, and explore its massive gymnasium and synagogue. Continue to Philadelphia, the church of 'brotherly love', and Thyatira, known for its trade guilds and the purple dye industry.",
      image: "https://en.wikipedia.org/wiki/Special:FilePath/Sardis_Gymnasium_2007.jpg?width=1280",
    },
    {
      day: 9,
      title: "Pergamum and Alexandria Troas",
      description: "Drive to Pergamum, described in Revelation as the place 'where Satan's throne is'. Take a cable car to the Acropolis to see the steepest theater in the ancient world and the foundations of the Altar of Zeus. Visit the Asclepion, an ancient healing center. Continue to Alexandria Troas, where Paul received the Macedonian call. Overnight in Çanakkale.",
      image: "https://en.wikipedia.org/wiki/Special:FilePath/Pergamon_Theater.jpg?width=1280",
    },
    {
      day: 10,
      title: "Troy and Return to Istanbul",
      description: "Visit the legendary city of Troy, immortalized by Homer's Iliad. See the replica of the Trojan Horse and explore the nine layers of the ancient city. Cross the Dardanelles strait by ferry, reflecting on the historical significance of this waterway. Drive back to Istanbul for a farewell dinner.",
      image: "https://en.wikipedia.org/wiki/Special:FilePath/Trojan_Horse_replica_in_Troy.jpg?width=1280",
    },
    {
      day: 11,
      title: "Departure",
      description: "After breakfast, enjoy some final moments in Istanbul before your private VIP transfer to the airport for your journey home, carrying with you memories of a lifetime and a renewed spirit.",
      image: "https://en.wikipedia.org/wiki/Special:FilePath/Hagia_Sophia_Mars_2013.jpg?width=1280",
    }
  ]
};

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-4 md:gap-5 ${className}`}>
    <div className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16">
      {/* Outer Divine Halo (Spinning slowly) */}
      <Sun className="absolute w-full h-full text-[#D4AF37] opacity-25 animate-[spin_40s_linear_infinite]" strokeWidth={0.5} />
      
      {/* Crown of Mary (Queen of Heaven) */}
      <Crown className="absolute w-[55%] h-[55%] text-[#D4AF37] mt-3" strokeWidth={1.5} />
      
      {/* The Cross of Christ */}
      <Cross className="absolute w-[35%] h-[35%] text-[#F3E5AB] -mt-4" strokeWidth={2} />
      
      {/* Star of Bethlehem / Divine Guidance */}
      <Star className="absolute w-[15%] h-[15%] text-[#FFFFFF] -mt-10 opacity-90 animate-pulse" strokeWidth={2} fill="#FFFFFF" />
    </div>
    <div className="flex flex-col justify-center">
      <span className="font-sans font-light text-2xl md:text-3xl tracking-[0.25em] bg-gradient-to-r from-[#FFFFFF] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent uppercase leading-none drop-shadow-sm">
        Holy Mary
      </span>
      <span className="font-sans font-medium text-[0.65rem] md:text-[0.75rem] tracking-[0.6em] text-[#D4AF37] uppercase mt-2 ml-1 opacity-90">
        Tours
      </span>
    </div>
  </div>
);

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // IMPORTANT: Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual Formspree ID (e.g., 'xabcdefg')
      const response = await fetch("https://formspree.io/f/mgoprabq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => {
          setIsSubmitted(false);
          onClose();
        }, 4000);
      } else {
        alert("Oops! There was a problem submitting your form. Please make sure you have configured your Formspree endpoint.");
      }
    } catch (error) {
      alert("Oops! There was a network error submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
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
                      <input required type="text" name="firstName" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1B2A4A] mb-2">Last Name *</label>
                      <input required type="text" name="lastName" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#1B2A4A] mb-2">Email Address *</label>
                    <input required type="email" name="email" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="john@example.com" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1B2A4A] mb-2">Phone Number <span className="text-gray-400 font-light">(Optional)</span></label>
                      <input type="tel" name="phone" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1B2A4A] mb-2">Address <span className="text-gray-400 font-light">(Optional)</span></label>
                      <input type="text" name="address" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="City, State" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1B2A4A] mb-2">Your Message *</label>
                    <textarea required rows={4} name="message" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none" placeholder="Tell us about your church group or your desired travel dates..."></textarea>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full bg-[#D4AF37] text-[#1B2A4A] font-medium text-lg py-4 rounded-sm hover:bg-[#C5A059] transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
  const backgrounds = [
    "https://en.wikipedia.org/wiki/Special:FilePath/Interior_of_Hagia_Sophia_in_Istanbul.jpg?width=1920",
    "https://en.wikipedia.org/wiki/Special:FilePath/Celsus_Library%2C_Ephesus.jpg?width=1920",
    "https://en.wikipedia.org/wiki/Special:FilePath/House_of_the_Virgin_Mary_in_Ephesus.jpg?width=1920",
    "https://en.wikipedia.org/wiki/Special:FilePath/Hagia_Sophia_Deesis_mosaic.jpg?width=1920"
  ];
  
  const [bgImage, setBgImage] = useState(backgrounds[0]);

  useEffect(() => {
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setBgImage(randomBg);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img
          key={bgImage}
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 20, ease: "easeOut" }}
          src={bgImage}
          alt="Historical Biblical Site in Turkey"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B2A4A]/90 via-[#1B2A4A]/70 to-[#1B2A4A]/95 mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm md:text-base font-semibold mb-6">From the Heart of Texas to the Cradle of Christianity</h2>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-8 drop-shadow-lg">
            Walk Where the <br className="hidden md:block" />
            <span className="italic text-[#EAE6DF]">Apostles Walked.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Holy Mary Tours bridges the gap between your local community and the legendary biblical sites of Asia Minor. We don't just organize trips; we curate profound spiritual awakenings. Walk the marble streets of Ephesus where St. Paul preached, feel the divine peace at the House of the Virgin Mary, and stand in awe beneath the ancient mosaics of Hagia Sophia. This is your exclusive invitation to experience the roots of your faith through a lens of unparalleled luxury and local Turkish expertise.
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
      title: "Seamless Texas Departures",
      description: "Your pilgrimage begins the moment you leave home. We handle every detail, offering direct flight coordination from DFW, pre-flight community briefings in McKinney, and a dedicated local liaison to ensure your journey is stress-free before you even board."
    },
    {
      icon: <Star className="w-8 h-8 text-[#D4AF37]" />,
      title: "Uncompromising 5-Star Luxury",
      description: "Experience the lands of the Bible without sacrificing comfort. We guarantee sea-view rooms in premium Aegean resorts, historic luxury accommodations in Istanbul, and VIP transport in private, climate-controlled Mercedes-Benz Sprinter vans."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#D4AF37]" />,
      title: "Expert Biblical Guidance",
      description: "Our guides are more than just locals; they are passionate scholars of early Christianity. They bring the Book of Revelation and the Acts of the Apostles to life, providing deep historical context amidst the ruins of the Seven Churches."
    },
    {
      icon: <Cross className="w-8 h-8 text-[#D4AF37]" />,
      title: "Exclusive & Sacred Access",
      description: "Enjoy skip-the-line privileges at major archaeological sites and carefully curated private moments for prayer and reflection at sacred locations like the House of the Virgin Mary, ensuring a deeply personal spiritual experience."
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white p-10 rounded-sm shadow-xl shadow-black/5 border border-gray-100 text-center group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="w-16 h-16 mx-auto bg-[#1B2A4A]/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1B2A4A] group-hover:text-white transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif text-[#1B2A4A] mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TourDetail = ({ tour, onBack, onOpenModal }: { tour: TourData, onBack: () => void, onOpenModal: () => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F0] pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#1B2A4A] hover:text-[#D4AF37] transition-colors mb-8 font-medium"
        >
          <ChevronRight className="w-5 h-5 rotate-180" /> Back to Tours
        </button>

        <div className="bg-white rounded-sm shadow-2xl overflow-hidden">
          <div className="h-[40vh] md:h-[50vh] relative">
            <img src={tour.heroImage} alt={tour.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/90 to-transparent flex items-end p-8 md:p-12">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-[#D4AF37] text-[#1B2A4A] px-3 py-1 text-sm font-medium rounded-sm uppercase tracking-wider">{tour.duration}</span>
                  <span className="text-white font-serif text-xl">{tour.price} <span className="text-sm font-sans font-light text-gray-300">/ person</span></span>
                </div>
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">{tour.title}</h1>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="mb-12">
              <h2 className="text-2xl font-serif text-[#1B2A4A] mb-4">Journey Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg font-light">{tour.overview}</p>
            </div>

            <div className="space-y-12">
              <h2 className="text-3xl font-serif text-[#1B2A4A] mb-8 border-b border-gray-200 pb-4">Detailed Itinerary</h2>
              
              {tour.days.map((day, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-8 items-start group">
                  <div className="md:w-1/3 shrink-0">
                    <div className="sticky top-24">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#1B2A4A] text-[#D4AF37] flex items-center justify-center rounded-full font-serif text-xl shadow-lg">
                          {day.day}
                        </div>
                        <h3 className="text-xl font-serif text-[#1B2A4A]">{day.title}</h3>
                      </div>
                      <p className="text-gray-600 font-light leading-relaxed mb-6">{day.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 w-full space-y-6">
                    {day.image && (
                      <div className="rounded-sm overflow-hidden shadow-lg aspect-video bg-gray-100">
                        <img src={day.image} alt={day.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center border-t border-gray-200 pt-12">
              <h3 className="text-2xl font-serif text-[#1B2A4A] mb-6">Ready to Walk in the Footsteps of the Apostles?</h3>
              <button 
                onClick={onOpenModal}
                className="bg-[#D4AF37] text-[#1B2A4A] px-10 py-4 rounded-sm font-medium tracking-wide hover:bg-[#C5A059] transition-colors duration-300 text-lg shadow-xl"
              >
                Book This Pilgrimage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Packages = ({ onOpenModal, onViewTour }: { onOpenModal: () => void, onViewTour: (id: 'tour-paul' | 'tour-revelation') => void }) => {
  const packages = [
    {
      id: 'tour-paul' as const,
      title: "Footsteps of Saint Paul",
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
      image: "https://en.wikipedia.org/wiki/Special:FilePath/Celsus_Library%2C_Ephesus.jpg?width=1280",
      highlight: true
    },
    {
      id: 'tour-revelation' as const,
      title: "The Seven Churches of Revelation",
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
      image: "https://en.wikipedia.org/wiki/Special:FilePath/Ephesos_amphitheatre.jpg?width=1280",
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
            Our Biblical Tours
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
                  onClick={() => onViewTour(pkg.id)}
                  className="mt-10 flex items-center gap-2 text-[#1B2A4A] font-medium hover:text-[#D4AF37] transition-colors group"
                >
                  Read More <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
      {/* Pure CSS Background - No images to break! */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent"></div>
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '48px 48px', opacity: 0.03 }}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-8 text-[#D4AF37]">Texas Heart. Turkish Expertise.</h2>
          <div className="w-16 h-px bg-white/30 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-light leading-relaxed text-gray-300 mb-6">
            We are Ece and Hakan Yorgancı, a married couple and long-time residents of McKinney, Texas. We are deeply rooted in our local Christian community, blessed with wonderful friendships and a shared faith.
          </p>
          <p className="text-lg md:text-xl font-light leading-relaxed text-gray-300 mb-6">
            Originally from the heart of the Aegean, our mission is to introduce our friends and community to the sacred lands where Jesus and Mary walked. We believe in learning, traveling, and sharing these profound experiences together—enriching our souls and having fun along the way.
          </p>
          <p className="text-lg md:text-xl font-light leading-relaxed text-gray-300">
            While we personally manage your flawless booking and pre-flight experience from Texas, your ground operations and logistics in Turkey are flawlessly executed by our dedicated 40-year partner, <a href="https://www.azimtours.com/" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] font-medium hover:text-white transition-colors underline underline-offset-4 decoration-[#D4AF37]/40">Azim Tours</a>.
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Logo />
            </div>
            <p className="font-light text-sm leading-relaxed max-w-xs mb-8">
              Exclusive, all-inclusive luxury Christian pilgrimages to the Biblical sites of Asia Minor.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center gap-5">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-[#0A1128] transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-[#0A1128] transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-[#0A1128] transition-all duration-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 3.974H5.078z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-[#0A1128] transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
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
        
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs font-light text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Holy Mary Tours. All rights reserved.</p>
            <p className="hidden md:block text-white/20">|</p>
            <p>Operated in partnership with <a href="https://www.azimtours.com/" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-white transition-colors font-medium">Azim Tours</a> (Est. 1975)</p>
          </div>
          
          {/* MIELA Labs Credit */}
          <div className="text-xs font-light flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-[#D4AF37]/50 transition-colors duration-300">
            <span className="text-gray-500">Designed & Engineered by</span>
            <a 
              href="https://www.mielalabs.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-white hover:text-[#D4AF37] transition-all duration-300 tracking-wider flex items-center gap-1 group"
            >
              MIELA LABS
              <ChevronRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'tour-paul' | 'tour-revelation'>('home');

  const scrollToSection = (id: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderView = () => {
    if (currentView === 'tour-paul') {
      return <TourDetail tour={paulTour} onBack={() => setCurrentView('home')} onOpenModal={() => setIsModalOpen(true)} />;
    }
    if (currentView === 'tour-revelation') {
      return <TourDetail tour={revelationTour} onBack={() => setCurrentView('home')} onOpenModal={() => setIsModalOpen(true)} />;
    }
    return (
      <>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <Experience />
        <Packages onOpenModal={() => setIsModalOpen(true)} onViewTour={(id) => setCurrentView(id)} />
        <About />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] font-sans selection:bg-[#D4AF37] selection:text-[#1B2A4A]">
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center bg-gradient-to-b from-[#0A1128]/90 via-[#0A1128]/40 to-transparent">
        <div onClick={() => setCurrentView('home')}>
          <Logo className="hover:opacity-90 transition-opacity cursor-pointer" />
        </div>
        <div className="hidden md:flex items-center gap-8 text-[#EAE6DF] text-xs md:text-sm font-light tracking-[0.15em] uppercase">
          <button onClick={() => scrollToSection('experience')} className="hover:text-[#F3E5AB] transition-colors">The Experience</button>
          <button onClick={() => scrollToSection('packages')} className="hover:text-[#F3E5AB] transition-colors">Biblical Tours</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-[#F3E5AB] transition-colors">About Us</button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="border border-[#D4AF37]/50 text-[#F3E5AB] px-6 py-2.5 rounded-sm hover:bg-[#D4AF37] hover:text-[#0A1128] transition-all duration-300 bg-[#0A1128]/40 backdrop-blur-md"
          >
            Book Consultation
          </button>
        </div>
      </nav>

      {renderView()}
      
      <Footer />

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

