import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center m-2 justify-center">
      <div
        className="border-t-transparent border-solid animate-spin rounded-full border-zinc-500 hover:border-zinc-800 hover:border-t-transparent border-2 h-6 w-6"
        role="status"
      ></div>
    </div>
  );
};

export default Spinner;
