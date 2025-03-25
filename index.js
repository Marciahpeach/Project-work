document.addEventListener('DOMContentLoaded', () => {
const movieUrl= "https://www.google.com/search?sca_esv=2b28cc150f795d78&q=The+Order&stick=H4sIAAAAAAAAAFWTT27UMBTGNUhTlSlIaLpAYoU4AJM_tpNU4ggVG_bWJBk7tR3XcSw7zjE4AmsWXIMegCULdtyAJVNE3nSWv_fk932f_Xy5fvdyx3dpOjpViizX2UV_7-8O48PqvL6wqywzxJcLDxnqArL1wn6YNWsHOK9aM-deNwvLPBRdaSX0sZkmbO3CrBSxKJmH-RXziEe6cHChiQSDntB6joM4ne9H12IUgbEvgp3Ar6ckK8YaLdxI3RFCj36vdv0uSTOLlDKn9AzjvoHpXrVS9wWkM54k1rfzE7fO9Qm4cxEZ5ocU3Os4lbFIHlabRzWN6gGDmLQ19umAwTqa-6ztJjDjrdSVrsBMTflYNgL6MVU21RzEj_fazjTA_CEzZVWNZ9xXwxO2qZkgjEuVT5sA5q2hnAl2FrbGBYTlicA1s-x_OB50rgmESYgUs0rg5hIy6WqGsCJTo-UJiHW4l91UwZ6ImdN6jBDeRkai0iAeKhNzzmFPWSAlmjIF4YQkyBJ4ycYUjOAI7AQpjouawfxmipTR097IfOii9L9WH65e_f7z8_oN-vz1-4_V-81r2dzs-kN7t78J3d5Rd0_D3jXd9nqzvn0sbzfby83F7b9v9eLL-vmn7vD2o20P9tv62V_nbLPvgAMAAA&sa=X&ved=2ahUKEwjUu8m4s6OMAxUuA9sEHXztHmYQ8sMGegQIGxAK"
const form =document.querySelector('form')
const container=document.getElementById('image-container')

fetch(movieUrl) 
.then((response) => {
    return response.json();
    
}) 
.then((movie) => {
    movie.forEach((movie) => renderTask(movie));
})
.catch((error) => {
    console.error('Error:', error);
});

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let query =form.querySelector('input').value;
    console.log(query)
})

// const movies=requestAnimationFrame.json()
// function makeMovies(movies){
//     for('let movie for movies'){
//         let src =movies.show.image.medium;
//         const img=document.createElement('img') 
//         img.src=src;
//         container.appendChild(img)
//     }
// }




})