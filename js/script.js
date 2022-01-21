let test = document.getElementById("example");

test.addEventListener("mouseover", function (event) {
  //highlight the mouseover target
  event.target.style.color = "red";
}, false);

test.addEventListener("mouseout", function (event) {
  // highlight the mouseout target
  event.target.style.color = "black";
}, false);