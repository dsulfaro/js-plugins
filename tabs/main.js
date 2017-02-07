const toggle_tabs = (e, tab) => {

  let i, tabN, tabC;

  tabN = document.getElementsByClassName("tab")
  tabC = document.getElementsByClassName("tabcontent")

  for (i = 0; i < tabN.length; ++i) {
    tabN[i].className = tabN[i].className.replace(" active", "")
  }

  for (i = 0; i < tabC.length; ++i) {
    tabC[i].style.display = "none";
  }

  document.getElementById(tab).style.display = "block"
  e.target.className += " active"
}

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("Mario").style.display = "block";
  
  document.getElementsByClassName("tabs")[0].addEventListener("click", e => {
    if (e.target && e.target.nodeName == "LI") {
      toggle_tabs(e, e.target.innerHTML)
    }
  });
});
