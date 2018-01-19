/* Funcionalidad Vista Opción Ver Película Sólo */
$(document).ready(function() {
  /* elementos de la data*/
  var musical = ['Cannibal! The Musical', 'Lovestruck: The Musical', 'College Musical', 'Cats'];
  var fantasy = ['Lovestruck: The Musical', 'Shrek the Musical'];
  var accion = ['Star Wars', 'Wonder Woman', 'Scott Pilgrim vs. the World', 'Tropic Thunder', 'Pirates of the Caribbean', 'Shaolin Soccer', 'Airbag'];
  var animada = ['Up', 'Moana'];
  var aventura = ['Star Wars', 'Up', 'Moana', 'Pirates of the Caribbean', 'Back to the Future', 'Wonder Woman'];
  var cienciaficcion = ['The Adjustment Bureau', 'Back to the Future'];
  var comedia = ['Up', 'Moana', 'Scott Pilgrim vs. the World', 'Tropic Thunder', 'Shaolin Soccer', 'Airbag', 'Back to the Future'];
  var drama = ['Night and Day'];
  var erotico = ['Fifty Shades Darker'];
  var romantica = ['Possession ', ' Date Movie, Love Actually', 'Sun, Sand & Romance', 'Modern Romance'];
  var suspenso = ['The Sixth Sense ', ' Vertigo', 'Psycho', 'Hitchcock', 'Memento'];
  var terror = ['Raising Cain', ' American Nightmare', 'The grudge', 'Grave Halloween', 'The others'];

  /* eventos para cada tipo de genero de la pelicula*/
  var array1 = [];
  /* evento para el género accion*/
  $('#action').click(function() {
    array1 = accion;
    console.log(array1);
  });
  /* evento para el género animado*/
  $('#animada').click(function() {
    array1 = animada;
    console.log(array1);
  });
  /* evento para el género aventura*/
  $('#aventura').click(function() {
    array1 = aventura;
    console.log(array1);
  });
  /* evento para el género ciencia ficción*/
  $('#cienciaficcion').click(function() {
    array1 = cienciaficcion;
    console.log(array1);
  });
  /* evento para el género comedia*/
  $('#comedia').click(function() {
    array1 = comedia;
    console.log(array1);
  });
  /* evento para el género drama*/
  $('#drama').click(function() {
    array1 = drama;
    console.log(array1);
  });
  /* evento para el género erótico*/
  $('#erotico').click(function() {
    array1 = erotico;
    console.log(array1);
  });
  /* evento para el género fantasia*/
  $('#fantasy').click(function() {
    array1 = fantasy;
    console.log(array1);
  });
  /* evento para el género musical*/
  $('#musical').click(function() {
    array1 = musical;
    console.log(array1);
  });
  /* evento para el género romantica*/
  $('#romantica').click(function() {
    array1 = romantica;
    console.log(array1);
  });
  /* evento para el género suspenso*/
  $('#suspenso').click(function() {
    array1 = suspenso;
    console.log(array1);
  });
  /* evento para el género terror*/
  $('#terror').click(function() {
    array1 = terror;
    console.log(array1);
  });
  /* funcion para llamar el api*/
  function apiCall() {
    /* generando elementos aleatorios*/
    var movie = Math.floor((Math.random() * array1.length - 1) + 1);
    console.log(movie);
    /* obteniendo la película aleatoria*/
    var randomMovie = array1[movie];
    console.log(randomMovie);
    /* obteniendo los datos con el api*/
    $.getJSON('http://www.omdbapi.com/?apikey=3a181f1c&t=' + randomMovie).then(function(response) {
      /* obteniendo el objeto*/
      console.log(response);
      /* var typeMovie = response.Genre;
      console.log(typeMovie);
      $('.genere').append(typeMovie);*/
      /* obteniendo la imagen*/
      var image = response.Poster;
      console.log(image);
      /* $('#cont').append('<div >' +image + ' </div>');*/
      /* $('#cont img').append('image')*/
      /* validando si tiene imagen*/
      if (image !== 'N/A') {
        $('#imagen').attr('src', image);
      }
    });
  }
  /* generando las imagenes cuando hay click */
  $('#boton').click(function() {
    apiCall();
  });
  /* validando el ingreso del nombre*/
  $('#first-name').keyup(function() {
    /* obteniendo el valor*/
    var $inputName = $(this).val();
    /* expresion para numeros*/
    var $expresion1 = /[1-9]/;
    /*  se valida para que solo se ingrese letras y no numeros*/
    if ($inputName.match($expresion1)) {
      alert('Solo se ingresa letras');
      $(this).val('');
    }
  });
});
