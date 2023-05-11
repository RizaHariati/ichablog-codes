import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "7pbqtw80",
  dataset: "production",
  title: "Ichablog",
  basePath: "/admin",
  plugins: [deskTool()],
  // schema: {
  //   // types: schemaType,
  // },
});

export default config;
