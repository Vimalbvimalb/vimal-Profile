import React from "react";
import { motion } from "motion/react";
import { GradientText } from "../atoms/GradientText";
import { Award, Coffee, Users, Zap } from "lucide-react";

export function About() {

const stats = [
  {
    icon: Award,
    label: "Internship Experience",
    value: "1+",
    desc: "Full-Stack Developer Intern working with modern technologies",
  },
  {
    icon: Coffee,
    label: "Tools & Technologies",
    value: "8+",
    desc: "Experience with modern development tools and frameworks",
  },
  {
    icon: Users,
    label: "Leadership & Teamwork",
    value: "CSE Chairman",
    desc: "Student Chairman of the Computer Science Engineering department",
  },
  {
    icon: Zap,
    label: "Continuous Learning",
    value: "Everyday",
    desc: "Improving development skills and learning new technologies",
  },
];

const activities = [
  "Building modern web applications",
  "Developing backend logic and system functionality",
  "Creating responsive and user-friendly interfaces",
  "Writing clean and maintainable code",
  "Learning new technologies and improving technical skills",
  "Working effectively in teams and leading technical activities",
];

return (
<section
  id="about"
  className="py-24 px-6 bg-[#F8F9FB] relative overflow-hidden"
>

{/* Background Decoration */}
<div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 rounded-full blur-3xl" />
<div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#059669]/10 to-[#06B6D4]/10 rounded-full blur-3xl" />

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
    About <GradientText variant="emerald-teal">Me</GradientText>
  </h2>

  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
    Computer Science student passionate about full-stack development and
    building modern web applications.
  </p>
</motion.div>

{/* Cards */}
<div className="grid md:grid-cols-2 gap-8 mb-16">

{/* My Journey */}
<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/50"
  style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}
>
  <h3 className="text-2xl font-semibold mb-6 text-gray-900">
    My Journey
  </h3>

  <p className="text-gray-600 leading-relaxed mb-4">
    I am a Computer Science Engineering student at Park College of
    Engineering and Technology with a strong interest in software
    development. I enjoy building web applications and solving
    problems using technology.
  </p>

  <p className="text-gray-600 leading-relaxed">
    I build modern and responsive applications with a strong focus on
    performance and user experience. I focus on writing clean,
    maintainable code while continuously improving my skills by
    learning new tools and frameworks.
  </p>
</motion.div>

{/* What I Do */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/50"
  style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}
>
  <h3 className="text-2xl font-semibold mb-6 text-gray-900">
    What I Do
  </h3>

  <ul className="space-y-4">
    {activities.map((item, index) => (
      <motion.li
        key={index}
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
        className="flex items-start gap-3"
      >
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center flex-shrink-0 mt-0.5">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>

        <span className="text-gray-600">{item}</span>
      </motion.li>
    ))}
  </ul>
</motion.div>

</div>

{/* Stats */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
{stats.map((stat, index) => (
<motion.div
  key={index}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
  whileHover={{ y: -5 }}
  className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100"
>

<div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-xl flex items-center justify-center mx-auto mb-4">
  <stat.icon className="w-6 h-6 text-white" />
</div>

<div className="text-2xl font-bold text-gray-900 mb-1">
  {stat.value}
</div>

<div className="text-sm font-medium text-gray-700">
  {stat.label}
</div>

<p className="text-xs text-gray-500 mt-2">
  {stat.desc}
</p>

</motion.div>
))}
</div>

</div>
</section>
);
}