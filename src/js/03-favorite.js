"use strict";

// function paintFavoriteList() {
//   const previewFavoriteName = document.querySelector(".js-name-favorites");

//   for (const serie of series) {
//     const favoriteIndex = favorites.indexOf(serie.show.id);
//     const serieName = serie.show.name;
//     if (favoriteIndex === -1) {
//       previewFavoriteName.innerHTML = serieName;
//       console.log("serie fav");
//     }
//   }
// }

// handle favorite function

function markFavoriteSeries(ev) {
  const clicked = parseInt(ev.currentTarget.id);
  const indexOfFavorite = favorites.indexOf(clicked);

  if (indexOfFavorite === -1) {
    favorites.push(clicked);
  } else {
    favorites.splice(indexOfFavorite, 1);
  }
  paintSearchEngine();
  listenFavoriteSeries();
  setLocalStorageFav();
}

//handle remove favorite function

// function removeFavorite() {
//   console.log("quita favorito");
// }

// listen favorite function

function listenFavoriteSeries() {
  const seriesItems = document.querySelectorAll(".js-series-item");
  for (const seriesItem of seriesItems) {
    seriesItem.addEventListener("click", markFavoriteSeries);
  }
}

// listen remove favorite btn
function listenRemoveFavorite() {
  const btnRemoveFavs = document.querySelectorAll(".js-remove-favorite");
  for (const btnRemoveFav of btnRemoveFavs) {
    btnRemoveFav.addEventListener("click", removeFavorite);
  }
}