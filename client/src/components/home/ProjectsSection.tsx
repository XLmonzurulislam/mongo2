import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import React from 'react';
import { useIntersectionObserver } from "@/hooks/use-intersection";
import { Github, ExternalLink } from "lucide-react";
import { projectData } from "@/lib/constants";

type ProjectCategory = "all" | "web" | "mobile" | "ui";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const filterProjects = (category: ProjectCategory) => {
    setActiveFilter(category);
  };

  const filteredProjects = activeFilter === "all" 
    ? projectData 
    : projectData.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section 
      ref={ref}
      id="projects" 
      className="py-20 bg-[#1c1c1c]"
    >
      <motion.div 
        className="container mx-auto px-6"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-3 text-lg uppercase tracking-wider relative inline-block">
            Portfolio
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform -translate-y-2"></span>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My Recent <span className="text-primary">Works</span>
          </h2>
        </div>

        {/* Project Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12 bg-[#1c1c1c]"
          variants={itemVariants}
        >
          <Button
            onClick={() => filterProjects("all")}
            className={`rounded-full px-6 py-2 transition-all duration-300 ${
              activeFilter === "all" 
                ? "bg-primary text-white" 
                : "bg-[#1E293B] text-gray-300 hover:bg-primary/20"
            }`}
          >
            All
          </Button>
          <Button
            onClick={() => filterProjects("web")}
            className={`rounded-full px-6 py-2 transition-all duration-300 ${
              activeFilter === "web" 
                ? "bg-primary text-white" 
                : "bg-[#1E293B] text-gray-300 hover:bg-primary/20"
            }`}
          >
            Web Apps
          </Button>
          <Button
            onClick={() => filterProjects("mobile")}
            className={`rounded-full px-6 py-2 transition-all duration-300 ${
              activeFilter === "mobile" 
                ? "bg-primary text-white" 
                : "bg-[#1E293B] text-gray-300 hover:bg-primary/20"
            }`}
          >
            Mobile Apps
          </Button>
          <Button
            onClick={() => filterProjects("ui")}
            className={`rounded-full px-6 py-2 transition-all duration-300 ${
              activeFilter === "ui" 
                ? "bg-primary text-white" 
                : "bg-[#1E293B] text-gray-300 hover:bg-primary/20"
            }`}
          >
            UI/UX Design
          </Button>
        </motion.div>

        {/* Project Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#1c1c1c]"
          variants={containerVariants}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index}
              className="group bg-[#1E293B] rounded-lg overflow-hidden shadow-lg border border-gray-800 transition-all duration-300 hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-3">
                  <a 
                    href={project.githubUrl} 
                    className="bg-primary hover:bg-primary/80 text-white w-10 h-10 rounded flex items-center justify-center transition duration-300" 
                    target="_blank" 
                    rel="noreferrer"
                    aria-label="View GitHub Repository"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href={project.liveUrl} 
                    className="bg-primary hover:bg-primary/80 text-white w-10 h-10 rounded flex items-center justify-center transition duration-300" 
                    target="_blank" 
                    rel="noreferrer"
                    aria-label="View Live Site"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary mb-3">
                  {project.type}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12 bg-[#1c1c1c]"
          variants={itemVariants}
        >
          <Button 
            variant="outline"
            className="border border-primary text-primary hover:bg-primary/10 py-4 px-8 rounded-md transition duration-300 font-medium transform hover:-translate-y-1"
            asChild
          >
            <a href="https://github.com/berthutapea" target="_blank" rel="noreferrer">
              View All Projects
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;