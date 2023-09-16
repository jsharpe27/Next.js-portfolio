"use client"

import React from 'react'
import { useState, createContext } from 'react'
import type { SectionName } from '@/lib/types'


{/* Alll of this is to useContext in a separate file and the type lines and specifix to typescript
    We wrap the components that need our activeSection state with this ActiveSectionContext provider.
    furthermore, the way you "consume" the state inside the components that need it is to create
    a custom "hook" like we did at the bottom with useActiveSectionContext, passing it into the
    React.useContext() hook*/}

type ActiveSectionContextProviderProps = {
    children: React.ReactNode
    }

type ActiveSectionContextType = {
    activeSection: SectionName
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
    timeOfLastClick: number
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
    }

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({ children }:
    ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home')
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0) // we need to keep track 
    //of this to disable the observer temporarily when user clicks on a link

  return <ActiveSectionContext.Provider 
        value={{
            activeSection,
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick
            }}
         >
                {children}
            </ActiveSectionContext.Provider>
}

export function useActiveSectionContext(){
    const context = React.useContext(ActiveSectionContext)

    if(context === null){
        throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider')
    }
    return context
}