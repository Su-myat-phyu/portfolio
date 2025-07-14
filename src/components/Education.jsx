import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function Education() {
  const educationData = [
    {
      year: "2024-Present",
      degree: "Higher National Diploma in Computing",
      institute: "EduClaaS Academy | Lithan",
      field: "Computer Science",
    },
    {
      year: "2023",
      degree: "Foundation Diploma in Software Engineering",
      institute: "EduClaaS Academy | Lithan",
      field: "Computer Science",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-200"
        >
          Education
        </motion.h2>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex items-center space-x-6 bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition"
            >
              {/* Icon */}
              <FontAwesomeIcon icon={faGraduationCap} className="text-4xl text-blue-400" />

              {/* Education Info */}
              <div>
                <p className="text-2xl font-semibold text-gray-100">{edu.year}</p>
                <p className="text-xl font-medium text-gray-300">{edu.degree}</p>
                <p className="text-lg text-gray-400">{edu.institute}</p>
                <p className="text-lg text-gray-500">{edu.field}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
