var triangle = function(a, b, c) {

  var ab = a + b;
  var bc = b + c;
  var ca = c + a;

  if ( ab < c || bc < a || ca < b) {
    return "not a triangle"
  } else if (a === b && b === c && c === a) {
    return "equilateral"
  } else if (a !== b && b !== c && c !== a) {
    return "scalene"
  } else {
    return "isosceles"
  }
}

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var a = parseInt($("input#a").val());
    var b = parseInt($("input#b").val());
    var c = parseInt($("input#c").val());
    var triangleType = triangle(a, b, c);
    var newTriangle = { sideA: a, sideB: b, sideC: c, triangleType: triangleType };

    if (newTriangle.triangleType === "equilateral") {
      $('ul#equilateral').append("<li>"
        + newTriangle.sideA + ", "
        + newTriangle.sideB + ", "
        + newTriangle.sideC + "</li>");
    } else if (newTriangle.triangleType === "isosceles") {
      $('ul#isosceles').append("<li>"
        + newTriangle.sideA + ", "
        + newTriangle.sideB + ", "
        + newTriangle.sideC + "</li>");
    } else if (newTriangle.triangleType === "scalene") {
        $('ul#scalene').append("<li>"
        + newTriangle.sideA + ", "
        + newTriangle.sideB + ", "
        + newTriangle.sideC + "</li>");
    } else {
      alert("Fail. This is not a triangle!")
    }

  $('input#a').val("");
  $('input#b').val("");
  $('input#c').val("");

  event.preventDefault();
  });

});
