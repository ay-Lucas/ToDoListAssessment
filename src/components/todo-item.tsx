"use client";
import { LucideX } from "lucide-react";
import Checkbox from "./checkbox";
export function ToDoItem({ text }: { text: string }) {
  const handleChange = () => {};

  return (
    <div className="bg-gray-400 min-w-72 min-h-9 items-center justify-between rounded-2xl flex px-2 py-1 transition hover:brightness-110 border border-gray-400">
      <Checkbox onChange={handleChange} />
      <p className="pl-3 text-left w-full">{text}</p>
      <button className="hover:text-green-400 text-gray-600 transition duration-200">
        <LucideX />
      </button>
    </div>
  );
}
