//#region 
//Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.

let basketItems = {
    bread: 'Хлеб',
    sausage: 'Колбаса',
    coffee: 'Кофе', 
    cake: 'Торт'
};

let Items = {
    bread : { 
        name: 'Хлеб',
        price: 50
    },
    sausage : { 
        name: 'Колбаса',
        price: 200
    },
    coffee : { 
        name: 'Кофе',
        price: 150
    },
    cake : { 
        name: 'Торт',
        price: 350
    }
};

function countBasketPrice(basketRating)
{ 
    var basket = [];
    for( var bask in basketRating)
    {
        basket.push(basketRating[bask]);      
    }
    console.log(basket);
        var fullPrice=0;
        for(var i=0;i<basket.length;i++)
        {
            for(var cost in Items)
            {                
                if (basket[i] == Items[cost].name)
                {
                    fullPrice = fullPrice + Items[cost].price;
                    break;
                }
            }
        }
        return fullPrice;
}

var finPrice = countBasketPrice(basketItems);
alert("Цена корзины: "+ finPrice);
console.log(finPrice);
//#endregion
