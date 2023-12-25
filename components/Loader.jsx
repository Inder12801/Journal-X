import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen m-auto">
      <div className="flex items-center justify-center w-full h-screen">
        <span className="loading loading-ring text-black w-60 "></span>
      </div>
    </div>
  );
};

export default Loader;
