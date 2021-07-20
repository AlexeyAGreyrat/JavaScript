//#region 
//2. С этого урока начинаем работать с функционалом интернет-магазина. 
//Предположим, есть сущность корзины. 
//Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
//3. Товары в корзине хранятся в массиве. Задачи:
//a) Организовать такой массив для хранения товаров в корзине;
//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
var basketItems = ['Хлеб', 'Колбаса', 'Кофе', 'Торт'];
var ItemsCost = [['Хлеб', 50], ['Колбаса', 200], ['Кофе', 150],['Торт', 350]];
var p = countBasketPrice(basketItems);
alert(p);

function countBasketPrice(basket)
{ 
    var Price=0;
    for(var i=0;i<basket.length;i++)
    {
        for(var j=0;j<ItemsCost.length;j++)
        {
            if(basket[i]==ItemsCost[j][0])
            {
                Price = Price + ItemsCost[j][1];
                break;
            }
        }
    }
    return Price;
}
//#endregion
