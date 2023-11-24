import Layout from '@/components/Layouts'
import AddSectionBtn from '@/components/common/AddSectionBtn'
import StoryContent from '@/components/common/StoryContent'
import Image from 'next/image'

export default function Home() {
    return (
        <Layout>
            <StoryContent title='Story content' />
            <AddSectionBtn />
        </Layout>
    )
}
