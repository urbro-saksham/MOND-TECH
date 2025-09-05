import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Perry",
      text: "MONDTECH IT CONSULTATIONS LLP has transformed our approach to technology. Their strategic IT planning aligned seamlessly with our business goals and exceeded our expectations. The innovative solutions they implemented revitalized our operations, making them an essential partner in our success."
    },
    {
      name: "Sarah Laurens",
      text: "Operational excellence was crucial for our growth, and MONDTECH IT CONSULTATIONS LLP delivered remarkable results. Their team's dedication to enhancing efficiency and profitability has revolutionized our processes, establishing them as a key player in our development."
    },
    {
      name: "Michael Warner",
      text: "In an ever-changing tech environment, staying ahead is imperative. MONDTECH IT CONSULTATIONS LLP not only recognizes this but excels in it. Their expertise in technology integration has kept our business agile, efficient, and prepared for the future. A truly dependable partner for innovation."
    },
    {
      name: "Emma Bridge",
      text: "MONDTECH IT CONSULTATIONS LLP significantly improved our customer engagement. Their solutions were customized to reflect our brand, fostering enduring relationships. It's rare to encounter a consultancy that values personalized engagement as much as they do."
    },
    {
      name: "Alex Miller",
      text: "The training and development initiatives from MONDTECH IT CONSULTATIONS LLP have been transformative for our staff. Their tailored approach to our industry and business goals has equipped our team with the essential skills and knowledge to thrive. They are a true investment in our success."
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="testimonials" className="section-padding bg-mondtech-dark relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          {/* Quote Icon */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <div className="w-12 h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46.055"
                height="36"
                viewBox="0 0 46.055 36"
                fill="none"
              >
                <defs>
                  <linearGradient id="quote_gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#8E8E8E" />
                    <stop offset="100%" stopColor="#484848" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#quote_gradient)"
                  d="M46.421 41.334H31.1a2.3 2.3 0 01-2.3-2.3V26.207q0-8.353 3.527-13.185 2.091-2.865 9.99-7.384a2.3 2.3 0 013.142.855l.026.047 2.155 3.983a2.3 2.3 0 01-.881 3.1 22.107 22.107 0 00-5.342 3.762 9.807 9.807 0 00-2.221 5.712h7.224a2.3 2.3 0 012.3 2.3V39.03a2.3 2.3 0 01-2.3 2.3zm-26.132 0H4.969a2.3 2.3 0 01-2.3-2.3V26.207q0-8.353 3.527-13.185 2.091-2.865 9.99-7.384a2.3 2.3 0 013.142.855l.026.047 2.156 3.983a2.3 2.3 0 01-.881 3.1 22.107 22.107 0 00-5.342 3.762 9.807 9.807 0 00-2.221 5.712h7.225a2.3 2.3 0 012.3 2.3V39.03a2.3 2.3 0 01-2.3 2.3z"
                  transform="translate(-2.667 -5.334)"
                />
              </svg>
            </div>
          </motion.div>

          {/* Testimonial Content */}
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h3 className="heading-tertiary text-white mb-6">
                  {testimonials[currentIndex].name}
                </h3>
                
                <p className="paragraph-white text-lg leading-relaxed">
                  {testimonials[currentIndex].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-12 space-x-3"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-mondtech-gray to-mondtech-light-gray'
                    : 'bg-white/50'
                }`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
