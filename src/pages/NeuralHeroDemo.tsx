import React from 'react';
import Hero from '../components/ui/neural-network-hero';

const NeuralHeroDemo: React.FC = () => {
  const handleRegisterClick = () => {
    // Scroll to registration form or navigate to webinar page
    window.location.href = '/';
  };

  return (
    <div className="w-screen h-screen">
      <Hero 
        title="Transform Your Career with Neural Web Development"
        description="Experience the future of web development in our exclusive masterclass. Learn cutting-edge technologies that merge algorithms with artistry."
        badgeText="AI-Powered Learning"
        badgeLabel="New"
        ctaButtons={[
          { 
            text: "Register for Webinar", 
            href: "#", 
            primary: true 
          },
          { 
            text: "Learn More", 
            href: "#about" 
          }
        ]}
        microDetails={["Modern Technologies", "Expert Instructors", "Interactive Learning"]}
      />
    </div>
  );
};

export default NeuralHeroDemo;
