//here i could have added project component by simply creating a function project but since that function is more interactive, which means that it would be a client component.
//to make it a client component we would have to use "use client" in this file but that would also make Projects component as client component which we do not want. As it is more static component or presentational component since it does not hold any interactive feactures.
//So we had to create a new file for project component and make this file as server side.
"use client";
import React, { useEffect } from "react";
import SectionHeading from "./sectionheading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
