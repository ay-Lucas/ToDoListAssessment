"use client";
import {
  ChangeEvent,
  KeyboardEvent,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import Checkbox from "./checkbox";

export function ToDoItem({ text }: { text: string }) {
  const [toggleTextField, setToggleTextField] = useState(false);
  const [inputValue, setInputValue] = useState(text);
  const [itemText, setItemText] = useState(
    text !== "" ? text : "Click to add text",
  );
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleCheckboxChange = useCallback(() => {
    console.log("Checkbox toggled");
  }, []);

  const handleTextClick = useCallback(() => {
    setToggleTextField(true);
  }, []);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    [],
  );
  // Remove textfield and set item text when enter is pressed and item text isn't empty
  const handleInputKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" && inputValue.trim() !== "") {
        setItemText(inputValue.trim());
        setToggleTextField(false);
      }
    },
    [inputValue],
  );

  // Automatically focus the input field when toggling
  useEffect(() => {
    if (toggleTextField) {
      inputRef.current?.focus();
    }
  }, [toggleTextField]);

  // Remove textfield when mouse clicks another element
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        toggleTextField
      ) {
        setToggleTextField(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleTextField]);

  return (
    <div className="bg-gray-400 min-w-72 min-h-9 flex items-center justify-between rounded-2xl px-2 py-1 transition hover:brightness-110 border border-gray-400">
      <Checkbox onChange={handleCheckboxChange} />
      {toggleTextField ? (
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          className="flex-1 pl-3 text-left rounded bg-gray-400 focus:outline-none"
        />
      ) : (
        <div
          onClick={handleTextClick}
          className="w-40 flex-1 pl-3 text-left cursor-pointer"
        >
          {itemText}
        </div>
      )}
    </div>
  );
}
