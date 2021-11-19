import { useState } from "react";
import Logo from "./Logo";

function App() {
  return (
    <div className="dark:bg-gray-800 dark:text-gray-50 h-full flex flex-col justify-center items-center gap-10">
      <h1 className="text-4xl font-extrabold text-center">Unicorn Academy</h1>
      <h2 className="text-2xl text-center max-w-xl">
        An open community where designers and developers learn from each other
        and grow together
      </h2>
      <Logo className="w-64" />
      <button className="dark:border-gray-50 dark:hover:border-white dark:hover:text-white border-gray-600 px-8 py-3 border rounded-md text-lg">
        <a href="https://discord.gg/ndZVE8HCd5">Discord</a>
      </button>
    </div>
  );
}

export default App;
