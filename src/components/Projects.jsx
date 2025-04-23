import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Sample Projects (You can update with real projects)
const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my skills and projects.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Su-myat-phyu/portfolio",
  },
  {
    title: "Food Delivery Website (In a Box)",
    description: "Explore delicious meals and order food conveniently with this multiple-page website.",
    tech: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/Su-myat-phyu/in-a-box-by-su",
  },
  {
    title: "DoBu Martial Arts",
    description: "A martial arts website that offers classes in a number of different martial arts, as well as fitness training and self-defence courses",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/Su-myat-phyu/DoBu-Martial-Arts",
  },
  {
    title: "Personal Development Plan Generator",
    description: "A web application that generates a personal development plan based on the user's input.",
    tech: ["PHP", "Laravel", "Blade", "JavaScript"],
    github: "https://github.com/Su-myat-phyu/PDP-Generator",
  },
  {
    title: "North Sussex Judo",
    description: "A Java Program",
    tech: ["PHP", "Laravel", "Blade", "JavaScript"],
    github: "https://github.com/Su-myat-phyu/North_Sussex_Judo",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-200"
        >
          My Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition"
            >
              {/* Project Title */}
              <h3 className="text-2xl font-semibold text-gray-200">{project.title}</h3>
              
              {/* Project Description */}
              <p className="text-gray-400 mt-2 text-lg">{project.description}</p>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-400 hover:text-blue-500 transition"
              >
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/Su-myat-phyu"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-white text-lg font-semibold rounded-lg shadow-md"
          >
            View All Projects on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
