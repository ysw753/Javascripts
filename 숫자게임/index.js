const numSettingForm = document.querySelector("#numSettingForm");
const limitNumInput = numSettingForm.querySelector("#limitNumInput");
const guessNumInput = numSettingForm.querySelector("#guessNumInput");

const myChooseNum = document.querySelector(".myChooseNum");
const win_lose_text = document.querySelector(".win_lose_text");
const machinChooseNumText = document.querySelector(".machinChooseNum");

function guessBumBtnClick(event) {
    event.preventDefault();
    const limitNum = parseInt(limitNumInput.value);
    const guessNum = parseInt(guessNumInput.value);
    localStorage.setItem("limitNum", limitNum);
    localStorage.setItem("guessNum", guessNum);
    myChooseNum.innerText = guessNum;
    const machinChooseNum = Math.round(Math.random() * limitNum);
    machinChooseNumText.innerText = machinChooseNum;

    if (guessNum === machinChooseNum) {
        win_lose_text.innerText = "You Win! ~~Congratulation~~~";
    }
    else {
        win_lose_text.innerText = "You lost^^";
    }
}



numSettingForm.addEventListener("submit", guessBumBtnClick);


