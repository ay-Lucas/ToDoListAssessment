"use client";
import { LucideCheck } from "lucide-react";
import React, { useState } from "react";

export default function Checkbox({
  checked = false,
  onChange,
  label,
}: {
  checked?: boolean;
  onChange?: (isChecked: boolean) => void;
  label?: string;
}) {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleCheckboxChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={handleCheckboxChange}
    >
      <div
        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center 
          ${isChecked ? "bg-green-600 border-green-600" : "border-gray-500"}`}
      >
        {isChecked && (
          <span className="text-white text-sm">
            <LucideCheck size={18} />
          </span>
        )}
      </div>
      {label && <span className="ml-2 text-sm text-gray-700">{label}</span>}
    </div>
  );
}
