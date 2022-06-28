// Toggle between hide or show function:

function HideNshow(event) {
  var elName = event.target.id;
  var qNumber = elName[1];
  var answer = document.getElementById(`answer${qNumber}`);
  var Q = document.getElementById(`Q${qNumber}`);
  var Btn = document.getElementById(`btn--${qNumber}`);
  if (answer.style.display === "") {
    answer.style.display = "block";
    Q.style.color = "black";
    Q.style.fontWeight = "700";
    Btn.classList = "clicked";
  } else {
    answer.style.display = "";
    Q.style.color = "";
    Q.style.fontWeight = "";
    Btn.classList = "";
  }
}
