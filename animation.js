const imageContainer = document.getElementById("firstSectionCon");

let isImageOne = false;
const imageOne = "url('../assets/images/Zukunftsbild_Deutschland_2_2045.jpg')";
const imageTwo = "url('../assets/images/Zukunftsbild_Deutschland_2045.jpg')";

function changeBackground() {
  if (isImageOne) {
    imageContainer.style.backgroundImage = imageTwo;
  } else {
    imageContainer.style.backgroundImage = imageOne;
  }

  isImageOne = !isImageOne;
}

changeBackground();
setInterval(changeBackground, 10000);
