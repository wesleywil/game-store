import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid h-[80vh] place-items-center overflow-y-auto">
      {children}
    </div>
  );
};

export default Container;
