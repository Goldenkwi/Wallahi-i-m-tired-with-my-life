import React from 'react';
import SectionTitle from './SectionTitle';
import { GraduationCap, Trophy } from 'lucide-react';

const timelineItems = [
    {
        icon: <GraduationCap />,
        date: "2023 – Present",
        title: "Informatics - Telkom University",
        description: "Pursuing a Bachelor's degree with a focus on AI and Cloud infrastructure. Maintaining a strong academic record while actively participating in tech communities."
    },
    {
        icon: <Trophy />,
        date: "Various",
        title: "Competitive Experience",
        description: "Participated in various competitions including Intellecta Data Mining, honing practical skills in data analysis, model development, and teamwork under pressure."
    },
];

const Resume: React.FC = () => {
    return (
        <section className="py-16 md:py-24">
            <SectionTitle title="My Journey" subtitle="Resume" />
            <div className="relative max-w-2xl mx-auto">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 h-full w-0.5 bg-surface" aria-hidden="true"></div>

                <div className="space-y-12">
                    {timelineItems.map((item, index) => (
                        <div key={index} className="relative pl-12">
                            <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-surface border-2 border-accent text-accent">
                                {item.icon}
                            </div>
                            <p className="text-sm font-medium text-accent mb-1">{item.date}</p>
                            <h3 className="text-xl font-subheading text-cream mb-2">{item.title}</h3>
                            <p className="text-cream/70">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Resume;
