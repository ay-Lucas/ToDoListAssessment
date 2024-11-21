"use client";
import { redirect } from "next/navigation";

export default function Navbar() {
  return (
    <div
      className="mx-auto flex w-fit mt-3 py-1 px-2 justify-center space-x-2
        bg-gray-500 rounded-xl"
    >
      <button onClick={() => redirect("/")}>Home</button>
      <button onClick={() => redirect("/about")}>About</button>
    </div>
  );
}
