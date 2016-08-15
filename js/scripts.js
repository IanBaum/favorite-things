$(document).ready(function(){
  $("form#userInfo").submit(function(event) {
    event.preventDefault();


    var userAnswers = [$("#userName").val(),$("#userFood").val(),$("#userAnimal").val(),$("#userDrink").val()];
    alert(userAnswers);

    var reorderedAnswers =
    [$("#userFood").val(), $("#userName").val(), $("#userDrink").val()]
    alert(reorderedAnswers);

    reorderedAnswers.push(userAnswers[2]);

    $("#answerOne").text(reorderedAnswers[0]);
    $("#answerTwo").text(reorderedAnswers[1]);
    $("#answerThree").text(reorderedAnswers[2]);
    $("#answerFour").text(reorderedAnswers[3]);

  });

  var iceCreams = ["chocolate", "vanilla", "strawberry", "rocky road", "mint chocolate chip"];
  iceCreams.forEach(function(iceCream){
    $("#iceCreams").append("<li>" + iceCream + "</li>")
  })

});
