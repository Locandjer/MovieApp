const URL_LIST_TOY =
"https://www.omdbapi.com/?apikey=af44033&s=toyboy";

const URL_LIST_TERMINATOR =
"https://www.omdbapi.com/?apikey=af44033&s=Terminator&type=series";
/*
    chiama la web api con l'elenco di tutti i contenuti di "toyboy"
*/

export const listToyboy = () => {
    fetch(URL_LIST_TOY)
    .then((response) => response.json())
    .then((result) => {
        const film = result.Search;
        console.log(film);
    });
};

export const listTerminatorSerie = () => {
    fetch(URL_LIST_TERMINATOR)
    .then((response) => response.json())
    .then((result) => {
        const serie = result.Search;
        console.log(serie);
    });
};

/*
    chiama la web api e restituisce le serie televisive di "toyboy"
*/
