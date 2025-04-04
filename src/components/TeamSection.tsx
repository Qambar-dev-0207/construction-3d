
import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import { motion } from 'framer-motion';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Principal Architect',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=988&ixlib=rb-4.0.3',
      specialty: 'Sustainable Design',
      experience: '15+ Years Experience'
    },
    {
      name: 'Michael Chen',
      role: 'Interior Design Director',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3',
      specialty: 'Luxury Residential',
      experience: '12+ Years Experience'
    },
    {
      name: 'Olivia Patel',
      role: 'Construction Manager',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3', 
      specialty: 'Project Management',
      experience: '10+ Years Experience'
    },
    {
      name: 'David Williams',
      role: '3D Visualization Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3',
      specialty: 'Photorealistic Rendering',
      experience: '8+ Years Experience'
    }
  ];

  return (
    <section className="bg-secondary/60 py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="subheading mb-3">Our Experts</p>
          <h2 className="heading-lg mb-6">
            Meet Our Talented Team
          </h2>
          <p className="text-muted-foreground">
            Our team of experienced architects, designers, and project managers brings creativity, expertise, and passion to every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TeamMemberCard 
                name={member.name}
                role={member.role}
                image={member.image}
                specialty={member.specialty}
                experience={member.experience}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
