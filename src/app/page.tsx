"use client";
import ToDoList from "@/components/todo-list";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const initialToDos = [
    { id: uuidv4().toString(), text: "Homework", isCompleted: false },
    { id: uuidv4().toString(), text: "Dishes", isCompleted: false },
    { id: uuidv4().toString(), text: "Laundry", isCompleted: false },
  ];
  return (
    <main>
      <div className="grid justify-center items-center min-h-screen font-[family-name:var(--font-geist-sans)] ">
        <div className="container space-y-7 h-2/3">
          <ToDoList toDos={initialToDos} />
        </div>
      </div>
    </main>
  );
}
