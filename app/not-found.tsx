"use client";
import Link from "next/link";
import "./style/globals.css";
import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className=" bg-pink-300 h-full flex justify-center items-center">
      <h1 className=" text-xl ">Not Found</h1>
      <Link href="/" className=" underline">
        Go back lah
      </Link>
    </div>
  );
};

export default NotFound;
