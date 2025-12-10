'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-teal-600 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920&h=1080&fit=crop"
            alt="Professional nurse"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6 text-xs">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full font-medium">Certified Nurses</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full font-medium">24/7 Home Care</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full font-medium">Trusted by 500+ Families</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
            Professional Home Nursing &<br />Physiotherapy – At Your Doorstep
          </h1>
          <p className="text-sm sm:text-base lg:text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Certified nurses and therapists providing compassionate care and medical assistance at home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-full hover:bg-teal-50 transition-all font-semibold text-sm shadow-lg">
              Book a Home Visit
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-all font-semibold text-sm">
              Call Now / WhatsApp Now
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Our Services</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">Comprehensive healthcare services delivered with care and professionalism</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Home Nursing Care", desc: "Vitals monitoring, dressing changes, IV/injections, post-surgery care", icon: "🏥" },
              { title: "Physiotherapy at Home", desc: "Stroke rehab, joint pain, back pain, mobility exercises", icon: "💪" },
              { title: "Elderly Care", desc: "Daily assistance, medication reminders, companionship", icon: "👴" },
              { title: "Patient Attendant", desc: "Feeding, bathing, personal care", icon: "🛁" },
              { title: "Mother & Baby Care", desc: "Postnatal care, newborn care", icon: "👶" },
              { title: "Special Needs Care", desc: "Disability support, long-term care", icon: "♿" },
              { title: "Chronic Disease Management", desc: "Diabetes, hypertension, heart care management", icon: "❤️" },
              { title: "Palliative Care", desc: "Comfort care, pain management, emotional support", icon: "🤲" }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Why Choose Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Licensed & Experienced Nurses", desc: "All our nurses are fully certified and have years of experience in home healthcare", icon: "✓" },
              { title: "24/7 Availability", desc: "Round-the-clock services for emergencies and scheduled care", icon: "⏰" },
              { title: "Flexible Care Packages", desc: "Customized packages to suit your specific needs and budget", icon: "📋" },
              { title: "Trusted by Hospitals & Clinics", desc: "Partnered with leading healthcare institutions", icon: "🏥" },
              { title: "Same-Day Home Visits", desc: "Quick response time with same-day appointment availability", icon: "🚀" },
              { title: "Affordable & Safe Services", desc: "Transparent pricing with complete safety protocols", icon: "💰" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center text-xl font-bold mb-4">{item.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Featured Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Home Nursing (RN/LPN)", desc: "Daily medical care and monitoring by registered nurses", icon: "👩‍⚕️", image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop" },
              { title: "Home Physiotherapy", desc: "Pain management and mobility recovery at your convenience", icon: "🏃", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop" },
              { title: "Post-Surgery Care", desc: "Support for patients recovering at home with expert assistance", icon: "🏥", image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=600&h=400&fit=crop" }
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-200">
                <div className="relative h-48">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">How It Works</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Book Online or Call Us", desc: "Schedule your appointment through our website or call our helpline" },
              { step: "2", title: "Certified Nurse Assigned", desc: "We assign a qualified nurse based on your specific needs" },
              { step: "3", title: "Nurse Visits Your Home", desc: "Our professional arrives at your home at the scheduled time" },
              { step: "4", title: "Daily Progress Updates", desc: "Receive regular updates on patient progress and care plans" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Client Reviews</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Rajesh Kumar", review: "The CareAtHome nurse took care of my father after surgery. Highly satisfied! Professional and caring service.", rating: 5, location: "Delhi" },
              { name: "Priya Sharma", review: "Excellent physiotherapy services at home. My mother's mobility improved significantly. Thank you!", rating: 5, location: "Mumbai" },
              { name: "Amit Patel", review: "24/7 availability is a blessing. The nurses are experienced and compassionate. Highly recommend!", rating: 5, location: "Bangalore" },
              { name: "Sunita Reddy", review: "Affordable packages with quality care. The team is professional and understanding. Great service!", rating: 5, location: "Hyderabad" }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-gray-600 mb-4 italic leading-relaxed">"{testimonial.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages/Pricing */}
      <section id="packages" className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Care Packages</h2>
            <p className="text-sm text-gray-600">Choose a package that suits your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Basic", hours: "2 hours", features: ["Daily monitoring", "Basic nursing care", "Medication assistance"], price: "₹800" },
              { name: "Standard", hours: "6 hours", features: ["Nursing + Physiotherapy", "Health assessments", "Daily reports"], price: "₹1,800" },
              { name: "Premium", hours: "12-24 hour", features: ["Full-time trained nurse", "Complete care management", "24/7 support"], price: "₹3,500" }
            ].map((pkg, i) => (
              <div key={i} className={`bg-white p-8 rounded-xl border-2 ${i === 1 ? 'border-teal-600 shadow-lg scale-105' : 'border-gray-200'} transition-all`}>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-teal-600 mb-1">{pkg.price}<span className="text-sm text-gray-600 font-normal">/day</span></div>
                  <p className="text-xs text-gray-600">{pkg.hours} home care</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-gray-600">
                      <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold text-sm transition-all ${
                  i === 1 
                    ? 'bg-teal-600 text-white hover:bg-teal-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
              <p className="text-xs text-gray-600 mb-4 leading-relaxed">
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

      {/* Safety Protocols */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Safety Protocols</h2>
            <p className="text-sm text-gray-600">Your safety is our priority</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Gloves", desc: "Fresh gloves for every visit" },
              { title: "Masks", desc: "Protective masks worn at all times" },
              { title: "Hygiene Kit", desc: "Complete sanitization before each visit" },
              { title: "Health Checks", desc: "Regular health screening of staff" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl text-center border border-gray-200">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Booking Form */}
      <section id="contact" className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Request a Home Visit</h2>
            <p className="text-sm text-gray-600">Fill out the form below and we'll get back to you shortly</p>
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
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">CareAt<span className="text-teal-400">Home</span></h3>
              <p className="text-xs mb-4 leading-relaxed">
                Professional home healthcare services with certified nurses and physiotherapists dedicated to your wellbeing.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Services</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Home Nursing Care</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Physiotherapy</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Elderly Care</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Patient Attendant</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Mother & Baby Care</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-teal-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Contact</h4>
              <ul className="space-y-2 text-xs">
                <li className="flex items-start gap-2">
                  <span>📞</span>
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>💬</span>
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📧</span>
                  <span>info@careathome.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📍</span>
                  <span>123 Healthcare St, Medical District, City 12345</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-xs">
            <p>&copy; 2024 CareAtHome. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
