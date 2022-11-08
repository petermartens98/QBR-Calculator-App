const tdAmountNumber = document.getElementById("tdAmount");
const intAmountNumber = document.getElementById("intAmount");
const compAmountNumber = document.getElementById("compAmount");
const attAmountNumber = document.getElementById("attAmount");
const ydsAmountNumber = document.getElementById("ydsAmount");

const form = document.getElementById("qbrCalcForm");

const qbrDisplay = document.getElementById("qbrDisplay");

function calc_QBR(td, int, comp, att, yds){
    let a = ((comp/att)-.3)*5;
    let b =  ((yds/att)-3)*0.25;
    let c = (td/att)*20;
    let d = 2.375 - ((int/att)*25);
    let qbr = ((a+b+c+d)/6)*100;
    qbr = qbr.toFixed(3);
    return qbr;
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const tdAmount = tdAmountNumber.value;
    const intAmount = intAmountNumber.value;
    const compAmount = compAmountNumber.value;
    const attAmount = attAmountNumber.value;
    const ydsAmount = ydsAmountNumber.value;
    const qbr = calc_QBR(tdAmount, intAmount, compAmount, attAmount, ydsAmount);
    qbrDisplay.innerText = qbr;
})