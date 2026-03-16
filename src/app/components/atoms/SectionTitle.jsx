import React from "react";

export function SectionTitle({ children, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        {children}
      </h2>

      {subtitle && (
        <p className="text-gray-600 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}