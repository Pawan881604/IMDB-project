


// this line get data from local storage
let favorites = JSON.parse(localStorage.getItem('movie')) || [];

// this is main function to print data in fav page
const print_d = () => {

  let fav_stor = '';
  let dataPrint = document.querySelector('.print-data')

  //this loop print all data in fave page
  for (let i = 0; i < favorites.length; i++) {
    fav_stor += `
        <li><div class="li-flex-cont"><a href="/singlepage.html?id=${favorites[i].imdbID}">
        <div class="ban-img"><img src="${favorites[i].Poster}"/></div>
        <div class="mov-det">
        <h2>${favorites[i].Title}</h2>
        <p>${favorites[i].Year}</p>
        <p>${favorites[i].Director}</p>
        <p>${favorites[i].Country}</p>
        </div> </a>
        <div class="remove_btn">X</div>
      </div></li>
        `
  }
  dataPrint.innerHTML = fav_stor

  // this event can remove movie item from list
  let removeBtn = document.querySelectorAll('.remove_btn')
  removeBtn.forEach((e, i) => {
    e.addEventListener('click',()=>{
      favorites.splice(i, 1);
      localStorage.setItem('movie', JSON.stringify(favorites));
      print_d();
    })
  })


}
print_d()




//---------------------


