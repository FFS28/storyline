import React, { ReactNode, useState } from 'react'
import { AiOutlineUpload, AiOutlineMore } from "react-icons/ai";

export default function Titlebar({ title, description }: { title: string, description: string }) {
    
    return (
        <>
            <div className={'flex p-4 relative'}>
                <label className='font-semibold text-3xl text-white'>{title}</label>
                <div className='flex absolute right-0'>
                    <label className="flex items-center px-4 py-2 font-semibold text-black bg-[#DFE1E5] rounded-[5px]">
                        <AiOutlineUpload />
                        <span className='mx-2'>Shared</span> 
                    </label>
                    <label className="flex items-center px-2 text-3xl font-bold text-white rounded-[5px]">
                        <AiOutlineMore />
                    </label>
                </div>
            </div>
            <div className={'flex px-4 py-2 text-[#B8C2CE]'}>
                {description}
            </div>
        </>
    )
}