//motion.div uses useEffect which is a react hook and we can only use that in client component, hence we need to make this as client component.
//by default all the files in app folder is a server component
//making this a client component we lose some of the benefits but does not affect much for small project like this
//if we have an interactive component it will be a client component
//if we have more presentational component it will be a server component
//clsx is used to conditionally apply the classes
//when we scroll down the webpage we want to change the active section header as the new section is in viewport. For this we use react intersection observer library.It detects when some elements are in view or out ot view.
//when we want to consume the context api value from activesectioncontext we run into an error because the typeof activesectioncontextapi can be an object or a null value. For this purpose we create custom hook and use it here.
//hook is just a function that starts with use keyword
"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContect } from "@/context/activeSectionContext";

export default function header() {
  const { activeSection, setActiveSection, setLastClicked } =
    useActiveSectionContect();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav
        className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2
        py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"
      >
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "flex -w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200": activeSection === link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setLastClicked(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
