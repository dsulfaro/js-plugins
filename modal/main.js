document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("open-modal").addEventListener("click", e => {
    let modal = document.getElementsByClassName("modal")[0]
    modal.style.display = "block";
  });

  document.getElementById("close-modal").addEventListener("click", e => {
    let modal = document.getElementsByClassName("modal")[0]
    console.log(modal)
    modal.style.display = "none";
  })
});
