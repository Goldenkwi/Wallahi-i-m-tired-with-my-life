import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send to an API endpoint.
        // For this example, we'll just simulate a success message.
        if(formData.name && formData.email && formData.message) {
            setStatus('Thank you for your message!');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        } else {
            setStatus('Please fill out all fields.');
            setTimeout(() => setStatus(''), 3000);
        }
    };

    return (
        <section className="py-16 md:py-24">
            <SectionTitle title="Get In Touch" subtitle="Contact Me" />
            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-subheading text-cream mb-4">Let's Connect</h3>
                    <p className="text-cream/70 mb-8">
                        Feel free to reach out—let’s build something meaningful. I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" aria-label="GitHub" className="w-12 h-12 flex items-center justify-center rounded-full bg-surface border border-white/10 text-cream/70 hover:text-accent hover:border-accent transition-colors"><Github /></a>
                        <a href="#" aria-label="LinkedIn" className="w-12 h-12 flex items-center justify-center rounded-full bg-surface border border-white/10 text-cream/70 hover:text-accent hover:border-accent transition-colors"><Linkedin /></a>
                        <a href="mailto:ammar@example.com" aria-label="Email" className="w-12 h-12 flex items-center justify-center rounded-full bg-surface border border-white/10 text-cream/70 hover:text-accent hover:border-accent transition-colors"><Mail /></a>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full bg-surface px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent transition-shadow" />
                    </div>
                    <div>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full bg-surface px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent transition-shadow" />
                    </div>
                    <div>
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={5} required className="w-full bg-surface px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                         <button type="submit" className="group flex items-center justify-center gap-2 px-8 py-4 bg-accent text-background font-bold rounded-xl hover:bg-opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-accent">
                            Send Message <Send size={18} />
                        </button>
                        {status && <p className="text-sm text-peach">{status}</p>}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
