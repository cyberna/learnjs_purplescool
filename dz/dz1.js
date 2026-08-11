// const message1 = prompt("Сколько будет 7 + 15 или 7 - 15 ?");
// const number = Number(message1); //Преобразуем в число для проверки на число 22 и -8

// switch(number) {
//     case 22:
//     case -8:
//         alert(`Вы не робот! Ответ ${message1} правильный`);
//         break;
//     default:
//         if(message1 === "Я не робот") {
//             alert(`Ваш ответ "${message1}" Успех! Вы не робот!`);
//         } else {
//             alert(`Ответ "${message1}" не правильный, вы робот!`);
//         }
// }

// console.log(message1);


// Кредит на Макбук

// Пользователь:

// Возраст
// Наличие работы
// Деньги

// Нужно проверить может ли он купить новый MacBook за 2000$? 
// Он может брать не только свои деньги, но и взять кредит. 
// Ему дадут 500$, только если ему больше 24-х лет и он имеет работу, 
// 100$ если ему просто больше 24-х лет и 0 в ином случае. 
// Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false.



// function computeCredit(age, hasJob = false) {
//     switch(true) {
//         case age >= 24 && hasJob:
//             return 500;
//         case age > 24:
//             return 100;
//         default:
//             return 0;
//     }
// }

// function canBuy(productPrice, age, money, hasJob = false) {
//     const creditMoney = computeCredit(age, hasJob);
//     return productPrice <= money + creditMoney;
// }
// console.log(canBuy(2000, 25, 1500, true));
