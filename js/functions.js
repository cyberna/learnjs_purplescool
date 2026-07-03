// Функции 1
// const toPowerArrow = (num, power) => {
//     const res = num ** power;
//     return res;
// }

// console.log(toPowerArrow(2, 3));

// const toPowerArrow = (num, power) => num ** power;
// console.log(toPowerArrow(2, 3));


// const KG_IN_USD = 7;
// const KM_IN_USD = 5;

// function calculateW(present) {
//     return present * KG_IN_USD;
// }

// function calculateKm(distance) {
//     return distance * KM_IN_USD;
// }

// function getExchangePrice(presetnt1, presetnt2, distance) {
//     const price1 = calculateW(presetnt1);
//     const price2 = calculateW(presetnt2);
//     const distancePrice = calculateKm(distance);
//     return price1 + price2 + distancePrice;
// }

// console.log(getExchangePrice(1, 2, 10));

const age = 24;
const job = true;
const money = true;

const macBookPriceInUSD = 2000;

const moneyKreditInUSD_500 = 500;
const moneyKreditInUSD_100 = 100;
const moneyKreditInUSD_0 = 0;

function ageVerification(age) {
    if(age >= 24) {
        return true;
    } else {
        return false;
    }
}

function moneyVirification(money) {
    console.log("Доделать функцию");
}

function canBuyMacBook(age, job, money) {
    if(age >= 24 && job == true && money >= 500) {
        return true;
    } else {
        return false;
    }
}