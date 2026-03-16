import React from "react";

export function SkillChip({ name, icon: Icon, level }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white shadow hover:shadow-lg transition">
      <Icon size={28} className="text-blue-500 mb-2" />
      <span className="text-sm font-medium">{name}</span>

      {/* Skill Level */}
      <div className="flex gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < level ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}