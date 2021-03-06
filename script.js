var title = $(".user-title").val();
var body = $(".user-idea").val();
var quality = $(".user-quality");


    $('.delete-button').on('click', function() {
      $(this).closest("li").remove();
      localStorage.removeItem(newList[0]);
    })
  
    $(".save-button").on("click", function() {
      entryCheck();})
    
    $(".up-vote").on("click", function() {
      qualityUp();
      });
      
    $(".down-vote").on("click", function() {
      qualityDown();
      });






$(document).ready(function() {
  if (localStorage.length > 0) {
    for (var i = 0; i < localStorage.length; i++) {
      var lsKey = Object.keys(localStorage)[i];
      var ideaOutput = JSON.parse(localStorage[lsKey]);
      ideaTitle = ideaOutput.title;
      ideaBody = ideaOutput.body;
        var newCard = $(".idea-display").prepend(`
        <li>
          <h1 class="user-title-output">
            ${ideaTitle}
          </h1>
          <img src="images/delete.svg" class="delete-button">
          <p class="user-idea-output">
            ${ideaBody}
          </p>
          <img class="up-vote" src="images/upvote.svg">
          <img class="down-vote" src="images/downvote.svg">
          <p class="user-quality"></p>
          <hr>
        </li>
      `);
      };
    }});

  


function Idea(title, body, id) {
  this.id = $.now();
  this.title = $(".user-title").val();
  this.body = $(".user-idea").val();
  this.quality = "swill";
}

function addNewIdea(title, body, id) {
  newIdea = new Idea(title, body, id);
  $(".idea-display").prepend(`
    <li class="${newIdea.id}">
      <h1 class="user-title-output">
        ${newIdea.title}
      </h1>
      <img src="images/delete.svg" class="delete-button">
      <p class="user-idea-output">
        ${newIdea.body}
      </p>
      <img class="up-vote" src="images/upvote.svg">
      <img class="down-vote" src="images/downvote.svg">
      <p class="user-quality">
      ${newIdea.quality}
      </p>
      <hr>
    </li>
  `);

  storeIdea();
  retrieveIdea();
  clearInput();
}

$(".delete-button").on("click", function() {
  for (var i = 0; i < localStorage.length; i++) {
    var lsKey = Object.keys(localStorage)[i];
    var ideaOutput = JSON.parse(localStorage[lsKey]);
  }
});

function storeIdea() {
  var stringifiedIdea = JSON.stringify(newIdea);
  localStorage.setItem(newIdea.id, stringifiedIdea);
}

function retrieveIdea(id) {
  var retreivedIdea = localStorage.getItem(newIdea.id);
  var parsedIdea = JSON.parse(retreivedIdea);
  var parsedTitle = parsedIdea.title;
  var parsedBody = parsedIdea.body;
  var parsedId = parsedIdea.id;
  for (var i = 0; i < localStorage.length; i++) {
    var lsKey = Object.keys(localStorage)[i];
  }
}


function qualityDown() {
  if (this.quality === "swill") {
    $(".user-quality").text("swill");
  } else if (this.quality === "plausible") {
    $(".user-quality").text("swill");
  } else if (this.quality ==="Genius") {
    $(".user-quality").text("plausible");
  }
}

function qualityUp() {
  if (this.quality === "swill") {
    $(".user-quality").text("plausible");
    this.quality = "plausible";
  } else if (this.quality === "plausible") {
    $(".user-quality").text("Genius");
    this.quality = "Genius";
  }
}

function entryCheck() {
  if ($(".user-title").val() === "" || $(".user-idea").val() === "") {
    alert("Title and Body Entry Required!");
    return;
  } else {
    addNewIdea();
  }
}

function clearInput() {
  $(".user-title").val("");
  $(".user-idea").val("");
}
