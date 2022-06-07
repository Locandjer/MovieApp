/*const URL_LIST_TOY =
"https://www.omdbapi.com/?apikey=af44033&s=toyboy"; 

const URL_LIST_TERMINATOR =
"https://www.omdbapi.com/?apikey=af44033&s=Terminator&type=series";*/

import {BASE_URL} from "./config.js";
//    chiama la web api con l'elenco di tutti i contenuti di "toyboy"

export const apiList = (s, type) => {
    const url = BASE_URL + `s=${s}&type=${type}`;
    fetch(url)
        .then((response) => response.json())
        .then((results) => {
            const items = results.Search;
            
            viewItems(items);
        });
};

//estrapola ogni elemento dell'array e stampa le proprietà

const viewItems = (array) => {
    
    
   
    let i = 1;
    //1. Ciclare l'array
    array.map(
        (item) => {
    //2. Estrapolare ogni item
    //3. Estrapolare solo le proprietà che ci servono
    //  le proprietà sono Title, Year, Poster , Type
           print_html(item, i);
           i++;
        }
    );
    
}
//crea una variabile che riceve un parametro titolo, crea un tag paragrafo e al suo interno con Node mette il testo nel paragrafo
//prende il paragrafo e lo mette all'interno del body
const print_html = (film, indice) => {
    const paragrafo = document.createElement("h5");
    const node = document.createTextNode(film.Title);
    paragrafo.appendChild(node);
  
    const container = document.getElementById(`card_${indice}`);
    const titolo_morto = document.getElementById(`card_titolo${indice}`);
    const img = document.getElementById(`card-img-${indice}`);

    container.replaceChild(paragrafo, titolo_morto);
    //scrivere in questo modo, serve ad attaccare riga 49 e riga 54 
    //document.getElementById(`card-img-${indice}`).src=`${film.Poster}`;
    img.src = `${film.Poster}`;
    
  };

  
  



/*
export const listToyboy = () => {
    fetch(URL_LIST_TOY)
    .then((response) => response.json())
    .then((result) => {
        const film = result.Search;
        console.log(film);
    });
};

export const listTerminatorSerie = (0) => {
    fetch(URL_LIST_TERMINATOR)
    .then((response) => response.json())
    .then((result) => {
        const serie = result.Search;
        console.log(serie);
    });
};
*/

/*
    chiama la web api e restituisce le serie televisive di "toyboy"
*/
