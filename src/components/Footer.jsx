import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com' },
    { icon: FaTwitter, href: 'https://www.twitter.com' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com' },
    { icon: FaInstagram, href: 'https://www.instagram.com' }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <footer className="bg-mondtech-dark py-12">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row justify-between items-center gap-8"
        >
          <motion.p
            variants={itemVariants}
            className="paragraph-white text-center lg:text-left"
          >
            © All Rights Reserved. MONDTECH IT CONSULTATIONS LLP
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex space-x-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="social-link"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
