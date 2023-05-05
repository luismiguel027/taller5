function consumirAPI() {

    console.log("Iniciando busqueda");

    var apikey = "d68a8111143a3523ef8a76f6637d76bc";
    var ts = "1000";
    var hash = "801c66b4f8bef2985e6fe4328ffd2502";
    var url = 'http://gateway.marvel.com/v1/public/characters?ts=' + ts +"&apikey=" + apikey + "&hash=" + hash;

    var celda = document.getElementById("marvel");

    fetch(url)
    .then(response => response.json())
    .then(json => {
        for (item of json.data.results) {
            console.log(item.name)
            var div = document.createElement("div");
            var img = document.createElement("img");
            img.src = item.thumbnail.path + "." + item.thumbnail.extension;

            var label = document.createElement("label");
            label.innerText = item.name;

            var p = document.createElement("p");
            p.innerText = item.description;

            div.appendChild(label);
            div.appendChild(img);
            div.appendChild(p);

            var a1 = document.createElement("a");
            a1.innerText = "Ver Series";
            a1.href = "html/series.html?Direccion=" + item.series.collectionURI;
            
            var a2 = document.createElement("a");
            a2.innerText = "Ver Comics";
            a2.href = "html/comics.html?Direccion=" + item.comics.collectionURI;

            var a3 = document.createElement("a");
            a3.innerText = "Ver Eventos";
            a3.href = "html/eventos.html?Direccion=" + item.events.collectionURI;

            var a4 = document.createElement("a");
            a4.innerText = "Ver Stories";
            a4.href = "html/stories.html?Direccion=" + item.stories.collectionURI;
    

            div.appendChild(a1);
            div.appendChild(a2);
            div.appendChild(a3);
            div.appendChild(a4);

            celda.appendChild(div);

            
        }
    })
}



function series(){

    const luisURL = window.location.search;
    const acunaURL = new URLSearchParams(luisURL);
    const Direccion = acunaURL.get("apiSeries");
    var url = convertirHTTPS(Direccion)
    console.log(url);
    
    var api_series = document.getElementById("apiSeries")

    fetch(url)
    .then(response => response.json())
    .then(json => {
        for (item of json.data.results) {

            console.log(item.title);
            console.log(item.urls[0].url)

            var title = document.createElement("p");
            title.innerText = item.title;

            api_series.appendChild(title)

            var url1 = document.createElement("a");
            url1.href = item.urls[0].url;
            url1.innerText = item.urls[0].url;

            
            api_series.appendChild(url1)


            
            
        }
    })
}

function comics(){

    const luisURL = window.location.search;
    const acunaURL = new URLSearchParams(luisURL);
    const Direccion = acunaURL.get("apiComics");
    var url = convertirHTTPS(Direccion)
    console.log(url);
    
    var api_comics = document.getElementById("apiComics")

    fetch(url)
    .then(response => response.json())
    .then(json => {
        for (item of json.data.results) {

            console.log(item.title);
            console.log(item.urls[0].url)

            var title = document.createElement("p");
            title.innerText = item.title;

            api_comics.appendChild(title)

            var url1 = document.createElement("a");
            url1.href = item.urls[0].url;
            url1.innerText = item.urls[0].url;

            
            api_comics.appendChild(url1)


            
            
        }
    })
}

function events(){

    const luisURL = window.location.search;
    const acunaURL = new URLSearchParams(luisURL);
    const Direccion = acunaURL.get("apiEvents");
    var url = convertirHTTPS(Direccion)
    console.log(url);
    
    var api_events = document.getElementById("apiEvents")

    fetch(url)
    .then(response => response.json())
    .then(json => {
        for (item of json.data.results) {

            console.log(item.title);
            console.log(item.urls[0].url)

            var title = document.createElement("p");
            title.innerText = item.title;

            api_events.appendChild(title)

            var url1 = document.createElement("a");
            url1.href = item.urls[0].url;
            url1.innerText = item.urls[0].url;

            
            api_events.appendChild(url1)


            
            
        }
    })
}


const convertirHTTPS = (urlInsegura) => {
    const apikey = "d02d24bf6dfa0237da3b078f68f3af7f";
    const ts = "1000";
    const hash = "df75a5609e669b1d569d2dfbe2f0688b";
    
    const urlSegura = `https://${urlInsegura.slice(7)}?ts=${ts}&apikey=${apikey}&hash=${hash}`;
  
    return urlSegura;
  }
 