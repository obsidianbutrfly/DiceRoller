$(document).ready(function() {
    var randImage20, randImage12, randImage10, randImage8, randImage6, randImage4;
    $('.rollDice20').on('click', function() {
      randImage20 = Math.floor(Math.random() * 20) + 1;
      $('.imageGoHere20').html('');
      $('.random20').html(randImage20);
      $('.holder20 img#i' + randImage20).clone().appendTo('.imageGoHere20');
    });
    $('.imageGoHere20').html(randImage20);
    $('.rollDice12').on('click', function() {
      randImage12 = Math.floor(Math.random() * 12) + 1;
      $('.imageGoHere12').html('');
      $('.random12').html(randImage12);
      $('.holder12 img#e' + randImage12).clone().appendTo('.imageGoHere12');
    });
    $('.imageGoHere20').html(randImage20);
    $('.rollDice10').on('click', function() {
      randImage10 = Math.floor(Math.random() * 10) + 1;
      $('.imageGoHere10').html('');
      $('.random10').html(randImage10);
      $('.holder10 img#a' + randImage10).clone().appendTo('.imageGoHere10');
    });
    $('.imageGoHere10').html(randImage10);
    $('.rollDice8').on('click', function() {
      randImage8 = Math.floor(Math.random() * 8) + 1;
      $('.imageGoHere8').html('');
      $('.random8').html(randImage8);
      $('.holder8 img#b' + randImage8).clone().appendTo('.imageGoHere8');
    });
    $('.imageGoHere8').html(randImage8);

    $('.rollDice6').on('click', function() {
      randImage6 = Math.floor(Math.random() * 6) + 1;
      $('.imageGoHere6').html('');
      $('.random6').html(randImage6);
      $('.holder6 img#c' + randImage6).clone().appendTo('.imageGoHere6');
    });
    
    $('.imageGoHere6').html(randImage6);
    $('.rollDice4').on('click', function() {
      randImage4 = Math.floor(Math.random() * 4) + 1;
      $('.imageGoHere4').html('');
      $('.random4').html(randImage4);
      $('.holder4 img#d' + randImage4).clone().appendTo('.imageGoHere4');
    });
    $('.imageGoHere4').html(randImage4);
  });