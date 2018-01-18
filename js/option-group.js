/* Funcionalidad Vista Opción Ver Película en Grupo */
$(document).ready(function() {

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
  var chooseGender = $('#choose-gender');

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
});
