import React from 'react';
import { cn } from '@/lib/utils';


const CategoryCard = ({
  title,
  icon,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "border rounded-lg p-6 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all hover:border-[#000000]",
        selected ? "bg-gray-200 border-[#000000]" : "bg-white"
      )}
    >
      <div className="w-16 h-16 flex items-center justify-center">
        {icon}
      </div>
      <span className="font-medium text-gray-800">{title}</span>
    </div>
  );
};

export default CategoryCard;
