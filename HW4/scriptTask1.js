//#region Написать функцию, преобразующую число в объект. 
//Передавая на вход число от 0 до 999, надо получить на выходе объект, 
//в котором в соответствующих свойствах описаны единицы, десятки и сотни.

var count = getRandomInt(0,1000);
NumToObj(count);

function NumToObj(count)
{
    let number = { 
        'единицы': '0',
        'десятки': '0',
        'сотни'  : '0'
    };
    if(count>=0 && count <=999)
    {
        var str = count.toString();
        var div = str.split(''); 
        var i = (div.length - 1);
        for (var prop in number) 
        {
            if(i!=-1)
            number[prop] = div[i--];
            else
            break;
        }
        console.log(number);
        alert("Число "+ count)
        for (var prop in number) 
        {
            alert(prop+" " + number[prop]);
        }
    }
    else
    {
        console.log("Некорректное число");
        console.log(number);
    }
}

//#region случайное число без включения max;
function getRandomInt(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
//#endregion