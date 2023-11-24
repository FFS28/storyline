"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiOutlinePlus, AiOutlineBulb, AiOutlineSetting  } from "react-icons/ai";


import logo from '@/resources/Logo.svg'

export default function Sidebar() {
    const pathname  = usePathname();

    // Define our base class
    const className = "bg-[#191C1F] w-[260px] transition-[margin-left] ease-in-out duration-500 fixed top-0 bottom-0 left-0 z-40 p-4 text-white inline-block";
    
    // Clickable menu items
    const MenuItem = ({ icon = null, name, route }: {icon: React.ReactNode | null, name: string, route: string}) => {
        // Highlight menu item based on currently displayed route
        const colorClass = pathname === route ? "text-white" : "text-white/50 hover:text-white";

        return (
            <Link
                href={route}
                className={`flex gap-1 [&>*]:my-auto text-md py-3 ${colorClass}`}
            >
                <div className="text-xl flex [&>*]:mx-auto w-[30px] text-[#5D5FD0]">
                    {icon ? icon : <label className='before:content-["\2022"]' />}
                </div>
                <div>{name}</div>
            </Link>
        )
    }

    return (
        <>
            <div className={`${className}`}>
                <div className='h-[calc(100vh-200px)]'>
                    <div className="flex mt-8 mb-8">
                        <Link href="/">
                            {/*eslint-disable-next-line*/}
                            <img className='w-[160] h-[40]' src={logo.src} alt="Placeholder logo & brand name (to be replaced)" width={160} height={40} />
                        </Link>
                    </div>
                    <div className='flex items-center relative'>
                        <label>
                            Your Story Book
                        </label>
                        <label className='right-0 absolute cursor-pointer'>
                            <AiOutlinePlus />
                        </label>
                        
                    </div>
                    <div className="flex flex-col">
                        <MenuItem
                            name="Untitle"
                            route="/story1"
                            icon={null}
                        />
                    </div>
                </div>
                <div className='w-full py-4 border-t-2 align-bottom border-[#DFE4EA]'>
                    <div className="flex flex-col">
                        <MenuItem
                            name="Story 1"
                            route="/story1"
                            icon={<AiOutlineBulb />}
                            
                        />
                    </div>
                    <div className="flex flex-col">
                        <MenuItem
                            name="Story 1"
                            route="/story1"
                            icon={<AiOutlineSetting   />}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}