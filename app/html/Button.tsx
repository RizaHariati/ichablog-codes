import React from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant} bg-slate-500`} {...rest}>
      {children} CustomButton
    </button>
  );
};

export default CustomButton;
