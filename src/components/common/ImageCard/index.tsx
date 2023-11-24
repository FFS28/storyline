import React from 'react'
import { AiOutlinePlusSquare } from "react-icons/ai";

export default function ImageCard() {
    
    return (
        <>
            <div className={'flex items-center bg-[#23272B] text-[#B8C2CE] rounded-[17px] w-[200px] h-[300px] relative'}>
                <div className={'block m-auto text-center'}>
                    <label className=''>
                        <span className='flex w-fit m-auto text-3xl'><AiOutlinePlusSquare /></span>
                    </label>
                    <p>
                        Add Image
                    </p>
                </div>
                
            </div>
        </>
    )
}