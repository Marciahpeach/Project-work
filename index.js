document.addEventListener('DOMContentLoaded', () => {
  const apiKey = "cfdfd510ab2d960857f9947e9d4df55c"
  const movieUrl = "https://api.themoviedb.org/3/search/movie?api_key=cfdfd510ab2d960857f9947e9d4df55c"
  const imageUrl = "https://image.tmdb.org/t/p/w500"
  const movieSearchable = document.querySelector('#movie-search')
  const searchbtn = document.querySelector('#search-btn')
  const inputElement = document.querySelector('#search-input');
  const remove=document.getElementById('deletebtn') 

function generateUrl(path){
  const url=`https://api.themoviedb.org/3${path}?api_key=cfdfd510ab2d960857f9947e9d4df55c`
return url
}

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
    const path='/search/movie';
    const newUrl = generateUrl(path) + "&query=" + value;

    fetch(newUrl)
      .then((res) => res.json())
      .then(renderSearchMovies)
      .catch((error) => {
        console.log("Error", error);
      })
    console.log('Value', value)
    inputElement.value=''
  }


  function createIframe(video){
    const iframe=document.createElement('iframe')
    iframe.src=`https://www.youtube.com/embed/${video.key}`
    iframe.width=350;
    iframe.height=320;
    iframe.allowFullscreen=true;

    return iframe;

  }

  function createVideoTemplate(data,content){
    content.innerHTML='<p id="content-close">X</p>';
    console.log('Videos', data)
    const videos=data.result;
    const length=videos.length > 4 ? 4:videos.length;
    const iframeContainer=document.createElement('div')

    for(let i=0; i< length; i++){
      const video=videos[i]
      const iframe=createIframe(video)
      iframeContainer.appendChild(iframe)
      content.appendChild(iframeContainer)

    }
  }

document.onclick =function(event){
  const target =event.target;

  if(target.tagname.toLowerCase() === 'img'){
    const movieId=target.datasey.movieId;
    console.log('Hello World');
    console.log('Event:', event)
    const section =event.target.parentElement;
    const content=section.nextElementSibling;
    content.classList.add('content-display')
    const path=`/movie/${movieId}/videos`
    const url=generateUrl(path)

    fetch(url)
    .then((res) => res.json())
    .then((data)=>{
      createVideoTemplate(data,content)
    })
    .catch((error) => {
      console.log("Error", error);
    })


  }

  if(target.id === 'content-close'){
    const content=target.parentElement;
    content.classList.remove('content-display');
  }

}




    



  







})