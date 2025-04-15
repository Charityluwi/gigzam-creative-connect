
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-8 text-gray-900">Terms and Conditions</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to GigZam. These Terms and Conditions govern your use of our website and services. By accessing or using GigZam, you agree to be bound by these Terms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Definitions</h2>
            <p>
              <strong>"GigZam"</strong> refers to our company, website, and platform.<br />
              <strong>"Users"</strong> refers to all parties who access and use GigZam, including Clients and Creatives.<br />
              <strong>"Clients"</strong> refers to individuals or organizations seeking to book creative services.<br />
              <strong>"Creatives"</strong> refers to individuals or groups offering creative services on the platform.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Account Registration</h2>
            <p>
              To use GigZam, you must register for an account. You agree to provide accurate, current, and complete information and to keep your account information updated. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Services</h2>
            <p>
              GigZam provides a platform connecting Clients with Creatives. We do not provide creative services directly. GigZam is not responsible for the quality, safety, legality, or any other aspect of the services provided by Creatives.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Fees and Payments</h2>
            <p>
              GigZam charges a service fee for facilitating connections between Clients and Creatives. All fees are clearly displayed before booking confirmation. Payment terms and refund policies are detailed in our Payment Policy.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. User Conduct</h2>
            <p>
              When using GigZam, you agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Post false, misleading, or deceptive content</li>
              <li>Harass, threaten, or intimidate other users</li>
              <li>Attempt to gain unauthorized access to GigZam systems</li>
              <li>Use GigZam for any illegal or unauthorized purpose</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Content</h2>
            <p>
              Users are solely responsible for content they post on GigZam. By posting content, you grant GigZam a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content in connection with our services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Intellectual Property</h2>
            <p>
              GigZam and its content, features, and functionality are owned by GigZam and protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any GigZam content without our express permission.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Termination</h2>
            <p>
              GigZam reserves the right to suspend or terminate your account at any time for any reason, including violation of these Terms. Upon termination, your right to use GigZam ceases immediately.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Disclaimer of Warranties</h2>
            <p>
              GigZam is provided "as is" without warranties of any kind. We do not guarantee that GigZam will be error-free, secure, or uninterrupted.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Limitation of Liability</h2>
            <p>
              GigZam shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">12. Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of the Republic of Zambia without regard to its conflict of law provisions.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">13. Changes to Terms</h2>
            <p>
              GigZam reserves the right to modify these Terms at any time. We will provide notice of significant changes. Your continued use of GigZam after such modifications constitutes your acceptance of the revised Terms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">14. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at: info@gigzam.com
            </p>
            
            <p className="mt-8">
              Last updated: April 15, 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
