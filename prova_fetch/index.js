const URLF = "https://www.omdbapi.com/?apikey=fa602d3f&s=shrek&type=movie";

const fetchmovie = () => {
  fetch(URLF)
    .then((response) => response.json())
    .then((object) => {
      const oggetto = object.Search;
      film_manipulation(oggetto);
    });
};

const film_manipulation = (array) => {
  array.map((single_object) => {
    console.log(single_object.Title);
    print_html(single_object.Title);
  });
};
//crea una variabile che riceve un parametro titolo, crea un tag paragrafo e al suo interno con Node mette il testo nel paragrafo
//prende il paragrafo e lo mette all'interno del body
const print_html = (titolo) => {
  const paragrafo = document.createElement("p");
  const node = document.createTextNode(titolo);
  paragrafo.appendChild(node);

  const container = document.getElementsByTagName("body");
  container.appendChild(paragrafo);
};

fetchmovie();