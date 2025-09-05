import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

// ✅ Import your images from assets
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpeg'
import slide3 from '../assets/slide3.jpeg'

const Hero = () => {
  const slides = [slide3, slide2, slide1]
  const [current, setCurrent] = useState(0)

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com' },
    { icon: FaTwitter, href: 'https://www.twitter.com' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com' },
    { icon: FaInstagram, href: 'https://www.instagram.com' }
  ]

  return (
    <section id="home" className="relative min-h-screen bg-mondtech-dark flex items-center overflow-hidden">
      {/* Background Triangles */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute left-0 bottom-0 w-full h-auto opacity-10"
          width="1074"
          height="601"
          viewBox="0 0 1074 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0 0 1074 601 0 601" fill="#484848" />
        </svg>
        <svg
          className="absolute right-0 bottom-0 w-3/4 h-auto opacity-10"
          width="725"
          height="238"
          viewBox="0 0 725 238"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0 0 725 238 0 238" fill="#484848" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="heading-primary mb-6"
            >
              End-to-End IT Solutions for a Digital Future
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="paragraph-white text-lg md:text-xl mb-8"
            >
              We will empower your business with technology-driven strategies.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection('services')}
                className="btn-primary"
              >
                Services
              </button>
            </motion.div>
          </motion.div>

          {/* Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 relative"
          >
            <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={slides[current]}
                  alt={`Slide ${current + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />
              </AnimatePresence>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === current ? 'bg-mondtech-gray' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute left-5 bottom-5 z-20"
        >
          <div className="flex flex-col space-y-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="social-link"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
