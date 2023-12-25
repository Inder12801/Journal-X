import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen m-auto">
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-black border-solid"></div>
      </div>
    </div>
  );
};

export default Loading;
