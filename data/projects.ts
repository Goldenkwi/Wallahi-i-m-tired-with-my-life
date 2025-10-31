import { Project } from '../types';

export const projects: Project[] = [
  { 
    title: 'AI Chatbot for Campus Helpdesk', 
    slug: 'ai-campus-chatbot',
    description: 'An NLP-powered chatbot designed to handle student inquiries with intent classification and context-aware memory.',
    image: 'https://picsum.photos/seed/chatbot/600/400', 
    tech: ['Python', 'FastAPI', 'Rasa', 'Docker', 'AWS EC2'], 
    tags: ['AI', 'Web'],
    links: { demo: '#', repo: '#' } 
  },
  { 
    title: 'Minecraft Server Orchestrator', 
    slug: 'minecraft-orchestrator',
    description: 'A cost-effective system to automatically spin up and down cloud game servers based on demand, with comprehensive monitoring.',
    image: 'https://picsum.photos/seed/mc/600/400', 
    tech: ['Java', 'Bash', 'EC2', 'Auto Scaling', 'CloudWatch'], 
    tags: ['Cloud'],
    links: { demo: '#', repo: '#' } 
  },
  { 
    title: 'Telegram Bot – AI Financial Tracker', 
    slug: 'telebot-finance-ai',
    description: 'Leverages OCR to parse receipts, automatically categorizes expenses, and provides daily financial insights via Telegram.',
    image: 'https://picsum.photos/seed/finbot/600/400', 
    tech: ['Python', 'Telegram API', 'Pandas', 'SQLite', 'AWS Lambda'], 
    tags: ['Bots', 'AI'],
    links: { demo: '#', repo: '#' } 
  },
  { 
    title: 'AI Webpage Scraper + Summarizer', 
    slug: 'ai-web-scraper',
    description: 'A tool for headless browser crawling that extracts content and generates both extractive and abstractive summaries using LangChain.',
    image: 'https://picsum.photos/seed/scraper/600/400', 
    tech: ['Python', 'Playwright', 'BeautifulSoup', 'LangChain', 'Vector DB'], 
    tags: ['AI', 'Web'],
    links: { demo: '#', repo: '#' } 
  },
];
