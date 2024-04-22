import React from "react";

interface ProgressCardProps {
  title: string;
  currentValue: number;
  maxValue: number;
  unit: string;
}

const SummaryCard: React.FC<ProgressCardProps> = ({
  title,
  currentValue,
  maxValue,
  unit,
}) => {
  const progressPercentage = Math.min((currentValue / maxValue) * 100, 100);

  return (
    <div className="relative border border-gray-200 p-4 inline-flex flex-col gap-1 min-w-48">
      <span className="text-gray-400 text-xl">{title}</span>
      <div className="flex gap-2 items-end justify-center">
        <span
          className={`font-bold text-4xl ${
            currentValue > maxValue ? "text-orange-700" : ""
          }`}
        >
          {currentValue}
        </span>
        <span className="text-gray-400 text-md">
          / {maxValue} {unit}
        </span>
      </div>

      <div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-orange-400 w-full"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

export default SummaryCard;
