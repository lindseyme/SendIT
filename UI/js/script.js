function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

function upFunction() {
  document.getElementById("myDropup").classList.toggle("show");
}
window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropup = document.getElementById("myDropup");
    if (myDropup.classList.contains('show')) {
      myDropup.classList.remove('show');
    }
  }
}



//accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}