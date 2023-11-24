"use client"

import Layout from '@/components/Layouts'
import AddSectionBtn from '@/components/common/AddSectionBtn'
import StoryContent from '@/components/common/StoryContent'
import { AppProvider } from '@/contexts'

export default function Home() {
    return (
        <AppProvider>
            <Layout>
                <StoryContent />
            </Layout>        
        </AppProvider>
    )
}
