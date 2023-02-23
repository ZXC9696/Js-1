/* Условия Js */

/* var b = prompt('Введите слово Привет')
if (b == 'Привет'){
    console.log("И тебе привет");
}else if (b == 'привет'){
    console.log('И тебе привет');
}else if (b == 'Hello'){
    console.log('И тебе привет');
}
else{
    console.log(false);
} */

/* && - 2 амперсанта говорят о том что есть еще одно обязательное условие для проверки на true (и)*/
/* Функция isNaN проверку на NaN если внутри значение NaN то отдаст true */
/* ! - восклицательный знак перед значением или функцией возвращает противоположное значение */

/* var a = prompt('Введите первое число')
var b = prompt('Введите второе число')
a = Number (a)
b = Number (b)
if (a > b && !isNaN(a) && !isNaN(b)) {
    console.log(a + ' больше ' + b);
}else if (a < b && !isNaN(a) && !isNaN(b)) {
    console.log(a + ' меньше ' + b);
}else if (a == b && !isNaN(a) && !isNaN(b)) {
    console.log(a + ' равно ' + b);
}else{
   if (isNaN(b) && isNaN(a)) {
    console.log('оба не числа');
   }else if (isNaN(a)) {
    console.log('Первое не число');
   }else {
    console.log('Второе не число ');
   }
} */

/* || 2 ровных слеша говорят о том что условие делится на несколько частей (или) */

/* var str = prompt('Введите секретное слово')
if (str == 'Компот' || str == 'Огурец' || str == 'Помидор'){
    console.log('Вы угадали');
}else{
    console.log(false);
} */

/* var num = +prompt('Введите день недели')

switch (num) {
    case 1:
        console.log('Понедельник');
        break;
    case 2:
        console.log('Вторник');
        break;
    case 3:
        console.log('Среда');
        break;
    case 4:
        console.log('Четверг');
        break;
    case 5:
        console.log('Пятница');
        break;
    case 6:
        console.log('Суббота');
        break;
    case 7:
        console.log('Воскресенье');
        break;
        
    default:
        console.log('Такой недели нет');
        break;
} */
var a = +prompt('Введите первое число')
var b = +prompt('Введите второе число')
var c = +prompt('Введите третье число')

if(b > a && b < c) {
    alert(b + ' Среднее число');
}else if(a < b && a > c) {
    alert(a + ' Среднее число')
}else if(a > b && c > a) {
    alert(a + ' Среднее число');
}else if(c > a && b > c) {
    alert(c + ' Среднее число');
}else if(c < a && c > b) {
    alert(c + ' Среднее число')
}else if(b < a && b > c) {
    alert(b + ' Среднее число')
}



