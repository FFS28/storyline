import React, { ReactNode } from 'react'
import Sidebar from './Sidebar';
import Titlebar from './Titlebar';

export default function Layout({ children }: {children: ReactNode}) {
    
    return (
        <>
            <div className="min-h-screen">
                <div className="flex">
                    <Sidebar />
                    <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen bg-gradient-to-b from-[#5A5FD0] to-[#7757c6] ml-[260px] p-8">
                        <Titlebar title={"Untitled"} description={"this is description"} />
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}