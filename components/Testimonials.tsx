import React from 'react';
import SectionTitle from './SectionTitle';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Indah',
    role: 'Lecturer, Telkom University',
    quote: "Ammar shows exceptional promise and a keen intellect for complex AI concepts. His dedication to his projects is truly commendable.",
    avatar: 'https://picsum.photos/seed/indah/100/100',
    rating: 5,
  },
  {
    name: 'Budi Hartono',
    role: 'Hackathon Teammate',
    quote: "Working with Ammar on cloud deployments was a breeze. He's a reliable and skilled engineer who can quickly troubleshoot any issue.",
    avatar: 'https://picsum.photos/seed/budi/100/100',
    rating: 5,
  },
  {
    name: 'Siti Aisyah',
    role: 'Project Collaborator',
    quote: "His Python scripts for our data processing pipeline were clean, efficient, and well-documented. A pleasure to collaborate with.",
    avatar: 'https://picsum.photos/seed/siti/100/100',
    rating: 5,
  },
];

const TestimonialCard: React.FC<(typeof testimonials)[0]> = ({ name, role, quote, avatar, rating }) => (
    <div className="bg-surface p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center shadow-ambient">
        <img src={avatar} alt={name} className="w-20 h-20 rounded-full mb-4 border-2 border-peach"/>
        <h3 className="font-subheading text-lg text-cream">{name}</h3>
        <p className="text-sm text-cream/60 mb-4">{role}</p>
        <div className="flex gap-1 text-peach mb-4">
            {Array.from({ length: rating }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            {Array.from({ length: 5 - rating }).map((_, i) => <Star key={i} size={16} />)}
        </div>
        <p className="text-cream/80 italic">"{quote}"</p>
    </div>
);


const Testimonials: React.FC = () => {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-72 h-72 opacity-10 bg-accent rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <SectionTitle title="Testimonials" subtitle="What Others Say" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <TestimonialCard key={i} {...t} />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
