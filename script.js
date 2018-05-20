
var title = $('.user-title').val();
var body = $('.user-idea').val();




$('.save-button').on('click', function() {
  var title = $('.user-title').val();
  var body = $('.user-idea').val();
   $('.user-title-output').text(title);
   $('.user-idea-output').text(body);
   addNewIdea();


   $('.idea-display').prepend('<li><h1 class="user-title-output"></h1><p class="user-idea-output"></p><img class="up-vote" src="images/upvote.svg"><img class="down-vote" src="images/downvote.svg"><hr></li>');

});



function Useridea(id,title,body,quality){
  this.id = id;
  this.title = title;
  this.body = body;
  this.quality = quality;
}


function addNewIdea(){
  this.id = $.now();
  this.title = $('.user-title').val();
  this.body = $('.user-idea').val();
  var ideaToStore = { id: this.id, title: this.title, body: this.body, quality: "swill"};
  var stringifiedIdea = JSON.stringify(ideaToStore);
  console.log(stringifiedIdea);
  localStorage.setItem(this.id, stringifiedIdea);   
}




         
// var ideaToStore = { id: "new id", title: "a new title", body: "a hot body"};
 // var stringifiedIdea = JSON.stringify(ideaToStore);
// localStorage.setItem(id, stringifiedIdea);   