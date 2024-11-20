"use client";
import { LucidePlus } from "lucide-react";
import { ToDoItem } from "./todo-item";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface ToDo {
  text: string;
  id: string;
  isCompleted: boolean;
}
export default function ToDoList({ toDos }: { toDos: ToDo[] }) {
  const [toDoList, setToDoList] = useState<ToDo[]>(toDos);
  const addToDo = () => {
    setToDoList([
      ...toDoList,
      { id: uuidv4.toString(), text: "", isCompleted: false },
    ]);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="inline-flex">
        <h1 className="text-3xl font-bold pr-3">ToDo List</h1>
        <button onClick={addToDo}>
          <LucidePlus className="bg-green-600 rounded-full" />
        </button>
      </div>
      <div className="text-3xl text-green-600 font-bold">{toDoList.length}</div>

      <div className="space-y-3">
        {toDoList.map((item, index) => (
          <div key={index}>
            <ToDoItem text={item.text} />
          </div>
        ))}
      </div>
    </div>
  );
}
