"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { 
  Star, ChevronRight, Atom, ArrowRight, Menu, X, Sparkles, Shield, 
  BarChart, Heart, FileCheck, Clock, Laptop, MessageCircle, BookOpen, 
  Award, Target, Sigma 
} from 'lucide-react';

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

const ExcelTutoringWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef(null);
  const fromRef1 = useRef(null);
  const fromRef2 = useRef(null);
  const toRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      username: "AP Calculus Student",
      body: "My tutor helped me go from struggling with calculus to scoring a 5 on my AP exam. The personalized approach made all the difference.",
      img: "/api/placeholder/40/40",
      rating: 5
    },
    {
      name: "Michael Chen",
      username: "College Freshman",
      body: "The interactive sessions and resources available 24/7 helped me ace my college entrance exams. I couldn't have done it without Excel Tutoring!",
      img: "/api/placeholder/40/40",
      rating: 5
    },
    {
      name: "Jessica Miller",
      username: "High School Senior",
      body: "The progress tracking feature helped me identify my weak points and turn them into strengths. My SAT score improved by over 200 points.",
      img: "/api/placeholder/40/40",
      rating: 4
    },
    {
      name: "David Thompson",
      username: "Graduate Student",
      body: "As a working professional pursuing a master's degree, I needed flexible tutoring. Excel Tutoring delivered exactly what I needed.",
      img: "/api/placeholder/40/40",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      username: "Parent",
      body: "My daughter's confidence in math has grown tremendously since working with tutors on this platform. Worth every penny!",
      img: "/api/placeholder/40/40",
      rating: 5
    },
    {
      name: "Alex Wu",
      username: "International Student",
      body: "The tutors helped me not only with subject material but also with language barriers. My academic performance improved significantly.",
      img: "/api/placeholder/40/40",
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
      <figure className="relative h-full w-80 cursor-pointer overflow-hidden rounded-xl p-6 bg-gray-900 border border-gray-800 hover:border-gray-700 hover:bg-gray-800 transition-all">
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
      </figure>
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md border-b border-gray-200' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-blue-600">Excel</span>
              <span className="text-orange-500">Tutoring</span>
            </div>
          </div>
        
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Why Choose Us</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Book Now</Button>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 px-4 bg-white/95 backdrop-blur-md border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Why Choose Us</a>
              <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <div className="flex space-x-4 pt-2">
                <Button className="flex-1 bg-blue-600 text-white hover:bg-blue-700">Book Now</Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
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
          <div className="text-center mb-4">
            <Badge variant="outline" className="border-blue-200 text-blue-600 py-1.5 px-4 mb-8 bg-blue-50">
              <Sparkles size={16} className="mr-2 text-orange-500" />
              Transforming Education Since 2013
            </Badge>
          </div>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-gray-900">
              <AuroraText 
                className="block" 
                colors={["#1E40AF", "#3B82F6", "#60A5FA"]}
                speed={0.5}
              >
                Unlock Your Academic Potential
              </AuroraText>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Personalized tutoring sessions designed to help you achieve academic 
              excellence and build lasting confidence in your abilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2.5 h-auto text-base font-medium rounded-full flex items-center"
              >
                Book a Free Session
                <ChevronRight size={18} className="ml-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-6 py-2.5 h-auto text-base font-medium rounded-full"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center gap-12">
    <div className="lg:w-[800px] w-full h-[800px] relative rounded-xl shadow-none bg-transparent overflow-visible  mx-auto -mt-32">
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
      glowColor: [255 / 255, 255 / 255, 255 / 255], // a cool soft sky blue, // light blue (skyblue)
      markers: [
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [34.0522, -118.2437], size: 0.1 },
        { location: [51.5074, -0.1278], size: 0.1 },
        { location: [48.8566, 2.3522], size: 0.1 },
        { location: [35.6762, 139.6503], size: 0.1 },
      ],
    }}
  />
</div>

      
      <div className="lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">About Excel Tutoring</h2>
        <p className="text-gray-600 mb-6">
          With over 10 years of experience in education, Excel Tutoring was founded
          with a simple mission: to help students achieve their academic goals
          through personalized, high-quality tutoring services.
        </p>
        <p className="text-gray-600 mb-6">
          Our tutors are not only subject matter experts but also skilled educators
          who know how to adapt their teaching methods to fit each student's unique
          learning style. We believe that with the right guidance, every student has
          the potential to excel academically.
        </p>
        <div className="flex flex-wrap gap-8 mt-8">
          <div className="flex items-center gap-3">
            <BookOpen className="text-blue-600 h-8 w-8" />
            <div>
              <div className="font-semibold text-gray-900">Certified Teachers</div>
              <div className="text-gray-500 text-sm">Experienced educators</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="text-orange-500 h-8 w-8" />
            <div>
              <div className="font-semibold text-gray-900">10+ Years Experience</div>
              <div className="text-gray-500 text-sm">Proven methodology</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Award className="text-green-600 h-8 w-8" />
            <div>
              <div className="font-semibold text-gray-900">Award-Winning</div>
              <div className="text-gray-500 text-sm">Recognized excellence</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Tutoring Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive tutoring services across various subjects and academic levels,
              tailored to meet the unique needs of each student.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="relative w-full overflow-hidden bg-white border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
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
                  <Button variant="link" className="text-blue-600 hover:text-blue-700">
                    Learn More <ChevronRight size={16} className="ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Excel Tutoring</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Discover all the ways our tutoring platform can help transform your learning experience and academic growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 transition-all hover:border-blue-200 hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Animated Beam Demo at the end of the section */}
          <div className="relative mt-16 w-full flex justify-center">
            <AnimatedBeam 
              containerRef={containerRef}
              fromRef={fromRef1}
              toRef={toRef}
            />
          </div>
        </div>
      </section>

      {/* Demo Scheduler Section (Replacing Pricing) */}
      <section id="pricing" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium mb-2">Free Demo Session</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Schedule a Demo Class</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
              Book a free demo session with our expert tutors to experience our teaching methodology
              and see how we can help you achieve your academic goals.
            </p>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
                <Input
                  type="date"
                  placeholder="Preferred Date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                  required
                />
                <Input
                  type="time"
                  placeholder="Preferred Time"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                  required
                />
                <Input
                  placeholder="Subject of Interest"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                />
              </div>
              <textarea
                className="w-full p-2 border rounded-md"
                rows={4}
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Request Demo
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Marquee Section */}
      <section id="testimonials" className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-400 font-medium mb-2">Success Stories</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from students who have transformed their academic journey with Excel Tutoring.
            </p>
          </div>
        </div>
        
        <div className="relative w-full overflow-hidden py-6">
          <Marquee pauseOnHover className="py-4">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="mx-4">
                <figure className="relative h-full w-80 cursor-pointer overflow-hidden rounded-xl p-6 bg-transparent border border-gray-200 hover:border-blue-200 hover:bg-gray-50/30 transition-all">
                  <div className="flex flex-row items-center gap-3">
                    <img className="rounded-full" width="48" height="48" alt={testimonial.name} src={testimonial.img} />
                    <div className="flex flex-col">
                      <figcaption className="text-base font-medium text-gray-900">
                        {testimonial.name}
                      </figcaption>
                      <p className="text-sm text-gray-500">{testimonial.username}</p>
                    </div>
                  </div>
                  
                  <div className="flex mt-3 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <Badge variant="outline" className="ml-2 border-yellow-500/20 bg-yellow-500/10 text-yellow-500 text-xs">
                      {testimonial.rating}.0
                    </Badge>
                  </div>
                  
                  <blockquote className="mt-3 text-gray-600 italic">"{testimonial.body}"</blockquote>
                </figure>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full md:w-1/2 md:h-1/2 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-12 shadow-xl">
            <div className="flex flex-wrap justify-center">
              <div className="w-full text-center">
                <div className="relative inline-block">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full blur-xl"></div>
                  </div>
                  <div className="relative z-10">
                    <BookOpen className="inline-block h-10 w-10 text-blue-600 mb-6" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to transform your academic journey?</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Start your 7-day free trial today. No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-6 rounded-xl"
                  >
                    Book a Free Session <ArrowRight size={18} className="ml-2" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline" 
                    className="border-gray-300 hover:bg-gray-50 hover:text-blue-600 px-6 py-6 rounded-xl"
                  >
                    View All Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Get in Touch</h2>
              <p className="text-gray-600">
                Have questions or ready to enhance your academic journey? Reach out to our team.
              </p>
            </div>

            <Card className="bg-white border border-gray-200 shadow-md">
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        className="bg-white border-gray-300 text-gray-900"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        className="bg-white border-gray-300 text-gray-900"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="How can we help you?" 
                      className="bg-white border-gray-300 text-gray-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full rounded-md border border-gray-300 bg-white p-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us more about your academic needs..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to the most common questions about our tutoring services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-white border border-gray-200">
                <TabsTrigger value="general" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">General</TabsTrigger>
                <TabsTrigger value="tutoring" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Tutoring</TabsTrigger>
                <TabsTrigger value="payment" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Payment</TabsTrigger>
              </TabsList>
              <TabsContent value="general">
                <div className="space-y-6">
                  {[
                    {
                      question: "How does Excel Tutoring work?",
                      answer: "Excel Tutoring connects students with expert tutors in various subjects. After signing up, we assess your needs and match you with the perfect tutor. Sessions can be conducted online or in-person based on your preference."
                    },
                    {
                      question: "What ages and grade levels do you serve?",
                      answer: "We provide tutoring services for students of all ages, from elementary school through university and adult learners. Our tutors are experienced in working with various age groups and adapting their teaching methods accordingly."
                    },
                    {
                      question: "How do I get started?",
                      answer: "Getting started is easy! Simply click the 'Book a Free Session' button, fill out a brief questionnaire about your academic needs, and we'll set up a complimentary consultation to discuss how we can help you achieve your goals."
                    }
                  ].map((item, i) => (
                    <Card key={i} className="bg-white border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
                      <CardHeader>
                        <CardTitle className="text-gray-900 text-xl">{item.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{item.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="tutoring">
                <div className="space-y-6">
                  {[
                    {
                      question: "How long are tutoring sessions?",
                      answer: "Our standard tutoring sessions are 60 minutes long, which we've found to be the optimal duration for productive learning. However, we offer flexibility with 30-minute and 90-minute sessions based on your needs and the subject being studied."
                    },
                    {
                      question: "How are tutors selected?",
                      answer: "Our tutors undergo a rigorous selection process that includes academic credential verification, subject knowledge assessment, teaching ability evaluation, and background checks. Only about 10% of applicants are accepted to ensure the highest quality of instruction."
                    },
                    {
                      question: "Can I change my tutor if needed?",
                      answer: "Absolutely! While we strive to match you with the perfect tutor initially, we understand that learning styles and personalities vary. If you'd like to try a different tutor, simply contact us and we'll arrange a new match at no additional cost."
                    }
                  ].map((item, i) => (
                    <Card key={i} className="bg-white border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
                      <CardHeader>
                        <CardTitle className="text-gray-900 text-xl">{item.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{item.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="payment">
                <div className="space-y-6">
                  {[
                    {
                      question: "What payment methods do you accept?",
                      answer: "We accept all major credit cards, PayPal, bank transfers, and digital wallets including Apple Pay and Google Pay. Payment is processed securely through our encrypted platform to ensure your financial information remains protected."
                    },
                    {
                      question: "Is there a refund policy?",
                      answer: "Yes, we offer a satisfaction guarantee. If you're not completely satisfied with your first session with a new tutor, we'll either match you with another tutor or provide a full refund. For package purchases, unused sessions can be refunded within 30 days."
                    },
                    {
                      question: "Are there any hidden fees?",
                      answer: "No, we believe in complete transparency. The prices you see are the prices you pay. There are no registration fees, cancellation fees (with 24-hour notice), or additional materials costs unless specifically mentioned for specialized courses."
                    }
                  ].map((item, i) => (
                    <Card key={i} className="bg-white border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
                      <CardHeader>
                        <CardTitle className="text-gray-900 text-xl">{item.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{item.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-blue-600">Excel</span>
                <span className="text-orange-500">Tutoring</span>
              </div>
              <p className="text-gray-600 mb-4">
                Helping students achieve academic excellence since 2013.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                  <a 
                    key={social} 
                    href={`#${social}`} 
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-blue-600 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-4 text-gray-900">Services</h3>
              <ul className="space-y-2">
                {['Mathematics', 'Sciences', 'Test Preparation', 'Languages', 'Humanities', 'Computer Science'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4 text-gray-900">Company</h3>
              <ul className="space-y-2">
                {['About Us', 'Blog', 'Careers', 'Press', 'Partners', 'Affiliate Program'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4 text-gray-900">Support</h3>
              <ul className="space-y-2">
                {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'Refund Policy', 'Accessibility'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 Excel Tutoring. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="#terms" className="text-sm text-gray-500 hover:text-blue-600 transition-colors mr-6">
                Terms of Service
              </a>
              <a href="#privacy" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExcelTutoringWebsite;
       