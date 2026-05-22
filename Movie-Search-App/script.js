const apiKey = "edfe310b";

const searchInput =
  document.getElementById("searchInput");

const searchBtn =
  document.getElementById("searchBtn");

const moviesContainer =
  document.getElementById("moviesContainer");

const errorMessage =
  document.getElementById("errorMessage");

async function searchMovies(movieName) {

  try {

    errorMessage.textContent = "";

    moviesContainer.innerHTML = "";

    const url =
      `https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`;

    const response = await fetch(url);

    const data = await response.json();

    if (data.Response === "False") {

      throw new Error(data.Error);

    }

    data.Search.forEach(movie => {

      const movieCard = document.createElement("div");

      movieCard.classList.add("movie-card");

      movieCard.innerHTML = `

        <img
          src="${movie.Poster}"
          alt="${movie.Title}"
        >

        <h3>${movie.Title}</h3>

        <p>Year: ${movie.Year}</p>

        <p>Type: ${movie.Type}</p>

      `;

      moviesContainer.appendChild(movieCard);

    });

  }

  catch (error) {

    errorMessage.textContent = error.message;

  }

}

searchBtn.addEventListener("click", () => {

  const movieName =
    searchInput.value.trim();

  if (movieName !== "") {

    searchMovies(movieName);

  }

});