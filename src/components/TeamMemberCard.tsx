
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  specialty: string;
  experience: string;
}

const TeamMemberCard = ({ name, role, image, specialty, experience }: TeamMemberProps) => {
  // Get initials for avatar fallback
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="overflow-hidden hover-lift transition-all duration-300 bg-white/90 backdrop-blur-sm">
      <div className="p-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-24 w-24 mb-4 border-2 border-primary/10">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="text-lg font-medium">{initials}</AvatarFallback>
          </Avatar>
          
          <h3 className="text-xl font-medium mb-1">{name}</h3>
          <p className="text-primary/60 mb-4">{role}</p>
          
          <div className="grid grid-cols-1 gap-2 w-full">
            <div className="flex items-center gap-2 text-sm">
              <Award className="h-4 w-4 text-primary/70" />
              <span className="text-muted-foreground">{specialty}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <Briefcase className="h-4 w-4 text-primary/70" />
              <span className="text-muted-foreground">{experience}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TeamMemberCard;
