const birthMonth = document.getElementById('birth-month');
const birthDay = document.getElementById('birth-day');
const birthYear = document.getElementById('birth-year');
const showAge = document.getElementById('show-age');

const d = new Date();
const currentMonth = d.getMonth() + 1;
const currentDay = d.getDate();
const currentYear = d.getFullYear();

console.log(currentMonth);

const maxMonth = 12;
const maxDay = 31;
const maxYear = 150;

for (i = 0; i < maxMonth; i++) {
    const option = document.createElement('option');
    const month = i+1;
    option.innerText = month;
    option.setAttribute('value', month);
    birthMonth.appendChild(option);
}

for (i = 0; i < maxDay; i++) {
    const option = document.createElement('option');
    const day = i+1;
    option.innerText = day;
    option.setAttribute('value', day);
    birthDay.appendChild(option);
}

for (i = 0; i < maxYear; i++) {
    const option = document.createElement('option');
    const year = currentYear - i;
    option.setAttribute('value', year);
    option.innerText = year;
    birthYear.appendChild(option);
}

function ageCalc() {
    let age;

    if (birthMonth.value < currentMonth) {
        age = currentYear - birthYear.value;
    }
    else if (birthMonth.value == currentMonth) {

        if (birthDay.value <= currentDay) {
            age = currentYear - birthYear.value;
        }
        else {
            age = currentYear - birthYear.value - 1;
        }
    }
    else {
        age = currentYear - birthYear.value - 1;
    }

    showAge.innerText = `You are ${age} years old.`;
}