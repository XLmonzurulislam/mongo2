import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection";
import { 
  SiHtml5, SiCss3, SiJavascript, SiNodedotjs,
  SiReact, SiBootstrap, SiTailwindcss, SiExpress,
  SiGithub, SiMongodb, SiFirebase
} from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import SectionHeader from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { MdSchool, MdWork } from "react-icons/md";

const AboutSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const skillCategories = [
    {
      title: "Languages:",
      color: "text-cyan-400",
      skills: [
        { icon: SiHtml5, name: "HTML5", bgColor: "bg-dark-800", iconColor: "text-orange-500" },
        { icon: SiCss3, name: "CSS3", bgColor: "bg-dark-800", iconColor: "text-blue-400" },
        { icon: SiJavascript, name: "JavaScript", bgColor: "bg-dark-800", iconColor: "text-yellow-400" },
        { icon: SiNodedotjs, name: "Node.js", bgColor: "bg-dark-800", iconColor: "text-green-500" }
      ]
    },
    {
      title: "Library & Frameworks:",
      color: "text-cyan-400",
      skills: [
        { icon: SiReact, name: "React", bgColor: "bg-dark-800", iconColor: "text-cyan-400" },
        { icon: SiBootstrap, name: "Bootstrap", bgColor: "bg-dark-800", iconColor: "text-purple-500" },
        { icon: SiTailwindcss, name: "Tailwind", bgColor: "bg-dark-800", iconColor: "text-cyan-300" },
        { icon: SiExpress, name: "Express", bgColor: "bg-dark-800", iconColor: "text-gray-300" }
      ]
    },
    {
      title: "Tools & Technologies:",
      color: "text-cyan-400",
      skills: [
        { icon: SiMongodb, name: "MongoDB", bgColor: "bg-dark-800", iconColor: "text-green-500" },
        { icon: SiGithub, name: "GitHub", bgColor: "bg-dark-800", iconColor: "text-gray-300" },
        { icon: SiFirebase, name: "Firebase", bgColor: "bg-dark-800", iconColor: "text-yellow-500" },
        { icon: DiPhotoshop, name: "Photoshop", bgColor: "bg-dark-800", iconColor: "text-blue-500" }
      ]
    }
  ];

  const qualifications = [
    {
      year: "2019 - 2023",
      title: "Bachelor of Computer Science",
      organization: "University of Technology",
      icon: MdSchool,
    },
    {
      year: "2021 - Present",
      title: "Full Stack Developer",
      organization: "Tech Solutions Inc.",
      icon: MdWork,
    },
    {
      year: "2019 - 2021",
      title: "Frontend Developer",
      organization: "Web Studio",
      icon: MdWork,
    },
  ];

  return (
    <section ref={ref} id="about" className="py-20 bg-dark-200">
      <motion.div 
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {/* About Me Section */}
        <div className="mb-20">
          <SectionHeader title="ABOUT ME" />
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover" 
                />
                <div className="absolute -bottom-4 -right-4 bg-dark-300 rounded-lg p-4 shadow-lg">
                  <p className="text-primary font-bold">
                    <span className="text-3xl">4+</span><br />Years of<br />Experience
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Passionate Full Stack Developer based in Indonesia
              </h2>
              <p className="text-gray-300 mb-6">
                I am a Full Stack Developer with expertise in building responsive web applications
                using modern technologies. With over 4 years of experience, I specialize in
                creating efficient, scalable, and user-friendly solutions.
              </p>
            </div>
          </div>
        </div>

        {/* My Skills Section */}
        <section className="py-20 bg-dark-200">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold">
                <span className="text-white">My</span>{" "}
                <span className="text-orange-500">Skills</span>
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-3/5">
                <div className="space-y-12">
                  {skillCategories.map((category, index) => (
                    <div key={index}>
                      <h3 className={`${category.color} text-xl mb-6`}>
                        {category.title}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className={`${skill.bgColor} rounded-xl p-4 flex flex-col items-center justify-center hover:transform hover:scale-105 transition duration-300 shadow-lg`}
                          >
                            <skill.icon className={`text-4xl ${skill.iconColor} mb-2`} />
                            <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-2/5 flex items-center justify-center">
                <img
                  src="/skills-illustration.svg"
                  alt="Skills Illustration"
                  className="w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </section>


        {/* My Qualification Section */}
        <div>
          <SectionHeader title="MY QUALIFICATION" />
          <div className="space-y-6">
            {qualifications.map((qual, index) => (
              <div key={index} className="bg-dark-300 rounded-lg p-6 flex items-start gap-4">
                <qual.icon className="text-3xl text-primary mt-1" />
                <div>
                  <span className="text-primary text-sm">{qual.year}</span>
                  <h3 className="text-white font-bold text-xl">{qual.title}</h3>
                  <p className="text-gray-400">{qual.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;