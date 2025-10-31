import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { SECTIONS } from '../constants';

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative py-24 lg:py-0 overflow-hidden">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl opacity-50"></div>

            <div className="container mx-auto z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <p className="text-accent text-lg md:text-xl font-subheading mb-4">Hi, I’m Ammar 👋</p>
                        <h1 className="font-heading text-[clamp(32px,5vw,60px)] leading-tight text-cream mb-4">AI & Cloud Computing Enthusiast</h1>
                        <p className="text-cream/70 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8">Student @ Telkom University</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a href={`#${SECTIONS.PORTFOLIO}`} className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-accent text-background font-bold rounded-xl hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-accent">
                                View My Projects
                                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                            </a>
                            <a href="/cv.pdf" download className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-accent text-accent font-bold rounded-xl hover:bg-accent hover:text-background transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-accent">
                                Download CV
                                <Download size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <div className="absolute w-full h-full max-w-[320px] max-h-[320px] md:max-w-[400px] md:max-h-[400px] bg-surface rounded-full animate-pulse opacity-20"></div>
                        <div className="relative w-full max-w-[300px] md:max-w-[380px] p-2 border-4 border-surface rounded-full shadow-ambient">
                             <img 
                                src="https://picsum.photos/seed/ammar-portrait/1200/1200" 
                                alt="Portrait of Ammar"
                                className="w-full h-full object-cover rounded-full"
                             />
                             <div className="absolute -top-4 -right-4 w-16 h-16 bg-peach rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-4xl">🌱</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
