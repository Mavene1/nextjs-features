import React, { ReactNode } from "react";

const Parent = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h3>This is the Parent</h3>
      {children}
    </div>
  );
};

export default Parent;
