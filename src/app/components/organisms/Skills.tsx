import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  GitBranch,
  FileCode,
  Server,
  Figma,
  Brain,
  Palette,
  Atom,
} from "lucide-react";

import { GradientText } from "../atoms/GradientText";
import { SkillChip } from "../molecules/SkillChip";
import { SkillCard } from "../molecules/SkillCard";
import { SectionTitle } from "../atoms/SectionTitle";

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "Skilled in building modern user interfaces using HTML, CSS, JavaScript, TypeScript, and React. Focused on creating responsive and fast web applications.",
      gradient: "linear-gradient(135deg, #2563EB, #7C3AED)",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Experienced in building scalable backend services using NestJS and Java (basic), and managing databases like PostgreSQL and MongoDB.",
      gradient: "linear-gradient(135deg, #059669, #06B6D4)",
    },
  ];

  const skills = [
    { name: "Java", icon: Code2, level: 3 },
    { name: "React", icon: Atom, level: 3 },
    { name: "JavaScript", icon: FileCode, level: 3 },
    { name: "TypeScript", icon: FileCode, level: 2 },
    { name: "MongoDB", icon: Database, level: 4 },
    { name: "PostgreSQL", icon: Database, level: 2 },
    { name: "Golang", icon: Server, level: 1 },
    { name: "Git", icon: GitBranch, level: 2 },
    { name: "NestJS", icon: Server, level: 4 },
    { name: "Figma", icon: Figma, level: 3 },
    { name: "ChatGPT", icon: Brain, level: 4 },
    { name: "Canva", icon: Palette, level: 4 },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 px-6 bg-white"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#2563EB]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#7C3AED]/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <GradientText variant="blue-violet">Technologies</GradientText>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tools and technologies I use to build modern, scalable, and
            user-friendly applications.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              gradient={skill.gradient}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Skills */}
        <SectionTitle subtitle="Technologies and tools I work with">
          Skills & Expertise
        </SectionTitle>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10">
          {skills.map((skill) => (
            <SkillChip
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              level={skill.level}
            />
          ))}
        </div>

      </div>
    </section>
  );
}