import {BASE_URL} from "./config.js";

//***********FILM*************
export const apiListFilm = (s, type) => {
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
    
};
//crea una variabile che riceve un parametro titolo, crea un tag paragrafo e al suo interno con Node mette il testo nel paragrafo
//prende il paragrafo e lo mette all'interno del body
const print_html = (film, indice) => {
    const paragrafo = document.createElement("h5");
    const node = document.createTextNode(film.Title);
    paragrafo.appendChild(node);

    const paragrafo2 = document.createElement("p");
    const node2 = document.createTextNode(film.Type);
    paragrafo2.appendChild(node2);
  
    const container = document.getElementById(`card_${indice}`);
    const titolo_morto = document.getElementById(`card_titolo${indice}`);
    const img = document.getElementById(`card-img-${indice}`);
    const plot_morto = document.getElementById(`card_plot_${indice}`);
    container.replaceChild(paragrafo, titolo_morto);
    container.replaceChild(paragrafo2, plot_morto);
    //scrivere in questo modo, serve ad attaccare riga 49 e riga 54 
    //document.getElementById(`card-img-${indice}`).src=`${film.Poster}`;
    img.src = `${film.Poster}`;
    
  };




  //************SERIE**************
  export const apiListSerie = (t, type) => {
    const url = BASE_URL + `t=${t}&type=${type}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => {
            const serie = result;
            
            viewDetail(serie);
        });
};

const viewDetail = (s) => {
    print_serie(s)
};

const print_serie = (series) => {
    const para = document.createElement("h5");
    const nodes = document.createTextNode(series.Title);
    para.appendChild(nodes);
  
    const container = document.getElementById("card4");
    const titolo_cancellato = document.getElementById("cardtitolo4");
    const img = document.getElementById("cardimg4");
    
    container.replaceChild(para, titolo_cancellato);
    //scrivere in questo modo, serve ad attaccare riga 49 e riga 54 
    //document.getElementById(`card-img-${indice}`).src=`${film.Poster}`;
    img.src = `${series.Poster}`;
};






//****************GAME*****************
export const apiListGame = async (scrivi, type) => {
    const url = BASE_URL + `s=${scrivi}&type=${type}`;
    const response = await fetch(url);
    const results = await response.json();
    const arrayGiochi = results.Search;
    
    let i=1;
    let j = 0;
    arrayGiochi.map((gioco) => {
        const id= gioco.imdbID;
        
        if(i!=3){
            secondaApiListGame(id, i);
            if(i==4){
                secondaApiListGame(id, j);
            }
        }
        
        i++;
        j++;
    } )
};

const secondaApiListGame = async (gameID, i) => {
    const url2 = BASE_URL + `i=${gameID}`;
    const response2 = await fetch(url2);
    const risultato = await response2.json();
    print_games(risultato, i);
}
/*const viewGames = (g, indice) => {
           print_games(g, indice);
        };*/

const print_games = (game, indice) => {
    /* Seleziono le cose che mi servono */
    const container = document.getElementById(`gioco-${indice}`);
    const titolo_morto = document.getElementById(`gioco-titolo-${indice}`);
    const plot_morto = document.getElementById(`gioco-plot-${indice}`);
    const img = document.getElementById(`gioco-img-${indice}`);

    /*Passo a creare i paragrafi che andranno a sostituire quelli vecchi */
    const h5 = document.createElement("h5");
    const node = document.createTextNode(game.Title);
    h5.appendChild(node);
  
    const paragrafo = document.createElement("p");
    const node2 = document.createTextNode(game.Plot);
    paragrafo.appendChild(node2);

    /* Rimpiazzo il contenuto vecchio con quello appena creato */
    container.replaceChild(h5, titolo_morto);
    container.replaceChild(paragrafo, plot_morto);
    img.src = `${game.Poster}`;
    
  };