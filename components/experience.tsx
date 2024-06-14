//we have to make this component as client component because here we have used Vertical Timeline component which is a third party component and in itself uses intersection observer component which is client side feature
//by default the timeine is invisible therefore we need to add visible={true} in timeline element tag
//unfortunately some third party component does not support Tailwind CSS and we have to use prop called ContentStyle
//this third party component adds extra style in the HTML tag as seen below which gives and error in console.
//<html lang="en" class="!scroll-smooth" style="--line-color: #FFF;"></html>
//The error is Warning: Extra attributes from the server: style at html at RootLayout (Server) at RedirectErrorBoundary....
//this error occurs because on the client side it add style in HTML tag but on the server side there is no style added in html tag. To remove this error in VerticalTimeline tag we add lineColor attribute as blank and then we set the css for line color in global css file. If we do not add the lineColor attribute here then the error will be there and the global css wont be applied.
//here the animation part is taken care by Vertical Timeline component, we do not have to add anything extra for animation.
"use client";
import React from "react";
import SectionHeading from "./sectionheading";
import { useSectionInView } from "@/lib/hooks";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useTheme } from "@/context/themeContext";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(0255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.5)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(0255,255,255,0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "rgba(0255,255,255,0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="!font-semibold capitalize">{item.title}</h3>
              <p className="!mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
