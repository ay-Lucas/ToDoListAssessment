import ToDoList from "@/components/todo-list";
import { getToDos } from "./actions";

export default async function Home() {
  const toDos = await getToDos();

  return (
    <main>
      <div className="grid justify-center items-center min-h-screen font-[family-name:var(--font-geist-sans)] ">
        <div className="container space-y-7 h-2/3">
          <ToDoList toDos={toDos} />
        </div>
      </div>
    </main>
  );
}
