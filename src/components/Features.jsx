import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"

// Import images (make sure they are inside src/assets/)
import img1 from "../assets/01-min.jpg"
import img2 from "../assets/02-min.jpg"
import img3 from "../assets/03-min.jpg"

const Features = () => {
  const features = [
    {
      title: "Strategic IT planning",
      description:
        "Leverage our strategic IT expertise to define a clear direction for your business. We assess market dynamics, align technology strategies with your objectives, and promote sustainable growth with a competitive edge.",
      image: img1,
    },
    {
      title: "Tailored digital solutions",
      description:
        "Stay ahead of the curve with our innovative solution development. We provide customized digital solutions that tackle your specific challenges, empowering your organization to capitalize on new opportunities.",
      image: img2,
    },
    {
      title: "Operational excellence",
      description:
        "Maximize your business's capabilities with our operational excellence services. From enhancing workflows to improving efficiency, we strive to elevate performance, boost profitability, and secure long-term success.",
      image: img3,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="section-padding bg-mondtech-bg">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-20"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`flex flex-col ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-12 lg:gap-16`}
          >
            {/* Content */}
            <div className="flex-1 px-6 sm:px-8 lg:px-0 max-w-2xl mx-auto lg:mx-0 lg:ml-12">
              <h2 className="heading-secondary mb-6">{feature.title}</h2>
              <p className="paragraph mb-8">{feature.description}</p>

              <motion.button
                onClick={scrollToContact}
                className="btn-primary inline-flex items-center"
                whileHover={{ x: 5 }}
              >
                Contact
                <FaArrowRight className="ml-2 w-3 h-3" />
              </motion.button>
            </div>

            {/* Image */}
            <div className="flex-1">
              <div className="relative w-full h-80 lg:h-96 rounded-lg overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                {/* Optional gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-mondtech-gray/40 to-mondtech-dark/40"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Features
