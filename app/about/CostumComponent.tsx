import React from "react";

type Props = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
};

const CostumComponent = ({ size, color, children }: Props) => {
  return <div></div>;
};

export default CostumComponent;
