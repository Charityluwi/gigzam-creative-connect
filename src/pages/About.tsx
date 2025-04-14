
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, Globe, Heart, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-gigzam-purple/10 to-gigzam-orange/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Connecting Zambia's <span className="text-gigzam-purple">Creative Talent</span> With The World
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  GigZam is Zambia's premier platform for booking talented artists, 
                  musicians, photographers, and other creative professionals for your events and projects.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/discover">
                    <Button className="bg-gigzam-purple hover:bg-gigzam-purple-dark text-white">
                      Discover Talent
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/become-a-creative">
                    <Button variant="outline" className="border-gigzam-purple text-gigzam-purple hover:bg-gigzam-purple/10">
                      Become a Creative
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform">
                    <Users className="h-10 w-10 text-gigzam-purple mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">10,000+</h3>
                    <p className="text-gray-600">Registered Creatives</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform">
                    <Globe className="h-10 w-10 text-gigzam-orange mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">50+</h3>
                    <p className="text-gray-600">Cities Covered</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform">
                    <Heart className="h-10 w-10 text-gigzam-purple mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">98%</h3>
                    <p className="text-gray-600">Client Satisfaction</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform">
                    <Shield className="h-10 w-10 text-gigzam-orange mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">100%</h3>
                    <p className="text-gray-600">Secure Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-lg text-gray-600">
                Founded in 2023, GigZam was born from a vision to transform how creative talents are discovered and booked in Zambia.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Musicians performing" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -right-10 -bottom-10 bg-gigzam-purple/10 w-40 h-40 rounded-full -z-10"></div>
                <div className="absolute -left-10 -top-10 bg-gigzam-orange/10 w-40 h-40 rounded-full -z-10"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-5">Celebrating Local Talent</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We started GigZam with a simple mission: to showcase the incredible creative talent in Zambia and make it easier for people to discover and book them.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our founder, a musician himself, was frustrated by the challenges creative professionals faced in finding consistent work and building their client base. At the same time, event organizers were struggling to find reliable, high-quality talent for their events.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  GigZam was created to bridge this gap, providing a platform where talent could showcase their work and clients could easily find and book the perfect professional for their needs. Today, we're proud to be Zambia's largest creative booking platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
              <p className="text-lg text-gray-600">
                We're driven by a clear purpose and guided by strong values that shape everything we do.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  To empower creative professionals in Zambia by connecting them with clients, providing tools for professional growth, and creating economic opportunities.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We aim to be the bridge that connects talented individuals with clients who value their skills, fostering a thriving creative economy in Zambia.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gigzam-purple mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Excellence</h4>
                      <p className="text-gray-600">We promote high standards of professionalism in everything we do.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gigzam-purple mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Community</h4>
                      <p className="text-gray-600">We build strong connections between creatives and their communities.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gigzam-purple mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Trust</h4>
                      <p className="text-gray-600">We build relationships based on reliability, transparency, and honesty.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gigzam-purple mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Innovation</h4>
                      <p className="text-gray-600">We constantly seek better ways to serve our creative community.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600">
                The dedicated individuals who make GigZam possible.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Chanda Mutale",
                  role: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
                  bio: "Former musician with a passion for digital innovation and the creative economy."
                },
                {
                  name: "Thandi Mbewe",
                  role: "Chief Operations Officer",
                  image: "https://images.unsplash.com/photo-1581992652564-44c42f5ad3ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
                  bio: "Event management expert with over 10 years of experience in the industry."
                },
                {
                  name: "David Phiri",
                  role: "Head of Technology",
                  image: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
                  bio: "Software engineer and tech entrepreneur with a focus on digital platforms."
                },
                {
                  name: "Mary Banda",
                  role: "Creative Director",
                  image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
                  bio: "Photographer and visual artist with a keen eye for quality creative work."
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md transform hover:translate-y-[-5px] transition-transform">
                  <div className="aspect-w-1 aspect-h-1">
                    <img src={member.image} alt={member.name} className="object-cover w-full h-60" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-gigzam-purple font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-gigzam-purple to-gigzam-purple-dark text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience GigZam?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Join thousands of creatives and clients who are already using GigZam to transform how creative work happens in Zambia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/discover">
                <Button size="lg" className="bg-white text-gigzam-purple hover:bg-gray-100">
                  Find Talent
                </Button>
              </Link>
              <Link to="/become-a-creative">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Join as a Creative
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
