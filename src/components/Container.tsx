import React from "react";

interface IContainer {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<IContainer> = ({ children, className }) => {
  return <div className={`w-full px-[150px] ${className}`}>{children}</div>;
};

export default Container;
