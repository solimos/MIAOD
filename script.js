/* 
-------------------------------------
Click in the circle to see effect
-------------------------------------
 */
let c = 0;
function toggle() {
  c % 2 == 0 ? day() : night();
  c++;
}

function night() {
  document.querySelector(".cont_circle").className =
    "cont_circle cont_circle_noche";
  document.body.style.backgroundColor = "#f2edff";
  document.querySelector(".cont_text").className = "cont_text  cont_text_noche";
  document.querySelectorAll(".cont_text > p")[0].innerHTML = "NIGHT";
}

function day() {
  document.querySelector(".cont_circle").className =
    "cont_circle cont_circle_dia";
  document.body.style.backgroundColor = "#f7f7f7";
  document.querySelector(".cont_text").className = "cont_text  cont_text_dia";

  document.querySelectorAll(".cont_text > p")[0].innerHTML = "DAY";
}