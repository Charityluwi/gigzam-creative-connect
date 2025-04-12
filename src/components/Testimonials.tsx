
import { useState } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Mwape Chipoya",
    role: "Event Organizer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    text: "GigZam completely transformed how I plan corporate events. I found an amazing MC who was perfect for our company's annual gala. The booking process was smooth, and the platform's AI suggested talents that matched exactly what I was looking for.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Tembo",
    role: "Bride",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
    text: "Planning my wedding was stressful until I discovered GigZam. I found the perfect photographer, DJ, and makeup artist all in one place! The platform saved me countless hours of searching and coordinating. I highly recommend it to anyone planning a special event.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Lungu",
    role: "Music Producer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    text: "As a musician, GigZam has been a game-changer for my career. The platform connects me with clients that match my style and availability. The payment process is secure, and I love the insights I get from my profile analytics. My bookings have increased by 70% since joining!",
    rating: 4,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from clients and creatives who have experienced the GigZam difference
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {testimonials[activeIndex].name}
                </h3>
                <p className="text-gray-600 mb-3">{testimonials[activeIndex].role}</p>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5"
                      fill={i < testimonials[activeIndex].rating ? "#F59E0B" : "none"}
                      color={i < testimonials[activeIndex].rating ? "#F59E0B" : "#D1D5DB"}
                    />
                  ))}
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <blockquote className="text-gray-800 text-lg italic">
                  "{testimonials[activeIndex].text}"
                </blockquote>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-gray-300 hover:bg-gigzam-purple hover:border-gigzam-purple hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeIndex === index ? "bg-gigzam-purple" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-gray-300 hover:bg-gigzam-purple hover:border-gigzam-purple hover:text-white transition-colors"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
