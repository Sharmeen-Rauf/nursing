'use client';

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Scroll animation observer
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section-id');
            if (id) {
              setIsVisible((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Auto-slide for image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const sliderImages = [
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=1200&h=600&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-18">
            <div className="flex items-center">
              <h1 className={`text-xl lg:text-2xl font-bold transition-colors ${
                scrolled ? 'text-teal-600' : 'text-white'
              }`}>
                CareAt<span className="text-teal-700">Home</span>
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <a href="#services" className={`transition-colors font-medium ${
                scrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-200'
              }`}>Services</a>
              <a href="#packages" className={`transition-colors font-medium ${
                scrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-200'
              }`}>Packages</a>
              <a href="#testimonials" className={`transition-colors font-medium ${
                scrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-200'
              }`}>Reviews</a>
              <a href="#contact" className={`transition-colors font-medium ${
                scrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-200'
              }`}>Contact</a>
              <button className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                scrolled 
                  ? 'bg-teal-600 text-white hover:bg-teal-700' 
                  : 'bg-white text-teal-600 hover:bg-teal-50'
              }`}>
                Book Now
              </button>
            </div>
            <button className={`md:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
        <Image
            src="https://images.unsplash.com/photo-1608979827489-2b855e79debe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bnVyc2UlMjBob21lJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3DD"
            alt="Professional nurse"
            fill
            className="object-cover"
          priority
        />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/60 via-teal-800/55 to-teal-900/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-8 text-xs">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full font-medium">Certified Nurses</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full font-medium">24/7 Home Care</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full font-medium">Trusted by 500+ Families</span>
          </div>
          <h1 className="text-[48px] font-bold mb-6 leading-tight" style={{ fontSize: '48px' }}>
            Professional Home Nursing &<br />Physiotherapy – At Your Doorstep
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-10 max-w-3xl mx-auto opacity-95">
            Certified nurses and therapists providing compassionate care and medical assistance at home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-10 py-4 rounded-full hover:bg-teal-50 transition-all font-semibold text-base shadow-xl">
              Book a Home Visit
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white/10 transition-all font-semibold text-base">
              Call Now / WhatsApp Now
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="services" 
        className="py-12 lg:py-16 bg-white"
        ref={(el) => {
          if (el) sectionRefs.current['services'] = el as HTMLElement;
        }}
        data-section-id="services"
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-10">
            <h2 className="text-[48px] font-bold text-gray-900 mb-4" style={{ fontSize: '48px' }}>Our Services</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">Comprehensive healthcare services delivered with care and professionalism</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Home Nursing Care", desc: "Vitals monitoring, dressing changes, IV/injections, post-surgery care", icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              )},
              { title: "Physiotherapy at Home", desc: "Stroke rehab, joint pain, back pain, mobility exercises", icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )},
              { title: "Elderly Care", desc: "Daily assistance, medication reminders, companionship", icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )},
              { title: "Patient Attendant", desc: "Feeding, bathing, personal care", icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              )},
              { title: "Mother & Baby Care", desc: "Postnatal care, newborn care", icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              )},
              { title: "Special Needs Care", desc: "Disability support, long-term care", icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )},
              { title: "Chronic Disease Management", desc: "Diabetes, hypertension, heart care management", icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              )},
              { title: "Palliative Care", desc: "Comfort care, pain management, emotional support", icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            ].map((service, i) => (
              <div key={i} className={`group bg-gray-50 p-6 rounded-xl border border-gray-100 cursor-pointer transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:border-teal-300 hover:bg-white ${
                isVisible.has('services') ? 'animate-fade-in-up' : 'opacity-0'
              }`} style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}>
                <div className="text-teal-600 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">{service.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section 
        className="py-12 lg:py-16 bg-gray-50"
        ref={(el) => {
          if (el) sectionRefs.current['why-choose'] = el as HTMLElement;
        }}
        data-section-id="why-choose"
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-200 ${
          isVisible.has('why-choose') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-10">
            <h2 className="text-[48px] font-bold text-gray-900 mb-4" style={{ fontSize: '48px' }}>Why Choose Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Licensed & Experienced Nurses", desc: "All our nurses are fully certified and have years of experience in home healthcare", icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )},
              { title: "24/7 Availability", desc: "Round-the-clock services for emergencies and scheduled care", icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )},
              { title: "Flexible Care Packages", desc: "Customized packages to suit your specific needs and budget", icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              )},
              { title: "Trusted by Hospitals & Clinics", desc: "Partnered with leading healthcare institutions", icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              )},
              { title: "Same-Day Home Visits", desc: "Quick response time with same-day appointment availability", icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )},
              { title: "Affordable & Safe Services", desc: "Transparent pricing with complete safety protocols", icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            ].map((item, i) => (
              <div key={i} className={`group bg-white p-6 rounded-xl border border-gray-200 cursor-pointer transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:border-teal-300 hover:bg-teal-50 ${
                isVisible.has('why-choose') ? 'animate-fade-in-up' : 'opacity-0'
              }`} style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}>
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white group-hover:rotate-6">{item.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section 
        className="py-12 lg:py-16 bg-white"
        ref={(el) => {
          if (el) sectionRefs.current['featured'] = el as HTMLElement;
        }}
        data-section-id="featured"
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-300 ${
          isVisible.has('featured') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-10">
            <h2 className="text-[48px] font-bold text-gray-900 mb-4" style={{ fontSize: '48px' }}>Featured Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Home Nursing (RN/LPN)", desc: "Daily medical care and monitoring by registered nurses", icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ), image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop" },
              { title: "Home Physiotherapy", desc: "Pain management and mobility recovery at your convenience", icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ), image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop" },
              { title: "Post-Surgery Care", desc: "Support for patients recovering at home with expert assistance", icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              ), image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=600&h=400&fit=crop" }
            ].map((service, i) => (
              <div key={i} className="group bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 cursor-pointer transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.03] hover:border-teal-300">
                <div className="relative h-48 overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-teal-600/0 group-hover:bg-teal-600/10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="text-teal-600 mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section 
        className="py-12 lg:py-16 bg-gray-50"
        ref={(el) => {
          if (el) sectionRefs.current['how-it-works'] = el as HTMLElement;
        }}
        data-section-id="how-it-works"
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-200 ${
          isVisible.has('how-it-works') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-10">
            <h2 className="text-[48px] font-bold text-gray-900 mb-4" style={{ fontSize: '48px' }}>How It Works</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Book Online or Call Us", desc: "Schedule your appointment through our website or call our helpline", icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              )},
              { step: "2", title: "Certified Nurse Assigned", desc: "We assign a qualified nurse based on your specific needs", icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )},
              { step: "3", title: "Nurse Visits Your Home", desc: "Our professional arrives at your home at the scheduled time", icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              )},
              { step: "4", title: "Daily Progress Updates", desc: "Receive regular updates on patient progress and care plans", icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              )}
            ].map((item, i) => (
              <div key={i} className="group text-center cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2">
                <div className="w-20 h-20 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 relative transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-teal-700 group-hover:rotate-3">
                  <span className="text-2xl font-bold transition-transform duration-300 group-hover:scale-110">{item.step}</span>
                  <div className="absolute -bottom-2 -right-2 bg-teal-100 p-2 rounded-full text-teal-600 transition-all duration-300 group-hover:scale-125 group-hover:bg-teal-600 group-hover:text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        id="testimonials" 
        className="py-12 lg:py-16 bg-white"
        ref={(el) => {
          if (el) sectionRefs.current['testimonials'] = el as HTMLElement;
        }}
        data-section-id="testimonials"
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-300 ${
          isVisible.has('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-10">
            <h2 className="text-[48px] font-bold text-gray-900 mb-4" style={{ fontSize: '48px' }}>Client Reviews</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Rajesh Kumar", review: "The CareAtHome nurse took care of my father after surgery. Highly satisfied! Professional and caring service.", rating: 5, location: "Delhi" },
              { name: "Priya Sharma", review: "Excellent physiotherapy services at home. My mother's mobility improved significantly. Thank you!", rating: 5, location: "Mumbai" },
              { name: "Amit Patel", review: "24/7 availability is a blessing. The nurses are experienced and compassionate. Highly recommend!", rating: 5, location: "Bangalore" },
              { name: "Sunita Reddy", review: "Affordable packages with quality care. The team is professional and understanding. Great service!", rating: 5, location: "Hyderabad" }
            ].map((testimonial, i) => (
              <div key={i} className="group bg-gray-50 p-6 rounded-xl border border-gray-200 cursor-pointer transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:border-teal-300 hover:bg-white">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-yellow-400 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20" style={{ transitionDelay: `${j * 50}ms` }}>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-gray-600 mb-4 italic leading-relaxed group-hover:text-gray-700 transition-colors duration-300">"{testimonial.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages/Pricing */}
      <section 
        id="packages" 
        className="py-12 lg:py-16 bg-gray-50"
        ref={(el) => {
          if (el) sectionRefs.current['packages'] = el as HTMLElement;
        }}
        data-section-id="packages"
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-200 ${
          isVisible.has('packages') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-10">
            <h2 className="text-[48px] font-bold text-gray-900 mb-4" style={{ fontSize: '48px' }}>Care Packages</h2>
            <p className="text-base text-gray-600">Choose a package that suits your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Basic", hours: "2 hours", features: ["Daily monitoring", "Basic nursing care", "Medication assistance"], price: "₹800" },
              { name: "Standard", hours: "6 hours", features: ["Nursing + Physiotherapy", "Health assessments", "Daily reports"], price: "₹1,800" },
              { name: "Premium", hours: "12-24 hour", features: ["Full-time trained nurse", "Complete care management", "24/7 support"], price: "₹3,500" }
            ].map((pkg, i) => (
              <div key={i} className={`group bg-white p-8 rounded-xl border-2 cursor-pointer transition-all duration-300 ease-out ${
                i === 1 
                  ? 'border-teal-600 shadow-lg scale-105 hover:scale-110 hover:shadow-2xl hover:-translate-y-2' 
                  : 'border-gray-200 hover:border-teal-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]'
              }`}>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-teal-600 mb-1 transition-transform duration-300 group-hover:scale-110">{pkg.price}<span className="text-sm text-gray-600 font-normal">/day</span></div>
                  <p className="text-xs text-gray-600">{pkg.hours} home care</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300" style={{ transitionDelay: `${j * 50}ms` }}>
                      <svg className="w-4 h-4 text-teal-600 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  i === 1 
                    ? 'bg-teal-600 text-white hover:bg-teal-700 group-hover:scale-105 group-hover:shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-teal-600 hover:text-white group-hover:scale-105'
                }`}>
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section 
        className="py-12 lg:py-16 bg-white"
        ref={(el) => {
          if (el) sectionRefs.current['about'] = el as HTMLElement;
        }}
        data-section-id="about"
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-300 ${
          isVisible.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden">
            <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop"
                alt="Care team"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-[48px] font-bold text-gray-900 mb-6" style={{ fontSize: '48px' }}>About Us</h2>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                We provide compassionate medical support to patients in the comfort of their homes. With years of experience in home healthcare, our team of certified nurses and physiotherapists is dedicated to delivering quality care that promotes healing and well-being.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600 mb-1">10+</div>
                  <div className="text-xs text-gray-600">Years Experience</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600 mb-1">500+</div>
                  <div className="text-xs text-gray-600">Families Served</div>
                </div>
              </div>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Serving Delhi, Mumbai, Bangalore, Hyderabad</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Mission: Quality healthcare accessible to all</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="relative py-10 lg:py-12 bg-white flex items-center justify-center min-h-[50vh]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-10">
            <h2 className="text-[48px] font-bold text-gray-900 mb-4" style={{ fontSize: '48px' }}>Our Care in Action</h2>
            <p className="text-base text-gray-600">Witness our dedicated healthcare professionals providing compassionate care</p>
          </div>
          <div className="relative h-[350px] md:h-[400px] lg:h-[450px] max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl border border-gray-200">
            <div 
              className="flex transition-transform duration-1000 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {sliderImages.map((img, index) => (
                <div key={index} className="min-w-full h-full relative">
                  <Image
                    src={img}
                    alt={`Patient care ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                </div>
              ))}
            </div>
            
            {/* Slider Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'w-6 bg-white' : 'w-1.5 bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-teal-600 p-2.5 rounded-full shadow-md transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % sliderImages.length)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-teal-600 p-2.5 rounded-full shadow-md transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Safety Protocols */}
      <section 
        className="py-12 lg:py-16 bg-gray-50"
        ref={(el) => {
          if (el) sectionRefs.current['safety'] = el as HTMLElement;
        }}
        data-section-id="safety"
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-200 ${
          isVisible.has('safety') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-10">
            <h2 className="text-[48px] font-bold text-gray-900 mb-4" style={{ fontSize: '48px' }}>Safety Protocols</h2>
            <p className="text-base text-gray-600">Your safety is our priority</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Gloves", desc: "Fresh gloves for every visit", icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )},
              { title: "Masks", desc: "Protective masks worn at all times", icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )},
              { title: "Hygiene Kit", desc: "Complete sanitization before each visit", icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              )},
              { title: "Health Checks", desc: "Regular health screening of staff", icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            ].map((item, i) => (
              <div key={i} className="group bg-white p-6 rounded-xl text-center border border-gray-200 cursor-pointer transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:border-teal-300 hover:bg-teal-50">
                <div className="text-teal-600 mb-3 flex justify-center transition-all duration-300 group-hover:scale-125 group-hover:rotate-6">{item.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Booking Form */}
      <section 
        id="contact" 
        className="py-12 lg:py-16 bg-white"
        ref={(el) => {
          if (el) sectionRefs.current['contact'] = el as HTMLElement;
        }}
        data-section-id="contact"
      >
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-300 ${
          isVisible.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-10">
            <h2 className="text-[48px] font-bold text-gray-900 mb-4" style={{ fontSize: '48px' }}>Request a Home Visit</h2>
            <p className="text-base text-gray-600">Fill out the form below and we'll get back to you shortly</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Name *</label>
                  <input type="text" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Phone *</label>
                  <input type="tel" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Address *</label>
                <input type="text" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Required Service *</label>
                  <select required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600">
                    <option>Select Service</option>
                    <option>Home Nursing Care</option>
                    <option>Physiotherapy</option>
                    <option>Elderly Care</option>
                    <option>Patient Attendant</option>
                    <option>Mother & Baby Care</option>
                    <option>Special Needs Care</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Preferred Time *</label>
                  <input type="time" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Additional Message</label>
                <textarea rows={3} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"></textarea>
              </div>
              <button type="submit" className="w-full bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-all font-semibold text-sm">
                Request a Home Visit
              </button>
            </form>
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-xs text-gray-600 mb-2">24/7 Available | Same-Day Appointments</p>
              <div className="flex justify-center gap-6 text-xs">
                <a href="tel:+919876543210" className="text-teal-600 hover:text-teal-700 font-medium">📞 (555) 123-4567</a>
                <a href="https://wa.me/919876543210" className="text-teal-600 hover:text-teal-700 font-medium">💬 WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-700 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">CareAt<span className="text-teal-600">Home</span></h3>
              <p className="text-xs mb-4 leading-relaxed text-gray-600">
                Professional home healthcare services with certified nurses and physiotherapists dedicated to your wellbeing.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors text-gray-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors text-gray-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors text-gray-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm text-gray-900">Services</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-teal-600 transition-colors text-gray-600">Home Nursing Care</a></li>
                <li><a href="#" className="hover:text-teal-600 transition-colors text-gray-600">Physiotherapy</a></li>
                <li><a href="#" className="hover:text-teal-600 transition-colors text-gray-600">Elderly Care</a></li>
                <li><a href="#" className="hover:text-teal-600 transition-colors text-gray-600">Patient Attendant</a></li>
                <li><a href="#" className="hover:text-teal-600 transition-colors text-gray-600">Mother & Baby Care</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm text-gray-900">Company</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-teal-600 transition-colors text-gray-600">About Us</a></li>
                <li><a href="#" className="hover:text-teal-600 transition-colors text-gray-600">Our Team</a></li>
                <li><a href="#" className="hover:text-teal-600 transition-colors text-gray-600">Careers</a></li>
                <li><a href="#" className="hover:text-teal-600 transition-colors text-gray-600">Contact</a></li>
                <li><a href="#" className="hover:text-teal-600 transition-colors text-gray-600">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm text-gray-900">Contact</h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@careathome.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Healthcare St, Medical District, City 12345</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-xs text-gray-600">
            <p>&copy; 2024 CareAtHome. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
