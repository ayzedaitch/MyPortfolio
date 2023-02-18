let menuVisible = false;

function showHideMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function select() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

function effectSkills() {
  var skills = document.getElementById("skills");
  var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distance_skills >= 300) {
    let myskills = document.getElementsByClassName("progress");
    myskills[0].classList.add("htmlcss");
    myskills[1].classList.add("javascript");
    myskills[2].classList.add("node");
    myskills[3].classList.add("php");
    myskills[4].classList.add("sql");
    myskills[5].classList.add("c");
    myskills[6].classList.add("java");
    myskills[7].classList.add("python");
    myskills[8].classList.add("bash");
    myskills[9].classList.add("matlab");
  }
}

window.onscroll = function () {
  effectSkills();
};

const sendingBtn = document.querySelector(".sending-btn");
const sendingMsg = document.querySelector(".sending");
sendingBtn.addEventListener("click", () => {
  setTimeout(() => {
    sendingMsg.classList.add("show-sending");
  }, 900);
  setTimeout(() => {
    sendingMsg.classList.remove("show-sending");
  }, 3000);
});

const newR0 = document.getElementById("newRight0");
const newR1 = document.getElementById("newRight1");
const newR2 = document.getElementById("newRight2");
const newR3 = document.getElementById("newRight3");

const swap0 = document.getElementById("swap0");
const swap1 = document.getElementById("swap1");
const swap2 = document.getElementById("swap2");
const swap00 = document.getElementById("swap00");
const swap11 = document.getElementById("swap11");
const swap22 = document.getElementById("swap22");

if (window.screen.width <= 700) {
  newR0.classList.add("izquierda");
  newR0.classList.remove("derecha");
  swap0.innerText = "1st Year Software Engineering";
  swap00.innerText = "Preparatory Classes";

  newR1.classList.add("izq");
  newR1.classList.remove("der");
  swap1.innerText = "2022 - 2023";
  swap11.innerText = "2020 - 2022";

  newR2.classList.add("conectori");
  newR2.classList.remove("conectord");
  swap2.innerText =
    "This is the first year as a software engineering student, where we cover some basics of this field like: OOP, Hardware and so forth...";
  swap22.innerText =
    "During 2 years of preparatory classes, we covered modules of mathematics and of certain fields of engineering like: computer engineering, mechanics, hardware and so forth...";
  newR3.classList.add("circuloi");
  newR3.classList.remove("circulod");
}

const cvBtn = document.getElementById("cvBtn");

cvBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "CV";
  link.href = "img/CV-PDF.pdf";
  link.click();
});
