import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";

export default function AddSectionBtn() {
    
    return (
        <>
            <div className={'flex items-center justify-center bg-white text-white rounded-[17px] w-full h-[100px] bg-opacity-10 my-4 cursor-pointer'}>
                <span className='mx-2'>
                    <AiOutlinePlus />
                </span>
                Add another section
            </div>
        </>
    )
}