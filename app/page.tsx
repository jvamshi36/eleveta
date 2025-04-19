"use client";
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { 
  Star, ChevronRight, Atom, ArrowRight, Menu, X, Sparkles, Shield, 
  BarChart, Heart, FileCheck, Clock, Laptop, MessageCircle, BookOpen, 
  Award, Target, Sigma , GraduationCap, 
  PenTool, 
  Calculator, 
  BookMarked, 
  Microscope, 
  Ruler, 
  Lightbulb, 
  Palette 
} from 'lucide-react';
import { motion, useScroll, useInView } from "framer-motion";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Particles } from "@/components/magicui/particles";
import { AuroraText } from "@/components/magicui/aurora-text";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Marquee } from "@/components/magicui/marquee";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Globe } from "@/components/magicui/globe";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { ScrollReveal } from "@/components/magicui/scroll-reveal";
import { MagicCard } from "@/components/magicui/magic-card";
import { BackgroundBeams } from "@/components/magicui/background-beams";
import { Label } from "@/components/ui/label";

import confetti from 'canvas-confetti';

const ExcelTutoringWebsite = () => {
  const SERVICE_ID_1 = 'service_fcslvkd';
  const SERVICE_ID_2 = 'service_o5k0hwm';
const CONTACT_TEMPLATE_ID = 'template_n4vv6k6';
const DEMO_TEMPLATE_ID = 'template_q37l0eg';
const PUBLIC_KEY_1 = 'JlUh1ACXZLdvuPqS7';
const PUBLIC_KEY_2 = 'abDzcm7NmMpWuk-5H';

  const CardDescription = ({ children }: { children: React.ReactNode }) => (
    <p className="text-sm text-muted-foreground">{children}</p>
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef(null);
  const fromRef1 = useRef(null);
  const fromRef2 = useRef(null);
  const toRef = useRef(null);
  
  // Add state for form submission and snackbar
  const [showConfetti, setShowConfetti] = useState(false);

  
  // Add state for button text
  const [contactButtonText, setContactButtonText] = useState('Send Message');
  const [demoButtonText, setDemoButtonText] = useState('Book Free Demo');

  // Form submission handlers
  // Add this state near other state declarations
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const contactForm = useRef<HTMLFormElement>(null);
const demoForm = useRef<HTMLFormElement>(null);
  // Update the form handlers
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID_1, CONTACT_TEMPLATE_ID, contactForm.current!, PUBLIC_KEY_1)
      .then((result) => {
        console.log('Contact form sent:', result.text);
        alert('Your message has been sent successfully!');
        contactForm.current?.reset();
      })
      .catch((error) => {
        console.error('Contact form error:', error.text);
        alert('There was an error sending your message. Please try again.');
      });
    setSubmitting(true);
    // Trigger confetti
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  
    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;
  
    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();
  
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
  
      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  
    // Show snackbar
    setSnackbarMessage('Message sent successfully!');
    setShowSnackbar(true);
  
    // Hide snackbar after 3 seconds
    setTimeout(() => {
      setShowSnackbar(false);
    }, 3000);
  
    // Reset form
    e.currentTarget.reset();
    setSubmitting(false);
  };

  const handleDemoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

   if (!demoForm.current) return;

   emailjs
    .sendForm(SERVICE_ID_2, DEMO_TEMPLATE_ID, demoForm.current, PUBLIC_KEY_2)
    .then((result) => {
      console.log("Demo form sent:", result.text);
      alert("Your demo session has been successfully booked!");
      demoForm.current?.reset();
    })
    .catch((error) => {
      console.error("Demo form error:", error.text);
      alert("There was an error booking your demo. Please try again.");
    });
    // Handle form submission logic here

    // Change button text
    setDemoButtonText('Submitted');

    // Trigger confetti
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  
    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;
  
    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();
  
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
  
      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    // Show snackbar
    setSnackbarMessage('Demo class scheduled successfully!');
    setShowSnackbar(true);
  
    // Hide snackbar after 3 seconds
    setTimeout(() => {
      setShowSnackbar(false);
    }, 3000);
  
    // Reset form
    e.currentTarget.reset();
    setSubmitting(false);
  };
  useEffect(() => {
    const handleScroll = () => 
   
    
       
  {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // Add smooth scroll behavior to all anchor li Johnson",
  const testimonials = [
    {
      name: "Sarah Johnson",
      username: "AP Calculus Student",
      body: "My tutor helped me go from struggling with calculus to scoring a 5 on my AP exam. The personalized approach made all the difference.",
      img: "/11475221.jpg",
      rating: 5
    },
    {
      name: "Michael Chen",
      username: "College Freshman",
      body: "The interactive sessions and resources available 24/7 helped me ace my college entrance exams. I couldn't have done it without Excel Tutoring!",
      img: "/11475221.jpg",
      rating: 5
    },
    {
      name: "Jessica Miller",
      username: "High School Senior",
      body: "The progress tracking feature helped me identify my weak points and turn them into strengths. My SAT score improved by over 200 points.",
      img: "/11475221.jpg",
      rating: 4
    },
    {
      name: "David Thompson",
      username: "Graduate Student",
      body: "As a working professional pursuing a master's degree, I needed flexible tutoring. Excel Tutoring delivered exactly what I needed.",
      img: "/11475221.jpg",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      username: "Parent",
      body: "My daughter's confidence in math has grown tremendously since working with tutors on this platform. Worth every penny!",
      img: "/11475221.jpg",
      rating: 5
    },
    {
      name: "Alex Wu",
      username: "International Student",
      body: "The tutors helped me not only with subject material but also with language barriers. My academic performance improved significantly.",
      img: "/11475221.jpg",
      rating: 5
    },
  ];

  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);

  type TestimonialCardProps = {
    img: string;
    name: string;
    username: string;
    body: string;
    rating?: number;
  };
  const TestimonialCard = ({
    img,
    name,
    username,
    body,
    rating = 5,
  }: TestimonialCardProps) => {
    return (
      <motion.figure 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        className="relative h-full w-80 cursor-pointer overflow-hidden rounded-xl p-6 bg-gray-900 border border-gray-800 hover:border-gray-700 hover:bg-gray-800 transition-all">
        <div className="flex flex-row items-center gap-3">
          <img className="rounded-full" width="48" height="48" alt={name} src={img} />
          <div className="flex flex-col">
            <figcaption className="text-base font-medium text-white">
              {name}
            </figcaption>
            <p className="text-sm text-gray-400">{username}</p>
          </div>
        </div>
        
        <div className="flex mt-3 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
            />
          ))}
          <Badge variant="outline" className="ml-2 border-yellow-500/20 bg-yellow-500/10 text-yellow-500 text-xs">
            {rating}.0
          </Badge>
        </div>
        
        <blockquote className="mt-3 text-gray-300 italic">"{body}"</blockquote>
      </motion.figure>
    );
  };

  const services = [
    {
      title: "Mathematics",
      icon: <Sigma className="mb-4 text-indigo-600 w-12 h-12" />,
      description: "From basic arithmetic to advanced calculus, our math tutoring helps students build strong foundations and tackle complex problems.",
      levels: "Elementary to University"
    },
    {
      title: "Sciences",
      icon:<Atom className="mb-4 text-emerald-500 w-12 h-12" />,
      description: "Comprehensive tutoring in biology, chemistry, physics, and environmental science with hands-on approaches to complex scientific concepts.",
      levels: "Middle School to University"
    },
    {
      title: "Test Preparation",
      icon: <FileCheck className="mb-4 text-yellow-500 w-12 h-12" />,
      description: "Specialized coaching for SAT, ACT, AP exams, and more, including practice tests, strategies, and personalized study plans.",
      result: "Higher Scores Guaranteed"
    }
  ];

  const features = [
    {
      icon: <Target className="h-10 w-10 text-blue-400 mb-4" />,
      title: "Proven Results",
      description: "Our students experience an average grade improvement of 15% within just 3 months of tutoring."
    },
    {
      icon: <Shield className="h-10 w-10 text-green-400 mb-4" />,
      title: "Personalized Approach",
      description: "Customized learning plans tailored to your specific goals, learning style, and academic needs."
    },
    {
      icon: <Award className="h-10 w-10 text-yellow-400 mb-4" />,
      title: "Expert Instruction",
      description: "Learn from highly qualified tutors with proven expertise and years of teaching experience."
    },
    {
      icon: <Clock className="h-10 w-10 text-red-400 mb-4" />,
      title: "Flexible Scheduling",
      description: "Book sessions at times that work for you with our convenient online scheduling system."
    },
    {
      icon: <Laptop className="h-10 w-10 text-purple-400 mb-4" />,
      title: "Online & In-Person",
      description: "Choose between face-to-face tutoring or online sessions with interactive learning tools."
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-indigo-400 mb-4" />,
      title: "Continuous Feedback",
      description: "Regular progress reports and feedback to keep you informed about your improvement."
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    subject: '',
    message: ''
  });

  return (
    <div className="min-h-screen bg-white text-gray-900">
  {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/40 backdrop-blur-xl border-b border-gray-200/30 shadow-sm' 
            : 'bg-transparent backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center">
<AuroraText 
  className="block text-3xl font-bold tracking-tight font-poppins" 
  colors={["#1E40AF", "#3B82F6", "#60A5FA"]}
  speed={0.5}
>
  Eleveta
</AuroraText>


          </motion.div>
        
          {/* Desktop Navigation */}
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">About Us</a>
            <a href="#services" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">Services</a>
            <a href="#features" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">Why Choose Us</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#contact" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">Contact</a>
            <RainbowButton 
                  className="flex-1 text-white bg-blue-600/70 backdrop-blur-sm shadow-md"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    setTimeout(() => {
                      const demoTab = document.querySelector('[value="demo"]') as HTMLElement;
                      if (demoTab) demoTab.click();
                    }, 100);
                    setMobileMenuOpen(false); // Close mobile menu after clicking
                  }}
                >
                  Book Now
                </RainbowButton>

          </motion.nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-800 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden py-4 px-4 bg-white/50 backdrop-blur-xl border-t border-gray-200/30 shadow-sm"
        > <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">About Us</a>
              <a href="#services" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">Services</a>
              <a href="#features" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">Why Choose Us</a>
              <a href="#testimonials" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">Contact</a>
              <div className="flex space-x-4 pt-2">
                <RainbowButton 
                  className="flex-1 text-white bg-blue-600/70 backdrop-blur-sm shadow-md"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    setTimeout(() => {
                      const demoTab = document.querySelector('[value="demo"]') as HTMLElement;
                      if (demoTab) demoTab.click();
                    }, 100);
                    setMobileMenuOpen(false); // Close mobile menu after clicking
                  }}
                >
                  Book Now
                </RainbowButton>
              </div>
            </nav>
          </motion.div>
        )}
      </header>

      {/* ddivn */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-white via-gray-50/70 to-gray-50">
        {/* Glow effect */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full md:w-3/4 md:h-3/4 rounded-full bg-blue-500/5 blur-3xl"></div>
        </div>
        
        {/* Particles Background */}
        <div className="absolute inset-0 z-0">
          <Particles
            className="absolute inset-0"
            quantity={100}
            staticity={50}
            color="#2563eb"
            ease={50}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-4"
          >
            <Badge variant="outline" className="border-blue-200 text-blue-600 py-1.5 px-4 mb-8 bg-blue-50">
              <Sparkles size={16} className="mr-2 text-orange-500" />
              Innovating Education for a Better Future.
            </Badge>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-gray-900">
              <AuroraText 
                className="block" 
                colors={["#1E40AF", "#3B82F6", "#60A5FA"]}
                speed={0.5}
              >
                The IIT Advantage: Path to Academic Excellence.
              </AuroraText>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Personalized tutoring sessions led by experienced instructors from India's premier IITs, designed to help you achieve academic excellence.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShimmerButton onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                // Set a small timeout to ensure the section is loaded before clicking the tab
                setTimeout(() => {
                  const demoTab = document.querySelector('[value="demo"]') as HTMLElement;
                  if (demoTab) demoTab.click();
                }, 100);
              }}>
                Book a Free Session
              </ShimmerButton>
              <Button 
                size="lg" 
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-6 py-2.5 h-auto text-base font-medium rounded-full"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
          <ScrollReveal className="lg:w-[800px] w-full h-[800px] relative rounded-xl shadow-none bg-transparent overflow-visible mx-auto -mt-110 sm:-mt-20 md:-mt-24 lg:-mt-32">
              <Globe
                className="w-full h-full"
                config={{
                  width: 800,
                  height: 800,
                  onRender: () => {},
                  devicePixelRatio: 2,
                  phi: 0,
                  theta: 0.3,
                  dark: 0,
                  diffuse: 0.4,
                  mapSamples: 16000,
                  mapBrightness: 1.2,
                  baseColor: [1, 1, 1],
                  markerColor: [59 / 255, 130 / 255, 246 / 255],
                  glowColor: [255 / 255, 255 / 255, 255 / 255],
                  markers: [
                    { location: [40.7128, -74.006], size: 0.1 },
                    { location: [34.0522, -118.2437], size: 0.1 },
                    { location: [51.5074, -0.1278], size: 0.1 },
                    { location: [48.8566, 2.3522], size: 0.1 },
                    { location: [35.6762, 139.6503], size: 0.1 },
                  ],
                }}
              />
            </ScrollReveal>
            
            <ScrollReveal className="lg:w-1/2" delay={0.2} direction="right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">About Eleveta</h2>
              <p className="text-gray-600 mb-6">
              Founded with a clear mission: to empower students to achieve their academic goals through personalized, high-quality tutoring. Our instructors are experienced educators and subject matter experts, many from India's premier IITs, skilled in adapting their teaching to each student's unique learning style. We believe that with the right guidance from top minds, every student can excel.
              </p>
              <p className="text-gray-600 mb-6">
                Our tutors are not only subject matter experts but also skilled educators
                who know how to adapt their teaching methods to fit each student's unique
                learning style. We believe that with the right guidance, every student has
                the potential to excel academically.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 justify-items-center sm:justify-items-start text-center sm:text-left">
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="flex items-center gap-3 max-w-xs"
  >
    <BookOpen className="text-blue-600 h-8 w-8" />
    <div>
      <div className="font-semibold text-gray-900">Certified Teachers</div>
      <div className="text-gray-500 text-sm">Experienced educators</div>
    </div>
  </motion.div>

  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="flex items-center gap-3 max-w-xs"
  >
    <GraduationCap className="text-orange-500 h-8 w-8" />
    <div>
      <div className="font-semibold text-gray-900">IIT Mentors</div>
      <div className="text-gray-500 text-sm">Deep Subject Knowledge</div>
    </div>
  </motion.div>

  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="flex items-center gap-3 max-w-xs"
  >
    <Clock className="text-purple-500 h-8 w-8" />
    <div>
      <div className="font-semibold text-gray-900">Proven Methodology</div>
      <div className="text-gray-500 text-sm">Recognized excellence</div>
    </div>
  </motion.div>

  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="flex items-center gap-3 max-w-xs"
  >
    <Award className="text-green-600 h-8 w-8" />
    <div>
      <div className="font-semibold text-gray-900">Award-Winning</div>
      <div className="text-gray-500 text-sm">Effective Teaching Strategies</div>
    </div>
  </motion.div>
</div>
</ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Tutoring Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive tutoring services across various subjects and academic levels,
                tailored to meet the unique needs of each student.
              </p>
            </div>
          </ScrollReveal>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction={index % 2 === 0 ? "up" : "down"}>
                <Card className="relative w-full overflow-hidden bg-white border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
                  <BorderBeam
                    duration={10}
                    size={400}
                    className="from-transparent via-red-500 to-transparent"
                  />
                  <BorderBeam
                    duration={10}
                    delay={5}
                    size={400}
                    className="from-transparent via-blue-500 to-transparent"
                  />
                  <CardHeader className="pb-4">
                    <div className="mb-4 flex justify-center">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 text-center">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-center">
                      {service.description}
                    </p>
                    <div className="flex justify-center mt-6">
                      <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-600">
                        {service.levels || service.result}
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 flex justify-center">
                    <Button variant="link" className="text-blue-600 hover:text-blue-700 px-6 py-2.5 min-h-[48px]">
                      Learn More <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full md:w-3/4 md:h-3/4 rounded-full bg-blue-500/5 blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Eleveta</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover all the ways our tutoring platform can help transform your learning experience and academic growth.
              </p>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="grid md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 group">
                    <div className="flex flex-col items-center text-center">
                      <div className="transform transition-transform duration-300 group-hover:scale-110">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative mt-16 w-full flex justify-center"
            >
              <AnimatedBeam 
                containerRef={containerRef}
                fromRef={fromRef1}
                toRef={toRef}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with BackgroundBeams */}
      <section id="testimonials" className="py-16 relative">
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-blue-400 font-medium mb-2">Success Stories</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Students Say</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Hear from students who have transformed their academic journey with Eleveta.
              </p>
            </div>
          </ScrollReveal>
        
          <div className="relative w-full overflow-hidden py-6">
            <Marquee pauseOnHover className="py-4">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="mx-4">
                  <TestimonialCard
                    name={testimonial.name}
                    username={testimonial.username}
                    body={testimonial.body}
                    img={testimonial.img}
                    rating={testimonial.rating}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
        
       

      {/* CTA Section with animated background elements */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full md:w-1/2 md:h-1/2 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-xl h-full flex flex-col relative overflow-hidden">
                {/* Educational icons row 1 - top */}
                <div className="absolute top-12 left-0 w-full overflow-hidden">
                  <Marquee pauseOnHover className="py-2">
                    <BookOpen className="edu-icon h-12 w-12 text-blue-600" />
                    <GraduationCap className="edu-icon h-12 w-12 text-green-600" />
                    <PenTool className="edu-icon h-12 w-12 text-purple-600" />
                    <Calculator className="edu-icon h-12 w-12 text-red-600" />
                    <BookOpen className="edu-icon h-12 w-12 text-yellow-600" />
                    <GraduationCap className="edu-icon h-12 w-12 text-orange-600" />
                  </Marquee>
                </div>
                
                {/* Educational icons row 2 - middle */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full overflow-hidden">
                  <Marquee pauseOnHover reverse className="py-2">
                    <Globe className="edu-icon h-12 w-12 text-green-500" />
                    <Award className="edu-icon h-12 w-12 text-orange-500" />
                    <BookMarked className="edu-icon h-12 w-12 text-blue-500" />
                    <Microscope className="edu-icon h-12 w-12 text-red-500" />
                    <Globe className="edu-icon h-12 w-12 text-purple-500" />
                    <Award className="edu-icon h-12 w-12 text-yellow-500" />
                  </Marquee>
                </div>
                
                {/* Educational icons row 3 - bottom */}
                <div className="absolute bottom-12 left-0 w-full overflow-hidden">
                  <Marquee pauseOnHover className="py-2">
                    <Ruler className="edu-icon h-12 w-12 text-blue-600" />
                    <Atom className="edu-icon h-12 w-12 text-green-600" />
                    <Lightbulb className="edu-icon h-12 w-12 text-orange-600" />
                    <Palette className="edu-icon h-12 w-12 text-yellow-600" />
                    <Ruler className="edu-icon h-12 w-12 text-red-600" />
                    <Atom className="edu-icon h-12 w-12 text-purlple-600" />
                  </Marquee>
                </div>
                
                <div className="flex flex-wrap justify-center flex-1 relative z-10">
                  <div className="w-full text-center">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-20 w-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full blur-xl"></div>
                      </div>

                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">Stop wasting time on studying.</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Experience Excellence—Start Your Free Demo Class Now!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mx-auto max-w-md">
                      <ShimmerButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-6 py-2.5 rounded-xl min-w-[180px] min-h-[48px] text-center">
                        Get Started <ArrowRight size={18} className="ml-2 inline-block" />
                      </ShimmerButton>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

  
  

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Get in Touch</h2>
              <p className="text-gray-600">
                Have questions or ready to enhance your academic journey? Reach out to our team.
              </p>
            </motion.div>

            <Card className="p-0 max-w-3xl w-full shadow-none border-none mx-auto">
              <MagicCard
                gradientColor="#D9D9D955"
                className="p-0"
              >
                <CardHeader className="border-b border-gray-200 p-6">
                  <CardTitle className="text-xl">Contact Us</CardTitle>
                  <CardDescription>
                    Choose an option below to get started
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Tabs defaultValue="contact" className="w-full">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="contact">Get in Touch</TabsTrigger>
                        <TabsTrigger value="demo">Schedule a Demo Class</TabsTrigger>
                      </TabsList>
                    </motion.div>

  <TabsContent value="contact" className="p-6">
        <form ref={contactForm} onSubmit={handleContactSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" placeholder="john@example.com" required />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="subject">Inquiry</Label>
            <select
              id="subject"
              name="subject"
              required
              className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue=""
            >
              <option value="" disabled>Select an Inquiry</option>
              <option value="general">General Inquiry</option>
              <option value="tutoring">Tutoring Services</option>
              <option value="pricing">Pricing Information</option>
              <option value="support">Technical Support</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us more about your academic needs..."
            ></textarea>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="privacy"
              name="privacy"
              required
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="privacy" className="text-sm text-gray-600">
              I agree to the <a href="#privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
            </label>
          </div>

          <div className="flex justify-center relative">
          <ShimmerButton type="submit" disabled={submitting}>
  {submitting ? "Sending..." : <>Send Message <ArrowRight size={18} className="ml-2" /></>}
</ShimmerButton>

          </div>
        </form>
      </TabsContent>

      {/* Demo Form */}
      <TabsContent value="demo" className="p-6">
        <form ref={demoForm} onSubmit={handleDemoSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="demo-name">Full Name</Label>
              <Input id="demo-name" name="name" placeholder="John Doe" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="demo-email">Email Address</Label>
              <Input id="demo-email" name="email" type="email" placeholder="john@example.com" required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="demo-phone">Phone Number</Label>
              <Input id="demo-phone" name="phone" type="tel" placeholder="(123) 456-7890" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="demo-subject">Subject of Interest</Label>
              <select
                id="demo-subject"
                name="subject"
                required
                className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue=""
              >
                <option value="" disabled>Select a subject</option>
                <option value="math">Mathematics</option>
                <option value="science">Sciences</option>
                <option value="test-prep">Test Preparation</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="preferred-date">Preferred Date</Label>
              <Input id="preferred-date" name="date" type="date" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="preferred-time">Preferred Time</Label>
              <select
                id="preferred-time"
                name="time"
                required
                className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue=""
              >
                <option value="" disabled>Select a time</option>
                <option value="morning">Morning (9AM - 12PM)</option>
                <option value="afternoon">Afternoon (12PM - 4PM)</option>
                <option value="evening">Evening (4PM - 8PM)</option>
              </select>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="demo-notes">Additional Notes</Label>
            <textarea
              id="demo-notes"
              name="notes"
              rows={3}
              className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about your learning goals or any specific areas you'd like to focus on..."
            ></textarea>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="demo-privacy"
              name="privacy"
              required
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="demo-privacy" className="text-sm text-gray-600">
              I agree to the <a href="#privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
            </label>
          </div>

          <div className="flex justify-center relative">
          <ShimmerButton type="submit" disabled={submitting}>
  {submitting ? "Sending..." : <>Send Message <ArrowRight size={18} className="ml-2" /></>}
</ShimmerButton>
          </div>
        </form>
      </TabsContent>

                  </Tabs>
                </CardContent>
                {/* Removed the shared CardFooter with the submit button */}
              </MagicCard>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <AuroraText 
  className="block text-3xl font-bold tracking-tight font-poppins" 
  colors={["#1E40AF", "#3B82F6", "#60A5FA"]}
  speed={0.5}
>
  Eleveta
</AuroraText>
            
            <div className="flex space-x-8">
              
              <a href="#about" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">About Us</a>
              <a href="#services" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#features" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Why Choose Us</a>
              <a href="#testimonials" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            
            {/* <div className="flex space-x-4 mt-4 md:mt-0">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social} 
                  href={`#${social}`} 
                  className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                </a>
              ))}
            </div> */}
          </div>
          
          <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 Eleveta. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#terms" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Terms
              </a>
              <a href="#privacy" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Privacy
              </a>
              <a href="#cookies" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
      {showSnackbar && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-[9999] animate-in fade-in slide-in-from-bottom-4">
          {snackbarMessage}
        </div>
      )}
    </div>
      );
    };
    export default ExcelTutoringWebsite;