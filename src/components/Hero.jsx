import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import profile from "/assets/my-profile.png";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col lg:flex-row items-center justify-center bg-black px-6 pt-32 md:pt-28">

      
      {/* Left Section - Text */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 text-center lg:text-left"
      >
        <p className="text-2xl text-gray-200">Hi, I am</p>

        {/* Name with Color Animation */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-100 mt-2"
          animate={{ color: ["#ffffff", "#fbbf24", "#10b981", "#6366f1", "#ffffff"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          Su Myat Phyu
        </motion.h1>

        {/* Role with Color Animation */}
        <motion.p
          className="text-4xl mt-2 font-semibold"
          animate={{ color: ["#fbbf24", "#10b981", "#6366f1", "#ffffff", "#fbbf24"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          Front-end Developer / UI Designer
        </motion.p>

        {/* Professional Tagline */}
        <p className="text-gray-300 text-xl mt-4 max-w-lg mx-auto lg:mx-0">
          Aspiring Full-Stack Developer, passionate about building scalable & user-friendly applications.
        </p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex justify-center lg:justify-start space-x-4 mt-5"
        >
          <a
            href="mailto:sumyatphyu2422004@gmail.com"
            className="p-3 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-xl text-gray-700" />
          </a>
          <a
            href="https://github.com/Su-myat-phyu"
            className="p-3 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
            target="_blank" rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="text-xl text-gray-700" />
          </a>
          <a
            href="https://www.linkedin.com/in/su-myat-phyu-5a539926a/"
            className="p-3 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
            target="_blank" rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-xl text-gray-700" />
          </a>
        </motion.div>

        {/* Download Resume */}
        <div className="mt-6">
          <a
            href="/assets/Su_Myat_Phyu_Resume.pdf"
            download
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* Right Section - Profile Image Styled Like AboutMe */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center"
      >
        <motion.img
          src={profile}
          alt="Su Myat Phyu"
          className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-gray-700"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
