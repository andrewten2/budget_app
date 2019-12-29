let id = document.getElementById('start');
let budgetValue = document.getElementsByClassName('budget-value')[0];
let daybudgetValue = document.getElementsByClassName('daybudget-value')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.getElementsByClassName('expenses-value')[0];
let optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.getElementsByClassName('income-value')[0];
let monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0];
let yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];


//////////////first

let expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    
    optionalExpensesItem=document.querySelectorAll('.optionalexpenses-item'),
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    
    countBtn = document.getElementsByTagName('button')[2],

    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),

    chooseYear = document.querySelector('.year-value'),
    chooseMonth = document.querySelector('.month-value'),
    chooseDay = document.querySelector('.day-value');
    
    
   