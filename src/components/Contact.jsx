import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-gray-200"
        >
          Contact Me
        </motion.h2>

        {/* Contact Details */}
        <div className="flex flex-col items-center space-y-6 text-lg">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-400 text-xl" />
            <a
              href="mailto:sumyatphyu2422004@gmail.com"
              className="hover:text-blue-400 transition"
            >
              sumyatphyu2422004@gmail.com
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <FontAwesomeIcon icon={faPhone} className="text-green-400 text-xl" />
            <a
              href="tel:+959957042528"
              className="hover:text-green-400 transition"
            >
              +959 957042528
            </a>
          </motion.div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-10">
          <motion.a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800 rounded-full hover:bg-blue-600 transition"
            whileHover={{ scale: 1.1 }}
          >
            <FontAwesomeIcon icon={faFacebookF} className="text-white text-2xl" />
          </motion.a>

          <motion.a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800 rounded-full hover:bg-pink-500 transition"
            whileHover={{ scale: 1.1 }}
          >
            <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
          </motion.a>

          <motion.a
            href="https://github.com/Su-myat-phyu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800 rounded-full hover:bg-gray-600 transition"
            whileHover={{ scale: 1.1 }}
          >
            <FontAwesomeIcon icon={faGithub} className="text-white text-2xl" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800 rounded-full hover:bg-blue-500 transition"
            whileHover={{ scale: 1.1 }}
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="text-white text-2xl" />
          </motion.a>
        </div>

      </div>
    </section>
  );
}
