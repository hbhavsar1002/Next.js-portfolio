"use client"
import React, { createContext, useContext, useState } from 'react'
import { SectionName } from '@/lib/types';

type ActiveSectionContextProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  lastClicked: number;
  setLastClicked: React.Dispatch<React.SetStateAction<number>>
}

//it will be null when you access the contex outside the ActiveSectionContext tag present in layout file.
export const ActiveSectionContextAPI = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContext({children}: ActiveSectionContextProps) {
  const[activeSection, setActiveSection] = useState<SectionName>('Home');
  //we need to keep track of this to disable the observer temporarily when user clicks on a link
  //so the issue was when we click in the header to navigate from one section to another. the active section highlight would highlight all the sections passed when we navigate from one section to another
  //for example if current active section is home and we click on projects in header bar then while going from home to projects it would have to pass through about section and in the header bar the animation for current active section would then go from home to about and perform animation at about and then go to projects. 
  //We directly want to go from home to projects
  //so the below useState will be used to check the time difference between the last click and the current active section time if it is greater than 1 sec then it means that we consider about section as active section
  const [lastClicked, setLastClicked] = useState(0);

  return (
    <ActiveSectionContextAPI.Provider value={{
      activeSection,
      setActiveSection,
      lastClicked,
      setLastClicked
    }}>
      {children}
    </ActiveSectionContextAPI.Provider>
    
    );
}


export function useActiveSectionContect(){
  const context = useContext(ActiveSectionContextAPI)

  if (context===null){
    throw new Error(
      "useActiveSectionContext must be used within ActiveSectionContext tag"
    )
  }
  return context;
}