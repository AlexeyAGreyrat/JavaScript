//#region 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
var arr = [];
SimpleNumber()
alert(arr);
console.log(arr);

function SimpleNumber()
{
    var chek;
    number = 2;
    while(number<=100)
    {
        chek = true;
        var q = Math.ceil(Math.sqrt(number));
        var j = 2;
        while(j<=q)
        {
            if(number%j==0 && number!=j)
            {
                chek = false;
                break;
            }
            j++;
        }
        if(chek)
        {
            arr.push(number);
        }
        number++;
    }
    return arr;
}
//#endregion      