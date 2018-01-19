$(document).ready(function() {

    $('#searchForm').on('click',function(){
		var searchText = $('#searchText').val();
		getMovies(searchText);
        preventDefault();
      
    });
    
	function getMovies(searchText){
		//98325a9d3ed3ec225e41ccc4d360c817,'http://api.themoviedb.org/3/search/movie?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=en-US&query='
		axios.get('http://www.omdbapi.com/?apikey=3a181f1c&s=' + searchText)
			.then((response) =>{
				console.log(response);
				$('#searchText').val();
				var movies = response.data.Search;
				var output = '';
				$.each(movies, (index, movie) => {
				output += `
				<div class="col-sm-6 col-md-3">
				  <div class="well text-center center-block">
					<img class="img-responsive center-block" src="${movie.Poster}">
					<h5 class="color-h5">${movie.Title}</h5>

					<a onclick="movieSelected('${movie.id}')" class= "btn btn-coincidencia" href="#">Movie Details</a>
					</div>
				</div>
				`;

          // movie.poster_path
			  $('#movies').html(output);	
			  console.log('#movies');
        });
      })
      .catch((err) => {
        console.log(err);
      });	
  }
});