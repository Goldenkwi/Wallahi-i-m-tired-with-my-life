import React from 'react';

const SootSprite: React.FC<{ className?: string }> = ({ className }) => (
    <div className={`absolute w-3 h-3 rounded-full bg-ink ${className}`}></div>
);

const SectionTitle: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => {
  return (
    <div className="relative text-center mb-12 md:mb-16">
        <SootSprite className="-top-2 left-1/2 -translate-x-12 animate-bounce" />
        <SootSprite className="top-0 left-1/2 -translate-x-4 animate-bounce delay-200" />
        <SootSprite className="-top-1 left-1/2 translate-x-8 animate-bounce delay-100" />

        <p className="text-sm md:text-base font-medium text-accent uppercase tracking-widest mb-2">{subtitle}</p>
        <h2 className="font-heading text-4xl md:text-5xl text-cream tracking-tight">{title}</h2>
    </div>
  );
};

export default SectionTitle;
