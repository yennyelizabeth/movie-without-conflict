$(document).ready(function() {
    $('#searchForm').on('click',function(){
		var searchText = $('#searchText').val();
		getMovies(searchText);
        e.preventDefault();
        console.log(searchText);
    });
    
	function getMovies(searchText){
		//98325a9d3ed3ec225e41ccc4d360c817,'http://api.themoviedb.org/3/search/movie?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=en-US&query='
		axios.get('http://www.omdbapi.com/?apikey=3a181f1c&s=' + searchText)
			.then((response) =>{
				console.log(response);
				var movies = response.data.Search;
				var output = '';
				$.each(movies, (index, movie) => {
				output += `
				<div class="col-md-3">
				  <div class="well text-center">
					<img class="img-responsive" src="${movie.Poster}">
					<h5>${movie.Title}</h5>
					<p>${movie.Genre}</p>
					<a onclick="movieSelected('${movie.id}')" class= "btn btn-primary" href="#">Movie Details</a>
					</div>
				</div>
				`;

				//movie.poster_path
			  $('#movies').html(output);	
			  console.log('#movies');
				});
			})
			.catch((err) => {
				console.log(err);
			})	
	}
});