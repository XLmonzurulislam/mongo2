import { motion } from "framer-motion";
import SectionHeader from "../ui/section-header";
import { useIntersectionObserver } from "@/hooks/use-intersection";
import { 
  SiReact, SiNodedotjs, SiJavascript, SiHtml5, 
  SiCss3, SiSass, SiGit, SiMongodb 
} from "react-icons/si";

const SkillsSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const technologies = [
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "Sass", icon: SiSass },
    { name: "Git", icon: SiGit },
    { name: "MongoDB", icon: SiMongodb },
  ];

  const processSteps = [
    { number: 1, title: "Research", description: "Understand requirements and research best technologies to use" },
    { number: 2, title: "Design", description: "Create wireframes and design mockups for visual reference" },
    { number: 3, title: "Development", description: "Write clean, efficient, and maintainable code" },
    { number: 4, title: "Testing & Launch", description: "Test thoroughly and deploy with confidence" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section 
      ref={ref}
      id="skills" 
      className="py-20 bg-[#1c1c1c]"
    >
      <motion.div 
        className="container mx-auto px-6"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="text-center mb-16">
          <SectionHeader title="MY SKILLS" center />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Technologies I Work With
          </h2>
        </div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {technologies.map((tech, index) => (
            <motion.div 
              key={index}
              className="bg-[#1c1c1c] rounded-lg p-6 text-center hover:transform hover:scale-105 transition duration-300"
              variants={childVariants}
            >
              <div className="flex justify-center mb-4">
                <tech.icon className="text-5xl text-primary" />
              </div>
              <h3 className="text-lg font-medium text-white">{tech.name}</h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-20"
          variants={childVariants}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            My Development Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <motion.div 
                key={step.number}
                className="bg-[#1c1c1c] rounded-lg p-6 relative"
                variants={childVariants}
              >
                <div className="absolute -top-4 -left-4 bg-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-white">
                  {step.number}
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{step.title}</h4>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;