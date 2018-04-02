//business logic
function Info(location, landmark, time_of_year, notes) {
  this.location = location;
  this.landmark = landmark;
  this.time_of_year = time_of_year;
  this.notes = notes;

}

Info.prototype.Vacation = function(){
  return this.location ;
}




// user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var userLocation = $("#location").val();
    var userLandmark = $("#landmark").val();
    var userTimeofYear = $("#time-of-year").val();
    var userNotes = $("#notes").val();

    var userInput = new Info(userLocation, userLandmark, userTimeofYear, userNotes)

    $("ul#Places").append("<li><span class='places'>" + userInput.Vacation() + "</span></li>");

    $(".places").last().click(function(){
      $("#show-place").show();
      $("#show-place h2").text(userInput.location);
      $(".location").text(userInput.location);
      $(".landmark").text(userInput.landmark);
      $(".time-of-year").text(userInput.time_of_year);
      $(".notes").text(userInput.notes);
    });

    $("input#location").val("");
    $("input#landmark").val("");
    $("input#time_of_year").val("");
    $("input#notes").val("");
  });

  });
