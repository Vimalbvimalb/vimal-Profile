import React from "react";
import { motion } from "framer-motion";

type SkillCardProps = {
  icon: React.ElementType; // Icon component
  title: string;
  description: string;
  gradient: string; // CSS gradient string
  delay?: number; // optional
};

export const SkillCard: React.FC<SkillCardProps> = ({
  icon: Icon,
  title,
  description,
  gradient,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl rounded-2xl transition duration-500"
        style={{ background: gradient }}
      />

      {/* Card */}
      <div className="relative p-8 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500">
        
        {/* Icon */}
        <div
          className="w-14 h-14 flex items-center justify-center rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300"
          style={{ background: gradient }}
        >
          <Icon className="text-white" size={26} />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 text-gray-900">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};