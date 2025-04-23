import { motion } from "framer-motion";


export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        
        

        {/* About Me Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-full text-center lg:text-center"
        >
          <h2 className="text-4xl font-bold text-gray-200 text-center">About Me</h2>
          <p className="text-xl text-gray-400 mt-4 leading-relaxed">
            Hi, I'm <span className="text-blue-400 font-semibold">Su Myat Phyu</span>,  
            a passionate <span className="text-blue-300">Front-End Developer</span> and  
            <span className="text-blue-300"> UI/UX Designer</span> from Yangon, Myanmar.  
            Currently, I am expanding my expertise in **Full-Stack Development** to build  
            **scalable, user-friendly applications**. I sometimes use Generative AI to build my projects.
          </p>
          <p className="text-xl text-gray-400 mt-4 leading-relaxed">
            I enjoy transforming **ideas into interactive digital experiences**  
            by crafting clean, responsive, and modern interfaces.  
            My focus is on **delivering seamless UI/UX** while ensuring efficient **backend integration**.
          </p>
          <p className="text-xl text-gray-400 mt-4 leading-relaxed">
            I'm always eager to **learn new technologies** and collaborate  
            on exciting projects that make a real-world impact.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
