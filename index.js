document.addEventListener('DOMContentLoaded', () => {
  const apiKey = "cfdfd510ab2d960857f9947e9d4df55c"
  const movieUrl = "https://api.themoviedb.org/3/search/movie?api_key=cfdfd510ab2d960857f9947e9d4df55c"
  const imageUrl = "https://image.tmdb.org/t/p/w500"
  const movieSearchable = document.querySelector('#movie-search')
  const searchbtn = document.querySelector('#search-btn')
  const inputElement = document.querySelector('#search-input');
  // const removebtn=document.getElementById('deletebtn') 

  function movieSection(movies) {
    return movies.map((movie) => {
      if (movie.poster_path) {
        return `<img src =${imageUrl + movie.poster_path} data-movie-id=${movie.id}/>`
      }

    })
  }

  function createMovieContainer(movies) {
    const movieElement = document.createElement('div')
    movieElement.setAttribute('class', 'movie')

    const movieTemplate = `
  <section class="section">
  ${movieSection(movies)}
  </section>
  <div class="content">
  <p id="content-close">X</p>
  </div>`;

    movieElement.innerHTML = movieTemplate;
    return movieElement;
  }

  function renderSearchMovies(data){
    movieSearchable.innerHTML='';
    const movies = data.results;
    const movieBlock = createMovieContainer(movies);
    movieSearchable.appendChild(movieBlock);
    console.log('Data', data);
  }







  searchbtn.onclick = function (event) {
    event.preventDefault();
    const value = inputElement.value;

    const newUrl = movieUrl + "&query=" + value;

    fetch(newUrl)
      .then((res) => res.json())
      .then(renderSearchMovies)
      .catch((error) => {
        console.log("Error", error);
      })
    console.log('Value', value)
    inputElement.value=''
  }

})