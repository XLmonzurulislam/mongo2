
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[#1c1c1c] flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h2 className="text-gray-300 text-xl mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Gilbert Hutapea
            </h1>
            <h3 className="text-2xl text-primary mb-6">A Mern-stack Developer</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              As a MERN stack developer, I am committed to building high-quality web 
              applications that meet the needs of my clients. With years of experience in full-stack 
              web development, I specialize in using React.js, Next.js, Typescript, 
              MongoDB, Express.js, and Node.js to create scalable and robust web 
              applications.
            </p>
            <div className="flex gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-2">
                MY RESUME
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-2">
                ABOUT ME
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img 
              src="/hero-illustration.svg" 
              alt="Developer Working"
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
