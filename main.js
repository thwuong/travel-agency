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
        console.log(index);
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
handleSliderPlace();
