import React from "react";

type Props<T> = {
  values: T;
  children: (values: T) => JSX.Element;
};

const Form = <T extends {}>({ values, children }: Props<T>) => {
  return <div>{children(values)}</div>;
};

export default Form;
