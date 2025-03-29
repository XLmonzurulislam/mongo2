import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/use-intersection";
import { apiRequest } from "@/lib/queryClient";
import { 
  MapPin, Mail, Phone, Github, Linkedin, Twitter, Facebook 
} from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

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
      id="contact" 
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
            Get In Touch
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary transform -translate-y-2"></span>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Contact <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="bg-[#1c1c1c] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#1c1c1c] p-3 rounded-lg mr-4 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Location</h4>
                  <p className="text-gray-400">North Sumatra, Indonesia</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#1c1c1c] p-3 rounded-lg mr-4 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <p className="text-gray-400">berthutapea@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#1c1c1c] p-3 rounded-lg mr-4 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Phone</h4>
                  <p className="text-gray-400">+62 821 6780 8097</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-3">
                <a 
                  href="https://github.com/berthutapea" 
                  className="bg-[#1c1c1c] w-10 h-10 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/berthutapea" 
                  className="bg-[#1c1c1c] w-10 h-10 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com/berthutapea" 
                  className="bg-[#1c1c1c] w-10 h-10 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://facebook.com/berthutapea" 
                  className="bg-[#1c1c1c] w-10 h-10 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-[#1c1c1c] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input 
                  id="name" 
                  className={`w-full bg-[#1c1c1c] border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg py-6 px-4 text-white focus:outline-none focus:border-primary`}
                  placeholder="Your Name"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Input 
                  id="email" 
                  type="email"
                  className={`w-full bg-[#1c1c1c] border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg py-6 px-4 text-white focus:outline-none focus:border-primary`}
                  placeholder="Your Email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Input 
                  id="subject" 
                  className={`w-full bg-[#1c1c1c] border ${errors.subject ? 'border-red-500' : 'border-gray-700'} rounded-lg py-6 px-4 text-white focus:outline-none focus:border-primary`}
                  placeholder="Subject"
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <Textarea 
                  id="message" 
                  rows={5}
                  className={`w-full bg-[#1c1c1c] border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primary resize-none`}
                  placeholder="Your Message"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button 
                type="submit"
                className="bg-primary hover:bg-primary/80 text-white py-4 px-8 rounded-md transition duration-300 font-medium w-full"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;