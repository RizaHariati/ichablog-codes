import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children, ...rest }: Props) => {
  return (
    <div className=" bg-pink-600 p-10 w-full h-full">
      <h1>Layout title</h1>
      {children}
    </div>
  );
};

export default Layout;
