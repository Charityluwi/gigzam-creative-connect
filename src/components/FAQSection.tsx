
import React from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I book a creative on GigZam?",
      answer: "Search for the type of creative you need, browse profiles, check their availability, and send a booking request with your event details. Once the creative accepts, you can confirm by making a secure payment."
    },
    {
      question: "What happens if I need to cancel a booking?",
      answer: "Our cancellation policy allows free cancellation up to 48 hours before the scheduled event. After that, cancellation fees may apply depending on how close to the event you cancel."
    },
    {
      question: "How does payment work?",
      answer: "When you book a creative, you'll make a secure payment through our platform. The funds are held safely until the service is completed. Once you confirm that the service was provided satisfactorily, the payment is released to the creative."
    },
    {
      question: "What happens if a creative does not show up?",
      answer: "Please contact our support team immediately so we can investigate and assist you in real-time. Depending on the circumstances, you may be eligible for a full refund or a replacement creative, if one is available and acceptable to you. We take no-shows seriously, and any creative who fails to honor a confirmed booking without a valid reason may face suspension or removal from our platform."
    },
    {
      question: "How do I join GigZam as a creative?",
      answer: "Click on 'Become a Creative' on our website, fill out the application form, upload samples of your work, and submit. Our team will review your application and notify you of approval within 48 hours."
    },
    {
      question: "What fees does GigZam charge?",
      answer: "GigZam charges a 15% service fee on each booking, which covers platform maintenance, payment processing, and customer support. This fee is already included in the prices you see on the platform."
    },
    {
      question: "What happens if there's a dispute between me and a client/creative?",
      answer: "GigZam provides a dedicated dispute resolution process. Contact our support team immediately, and we'll work with both parties to find a fair resolution based on our terms of service."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about using GigZam.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
