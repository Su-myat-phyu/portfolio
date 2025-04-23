import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLaptopCode, faPaintBrush } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  const skills = [
    {
      title: "Front-End Development",
      icon: faCode,
      description: "Building responsive and interactive web applications using React.js, Tailwind CSS, and modern JavaScript frameworks.",
    },
    {
      title: "Full-Stack Development",
      icon: faLaptopCode,
      description: "Developing end-to-end web applications with Laravel, Node.js, and databases like MySQL and MongoDB.",
    },
    {
      title: "UI/UX Design",
      icon: faPaintBrush,
      description: "Creating intuitive, user-friendly interfaces with Figma and Adobe XD to enhance user experience and engagement.",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-200"
        >
          My Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition"
            >
              {/* Icon */}
              <div className="flex justify-center">
                <FontAwesomeIcon icon={skill.icon} className="text-4xl text-blue-400 mb-4" />
              </div>

              {/* Skill Title */}
              <h3 className="text-2xl font-semibold text-center">{skill.title}</h3>

              {/* Description */}
              <p className="text-gray-300 text-center mt-2 text-lg">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
