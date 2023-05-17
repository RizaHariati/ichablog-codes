import React from "react";

type SomethingProps = {
  name: string;
  messageCount?: number;
  isLoggedIn?: boolean;
};

const Something = ({ name, messageCount, isLoggedIn }: SomethingProps) => {
  messageCount = 0;
  name = "baba";
  return (
    <div>
      <h2>{isLoggedIn ? "Log in" + { name } : " not log in"}</h2>
    </div>
  );
};

export default Something;
