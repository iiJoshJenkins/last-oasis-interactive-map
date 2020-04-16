window.onload = () => {
  drawMap();
  window.addEventListener("resize", drawMap);
};

const drawMap = () => {
  const canvas = document.getElementById("map");
  const context = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const imageObj = new Image();
  imageObj.src = "./images/interactiveMap.png";

  imageObj.onload = function () {
    context.drawImage(imageObj, 0, -35);
  };
};
