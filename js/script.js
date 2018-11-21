let money, time;
function start () {
    money = +prompt("Ваш бюджет на месяц?", 50000);
    time = prompt("Введите дату в формате YYYY-MM-DD", "1989-12-31");

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", 50000);
    }
}
start ();

let appData = {
    budget: money, 
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let item = prompt("введите статью расходов"),
                cost = prompt("во сколько обойдется?");
    
            if ( (isNaN(item)) && (typeof(item)) != null && (typeof(cost)) != null && 
            item != '' && cost != '' && item.length < 10) {
                console.log("done");
                appData.expenses[item] = cost;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет:" + appData.moneyPerDay);
    },
    detectLevel: function () {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    }, 
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome); 
        }
    },
     chooseOptExpenses: function() {
        for(let i = 0; i < 3; i++) {
            let optional = prompt("Статья необязательных расходов?");
        if(typeof(optional)=== 'string' && optional != '' && optional != null) {
            appData.optionalExpenses[i] = optional;
            console.log("good");
        } else {
            i--;
            console.log("error");
            }
        } 
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            if(typeof(items)== 'string' && items != '' && items != null) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что то еще?'));
                appData.income.sort();
                document.write("Способы доп. заработка: " + "<br>");
                appData.income.forEach(function(item, i) {
                    let a = i + 1;
                    document.write(a + ' ' + appData.income[i] + "<br>");
                    });
            } else {
                console.log("error");
                i--;
            }  
        } alert("Способы доп. заработка: " + appData.income);
    } 
};

for(let key in appData) {
    console.log(key);
};














