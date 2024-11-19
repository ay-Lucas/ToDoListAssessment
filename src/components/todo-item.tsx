"use client";
import Checkbox from "./checkbox";
export function ToDoItem({ content }: { content: string }) {
  return (
    <div className="bg-gray-400 w-48 h-9 items-center rounded-2xl flex px-2 py-1 transition hover:brightness-110 border border-gray-400">
      <Checkbox />
      <p className="pl-3">{content}</p>
    </div>
  );
}
