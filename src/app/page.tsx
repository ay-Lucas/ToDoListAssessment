"use client";
import ToDoList from "@/components/todo-list";
import { LucidePlus } from "lucide-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface ToDo {
  text: string;
  id: string;
  isCompleted: boolean;
}
const initialToDos = [
  { id: uuidv4().toString(), text: "Homework", isCompleted: false },
  { id: uuidv4().toString(), text: "Dishes", isCompleted: false },
  { id: uuidv4().toString(), text: "Laundry", isCompleted: false },
];
export default function Home() {
  const [toDoList, setToDoList] = useState<ToDo[]>(initialToDos);

  const addToDo = () => {
    setToDoList([
      ...toDoList,
      { id: uuidv4.toString(), text: "", isCompleted: false },
    ]);
  };

  return (
    <main>
      <div className="grid justify-center items-center min-h-screen font-[family-name:var(--font-geist-sans)] ">
        <div className="container space-y-7 h-2/3">
          <div className="flex flex-col items-center justify-center">
            <div className="inline-flex">
              <h1 className="text-3xl font-bold pr-3">ToDo List</h1>
              <button onClick={addToDo}>
                <LucidePlus className="bg-green-600 rounded-full" />
              </button>
            </div>
            <div className="text-3xl text-green-600 font-bold">
              {toDoList.length}
            </div>
          </div>
          <ToDoList toDoList={toDoList} />
        </div>
      </div>
    </main>
  );
}
