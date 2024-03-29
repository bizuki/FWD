import type { ComicsInfo } from '../types/ComicsInfo'

export const fetchComicPage = async (email: string) : Promise<ComicsInfo> => {
    const innopolisResponse = await fetch(`https://fwd.innopolis.app/api/hw2?email=${email}`);
    const id: number = await innopolisResponse.json();
    const comicsResponse = await fetch(`https://getxkcd.vercel.app/api/comic?num=${id}`);
    return await comicsResponse.json();
}
