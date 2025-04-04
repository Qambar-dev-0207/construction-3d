
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  specialty: string;
  experience: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const TeamMemberCard = ({ 
  name, 
  role, 
  image, 
  specialty, 
  experience,
  social 
}: TeamMemberProps) => {
  // Get initials for avatar fallback
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="overflow-hidden transition-all duration-300 bg-white/90 backdrop-blur-sm border-primary/10 hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        {/* Colored top accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary/60 to-primary/80" />
        
        <div className="p-6 pt-8">
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-28 w-28 mb-5 border-2 border-primary/10 ring-4 ring-white/80">
              <AvatarImage src={image} alt={name} className="object-cover" />
              <AvatarFallback className="text-lg font-medium bg-primary/5">{initials}</AvatarFallback>
            </Avatar>
            
            <h3 className="text-xl font-medium mb-1">{name}</h3>
            <p className="text-primary/70 mb-4 font-medium">{role}</p>
            
            <div className="grid grid-cols-1 gap-3 w-full mb-5">
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-4 w-4 text-primary/70" />
                <span className="text-muted-foreground">{specialty}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <Briefcase className="h-4 w-4 text-primary/70" />
                <span className="text-muted-foreground">{experience}</span>
              </div>
            </div>
            
            {/* Social media links */}
            {social && (
              <div className="flex items-center justify-center gap-3 mt-1">
                {social.twitter && (
                  <motion.a 
                    href={social.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Twitter size={18} />
                  </motion.a>
                )}
                {social.linkedin && (
                  <motion.a 
                    href={social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Linkedin size={18} />
                  </motion.a>
                )}
                {social.github && (
                  <motion.a 
                    href={social.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github size={18} />
                  </motion.a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TeamMemberCard;
