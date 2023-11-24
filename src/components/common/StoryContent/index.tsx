import React, { useContext, useState, useEffect } from 'react'
import { AiOutlineEllipsis } from "react-icons/ai";
import ImageCard from '../ImageCard';
import AddSectionBtn from '../AddSectionBtn';
import { AppContext } from '@/contexts';
import { StoryBook, StorySection } from '@/types';

export default function StoryContent() {
    
    const {appState, setAppState} = useContext(AppContext)
    const [currentStoryBook, setCurrentStoryBook] = useState<StoryBook>()

    const StoryTitleBar = ({section}: {section: StorySection}) => {
        const [isEditable, setIsEditable] = useState(false)
        const [title, setTitle] = useState("")
        const handleChange = (e: React.KeyboardEvent) => {
            if(section && e.key == "Enter"){
                const temp = {...section, title: title}
                const tempStoryBook = {...currentStoryBook, storySections: currentStoryBook?.storySections.map((el: StorySection) => el.id != temp.id ? el : temp)}
                setAppState({...appState, totalStoryBookList: appState.totalStoryBookList.map((el: StoryBook) => el.id == tempStoryBook.id ? tempStoryBook : el), currentStoryBook: tempStoryBook})
                setIsEditable(false)
            }
        }

        return <>
            <div className='flex relative items-center text-xs text-[#B8C2CE] mb-4'>
                {isEditable ? <input className="shadow appearance-none bg-[#D9D9D9] bg-opacity-10 rounded py-2 px-3 text-white leading-tight focus:outline-none" type="text" onKeyDown={handleChange} onChange={e => setTitle(e.target.value)} defaultValue={section.title} autoFocus/> : <label onDoubleClick={() => setIsEditable(true)}>{section.title}</label>}
                <label className='absolute right-0 text-3xl'><AiOutlineEllipsis  /></label>
            </div>
        </>
    }

    useEffect(() => {
        if(appState.currentStoryBook)
            setCurrentStoryBook(appState.currentStoryBook)
    }, [appState.currentStoryBook])
    

    return (
        <>
            {currentStoryBook && currentStoryBook.storySections.map(el => {
                return (
                    <div className={'block bg-[#101205] rounded-[17px] w-full mt-4 p-4 relative'}>
                        <StoryTitleBar section={el} />
                        <div className='flex w-full overflow-x-auto items-center text-center text-white'>
                            <ImageCard />
                            <div className='flex w-full justify-center'>
                                Or start with an inspiaration
                            </div>
                        </div>
                    </div>
                )
            })}

            <AddSectionBtn />
        </>
    )
}