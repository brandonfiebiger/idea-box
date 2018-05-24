
var title = $('.user-title').val();
var body = $('.user-idea').val();
var quality = 'quality: swill';
var upVote = $('.up-vote');


  $('.delete-button').on('click', function() {
    $(this).closest('li').remove();
    
})


$('.save-button').on('click', function() {
   // $('.user-title-output').text(title);
   // $('.user-idea-output').text(body);
   // $('.user-quality').text(quality);
   // entryCheck();
   addNewIdea();
  
   $('.up-vote').on('click', function(event) {
      qualityUp();
      console.log(event.target);
});
   $('.down-vote').on('click', function() {
      qualityDown();
   })

   $('.delete-button').on('click', deleteIdea);

});


  // ${document}.ready(function(){
  //   if(localStorage.length > 0){
  //   for(var i = 0; i < localStorage.length; i++){
  //   var lsKey = Object.keys(localStorage)[i];
  //   var ideaOutput = JSON.parse(localStorage[lsKey]);
  //   console.log(lsKey);


    $(document).ready(function(){
      if(localStorage.length > 0){
        for(var i = 0; i < localStorage.length; i++){
    var lsKey = Object.keys(localStorage)[i];
    var ideaOutput = JSON.parse(localStorage[lsKey]);
    }
    }
  })

 

 function deleteIdea(){
  
if(localStorage.length > 0){
        for(var i = 0; i < localStorage.length; i++){
    var lsKey = Object.keys(localStorage)[i];
    var ideaOutput = JSON.parse(localStorage[lsKey]);
}
  localStorage.removeItem(this.lsKey);
  $().closest('li').remove();
 


}

 }       
     

function Idea(title,body,id){
  this.id = $.now();
  this.title = $('.user-title').val();
  this.body = $('.user-idea').val();
  this.quality = "swill";
}


function addNewIdea(title,body,id){
 newIdea = new Idea(title, body, id);
   $('.idea-display').prepend(`
    <li class="${newIdea.id}">
      <h1 class="user-title-output">
        ${newIdea.title}
      </h1>
      <img src="images/delete.svg" class="delete-button">
      <p class="user-idea-output">
        ${newIdea.title}
      </p>
      <img class="up-vote" src="images/upvote.svg">
      <img class="down-vote" src="images/downvote.svg">
      <p class="user-quality"></p>
      <hr>
    </li>
  `);
  
 

  storeIdea();
  retrieveIdea();
  // clearInput();
}


 


  $('.delete-button').on('click', function() {
    for(var i = 0; i < localStorage.length; i++){
    var lsKey = Object.keys(localStorage)[i];
    var ideaOutput = JSON.parse(localStorage[lsKey]);
    console.log(ideaOutput);

    }

  })


 function storeIdea(){
  var ideaToStore = { id: newIdea.id, title: newIdea.title, body: newIdea.body, quality: newIdea.quality};
  var stringifiedIdea = JSON.stringify(ideaToStore);
  localStorage.setItem(newIdea.id, stringifiedIdea); 
}

  function retrieveIdea(id){
    var retreivedIdea = localStorage.getItem(newIdea.id);
    var parsedIdea = JSON.parse(retreivedIdea); 
    var parsedTitle = parsedIdea.title;
    var parsedBody = parsedIdea.body;
    var parsedId = parsedIdea.id;
    for(var i = 0; i < localStorage.length; i++){
    var lsKey = Object.keys(localStorage)[i];
    }
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





// function entryCheck(){
//   if ($('.user-title').val() === "" || $('.user-idea').val() === "" ){
//     alert("Title and Body Entry Required!");
//     return;
//   } else {
//     addNewIdea();
//   }}



   // function clearInput(){
   //          $('.user-title').val("");
   //          $('.user-idea').val("");}


