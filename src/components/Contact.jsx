import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaStar } from "react-icons/fa"

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="contact" className="px-section-padding bg-mondtech-bg mt-8 mb-8 pt-6">

      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="heading-secondary mb-12"
          >
            Get in touch with us
          </motion.h1>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Email */}
            <motion.div
              variants={itemVariants}
              className="bg-mondtech-dark rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 "
            >
              <FaEnvelope className="text-mondtech-gray w-8 h-8 mb-0 mx-auto" />
              <h2 className="heading-tertiary mb-2">Email</h2>
              <a
                href="mailto:support@mondtech.in"
                className="paragraph block hover:text-mondtech-gray transition-colors duration-200"
              >
                support@mondtech.in
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              variants={itemVariants}
              className="bg-mondtech-dark rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaPhone className="text-mondtech-gray w-8 h-8 mb-0 mx-auto" />
              <h2 className="heading-tertiary mb-2">Phone</h2>
              <a
                href="tel:+919760434722"
                className="paragraph block hover:text-mondtech-gray transition-colors duration-200"
              >
                +91 9760434722
              </a>
            </motion.div>

            {/* Address */}
            <motion.div
              variants={itemVariants}
              className="bg-mondtech-dark rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaMapMarkerAlt className="text-mondtech-gray w-8 h-8 mb-0 mx-auto" />
              <h2 className="heading-tertiary mb-2">Address</h2>
              <p className="paragraph">Greater Noida, India</p>
            </motion.div>
          </div>

          {/* Bottom Note */}
          <motion.div
            variants={itemVariants}
            className="mt-16 border-t border-mondtech-dark pt-8 relative"
          >
            <FaStar className="w-10 h-10 text-mondtech-dark absolute -top-5 left-1/2 -translate-x-1/2" />
            <p className="paragraph">
              We welcome your inquiries and suggestions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
