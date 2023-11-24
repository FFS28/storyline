export type StoryLine = {
    totalStoryBookList: StoryBook[];
    currentStoryBook: StoryBook;
}

export type StoryBook = {
    id: string;
    title: string;
    description: string;
    storySections: StorySection[];
}

export type StorySection = {
    id: string;
    title: string;
    contents: StoryCards[]
}

export type StoryCards = {
    id: string;
    image: string;
}