import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

// ✅ Import background images for each service
import webImg from '../assets/services/web.png'
import mobileImg from '../assets/services/mobile.png'
import softwareImg from '../assets/services/software.png'
import dataImg from '../assets/services/data.png'
import apiImg from '../assets/services/api.png'
import supportImg from '../assets/services/chip.png'

const Services = () => {
  const services = [
    {
      title: "Custom Website Development",
      description: "Modern, responsive, and SEO-optimized websites",
      image: webImg
    },
    {
      title: "Mobile App Development",
      description: "Native (iOS/Android) and cross-platform apps (Flutter, React Native) with scalable APIs and smooth user experiences",
      image: mobileImg
    },
    {
      title: "Custom Software Development",
      description: "Web, mobile, and enterprise applications tailored to your business workflows.",
      image: softwareImg
    },
    {
      title: "Data & Automation Solutions",
      description: "Survey tools (ODK, Kobo, SurveyCTO), automated dashboards, reporting, and workflow automation.",
      image: dataImg
    },
    {
      title: "System Integration & APIs",
      description: "Connecting apps, CRMs, ERPs, and third-party tools for seamless workflows.",
      image: apiImg
    },
    {
      title: "Support & Maintenance",
      description: "Pick me if you're looking for something you miss out.",
      image: supportImg
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="services" className="section-padding bg-mondtech-dark">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="heading-secondary text-white mb-4"
          >
            What We Do
          </motion.h1>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-0.5 bg-mondtech-light-gray mx-auto"
          />
        </motion.div>

        {/* Service Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group rounded-lg overflow-hidden shadow-lg"
              whileHover={{ y: -5 }}
            >
              {/* Background Image with Zoom Effect */}
              <motion.div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/75 group-hover:bg-black/55 transition-all duration-500" />

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col items-center text-center h-full justify-center">
                <h2 className="heading-tertiary text-white mb-4">
                  {service.title}
                </h2>
                
                <p className="paragraph-white mb-6">
                  {service.description}
                </p>

                <motion.a
                  href="http://builder.renderforestsites.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white font-medium text-sm uppercase tracking-wide hover:text-mondtech-light-gray transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  Learn more
                  <FaArrowRight className="ml-2 w-3 h-3" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
