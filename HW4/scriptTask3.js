//#region Подумать над глобальными сущностями.
let Shop = 
{
    items : {
        bread : { 
            name: 'Хлеб',
            price: 50,
            id: 1
        },
        sausage : { 
            name: 'Колбаса',
            price: 200,
            id: 2
        },
        coffee : { 
            name: 'Кофе',
            price: 150,
            id: 3
        },
        cake : { 
            name: 'Торт',
            price: 350,
            id: 4
        }
    },
    basket : {} ,
    Add : function(){
        var items = "1. Хлеб - 50   \n 2. Колбаса - 200 \n 3. Кофе - 150 \n 4. Торт - 350 \n 5. Отмена";
        tmp = Math.floor(prompt(items))
        if(tmp == 5)
        return;
        for (var id in Shop.items)
        {
            console.log(Shop.items[id]);
            console.log(tmp);
            if(tmp == Shop.items[id].id)    
            {        
                if(Shop.basket[Shop.items[id].name] == Shop.items[id])
                {
                    Shop.basket[Shop.items[id].name].count++;
                }
                else
                {
                Shop.basket[Shop.items[id].name] = Shop.items[id];
                Shop.basket[Shop.items[id].name].count = 1;
                }
            }         
        }
    },
    Delete : function(){
        var items = "1. Хлеб    \n 2. Колбаса \n 3. Кофе  \n 4. Торт \n 5. Отмена";
        tmp = Math.floor(prompt(items))
        if(tmp == 5)
        return;
        for (var id in this.basket)
        {
            if(tmp == this.basket[id].id)
            {
                if(this.basket[id].count>1)
                {
                    this.basket[id].count--;
                }
                else
                delete this.basket[id];
            }
        }

    },
    CountBasketPrice: function(){
    var onBasket = [];
    for( var item in this.basket)
    {
        onBasket.push(this.basket[item]);      
    }
        var fullPrice=0;
        for(var i=0;i<onBasket.length;i++)
        {
            for(var cost in this.items)
            {                
                if (onBasket[i].name == this.items[cost].name)
                {
                    fullPrice = fullPrice + this.items[cost].price*this.basket[this.items[cost].name].count;
                    break;
                }
            }
        }
        alert("Стоймость покупок: " + fullPrice)
    },
    Show: function(){
        var str='';
        for(var item in this.basket)
        {
            str =str + this.basket[item].name + " Количество :" +  this.basket[item].count+"\n";
        }
        alert("Cписок покупок: \n"+ str);
    },
    Menu: function(){
    var menu = "1. Добавить в корзину \n 2. Удалить из корзины \n 3. Показать корзину \n 4. Закончить покупки";   
    var chek = false;
    var i = 0;
    while(chek != true)
    {      
       var tmp =  Math.floor(prompt(menu));
       switch (tmp) 
       {
        case 1:           
            Shop.Add();
			break;
		case 2:
            if(!Object.keys(Shop.basket).length == true)
            {
                alert("Корзина пуста");
            }
            else
            {
                Shop.Delete();
            }
			break;
        case 3:
            Shop.Show();
            break;
		case 4:		
        chek = true;
        Shop.CountBasketPrice();
        console.log(Shop.basket);
			break;
        
       }
    }
    }
};

Shop.Menu();

//#endregion