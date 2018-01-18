/* Funcionalidad Vista Opción Ver Película en Grupo */
$(document).ready(function() {
  /* elementos de la base de datos*/
  var musical= ['Cannibal! The Musical','Lovestruck: The Musical','College Musical','Cats'];
  var fantasy = ['Lovestruck: The Musical', 'Shrek the Musical', ]

  /**/
  var array1=[];

  /* eventos para cada tipo de genero de la pelicula*/
  $('#ciencia').click(function(){
    var newArray= '';
    array2 = musical
    array3= fantasy
    array1= $.merge(array2, array3);
    console.log(array1)
  })

  $('#romantica').click(function(){
    var newArray= '';
    array2 = musical
    array3= fantasy
    array1= $.merge(array2, array3);
  })

  /* funcion para llamar el api*/
  function apiCall(){
    var movie = Math.floor((Math.random() * array1.length-1) + 1);
    console.log(movie);
    var randomMovie =  array1[movie];
    console.log(randomMovie)
    $.getJSON('http://www.omdbapi.com/?apikey=3a181f1c&t=' + randomMovie).then(function(response){
      /*obteniendo el objeto*/
      console.log(response)
      /*var typeMovie = response.Genre;
      console.log(typeMovie);
      $('.genere').append(typeMovie);*/
      var image = response.Poster;
      console.log(image)
      /*$('#cont').append('<div >' +image + ' </div>');*/
      /*$('#cont img').append('image')*/
      if(image!=="N/A"){
        $('#imagen').attr('src', image);
      }
    })
  }
  $('#boton').click(function(){
    apiCall();
  })
});
