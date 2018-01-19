/* Funcionalidad Vista Opción Ver Película en Grupo */
$(document).ready(function() {
  // declara la variable que escribe el html
 var iconsChoose = '<div class="col-xs-12 col-sm-4 select-gender">' +  
  '<div class="col-xs-10  input-name"><input type="text" placeholder="Escribe tu nombre" class="form-control"></div>' +
  '<h3 class="col-xs-12">¿Que Género prefieres?</h3>' +
  '<div class="icons-gender">' +
    '<div class="genders col-xs-3"><img src="../assets/icons/icons-03.png" alt="accion"><p>Acción</p></div>' +      
    '<div class="genders col-xs-3"><img src="../assets/icons/icons-01.png" alt="animado"><p>Animado</p></div>' + 
    '<div class="genders col-xs-3"><img src="../assets/icons/icons-09.png" alt="aventura"><p>Aventura</p></div>' +   
    '<div class="genders col-xs-3"><img src="../assets/icons/icons-06.png" alt="Ciencia ficción"><p>C. Ficción</p></div>' +  
    '<div class="genders col-xs-3"><img src="../assets/icons/icons-11.png" alt="Comedia"><p>Comedia</p></div>' +     
    '<div class="genders col-xs-3"><img src="../assets/icons/icons-10.png" alt="Drama"><p>Drama</p></div>' + 
    '<div class="genders col-xs-3"><img src="../assets/icons/icons-12.png" alt="Erotico"><p>Erótico</p></div>' +   
    '<div class="genders col-xs-3"><img src="../assets/icons/icons-02.png" alt="Fantasía"><p>Fantasía</p></div>' +      
    '<div class="genders col-xs-3"><img src="../assets/icons/icons-07.png" alt="Musical"><p>Musical</p></div>' + 
    '<div class="genders col-xs-3"><img src="../assets/icons/icons-08.png" alt="Romantica"><p>Romantica</p></div>' +   
    '<div class="genders col-xs-3"><img src="../assets/icons/icons-05.png" alt="Suspenso"><p>Suspenso</p></div>' +      
    '<div class="genders col-xs-3"><img src="../assets/icons/icons-04.png" alt="Terror"><p>Terror</p></div>' + 
  '</div>' +
  '</div>';
  //selecciona el contenedor para los cuadros
  var chooseGender = $('#choose-gender');
// el evento
  $('#person-number').change(function() {
    switch (true) {
    case event.target.value === '1':
      chooseGender.html('');
      $('.carousel-temp').show();
      break;
    case event.target.value === '2':
      chooseGender.html('');
      $('.carousel-temp').hide();
      chooseGender.append(iconsChoose + iconsChoose);
      break;
    case event.target.value === '3':
      chooseGender.html('');
      $('.carousel-temp').hide();
      $('#choose-gender').append(iconsChoose + iconsChoose + iconsChoose);
      break;
    case event.target.value === '4':
      chooseGender.html('');
      $('.carousel-temp').hide();
      $('#choose-gender').append(iconsChoose + iconsChoose + iconsChoose + iconsChoose);
      break;
    case event.target.value === '5':
      chooseGender.html('');
      $('.carousel-temp').hide();
      $('#choose-gender').append(iconsChoose + iconsChoose + iconsChoose + iconsChoose + iconsChoose);
      break;
    };
  });
  
// melissa y yenny
  /*Arreglos con Preferencias existentes en la API*/
  var musical= ['Cannibal! The Musical','Lovestruck: The Musical','College Musical','Cats'];
  var fantasy = ['Lovestruck: The Musical', 'Shrek the Musical']
  var ficcion = ['alien', 'batman', 'lego','mascara','Cannibal! The Musical'];  
  var accion = ['Star Wars', 'Wonder Woman', 'Scott Pilgrim vs. the World', 'Tropic Thunder', 'Pirates of the Caribbean', 'Shaolin Soccer', 'Airbag'];
  var animada = ['Up', 'Moana'];
  var aventura = ['Star Wars', 'Up','Moana','Pirates of the Caribbean', 'Back to the Future', 'Wonder Woman'];
  var cienciaficcion = ['The Adjustment Bureau', 'Back to the Future'];
  var comedia = ['Up','Moana', 'Scott Pilgrim vs. the World','Tropic Thunder', 'Shaolin Soccer', 'Airbag', 'Back to the Future'];
  var drama = ['Night and Day'];
  var erotico = [];
  var romantica = ['Possession ',' Date Movie, Love Actually','Sun, Sand & Romance','Modern Romance'];
  var suspenso = ['The Sixth Sense ',' Vertigo', 'Psycho','Hitchcock', 'Memento'];
  var terror = ['Raising Cain',' American Nightmare', 'The grudge','Grave Halloween', 'The others'];

  /**/
  var array1=[];

  /* eventos para cada tipo de genero de la pelicula*/
  var total=[];
  var flag = 0;
  
  $('#musical').click(function(){	
    flag = 1;
    alert(flag);
    total=$.merge(total,musical);
  })
  
  $('#fantasy').click(function(){
     flag = 2;
     alert(flag);
     total=$.merge(total,fantasy);   
  })
  
  $('#ficcion').click(function(){
    flag = 3 ;
    total=$.merge(total,ficcion);  
    })
  
  $('#accion').click(function(){
    flag = 4 ;
    total=$.merge(total,accion); 
  })
  
  $('#animada').click(function(){
    flag = 5 ;
    total=$.merge(total,accion);  
  })
  
  $('#aventura').click(function(){
    flag = 6 ;
    total=$.merge(total,aventura); 
  })

  $('#cienciaficcion').click(function(){
    flag = 7 ;
    total=$.merge(total,aventura);
  })
  
  $('#comedia').click(function(){
    flag = 8 ;
    total=$.merge(total,aventura);
  })
 
  $('#drama').click(function(){
    flag = 9 ;
    total=$.merge(total,aventura);
  })

  $('#erotico').click(function(){
    flag = 10 ;
    total=$.merge(total,aventura);
  })

  $('.romantica').click(function(){
    flag = 11 ;
    total=$.merge(total,aventura);
    alert('romantica');
  })
  
  $('#suspenso').click(function(){
    flag = 12 ;
    total=$.merge(total,aventura);
  })

  $('#suspenso').click(function(){
    flag = 13 ;
    total=$.merge(total,aventura);
  })
  
  $('#terror').click(function(){
    flag = 14 ;
    total=$.merge(total,aventura);
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
