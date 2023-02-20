const fetchComicPage = async () => {
    const innopolisResponse = await fetch('https://fwd.innopolis.app/api/hw2?email=d.zakirov@innopolis.university');
    const id = await innopolisResponse.json()
    const comicsResponse = await fetch('https://getxkcd.vercel.app/api/comic?num=' + id)
    return await comicsResponse.json()
}

const rerollComicPage = () => {
    fetchComicPage().then(
        (response) => {
            const comicImage = document.getElementById('comics-page');
            const comicBlock = document.getElementById('comics-block');
            const comicTitle = document.getElementById('comics-title');
            const comicTime = document.getElementById('comics-time');
            comicBlock.style = "visibility: visible"
            comicImage.alt = response.alt;
            comicImage.src = response.img;
            comicTitle.textContent = response.title;
            const uploadDate = new Date(Date.UTC(response.year, response.month, response.day))
            comicTime.textContent = uploadDate.toLocaleDateString()
        },
        (err) => {
            alert('Something went wrong when fetching new comic page. Try again?')
        }
    )
}
