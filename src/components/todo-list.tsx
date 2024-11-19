import { ToDo } from "@/app/page";
import { ToDoItem } from "./todo-item";

export default function ToDoList({ toDoList }: { toDoList: ToDo[] }) {
  return (
    <div className="space-y-3">
      {toDoList.map((item, index) => (
        <div key={index}>
          <ToDoItem text={item.text} />
        </div>
      ))}
    </div>
  );
}
