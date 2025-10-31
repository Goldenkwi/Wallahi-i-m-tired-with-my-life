import React, { useState, useMemo } from 'react';
import SectionTitle from './SectionTitle';
import { projects } from '../data/projects';
import type { Project, ProjectTag } from '../types';
import { ExternalLink, Github } from 'lucide-react';

const TABS: ('All' | ProjectTag)[] = ['All', 'AI', 'Cloud', 'Bots', 'Web'];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group bg-surface rounded-2xl border border-white/10 overflow-hidden shadow-ambient transition-all duration-300 hover:-translate-y-2">
    <div className="overflow-hidden h-48">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
    </div>
    <div className="p-6">
      <h3 className="font-subheading text-xl text-cream mb-2">{project.title}</h3>
      <p className="text-cream/70 text-sm mb-4 h-10">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map(t => (
          <span key={t} className="text-xs font-mono px-2 py-1 bg-background rounded text-accent">
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-auto">
        {project.links.demo && (
          <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-peach hover:underline">
            <ExternalLink size={16} /> Demo
          </a>
        )}
        {project.links.repo && (
          <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-peach hover:underline">
            <Github size={16} /> Repo
          </a>
        )}
      </div>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | ProjectTag>('All');

  const filteredProjects = useMemo(() => {
    if (activeTab === 'All') return projects;
    return projects.filter(p => p.tags.includes(activeTab));
  }, [activeTab]);

  return (
    <section className="py-16 md:py-24">
      <SectionTitle title="My Portfolio" subtitle="Featured Projects" />
      
      <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 md:px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-accent
            ${activeTab === tab ? 'bg-accent text-background' : 'bg-surface text-cream/70 hover:bg-surface/80 hover:text-cream'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
