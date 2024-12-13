import React from 'react';
import Layout from '../layout/Layout';
import { GiStarMedal } from 'react-icons/gi';
import { PiStudentFill } from 'react-icons/pi';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import rishikeshImg from '../assets/IMG_2030.jpg'
import gate from '../assets/gate.jpg';
import joshimath from '../assets/joshimath.jpg';
import csmt from '../assets/CSMT.jpg';
import mones from '../assets/Monestary.jpg'
import bill from '../assets/Billing.jpg';
import mac from '../assets/mac.jpg';
import profile from '../assets/profile.jpg';

// Centralized data configuration
const aboutData = {
  header: {
    subtitle: "Get To Know More",
    title: "About Me",
  },
  profile: {
    image: profile,
    description: "I'm a passionate developer, designer, and problem-solver who has been creating impactful web and mobile experiences since 2022. I specialize in crafting accessible, high-performance, and user-friendly solutions while maintaining a creative edge. With a hustler mindset and a positive outlook, I thrive on tackling challenges and bringing innovative ideas to life."
  },
  cards: [
    {
      icon: GiStarMedal,
      title: "Experience",
      details: ["1+ years", "Mobile/Web - Development"],
      gradient: "from-blue-50 to-white",
      iconBg: "bg-blue-100"
    },
    {
      icon: PiStudentFill,
      title: "Education",
      details: ["B.Tech - Computer Science", "Indraprastha Institute of Information Technology, Delhi"],
      gradient: "from-green-50 to-white",
      iconBg: "bg-green-100"
    }
  ],
  BannerData:[
    {
      image: "https://img.freepik.com/free-photo/beautiful-buildings-trees_23-2151848728.jpg",
      title: "My Journey",
      highlightedText: "From Mumbai to Tech Innovation",
      subtitle: [
        {
          heading: "Early Days & Education",
          content: "Born and raised in Mumbai's dynamic environment, I developed a natural affinity for technology and innovation. My academic journey led me to IIITD, where I transformed my passion into expertise.",
          icon: "🎓"
        },
        {
          heading: "Professional Growth",
          content: "Currently thriving at GEP Worldwide as a Mobile Developer, I collaborate with global teams to create cutting-edge solutions that make a real impact.",
          icon: "💼"
        },
        {
          heading: "Beyond Coding",
          content: "When not crafting code, I'm exploring new technologies, contributing to open-source projects, and staying ahead of industry trends.",
          icon: "🚀"
        }
      ],
      reverse: true,
    },
    {
      image: "https://png.pngtree.com/background/20230413/original/pngtree-basketball-background-enthusiasm-dynamic-vitality-picture-image_2422117.jpg",
      title: "Beyond The Code",
      highlightedText: "Life, Passion & Adventures",
      subtitle: [
        {
          heading: "Sports Enthusiast",
          content: "A former National Basketball Athlete and die-hard Lakers fan. You'll find me on the basketball court, cricket field, or in the swimming pool, channeling my competitive spirit into every game.",
          icon: "🏀",
        },
        {
          heading: "Adventure Seeker",
          content: "Passionate about exploring new destinations, experiencing different cultures, and creating memories across the globe. Every new place is a story waiting to be told.",
          icon: "✈️",
          link: {
            text: "View travel gallery",
            url: "#",
            icon: "📸"
          }
        },
        {
          heading: "Entertainment & Media",
          content: "When not coding or playing sports, I'm either gaming, watching movies, or diving into my curated music playlists. Music is my constant companion during coding sessions.",
          icon: "🎮",
          link: {
            text: "Connect on Spotify",
            url: "https://open.spotify.com/user/YOUR_SPOTIFY_ID",
            icon: "🎵"
          }
        }
      ],
      reverse: false,
    }
  ]
};

const travelData = {
  header: {
    title: "Wanderlust Chronicles",
    subtitle: "Capturing Moments Around the Globe"
  },
  places: [
    {
      image: rishikeshImg,
      name: "Rishikesh, Uttrakhand, India",
      description: "Nestled in the foothills of the Himalayas, Rishikesh is a serene destination known as the 'Yoga Capital of the World,' offering spiritual retreats, adventure sports like river rafting, and breathtaking views of the Ganges.",
      height: "h-[550px]"
    },
    {
      image: "https://media1.thrillophilia.com/filestore/l5stwgse3qt889ohvpojpa13ftp0_Mall_Road_Shimla_1.jpg?w=400&dpr=2",
      name: "Mall Road, Shimla, Himachal Pradesh, India",
      description: "A bustling promenade offering colonial charm, vibrant shops, and panoramic mountain views.",
      height: "h-[500px]"
    },
    {
      image: gate,
      name: "Gateway of India, Mumbai, India",
      description: "An iconic monument overlooking the Arabian Sea, symbolizing Mumbai's rich history and a popular hub for cultural and architectural exploration.",
      height: "h-[350px]"
    },
    {
      image: csmt,
      name: "CSMT, Mumbai, India",
      description: "A stunning blend of Victorian Gothic architecture and India's vibrant railway heritage.",
      height: "h-[450px]"
    },
    {
      image: "https://www.tourmyindia.com/socialimg/dharamshala-himachal-tourism.jpg",
      name: "HPCA Stadium, Dharamshala, Himachal Pradesh, India",
      description: "A stunning cricket stadium nestled amidst the majestic snow-capped Himalayas, offering a breathtaking sporting experience.",
      height: "h-[400px]"
    },
    {
      image: "https://uttarakhandtriptrek.com/wp-content/uploads/2019/02/Devprayag-1024x677.jpg",
      name: "Devprayag, Uttarakhand, India",
      description: "The sacred confluence of rivers Bhagirathi and Alaknanda, marking the origin of the holy Ganges amidst serene Himalayan beauty.",
      height: "h-[400px]"
    },
    {
      image: joshimath,
      name: "Kuari Trek, Uttarakhand, India",
      description: "Embark on a breathtaking journey through snow-capped peaks, dense forests, and panoramic Himalayan vistas.",
      height: "h-[400px]"
    },
    {
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
      name: "Taj Mahal, Agra, India",
      description: "Admiring the timeless beauty of this marble masterpiece, a symbol of love and one of the Seven Wonders of the World.",
      height: "h-[400px]"
    },
    {
      image: bill,
      name: "Bir Billing, Himachal Pradesh, India",
      description: "A world-renowned paragliding destination offering panoramic views of lush valleys and Himalayan landscapes.",
      height: "h-[350px]"
    },
    {
      image: mones,
      name: "Norbulingka Monastery, Dharamshala, Himachal Pradesh, India",
      description: "A serene Tibetan cultural center showcasing exquisite craftsmanship, vibrant art, and peaceful gardens.",
      height: "h-[450px]"
    },
    {
      image: mac,
      name: "Macleod Ganj, Dharamshala, Himachal Pradesh, India",
      description: "A vibrant Tibetan hub nestled in the Himalayas, known for its monasteries, bustling cafes, and breathtaking mountain views.",
      height: "h-[450px]"
    }    
  ]
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const getFadeInVariant = (delay) => ({
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 1 },
  },
});

const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100, delay: 0.2 }
  }
};

const slideInFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100, delay: 0.2 }
  }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100, delay: 0.1 }
  }
};

const getRandomRotation = () => Math.random() * 10 - 5;

const cardVariants = {
  hidden: { 
    opacity: 0,
    rotateX: getRandomRotation(),
    rotateY: getRandomRotation()
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    rotateY: 0,
    transition: { duration: 0.6 }
  }
};

// Add this custom hook after other animation variants
const useRandomInterval = (callback, minDelay, maxDelay) => {
  const timeoutId = React.useRef(null);
  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const tick = () => {
      const nextDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      timeoutId.current = window.setTimeout(() => {
        savedCallback.current();
        tick();
      }, nextDelay);
    };
    tick();
    return () => window.clearTimeout(timeoutId.current);
  }, [minDelay, maxDelay]);
};

const About = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('banner-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout title="Ayush's Portfolio - About Page" description="About page of the Website.">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        id="about"
        className="relative min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-50 pt-10"
      >
        {/* Header Section */}
        <motion.div 
          variants={scaleIn}
          className="p-6 md:p-8 w-full text-center space-y-4"
        >
          <motion.p 
            className="text-lg text-[#69a79c] font-medium tracking-wide uppercase"
            whileHover={{ scale: 1.05 }}
          >
            {aboutData.header.subtitle}
          </motion.p>
          <h1 className="text-5xl font-bold mt-2 text-green-950 tracking-tight">
            {aboutData.header.title}
            <span className="text-[#69a79c] animate-pulse">.</span>
          </h1>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 px-6 lg:px-20 mt-10">
          {/* Profile Picture */}
          <motion.div
            variants={slideInFromLeft}
            className="flex justify-center lg:w-1/3 relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <img
              src={aboutData.profile.image}
              alt="Profile picture"
              className="relative w-80 lg:w-96 h-80 lg:h-96 rounded-2xl object-cover 
              border border-gray-100 
              transition-all duration-300"
            />
          </motion.div>

          {/* Details Section */}
          <motion.div 
            variants={slideInFromRight}
            className="flex-1 flex flex-col gap-8"
          >
            {/* Cards Section */}
            <div className="grid md:grid-cols-2 gap-6">
              {aboutData.cards.map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`flex flex-col items-center text-center p-8 rounded-xl shadow-lg border border-gray-200/50 bg-gradient-to-br ${card.gradient} backdrop-blur-sm transition-all duration-300 hover:shadow-xl`}
                >
                  <div className={`${card.iconBg} rounded-full p-4 mb-4 shadow-md`}>
                    <card.icon size={40} className="text-green-950" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-950 tracking-wide">
                    {card.title}
                  </h3>
                  <div className="text-gray-600 mt-2 space-y-1">
                    {card.details.map((detail, i) => (
                      <p key={i} className="font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Description Text */}
            <motion.div
              variants={fadeInUp}
              className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
            >
              <p className="text-gray-700 font-medium text-lg leading-relaxed">
                {aboutData.profile.description}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          onClick={handleScroll}
          className="absolute bottom-12 right-8 cursor-pointer text-green-950 hover:text-[#69a79c] transition-all duration-300 transform hover:scale-110 hidden xl:block"
        >
          <FaAngleDoubleDown size={40} className="animate-bounce" />
        </motion.div>
      </motion.section>

      {/* Banner Sections */}
      <section id="banner-section" className="bg-gradient-to-b from-gray-100 to-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {aboutData.BannerData.map((banner, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-center gap-12 ${
                banner.reverse ? "md:flex-row-reverse" : ""
              } mb-16`}
            >
              {/* Banner Image Section */}
              <motion.div
                initial={{ opacity: 0, x: banner.reverse ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                className="flex-1 flex justify-center items-center p-4"
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ maxWidth: '600px' }}
                />
              </motion.div>
              {/* Banner Text Section */}
              <motion.div
                initial={{ opacity: 0, x: banner.reverse ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                className="flex-1 space-y-8"
              >
                {banner.title && (
                  <div className="space-y-2">
                    <h2 className="text-3xl font-semibold font-serif text-gray-800">{banner.title}</h2>
                    <p className="text-xl text-[#69a79c] font-semibold">{banner.highlightedText}</p>
                  </div>
                )}
                
                <div className="space-y-6">
                  {banner.subtitle.map((section, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="bg-white/60 backdrop-blur-sm rounded-lg p-6 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-2xl">{section.icon}</span>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold text-gray-800">
                            {section.heading}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {section.content}
                          </p>
                          {section.link && (
                            <motion.a
                              href={section.link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              className="inline-flex items-center gap-2 mt-3 text-[#69a79c] hover:text-[#557c74] font-medium transition-colors"
                            >
                              <span>{section.link.text}</span>
                              <span>{section.link.icon}</span>
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Stories Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          className="container mx-auto px-6 text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-950 mb-2">
            {travelData.header.title}
          </h2>
          <p className="text-lg text-[#69a79c]">{travelData.header.subtitle}</p>
        </motion.div>

        <div className="container mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {travelData.places.map((place, index) => (
              <motion.div
                key={index}
                className={`relative break-inside-avoid group ${place.height}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative w-full h-full [perspective:1500px] group cursor-pointer">
                  <div
                    className="relative w-full h-full duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]"
                  >
                    {/* Front side */}
                    <div className="absolute inset-0 [backface-visibility:hidden]">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover rounded-2xl shadow-xl"
                      />
                    </div>
                    
                    {/* Back side */}
                    <div 
                      className="absolute inset-0 [transform:rotateX(180deg)] [backface-visibility:hidden] bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center"
                      style={{
                        transformOrigin: 'center center'
                      }}
                    >
                      <h3 className="text-2xl font-bold text-green-950 mb-4">
                        {place.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {place.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
