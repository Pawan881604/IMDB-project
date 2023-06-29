let id = new URLSearchParams(window.location.search).get('id')

let datadIV = document.querySelector('.single-data')


// this function can only p]rint sigle movie all data
const a = async () => {
    try {
        let dis_store = '';

        const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=4d74625b`);
        let data = await res.json();
    
        if (data.Response === "False") {
            dis_store += `<div><p>Movie not found</p></div>`
        }
        else {

            dis_store += `
                <div class="s-area">
                    <div class="img-area">
                        <img src="${data.Poster}" />
                    </div>
                    <div class="txt-cont">
                        <h2><span>Title:</span> <span>${data.Title}</span></h2>
                        <p><span>Plot:</span> <span>${data.Plot}</span></p>
                        <p><span>Actors:</span><span> ${data.Actors}</span></p>
                        <p><span>Country:</span> <span>${data.Country}</span></p>
                        <p><span>Director:</span><span> ${data.Director}</span></p>
                        <p><span>Language:</span><span>${data.Language}</span></p>
                        <p><span>Released:</span><span> ${data.Released}</span></p>
                        <p><span>Runtime: </span><span>${data.Runtime}</span></p>
                        <p><span>Writer:</span> <span>${data.Writer}</span></p>
                        <p><span>imdbRating: </span><span>${data.imdbRating}</span></p>
                    </div>
                </div>
            `
    
            datadIV.innerHTML = dis_store;
        }



    } catch (err) {
        console.log(err);
    }
};
a()