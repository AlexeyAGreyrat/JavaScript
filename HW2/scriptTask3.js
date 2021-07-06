var a;
var b;
a = getRandomInt(-100,100);
b = getRandomInt(-100,100);
alert(a);
alert(b);
testAB(a,b);
outputA();
compareNull();
alert(power(4,10))

//#region 8. С помощью рекурсии организовать функцию возведения числа в степень.
function power(val, pow)
{
    if (pow == 0)
        return 1;
    else if (pow == 1)
        return (val);
    if (pow != 1)
        return (val * power(val, pow - 1));
}
//#endregion

//#region 7. Сравнить null и 0. Объяснить результат.
function compareNull()
{
alert(0==null); // null Преобразование не производится ответ false
alert(0===null); //при строго разные типы ответ false
}
//#endregion

//#region 6. Реализовать функцию с тремя параметрами... 
function threeArguments(a, b, operation){
    switch(operation){
        case 'сложение':
            return a + b;
            break;
        case 'вычитание':
            return a - b;
            break;
        case 'деление':
            return a / b;
            break;
        case 'умножение':
            return a * b;
            break;
       }
}
//#endregion

//#region 5. Реализовать четыре основные арифметические операции 
//в виде функций с двумя параметрами. Обязательно использовать оператор return.
function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function div (a, b) {
    return a / b;
}

function mult (a, b) {
    return a + b;
}
//#endregion

//#region 4. Присвоить переменной а значение в промежутке [0..15].
//С помощью оператора switch организовать вывод чисел от a до 15.
function outputA()
{
    a=getRandomInt(0,16);
    switch (a) 
    {
        case 0:
            alert ( 'Ваше число 0');
			break;
		case 1:
			alert ( 'Ваше число 1');
			break;
		case 2:
			alert ( 'Ваше число 2');
			break;
		case 3:
			alert ( 'Ваше число 3');
			break;
		case 4:
			alert ( 'Ваше число 4');
			break;
		case 5:
			alert ( 'Ваше число 5');
			break;
		case 6:
			alert ( 'Ваше число 6');
			break;
		case 7:
			alert ( 'Ваше число 7');
			break;
		case 8:
			alert ( 'Ваше число 8');
			break;
		case 9:
			alert ( 'Ваше число 9');
			break;
		case 10:
			alert ( 'Ваше число 10');
			break;
		case 11:
			alert ( 'Ваше число 11');
			break;
		case 12:
			alert ( 'Ваше число 12');
			break;
		case 13:
			alert ( 'Ваше число 13');
			break;
		case 14:
			alert ( 'Ваше число 14');
			break;
		case 15:
			alert ( 'Ваше число 15');
			break;	
	}	
}
//#endregion 

//#region 3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. 
function testAB(a,b)
{
    if (a>=0 && b>=0)
    {
        alert(a-b);
    }
    else if(a<0 && b<0)
    {
        alert(a*b);
    }
    else
    {
        alert(a+b)
    }
}
//#endregion

//#region случайное число без включения max;
function getRandomInt(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
//#endregion