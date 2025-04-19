
import React from 'react';
import image1 from './images/image1.jpg'; 
import image2 from './images/image2.jpg'; 
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';  // Importing the local image
import TeamMemberCard from './TeamMemberCard';
import { motion } from 'framer-motion';


const TeamSection = () => {
  const teamMembers = [
    {
      name: 'ER Amir Khan',
      role: 'Founder and Structure Sngineer',
      image: image3,
      specialty: 'Sustainable Design',
      experience: '15+ Years Experience',
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
      }
    },
    {
      name: 'ER zaid Khan',
      role: 'Site Engineer',
      image: image4,
      specialty: 'Luxury Residential',
      experience: '12+ Years Experience',
      social: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      }
    },
    {
      name: ' Faisal Khan',
      role: 'MEP Engineer',
      image: image1, 
      specialty: 'Project Management',
      experience: '10+ Years Experience',
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
      }
    },
    {
      name: 'Kaleem Akhtar',
      role: 'Senior project manager',
      image: image2,
      specialty: 'Photorealistic Rendering',
      experience: '8+ Years Experience',
      social: {
        linkedin: 'https://linkedin.com',
      }
    }
    
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-secondary/40 to-secondary/60 py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="subheading mb-3">Our Experts</p>
          <h2 className="heading-lg mb-6">
            Meet Our Talented Team
          </h2>
          <p className="text-muted-foreground text-lg">
            Our team of experienced architects, designers, and project managers brings creativity, 
            expertise, and passion to every project we undertake.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
            >
              <TeamMemberCard 
                name={member.name}
                role={member.role}
                image={member.image}
                specialty={member.specialty}
                experience={member.experience}
                social={member.social}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
