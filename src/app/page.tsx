import { ToDoItem } from "@/components/todo-item";

export default function Home() {
  return (
    <main>
      <div className="grid items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div>
          <h1 className="text-3xl pb-10 font-bold">ToDo List</h1>
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index}>
                <ToDoItem content={`${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
