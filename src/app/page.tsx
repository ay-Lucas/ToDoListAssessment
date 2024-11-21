import ToDoList from "@/components/todo-list";
import { getToDos } from "./actions";
/* eslint-disable @typescript-eslint/no-unused-vars */

const JSON_SERVER_URL = "http://localhost:3001";
const EXPRESS_SERVER_URL = "http://localhost:3002";

export default async function Home() {
  const toDos = await getToDos(EXPRESS_SERVER_URL);
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
