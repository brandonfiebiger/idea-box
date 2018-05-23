
var title = $('.user-title').val();
var body = $('.user-idea').val();
var quality = 'quality: swill';
var upVote = $('.up-vote');





$('.save-button').on('click', function() {
   $('.user-title-output').text(title);
   $('.user-idea-output').text(body);
   $('.user-quality').text(quality);
   entryCheck();
  



   $('.idea-display').prepend(`
    <li>
      <h1 class="user-title-output"></h1>
      <img src="images/delete.svg" class="delete-button">
      <p class="user-idea-output"></p>
      <img class="up-vote" src="images/upvote.svg" type="button">
      <img class="down-vote" src="images/downvote.svg">
      <p class="user-quality"></p>
      <hr>
    </li>
    `);

   $('.up-vote').on('click', function(event) {
      qualityUp();
      console.log(event.target);
});
   $('.down-vote').on('click', function() {
      qualityDown();
   })

   $('.delete-button').on('click', function() {
    $(this).closest('li').remove();
    localStorage.removeItem(id);
})

});



function addNewIdea(){
  this.id = $.now();
  this.title = $('.user-title').val();
  this.body = $('.user-idea').val();
  this.quality = $('.user-quality').val();

  var ideaToStore = { id: this.id, title: this.title, body: this.body, quality: this.quality};
  var stringifiedIdea = JSON.stringify(ideaToStore);
  localStorage.setItem(this.id, stringifiedIdea); 
  var retreivedIdea = localStorage.getItem(this.id);
  var parsedIdea = JSON.parse(retreivedIdea); 
  var parsedtitle = parsedIdea.title;
 

  $('.delete-button').on('click', function() {
    $(this).closest('li').remove();
    localStorage.removeItem(id);
  })




}


function displayIdea(){
for(var i = 0; i < localStorage.length; i++){
  var lsKey = Object.keys(localStorage)[i];
  var ideaOutput = JSON.parse(localStorage[lsKey]);

   


  $('.idea-display').prepend(`
    <li>
      <h1 class="user-title-output">
        ${ideaOutput.title}
      </h1>
      <img src="images/delete.svg" class="delete-button">
      <p class="user-idea-output">
        ${ideaOutput.body}
      </p>
      <img class="up-vote" src="images/upvote.svg">
      <img class="down-vote" src="images/downvote.svg">
      <p class="user-quality"></p>
      <hr>
    </li>
  `);
}






}

function qualityDown() {
  if (this.quality = 'swill') {
    $('.user-quality').text('swill');
  } else if (this.quality = 'plausible') {
    $('.user-quality').text('swill');
  } else if (this.quality = 'Genius') {
    $('.user-quality').text('plausible');
  }
}

function qualityUp() {
  if (this.quality = 'swill') {
    $('.user-quality').text('plausible');
  } else if (this.quality = 'plausible') {
    $('.user-quality').text('Genius');
  }
}





function entryCheck(){
  if ($('.user-title').val() === "" || $('.user-idea').val() === "" ){
    alert("Title and Body Entry Required!");
    return;
  } else {
    addNewIdea();
  }
}





