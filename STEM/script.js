

document.querySelector("#q1").style.display = "block";
let qnum = 1;

function nextQuestion() {
  let thisid = "#q" + qnum;
  qnum++;
  let nextid = "#q" + qnum ;


  document.querySelector(thisid).style.display = "none";
  document.querySelector(nextid).style.display = "block";

}

document.querySelector("#next").addEventListener("click", nextQuestion);

