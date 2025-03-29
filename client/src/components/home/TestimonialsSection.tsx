import { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Smith",
    role: "CTO",
    company: "TechVision Inc.",
    image: "https://res.cloudinary.com/dnzjbmzn1/image/upload/v1687759690/portfolio/testimonials/testimonial1_fxluj6.webp",
    text: "Bert is an outstanding developer who exceeded our expectations. His technical expertise and problem-solving skills are impressive. Our project was completed ahead of schedule and the quality of work was excellent. Would definitely work with him again!"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "InnovateSoft",
    image: "https://res.cloudinary.com/dnzjbmzn1/image/upload/v1687759690/portfolio/testimonials/testimonial2_rruxfz.webp",
    text: "Working with Bert was a fantastic experience. He understood our requirements perfectly and delivered a solution that perfectly matched our vision. His attention to detail and commitment to quality are truly commendable."
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "CEO",
    company: "DigitalWave",
    image: "https://res.cloudinary.com/dnzjbmzn1/image/upload/v1687759689/portfolio/testimonials/testimonial3_t69lzl.webp",
    text: "Bert transformed our outdated platform into a modern, user-friendly system. His technical knowledge combined with his creative approach brought incredible value to our project. Communication was clear throughout the process."
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "CreativeSolutions",
    image: "https://res.cloudinary.com/dnzjbmzn1/image/upload/v1687759689/portfolio/testimonials/testimonial4_vwmbdp.webp",
    text: "Our e-commerce website developed by Bert has significantly increased our sales. The user interface is intuitive and the performance is excellent. He was responsive to feedback and made the collaboration process smooth."
  }
];

const TestimonialsSection = () => {
  const carouselRef = useRef(null);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
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
      id="testimonials"
      className="py-20 bg-[#1c1c1c]" // Updated background color here
    >
      <motion.div
        className="container mx-auto px-6"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <p className="text-primary font-semibold mb-3 text-lg uppercase tracking-wider relative inline-block">
            Testimonials
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform -translate-y-2"></span>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Client <span className="text-primary">Reviews</span>
          </h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Carousel
            ref={carouselRef}
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="bg-[#1E293B] p-6 rounded-lg shadow-lg border border-gray-800 h-full flex flex-col">
                    <div className="flex-grow">
                      <Quote className="text-primary h-10 w-10 mb-4 opacity-50" />
                      <p className="text-gray-300 mb-6 text-sm">{testimonial.text}</p>
                    </div>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary"
                      />
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative inset-0 translate-y-0 bg-primary hover:bg-primary/80 text-white" />
              <CarouselNext className="relative inset-0 translate-y-0 bg-primary hover:bg-primary/80 text-white" />
            </div>
          </Carousel>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;