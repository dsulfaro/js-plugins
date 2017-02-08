document.addEventListener("DOMContentLoaded", () => {
  let table = document.getElementById("table");
  let rows = Array.from(table.rows).slice(1)
  let i
  document.getElementById('i').addEventListener("input", e => {
    if (e.currentTarget.value == "") {
      for (i = 0; i < rows.length; i++) {
        rows[i].style.display = "";
      }
    }
    else {
      for (i = 0; i < rows.length; ++i) {
        let match = e.currentTarget.value
        if (!rows[i].children[0].innerHTML.toLowerCase().includes(match.toLowerCase())) {
          rows[i].style.display = "none"
        }
      }
    }
  });
});
