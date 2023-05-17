import React from "react";
import { getProjects } from "@/sanity/sanity-utils";
import "./style/globals.css";
import Content from "./Content";
import { Project } from "../types/projectsTypes";
import Movies from "./Movies";
type Props = {};

const Home = async (props: Props) => {
  const projects: Project[] = await getProjects();

  return (
    <div>
      <Movies />
      <Content projects={projects} />
    </div>
  );
};

export default Home;

// export const productReducer = (state, action) => {
//   switch (action.type) {
//     case "CREATE_PRODUCT":
//       return [
//         ...state,
//         {
//           id: action.payload.id,
//           name: action.payload.name,
//           price: action.payload.price,
//         },
//       ];
//     case "DELETE_PRODUCT":
//       return [...state.filter((product) => product.id !== action.payload.id)];
//     default:
//       return state;
//   }
// };

// export const shoppingCartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_PRODUCT":
//       return state + 1;
//   }
// };
