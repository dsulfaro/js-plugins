document.addEventListener("DOMContentLoaded", () => {
  let acc = document.getElementsByClassName("acc-container")
  let i
  acc[0].addEventListener("click", e => {
    if (e.target && e.target.nodeName == "BUTTON") {
      e.target.classList.toggle("active")
      let panel = e.target.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      }
      else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  })

});
