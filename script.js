const api_key=" your_api_key";

// const ImageBaseUrl = `https://image.tmdb.org/t/p/w200`

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
.then(response=>response.json())
.then(data=>{
     const resultArr = data.results;
      resultArr.forEach(movie =>{
        const poster_path=movie.poster_path;
        const movieTitle= movie.original_title;
        const backUrl=ImageBaseUrl+poster_path;
        document.getElementById("cardContainer").innerHTML+= `<div class="card" style="background-image:url(${backUrl});"></div>`;

    })
     
    
})



document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
});
