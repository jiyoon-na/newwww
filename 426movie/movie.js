
//문제1.이해가 안된 상황에서 일단 하고봄... 
//문제2 나름 따라서 해보겠다고 여기저기 보고 따라 했다가 더 헷갈려짐..  
 //인기영화 데이터
function searchmovies() {

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzk5YmZkZDVkMmE0MDNkMTUwMzg3MDJlMTRkOTE1YyIsInN1YiI6IjY2MmI1MDhlMmZlMmZhMDExYzk2ZjFiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UfHA2B5OPqOxeSncD_zu4IoDNIO4x-5lzNS-TSph2wA'
    }
  };
const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200'
}
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
//이 URL로 웹 통신을 요청한다. 괄호 안에 다른 것이 없다면 GET!
	.then(res => res.json()) 
//통신 요청을 받은 데이터는 res라는 이름으로 JSON화 한다
	.then(data => { 
		let rows = data['results'];
        rows.array.forEach(a => {
            
        });
        console.log(data) // 개발자 도구에 찍어보기
        
        const cardList = document.querySelector('.col');
        cardList.innerHTML = '';

        let temp_html = `
            <>`
        
	}) 
//JSON 형태로 바뀐 데이터를 data라는 이름으로 붙여 사용한다
    .then(response => response.json(a399bfdd5d2a403d15038702e14d915c))
    .then(response => console.log(response))
    .catch(err => console.error(err));

    async function getMovies(url) {
        const res = await fetch(url)
        const data = await res.json()
    
        showMovies(data.results)
    }
    movieEl.innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}">
    <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
        <h3>Overview</h3>
        ${overview}
    </div>
`

function hey1() {
   let url = 'https://api.themoviedb.org/3/movie/550?api_key=a399bfdd5d2a403d15038702e14d915c'
    fetch(url).then(res => res.json()).then(data => {
        console.log('id = ' + data['genres']['0']['id'])
    })
  alert('패치결과물');
  
}
function hey2() {
    alert('영화아이디2');
}