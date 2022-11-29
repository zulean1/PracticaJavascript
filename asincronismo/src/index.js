let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback){
    //referencia al objeto XMLHttpRequest
    let xhttp = new XMLHttpRequest();
    /* A nuestra referencia xhttp le pasamos un LLAMADO 'open'
    donde: parametro1 = el metodo, parametro2 = la url,
    parametro3 = verificación si es asincrono o no, valor por defecto true*/


    xhttp.open('GET', url_api, true);
    //Cuando el estado del objeto cambia, ejecutar la función:
    xhttp.onreadystatechange = function (event){
        /*
        los estados que puede tener son:
        estado 0: inicializado
        estado 1: cargando
        estado 2: ya se cargó
        estado 3: ya hay información
        estado 4: solicitud completa
        PD: recuerda estas trabajando con una API externa osea un servidor por lo que
        depende del servidor cuanto demore en cada estado haces un pedido por datos
        (request) y solo es aplicar lógica.
        */
        if(xhttp.readyState === 4){
            //Verificar estado, aqui un resumen de los casos mas comunes:
            /*
            ESTADO 1xx (100 - 199): Indica que la petición esta siendo procesada.
            ESTADO 2xx (200 - 299): Indica que la petición fue recibida, aceptada y procesada correctamente.
            ESTADO 3xx (300 - 399): Indica que hay que tomar acciones adicionales para completar la solicitud. Por lo general indican redireccionamiento.
            ESTADO 4xx (400 - 499): Errores del lado del cliente. Indica se hizo mal la solicitud de datos.
            ESTADO 5xx (500 - 599): Errores del Servidor. Indica que fallo totalmente la ejecución.
            */
            if(xhttp.status === 200){
                //Estandar de node con callbacks, primer parametro error, segundo el resultado
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    }
    //Envio de la solicitud.
    xhttp.send();
}

// primero buscamos la lista de personajes
fetchData(API, (error1, data1) => {
    // si error, matamos retornando un error
    if(error1) return console.error(error1);
    // luego buscamos en la api el id de Rick
    fetchData(API + data1.results[0].id, (error2, data2) => {
      // si error, matamos retornando un error
      if(error2) return console.error(error2);
      // por ultimo la consulta a la api que contiene su dimension
      fetchData(data2.origin.url, (error3, data3) => {
        // si error, matamos retornando un error
        if(error3) return console.error(error3);
        
        // mostramos los resultados :) 
        console.log(data1.info.count);
        console.log(data2.name);
        console.log(data3.dimension);
        
        // rutas de las peticiones en orden
        console.log(API);
        console.log(API + data1.results[0].id); 
        console.log(data2.origin.url); 
      
      });
    });
  });

  const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&' //url que nos da imagenes randoms

const API_URL_getFavourites = 'https://api.thecatapi.com/v1/favourites' //url de nuestras imagenes favs
 
const API_KEY = '?api_key=f8bba90a-ad5e-480b-834b-bb39c63aaec6' //api key para hacer solicitudes http

const imageRandom = document.getElementById('image1')

const secondImageRandom = document.getElementById('image2')

const refreshButton = document.getElementById('refresh')

const fetch_api = async () => {

    const request = await fetch(`${API_URL_RANDOM}${API_KEY}`) //url de imagenes randoms
    const response = await request.json()
    console.log('random')
    console.log(response)
    const img = document.querySelectorAll('.img')

    //por cada imagen que coincida con el query selector le asignaremos la imagen que nos sale de la API 
    img.forEach((image, index) => {

        image.src = response[index].url
    })
}

const fetch_api_favourites = async () => {

    const error = document.querySelector('#error')
    const request = await fetch(`${API_URL_getFavourites}${API_KEY}`) //concatenamos la ruta
    try {

        const response = await request.json() //convertimos a un json manipulable, objeto
        console.log('favs')
        console.log(response)
        const img = document.querySelector('.favourite')
        img.src = response[0].image.url //estamos diciendole que el src de la img será la imagen que nos trae la API

    } catch(err) {

        error.classList.remove('none')
        error.classList.add('alert', 'alert-danger')
        error.textContent = `Error ${request.status}. ${err.message}`//pasamos el status code y el mensaje
    }
}

const saveFavouritesMichis = async () => {

    const saveFavourites = await fetch(API_URL_getFavourites + API_KEY, {

        method: 'POST', //declaración del metodo http
        headers: {

            'Content-Type': 'application/json' //declaramos el tipo de dato que enviaremos
        },

        //convertimos a json el dato que enviaremos ya que no sabemos si podrá leer javascript puro
        body: JSON.stringify({

            image_id: "a8s" //id de la imagen del cat
        })   
    })

    console.log(saveFavourites) //debugeamos que nos tira la api favourites, que es un arreglo en si

}


window.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('load', fetch_api)
    window.addEventListener('load', fetch_api_favourites)
    refreshButton.addEventListener('click', fetch_api)
    imageRandom.addEventListener('click', saveFavouritesMichis)
    secondImageRandom.addEventListener('click', saveFavouritesMichis)

})
