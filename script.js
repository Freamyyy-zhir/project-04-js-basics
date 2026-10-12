const studentName = 'Илья';
const courseName = 'Веб-разработка';

let completedTasks=6;
let totalTasks=10;

let remainingTasks = totalTasks - completedTasks;
let completionPercentage = (completedTasks / totalTasks) * 100;

console.log('Имя студента', studentName);
console.log('Курс', courseName);
console.log('Оставшиеся задания:', remainingTasks);
console.log('Процент выполнения:', completionPercentage + '%');

if (completedTasks === totalTasks) {
    console.log('Спринт завершён');
} else {
    console.log('Продолжайте работу');
}