import { useState } from "react";
import reactLogo from "./assets/react.svg";
import goalsImage from "/goals.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-blue-600 dark:text-sky-400 border-2 p-4 rounded-xl">
        Hello Tailwind with Vite + React!--Updating again!
        {new Date().toLocaleString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </h1>
      <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={goalsImage} alt="" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Vite + React + TailwindCSS
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            This is a simple card component styled with TailwindCSS in a Vite +
            React project.
          </p>
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mb-4"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
