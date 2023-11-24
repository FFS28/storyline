"use client"
import { createContext, useState } from "react";
import { StoryLine } from "@/types";

const initialize: StoryLine = {
    totalStoryBookList: [
        {
            id: "1",
            title: "title1",
            description: "this is description",
            storySections: []
        }
    ],
    currentStoryBook: {
        id: "1",
        title: "title1",
        description: "this is description",
        storySections: [
            {
                id: "1",
                contents: [],
                title: "Untitled"
            }
        ]
    }
}

export const AppContext = createContext<any>({})

export const AppProvider = ({ children }: {children: React.ReactNode}) => {
    const [appState, setAppState] = useState<StoryLine>(initialize)

    return (
        <AppContext.Provider value={{ appState, setAppState }}>
            {children}
        </AppContext.Provider>
    )
}
