import { motion } from "framer-motion";
import { SiAmazon, SiGoogle, SiApple, SiMeta, SiNetflix, SiAdobe } from "react-icons/si";
import { useIntersectionObserver } from "@/hooks/use-intersection";

const CompaniesSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  const companies = [
    { icon: <SiGoogle className="w-full h-full" />, name: "Google" },
    { icon: <SiMeta className="w-full h-full" />, name: "Meta" },
    { icon: <SiAmazon className="w-full h-full" />, name: "Amazon" },
    { icon: <SiApple className="w-full h-full" />, name: "Apple" },
    { icon: <SiNetflix className="w-full h-full" />, name: "Netflix" },
    { icon: <SiAdobe className="w-full h-full" />, name: "Adobe" }
  ];
  
  return (
    <section ref={ref} className="py-16 bg-dark-200">
      <div className="container mx-auto px-6">
        <h3 className="text-xl font-semibold text-gray-400 text-center mb-10">
          Trusted by Leading Companies
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 text-gray-500 hover:text-primary transition duration-300">
                {company.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;