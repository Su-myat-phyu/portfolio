import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHtml5, faCss3Alt, faJs, faPhp, faLaravel, 
  faReact, faBootstrap, faJava
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function TechStack() {
  const technologies = [
    { name: "HTML", icon: faHtml5, color: "text-orange-500" },
    { name: "CSS", icon: faCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: faJs, color: "text-yellow-400" },
    { name: "PHP", icon: faPhp, color: "text-indigo-500" },
    { name: "Laravel", icon: faLaravel, color: "text-red-500" },
    { name: "React", icon: faReact, color: "text-blue-400" },
    { name: "Bootstrap", icon: faBootstrap, color: "text-purple-500" },
    { name: "Java", icon: faJava, color: "text-red-600" },
    { name: "MySQL", icon: faDatabase, color: "text-blue-600" },
  ];

  return (
    <section id="tech-stack" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-200"
        >
          Tech Stack
        </motion.h2>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center w-32 h-32 bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 transition p-4 mx-auto"
            >
              {/* Icon */}
              <FontAwesomeIcon icon={tech.icon} className={`text-4xl ${tech.color}`} />
              
              {/* Tech Name */}
              <p className="mt-2 text-xl font-semibold">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
