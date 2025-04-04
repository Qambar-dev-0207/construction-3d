
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface InfiniteScrollTextProps {
  items: string[];
  speed?: number;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
}

const InfiniteScrollText = ({ 
  items, 
  speed = 30,
  className,
  backgroundColor = "bg-primary/5",
  textColor = "text-primary/80"
}: InfiniteScrollTextProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const content = scrollContainer.querySelector('.scroll-content');
      
      if (content) {
        const clone = content.cloneNode(true);
        scrollContainer.appendChild(clone);
      }
    }
  }, []);

  return (
    <div className={cn(backgroundColor, "py-2.5 overflow-hidden backdrop-blur-sm border-y border-primary/10", className)}>
      <div 
        ref={scrollRef}
        className="relative whitespace-nowrap flex"
      >
        <div 
          className="scroll-content flex animate-marquee"
          style={{ 
            '--scroll-speed': `${speed}s`,
            animationDuration: `${speed}s`
          } as React.CSSProperties}
        >
          {items.map((item, index) => (
            <div 
              key={index} 
              className={cn("mx-4 text-sm font-medium", textColor)}
            >
              {item}
              <span className="mx-4 opacity-50">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollText;
