const choice = ["Stone", "Paper", "Scissor"];
const compchoice = () => {
  let ans = Math.floor(Math.random() * 3);
  console.log("Computer choice is " + choice[ans]);
  return choice[ans];
};
let win = 0;
let loose = 0;
let draw = 0;
let games = 0;
let totalgames = 0;

function spsfn(a) {
  const userchoice = a;
  imagedisplay(userchoice, 1);
  const computerchoice = compchoice();
  imagedisplay(computerchoice, 2);

  if (userchoice == "reset") {
    let table = document.getElementById("rowid2");
    let newrow = table.insertRow();

    let col1 = newrow.insertCell(0);
    let col2 = newrow.insertCell(1);
    let col3 = newrow.insertCell(2);
    let col4 = newrow.insertCell(3);

    col1.innerHTML = win;
    col2.innerHTML = loose;
    col3.innerHTML = draw;
    col4.innerHTML = games;

    document.getElementById("cell1").innerHTML = "0";
    document.getElementById("cell2").innerHTML = "0";
    document.getElementById("cell3").innerHTML = "0";
    document.getElementById("cell4").innerHTML = "0";
    win = 0;
    loose = 0;
    draw = 0;
    games = 0;
  } else {
    let remove = document.getElementById("cd");
    let outres = getoutcome(userchoice, computerchoice);
    updatescore(outres);
    let updatemessage = message(outres);

    if (remove) {
      let button = remove.querySelector("button");
      if (button) {
        button.textContent = updatemessage;
      }
    }
  }
  games = win + loose + draw;

  document.getElementById("cell1").innerHTML = win;
  document.getElementById("cell2").innerHTML = loose;
  document.getElementById("cell3").innerHTML = draw;
  document.getElementById("cell4").innerHTML = games;
}
function imagedisplay(userchoice, a) {
  let userimage;
  if (a == 1) {
    userimage = document.getElementById("userimagegenerated");
  } else {
    userimage = document.getElementById("computerimagegenerated");
  }

  let img = document.createElement("img");
  if (userchoice == "Stone")
    img.src =
      "https://tse3.mm.bing.net/th?id=OIP.At55B00vxjh56AMvY4t2ZQAAAA&pid=Api&P=0&h=180";
  else if (userchoice == "Paper")
    img.src =
      "https://tse1.mm.bing.net/th?id=OIP.0gPDMc2eLvNq1MknlIdDZgAAAA&pid=Api&P=0&h=180";
  else
    img.src =
      "https://tse3.mm.bing.net/th?id=OIP.UBL4HIAWxguMBR4a3Y0pyAAAAA&pid=Api&P=0&h=180";

  let oldimg = userimage.querySelector("img");
  if (oldimg) userimage.replaceChild(img, oldimg);
  else userimage.appendChild(img);
}
function getoutcome(userchoice, computerchoice) {
  if (
    (userchoice == "Stone" && computerchoice == "Scissor") ||
    (userchoice == "Paper" && computerchoice == "Stone") ||
    (userchoice == "Scissor" && computerchoice == "Paper")
  ) {
    return "win";
  } else if (userchoice == computerchoice) {
    return "draw";
  } else {
    return "loose";
  }
}
function updatescore(outcome) {
  if (outcome === "win") {
    win++;
  } else if (outcome === "loose") {
    loose++;
  } else {
    draw++;
  }
}
function message(outres) {
  switch (outres) {
    case "win":
      return "YOU WON";
    case "draw":
      return "ITS'S A DRAW";
    case "loose":
      return "YOU LOSE";
    default:
      return "";
  }
}
