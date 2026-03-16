import React from 'react';
import { motion } from 'motion/react';
import { GradientText } from '../atoms/GradientText';
import { ProjectCard } from '../molecules/ProjectCard';

export function Projects() {
  const projects = [
    {
      title: 'Cloud-Based AI Chatbot',
      description:
        'Developed an intelligent AI-powered chatbot deployed on the cloud with real-time response capabilities. The system provides instant automated responses and scalable cloud-based performance.',
      image: 'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg',
      tags: [
        { name: 'AI Integration', color: 'blue' as const },
        { name: 'Cloud Deployment', color: 'emerald' as const },
        { name: 'JavaScript', color: 'violet' as const }
      ],
      githubUrl: 'https://github.com/Vimalbvimalb/search-engine',
      liveUrl: 'https://dainty-cocada-e4d956.netlify.app/'
    },
    {
      title: 'React Weather Application',
      description:
        'Created a responsive weather application using React that fetches real-time weather data from APIs and displays dynamic weather conditions with a clean UI.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      tags: [
        { name: 'React', color: 'blue' as const },
        { name: 'JavaScript', color: 'emerald' as const },
        { name: 'API Integration', color: 'violet' as const }
      ],
      githubUrl: 'https://github.com/Vimalbvimalb/react-weather-app',
      liveUrl: 'https://vweather2025.web.app/'
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[#F8F9FB] relative overflow-hidden">

      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#7C3AED]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#059669]/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <GradientText variant="rainbow">Projects</GradientText>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
             Projects built to practice and demonstrate my web development skills.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              delay={index * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}