$(document).ready(function() {

  $("#things form").submit(function(event){

    var iceCream = $("input#ice-cream").val();
    var city = $("input#city").val();
    var TVShow = $("input#TV-show").val();

    var array1 = [iceCream, city, TVShow];

    var array2 = array1.slice();
    var array2 = [array1[1], array1[0], array1[2]];

    $("#output ul").append("<li>" + array2[0] + "</li>");
    $("#output ul").append("<li>" + array2[1] + "</li>");
    $("#output ul").append("<li>" + array2[2] + "</li>");

    event.preventDefault();

  });
});
