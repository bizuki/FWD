type ComicInfo = {
    day: string;
    month: string;
    year: string;

    alt: string;
    img: string;

    title: string;
};

const fetchComicPage = async () : Promise<ComicInfo> => {
    const innopolisResponse = await fetch('https://fwd.innopolis.app/api/hw2?email=d.zakirov@innopolis.university');
    const id: number = await innopolisResponse.json();
    const comicsResponse = await fetch('https://getxkcd.vercel.app/api/comic?num=' + id);
    return await comicsResponse.json();
}

export const rerollComicPage = () => {
    fetchComicPage().then(
        (comicInfo) => {
            const comicImage = document.getElementById('comics-page')! as HTMLImageElement;
            const comicBlock = document.getElementById('comics-block')! as HTMLElement;
            const comicTitle = document.getElementById('comics-title')! as HTMLElement;
            const comicTime = document.getElementById('comics-time')! as HTMLSpanElement;

            comicBlock.setAttribute('style', 'visibility: visible');
            comicImage.alt = comicInfo.alt;
            comicImage.src = comicInfo.img;

            comicTitle.textContent = comicInfo.title;

            const uploadDate = new Date(
                Number(comicInfo.year),
                Number(comicInfo.month) - 1,
                Number(comicInfo.day)
            );
            comicTime.textContent = uploadDate.toLocaleDateString();
        },
        () => {
            alert('Something went wrong when fetching new comic page. Try again?');
        }
    )
}

rerollComicPage();

const rerollButton = document.getElementById('reroll-button')! as HTMLButtonElement;

rerollButton.addEventListener(
    'click',
    (_) => {rerollComicPage();}
);
