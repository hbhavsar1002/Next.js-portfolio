import {useInView } from 'react-intersection-observer'
import { useActiveSectionContect } from '@/context/activeSectionContext'
import { useEffect } from 'react';
import type { SectionName } from '@/lib/types'

export function useSectionInView(sectionName: SectionName, threshold = 0.5){
    //this will display true when the About section starts or is visible in view,once the about section is out of view then it shows false
    //console.log(inView)
    // therefore we use inView to set the Active section in header component
    //threshold 0.5 that it will be considered in view only if 50% of the section is present in view.
    const {ref, inView} = useInView({
        threshold,
    });
    const{setActiveSection, lastClicked} = useActiveSectionContect();

    useEffect(()=>{
        if(inView && Date.now() - lastClicked > 1000){
        //here when is hover over setActionSection I can see all the possible values which it can accept so if I make a mistake and try to pass "Hiome" instead of "Home", it will give me an error. "Hiome" will be underlined in red color. Although we could acccess the website without an error but it acts likea small validation check in VS code.
        setActiveSection(sectionName);
        }
    },[inView,setActiveSection, lastClicked, sectionName]);

    return {
        ref,
    }
}