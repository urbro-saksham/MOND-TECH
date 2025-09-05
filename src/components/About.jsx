import { motion } from 'framer-motion'

const About = () => {
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
    <section id="about" className="section-padding bg-mondtech-dark relative overflow-hidden">
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="heading-primary mb-6"
          >
            Discover more about us
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="paragraph-white text-lg md:text-xl max-w-3xl mx-auto"
          >
            Learn about our mission, journey, and dedication to your growth.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16"
        >
          <motion.article
            variants={itemVariants}
            className="relative"
          >
            <div className="border-l-4 border-mondtech-light-gray pl-6 md:pl-8">
              <h2 className="heading-tertiary text-white mb-4">
                Our story: Partnering for your success
              </h2>
              <p className="paragraph-white">
                Mondtech is a full-service IT solutions partner helping startups, SMEs, and enterprises harness technology for growth. We deliver secure, scalable, and efficient digital solutions that simplify operations, empower decision-making, and create long-term value.
              </p>
            </div>
          </motion.article>

          <motion.article
            variants={itemVariants}
            className="relative"
          >
            <div className="border-l-4 border-mondtech-light-gray pl-6 md:pl-8">
              <h2 className="heading-tertiary text-white mb-4">
                Our mission: Driving your growth through technology
              </h2>
              <p className="paragraph-white">
                At the core of MONDTECH is a passionate team dedicated to driving your growth. We are committed to providing innovative IT solutions that are specifically designed to meet your distinct requirements. Trust us to lead your business towards a future filled with opportunities.
              </p>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}

export default About
