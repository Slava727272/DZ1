'use strict'

let money = prompt("Ваш бюджет на месяц","");
let time = prompt("Введите дату в формате YYYY-MM-DD","");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optinalExpenses: {},
    income: [],
    savings: false
};

let x1 = prompt("Введите обязательную ствтью расходов в этом месяце", ""),
    x2 = prompt("Во сколько это обойдется?", ""),
    x3 = prompt("Введите обязательную ствтью расходов в этом месяце", ""),
    x4 = prompt("Во сколько это обойдется?", "");

appData.expenses.x1 = x2;
appData.expenses.x3 = x4;

alert(appData.budget/30);

/* 
    Сколько типов данных существует в JS - 7;
    Как вывести информацию в консоль - console.log(Информация);
    Какая функция операторов || и && - Оператор || - ИЛИ(сложение), а оператор && - И(умножение).
*/