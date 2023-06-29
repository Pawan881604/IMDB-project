const Api = 'https://www.omdbapi.com/?apikey=4d74625b';

const search = document.getElementById("search");
let printD = document.getElementById("displayarea");

// this line get data from local storage
let favorites = JSON.parse(localStorage.getItem('movie')) || [];


// here we can stor html all data
let message = ''

// here is a conditon to check if data is exist dont push in localstorage
const fav_movie = (data) => {
    if (favorites.length > 0) {
        let matchFound = false;

        //check condition if fav movie allready exist in localstorage then dont push
        for (let i = 0; i < favorites.length; i++) {
            if (favorites[i].imdbID === data.imdbID) {
                matchFound = true;
                break;
            }
        }
        if (matchFound) {
            message = 'This movie is already on the favorites list';
            console.log('This movie is already on the favorites list');
        } else {
            favorites.push(data);
            localStorage.setItem('movie', JSON.stringify(favorites));
            message = 'Movie added to the favorites list';
            console.log('Movie added to the favorites list');
        }
    } else {
        favorites.push(data);
        localStorage.setItem('movie', JSON.stringify(favorites));
        message = 'Movie added to the favorites list';
        console.log('Movie added to the favorites list');
    }
};


// this is main function to get data from api
const a = async (movieName) => {
    try {
        let dis_store = ''; // Clear dis_store before fetching new data

        const res = await fetch(Api + `&t=${movieName}`);
        let data = await res.json();
        if (data.Response === "False") {
            dis_store += `<div><p>Movie not found</p></div>`
        }
        else {

            dis_store += `
            <li><div class="li-flex-cont"><a href="/singlepage.html?id=${data.imdbID}">
            <div class="ban-img"><img src="${data.Poster}"/></div>
            <div class="mov-det">
            <h2>${data.Title}</h2>
            <p>${data.Year}</p>
            <p>${data.Director}</p>
           
            </div> </a>
            <div><i id="fav" class="fa-sharp fa-solid fa-heart"></i></div>
          </div></li>
          <p>${message}</p>
            `
            //console.log(data)
        }



        printD.innerHTML = dis_store;

        //wen i click on fave icon this will puch all data in the fav movie

        let fav = document.getElementById('fav')
        fav.addEventListener('click', () => {
            fav_movie(data)
        })
    } catch (err) {
        console.log(err);
    }
};

//whrn user will seach anythis this will show
search.addEventListener("input", (e) => {
    a(e.target.value);
});
