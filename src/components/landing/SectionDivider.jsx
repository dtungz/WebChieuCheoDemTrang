import React from 'react';

export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-4">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
      <div className="w-2 h-2 rotate-45 border border-primary/40" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
    </div>
  );
}