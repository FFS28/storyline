import React, { ReactNode, useState } from 'react'
import { AiOutlineUpload, AiOutlineEllipsis  } from "react-icons/ai";
import ImageCard from '../ImageCard';

export default function StoryContent({ title }: { title: string }) {
    
    const StoryTitleBar = ({title}: {title: string}) => {
        return <>
            <div className='flex relative items-center text-xs text-[#B8C2CE] mb-4'>
                <label>{title}</label>
                <label className='absolute right-0 text-3xl'><AiOutlineEllipsis  /></label>
            </div>
        </>
    }

    return (
        <>
            <div className={'block bg-[#101205] rounded-[17px] w-full mt-4 p-4 relative'}>
                <StoryTitleBar title={title} />
                <div className='flex w-full overflow-x-auto items-center text-center text-white'>
                    <ImageCard />
                    <div className='flex w-full justify-center'>
                        Or start with an inspiaration
                    </div>
                    
                </div>
            </div>
        </>
    )
}