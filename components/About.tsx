import React from 'react';
import SectionTitle from './SectionTitle';
import { Cpu, Dna, School, Layers } from 'lucide-react';

const skills = [
    'Python', 'Java', 'TensorFlow', 'PyTorch', 'Scikit-learn', 
    'FastAPI', 'Node.js', 'Docker', 'Git', 'AWS (EC2/S3/Lambda)', 'GCP'
];

const About: React.FC = () => {
    return (
        <section className="py-16 md:py-24 relative">
             <div className="absolute -top-20 -left-40 w-96 h-96 opacity-10 bg-peach rounded-full blur-3xl -z-10"></div>
             <div className="absolute -bottom-20 -right-40 w-96 h-96 opacity-5 bg-accent rounded-full blur-3xl -z-10"></div>

            <SectionTitle title="About Me" subtitle="My Introduction" />

            <div className="grid lg:grid-cols-5 gap-12 items-start">
                <div className="lg:col-span-3 text-lg text-cream/80 leading-relaxed space-y-4 text-center lg:text-left">
                    <p>
                        Saya Ammar, mahasiswa Telkom University berusia 19 tahun dengan fokus pada Artificial Intelligence, Machine Learning, dan Cloud Computing. Saya suka membangun sistem yang berdampak nyata dan mudah diskalakan.
                    </p>
                    <p>
                        Driven by a passion for solving complex problems, I immerse myself in projects that challenge me to learn and apply new technologies. Whether it's developing intelligent algorithms or architecting scalable cloud infrastructure, I am committed to creating efficient and innovative solutions.
                    </p>
                </div>
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-4 bg-surface p-4 rounded-2xl border border-white/10">
                        <Dna size={32} className="text-accent"/>
                        <div>
                            <p className="font-bold text-cream">Age</p>
                            <p className="text-cream/70">19 years (Born 16 August)</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-surface p-4 rounded-2xl border border-white/10">
                        <School size={32} className="text-accent"/>
                        <div>
                            <p className="font-bold text-cream">Campus</p>
                            <p className="text-cream/70">Telkom University</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-surface p-4 rounded-2xl border border-white/10">
                        <Cpu size={32} className="text-accent"/>
                        <div>
                            <p className="font-bold text-cream">Interests</p>
                            <p className="text-cream/70">AI/ML, Cloud, Automation</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <h3 className="text-2xl font-subheading text-center text-cream mb-8">My Skills</h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {skills.map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-surface border border-white/10 rounded-full text-cream/90 font-medium transition-colors hover:bg-accent/10 hover:text-accent">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
