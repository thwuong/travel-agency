function handleSliderPlace() {
  const btnPre = document.querySelector(".place__pre");
  const btnNext = document.querySelector(".place__next");
  const placeItems = document.querySelectorAll(".place-item");
  const maxLength = [...placeItems].length - 4;
  var index = 0;
  btnPre.addEventListener("click", function () {
    changeSlider(-1);
  });
  btnNext.addEventListener("click", function () {
    changeSlider(1);
  });

  function changeSlider(num) {
    if (num === 1) {
      index++;
      if (index <= maxLength) {
        placeItems.forEach((item) => {
          item.style = `transform : translateX(-${110 * index}%)`;
        });
      } else {
        index = 0;
        placeItems.forEach((item) => {
          item.style = `transform : translateX(-${110 * index}%)`;
        });
      }
    } else {
      index--;
      if (index < 0) {
        index = maxLength;
        placeItems.forEach((item) => {
          item.style = `transform : translateX(-${110 * index}%)`;
        });
      } else {
        placeItems.forEach((item) => {
          item.style = `transform : translateX(-${110 * index}%)`;
        });
      }
    }
  }
}
function handleSliderTour() {
  const btnPre = document.querySelector(".tour__pre");
  const btnNext = document.querySelector(".tour__next");
  const tourItems = document.querySelectorAll(".tour-item");
  const maxLength = [...tourItems].length / 3 - 1;
  var index = 0;
  btnPre.addEventListener("click", function () {
    changeSlider(-1);
  });
  btnNext.addEventListener("click", function () {
    changeSlider(1);
  });

  function changeSlider(num) {
    if (num === 1) {
      index++;
      if (index <= maxLength) {
        tourItems.forEach((item) => {
          item.style = `transform : translateX(-${315 * index}%)`;
        });
      } else {
        index = 0;
        tourItems.forEach((item) => {
          item.style = `transform : translateX(-${315 * index}%)`;
        });
      }
    } else {
      index--;
      if (index < 0) {
        index = maxLength;
        tourItems.forEach((item) => {
          item.style = `transform : translateX(-${315 * index}%)`;
        });
      } else {
        tourItems.forEach((item) => {
          item.style = `transform : translateX(-${315 * index}%)`;
        });
      }
    }
  }
}
handleSliderPlace();
handleSliderTour();
