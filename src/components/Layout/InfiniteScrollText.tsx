
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface InfiniteScrollTextProps {
  items: string[];
  speed?: number;
  className?: string;
}

const InfiniteScrollText = ({ 
  items, 
  speed = 30, // Controls the animation speed
  className 
}: InfiniteScrollTextProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Clone the content for a seamless infinite effect
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const content = scrollContainer.querySelector('.scroll-content');
      
      if (content) {
        // Add a duplicate of the content for seamless scrolling
        const clone = content.cloneNode(true);
        scrollContainer.appendChild(clone);
      }
    }
  }, []);

  return (
    <div className={cn("bg-primary/5 py-2 overflow-hidden", className)}>
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
              className="mx-4 text-sm font-medium text-primary/80"
            >
              {item}
              <span className="mx-4">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollText;
