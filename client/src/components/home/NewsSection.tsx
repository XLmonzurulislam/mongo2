import { useIntersectionObserver } from "@/hooks/use-intersection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const NewsSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const news = [
    {
      date: "June 15, 2024",
      title: "Exploring the Latest Web Development Trends",
      description: "A deep dive into modern web technologies and best practices",
      category: "Technology"
    },
    {
      date: "June 10, 2024",
      title: "The Rise of AI in Development",
      description: "How artificial intelligence is transforming software development",
      category: "AI & ML"
    },
    {
      date: "June 5, 2024",
      title: "Building Scalable Applications",
      description: "Best practices for creating robust and scalable web applications",
      category: "Development"
    }
  ];

  return (
    <section ref={ref} id="news" className="py-20 bg-[#1c1c1c]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-2">
            New <span className="text-[#ff5722]">Information</span>
          </h2>
          <div className="flex justify-center items-center gap-2">
            <div className="w-2 h-2 bg-[#ff5722] rotate-45"></div>
            <div className="w-12 h-[2px] bg-[#ff5722]"></div>
            <div className="w-2 h-2 bg-[#ff5722] rotate-45"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#2a2a2a] rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[#ff5722] text-sm">{item.date}</span>
                <span className="bg-[#ff5722]/10 text-[#ff5722] text-xs px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <button className="text-[#ff5722] flex items-center gap-2 hover:gap-3 transition-all duration-300">
                Read More <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;