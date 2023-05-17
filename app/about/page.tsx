import React from "react";
import CustomButton from "../html/Button";
import Texting from "../polymorphic/Texting";
import { NumberTab, StringTab, Tab, last, makeArr, makeFullName } from "./test";
import Form from "../html/SampleGenerics";
import Home from "../page";
import Link from "next/link";
import "../style/globals.css";
type Props = {
  name: string;
};

const page = ({ name }: Props) => {
  return (
    <div>
      <Link href="/">
        <h1 className="bg-pink-200 rounded-md hover:bg-purple-200 cursor-pointer transition-all p-2">
          Home
        </h1>
      </Link>
      <Form values={{ firstName: "lala" }}>
        {(values) => <h2> {values.firstName}</h2>}
      </Form>
    </div>
  );
};

export default page;
