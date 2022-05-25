const URL_LIST_TOY =
"https://www.omdbapi.com/?apikey=af44033&s=toyboy";

export const listToyboy = () => {
    fetch(URL_LIST_TOY)
    .then((response) => response.json())
    .then((result) => {
        const film = result.Search;
        console.log(film);
    });
};