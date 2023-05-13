"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import { useGlobalContext } from "./context/AppProvider";
import { Project } from "../types/projects";

type ContentProps = {
  projects: Project[];
};

const Content = ({ projects }: ContentProps) => {
  const { state, dispatch } = useGlobalContext();
  useEffect(() => {
    console.log(state);
  }, [state.content]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono">
        <h1>Madame</h1>
        {projects.map((project: Project, index) => {
          const { name, slug, _id, _createdAt, image, alt } = project;
          return (
            <div key={_id}>
              <h3>{name}</h3>
              <h4>{new Date(_createdAt).toLocaleDateString()}</h4>
              <Link
                href={project.url}
                onClick={() => {
                  dispatch({ type: "ACTION_A" });
                  dispatch({ type: "ACTION_B" });
                }}
              >
                {image && (
                  <Image
                    src={image}
                    alt={slug}
                    width={250}
                    height={250}
                    style={{ objectFit: "cover" }}
                    priority={index === 0 ? true : false}
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Content;
