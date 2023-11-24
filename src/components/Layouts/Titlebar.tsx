"use client"

import React, { useEffect, useContext, useState } from 'react'
import { AiOutlineUpload, AiOutlineMore } from "react-icons/ai";
import { AppContext } from '@/contexts';
import { StoryBook } from '@/types';

export default function Titlebar() {
    
    const {appState, setAppState} = useContext(AppContext)
    const [currentStoryBook, setCurrentStoryBook] = useState<StoryBook>()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isTitleEditable, setIsTitleEditable] = useState(false)
    const [isDescriptionEditable, setIsDescriptionEditable] = useState(false)
    
    const handleChangeTitle = (e: React.KeyboardEvent) => {
        if(currentStoryBook && e.key == "Enter"){
            const temp = {...currentStoryBook, title: title == "" ? "Untitled" : title}
            setAppState({...appState, totalStoryBookList: appState.totalStoryBookList.map((el: StoryBook) => el.id == temp.id ? temp : el), currentStoryBook: temp})
            setIsTitleEditable(false)
        }
    }

    const handleChangeDescription = (e: React.KeyboardEvent) => {
        if(currentStoryBook && e.key == "Enter"){
            const temp = {...currentStoryBook, description: description == "" ? "No description" : description}
            setAppState({...appState, totalStoryBookList: appState.totalStoryBookList.map((el: StoryBook) => el.id == temp.id ? temp : el), currentStoryBook: temp})
            setIsDescriptionEditable(false)
        }
    }

    useEffect(() => {
        if(appState.currentStoryBook)
            setCurrentStoryBook(appState.currentStoryBook)
    }, [appState.currentStoryBook])

    return (
        <>
            <div className={'flex p-4 relative'}>
                { isTitleEditable ? <input className="shadow appearance-none bg-[#D9D9D9] bg-opacity-10 rounded py-2 px-3 text-white leading-tight focus:outline-none" type="text" onKeyDown={handleChangeTitle} onChange={e => setTitle(e.target.value)} defaultValue={currentStoryBook?.title} autoFocus/> :<label className='font-semibold text-3xl text-white' onDoubleClick={() => {setIsTitleEditable(true)}}>{currentStoryBook ? currentStoryBook.title : "Untitled"}</label>}
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
            {isDescriptionEditable ? <div className='p-4'><input className="shadow appearance-none bg-[#D9D9D9] bg-opacity-10 rounded py-2 px-3 text-white leading-tight focus:outline-none" type="text" onKeyDown={handleChangeDescription} onChange={e => setDescription(e.target.value)} defaultValue={currentStoryBook?.description} autoFocus/></div> : <div className={'flex px-4 py-2 text-[#B8C2CE]'} onDoubleClick={() => setIsDescriptionEditable(true)}>
                {currentStoryBook ? currentStoryBook.description : ""}
            </div>}
            
        </>
    )
}