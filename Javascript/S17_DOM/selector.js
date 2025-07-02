function changeContent() {
  var h2_DomElement = document.querySelector("h2");

  h2_DomElement.textContent = "Manipulated the DOM";

  //js code to add styles
  h2_DomElement.style.color = "red";
  h2_DomElement.style.backgroundColor = "black";
  h2_DomElement.style.padding = "20px";

  var p_DomElement = document.querySelector(".para");
  p_DomElement.style.color = "blue";

  var btn_DomElement = document.querySelector("#btn");
  btn_DomElement.style.padding = "15px 20px";
  btn_DomElement.style.backgroundColor = "black";
  btn_DomElement.style.color = "white";
  btn_DomElement.style.border = "none";
  btn_DomElement.style.borderRadius = "10px";

  var count = 0;
  for (var key in h2_DomElement.style) {
    console.log(key);
    count++;
  }
  console.log(count);
}

function changeBgColorToBlack() {
  var button = document.querySelector("#btn");
  button.style.backgroundColor = "black";
}

function changeBgColorToGreen() {
  var button = document.querySelector("#btn");
  button.style.backgroundColor = "green";
}

function changeParaFontColorToBlue() {
  var p = document.querySelector(".para");
  p.style.color = "blue";
  p.style.fontSize = "17px";
}

function changeParaFontColorToCoral() {
  var p = document.querySelector(".para");
  p.style.color = "coral";
  p.style.fontSize = "27px";
}
