const dotClick = (n, dots, slides) => {
  let i
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slideIndex.length }
  for (i = 0; i < slides.length; ++i) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; ++i) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[n - 1].style.display = "block"
  dots[n - 1].className += " active";
}

document.addEventListener("DOMContentLoaded", () => {

  let slideIndex = 1
  let slides = document.getElementsByClassName("myslide")
  let dots = document.getElementsByClassName("dot")
  dotClick(1, dots, slides)

  document.getElementsByClassName("dot-container")[0].addEventListener("click", e => {
    let dot = e.target.dataset.slot
    if (e.target && e.target.nodeName == "SPAN") {
      slideIndex = dot
      dotClick(dot, dots, slides)
    }
  });

  document.getElementById("prev").addEventListener("click", e => {
    slideIndex -= 1
    if (slideIndex < 1) { slideIndex = dots.length }
    dotClick(slideIndex, dots, slides);
  });

  document.getElementById("next").addEventListener("click", e => {
    slideIndex += 1
    if (slideIndex > dots.length) { slideIndex = 1 }
    dotClick(slideIndex, dots, slides)
  });



});
