import React from "react";

type Props = React.ComponentProps<"input">;

const Input = (props: Props) => {
  return <input {...props} />;
};

export default Input;
