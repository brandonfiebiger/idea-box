

$('.save-button').on('click', function() {
  var title = $('.user-title').val();
  var idea = $('.user-idea').val();




  $('.user-title-output').text(title);
  $('.user-idea-output').text(idea);

  $('.idea-display').prepend('<li><h1 class="user-title-output"></h1><p class="user-idea-output"></p></li>');

});



