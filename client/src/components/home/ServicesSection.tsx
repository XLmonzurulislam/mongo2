import { motion } from "framer-motion";
import { Code, Layout, Database, Globe, Smartphone, MonitorSmartphone } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <motion.div 
      className="bg-[#1E293B] rounded-xl p-6 hover:bg-[#111827] transition-all duration-300 hover:shadow-lg border border-gray-800 hover:border-primary group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="text-primary text-3xl mb-5 w-16 h-16 rounded-lg flex items-center justify-center bg-[#111827] border border-gray-700 group-hover:bg-primary group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const ServicesSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const services = [
    {
      icon: <Layout />,
      title: "Web Design",
      description: "Creating attractive, intuitive designs that engage users and reflect brand identity effectively."
    },
    {
      icon: <Code />,
      title: "Web Development",
      description: "Building responsive, feature-rich websites with clean code and modern frameworks."
    },
    {
      icon: <Smartphone />,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications that provide seamless user experiences."
    },
    {
      icon: <Database />,
      title: "Backend Development",
      description: "Creating robust server-side applications with secure data management and API integration."
    },
    {
      icon: <Globe />,
      title: "SEO Optimization",
      description: "Enhancing website visibility through effective SEO strategies and best practices."
    },
    {
      icon: <MonitorSmartphone />,
      title: "Responsive Design",
      description: "Ensuring websites function perfectly across all devices and screen sizes."
    }
  ];

  return (
    <section ref={ref} id="services" className="py-20 bg-[#1c1c1c]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-3 text-lg uppercase tracking-wider relative inline-block">
            Services
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform -translate-y-2"></span>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What I <span className="text-primary">Offer</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;