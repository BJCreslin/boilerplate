console.log("You are at " + window.location);
let allMoney = parseFloat(prompt("сколько денег всего имеется?", "0,0"));
let appleNumber = parseInt(prompt("сколько яблок купили?", "0"));
let applePrice = parseFloat(prompt("По какой цене яблоки?", "0,0"));
let carrotNumber = parseInt(prompt("сколько морковок купили?", "0"));
let carrotPrice = parseFloat(prompt("По какой цене морковки?", "0,0"));

let fullSpend = appleNumber * applePrice + carrotNumber * carrotPrice;
let isEnough = allMoney >= fullSpend;
document.body.innerText = isEnough;