window.onload = () => {
  var canvas = document.getElementById("map");
  var context = canvas.getContext("2d");
  var imageObj = new Image();
  imageObj.src = "./images/interactiveMap.png";
  imageObj.onload = function () {
    context.drawImage(imageObj, 0, 0);
  };
};
