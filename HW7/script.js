// создаем объект каталога
function Item(product, image, price)
 {
    this.product = product;
    this.image = image;
    this.price = price;
}

let catalodList = []

catalodList.push(new Item('Хлеб', ['./img/Image1B.png', './img/Image2B.png', './img/Image3B.png'],  50,));
catalodList.push(new Item('Колбаса', ['./img/Image1S.png', './img/Image2S.png', './img/Image3S.png'], 150));
catalodList.push(new Item('Кофе', ['./img/Image1C.png', './img/Image2C.png', './img/Image3C.png'], 200));
catalodList.push(new Item('Торт', ['./img/Image1Cake.png', './img/Image2Cake.png', './img/Image3Cake.png'], 350));



// отрисовка витрины
const $catalog = document.querySelector('#catalog');

function drowItems() {
    catalodList.forEach(function (item, id) {
        let imagesHtml = item.image.map(function(src){
            return `<img class="small_img" src="${src}" width="80" height="50"></img>`;
        }).join('');        
        let html = `<div id="item-${id}" class="prod_item">
                 <div class="item">
                     <div class="image">${imagesHtml}</div>
                     <div class="Сost"><h4>${item.product}</h4>
                         <div class="price">Цена: 
                             <span>${item.price}</span> руб.
                         </div>
                         <div data-id="${id}" class="button">В корзину</div>
                     </div>
                 </div>                 
             </div>`
        $catalog.insertAdjacentHTML('beforeend', html);
    })
}
drowItems()


// ----------- создаем объект корзины -----------
let shoppingCart = [];
let emptyBasket = 'Ваша корзина пуста.';

function basketItem(product, price, kol) {
    this.product = product;
    this.price = price;
    this.kol = kol;
    this.finalPrice = function() {
            return this.price;
        }    
}

// получаем итоговую сумму
function totalSumm(shoppingCart) 
{
    var price1=0;
    for(var i in shoppingCart)
    {
        price1 = price1 + (shoppingCart[i].price * shoppingCart[i].kol);  
    }
    console.log(price1);
    return price1;
}

// создаем отображение корзины
let $userAddr;
function drowTotal (shoppingCart) {
    const $basket = document.querySelector('#basket');
    $basket.textContent = '';
    
    if (shoppingCart == 0) {
        $basket.insertAdjacentHTML('beforeend', `<div class="total">${emptyBasket}</div>`);
    } else {
        let tmp=0;
        for(var i in shoppingCart){
            tmp+=shoppingCart[i].kol;
        }
        $basket.insertAdjacentHTML('beforeend', 
        `<div class="total">
            <p>Товары в Корзине{ ${tmp} } на сумму ${totalSumm(shoppingCart)} рублей.</p>
        </div>
        <div id="buy_hidden">
            <p class="buy" id="buy">Купить</p>
        </div>
        <div id="confirmHtml" class="confirmHtml">
            <p class="buy" id="confirm">Подтвердить</p>
        </div>
        <div id="messageHtml" class="confirmHtml">
            <p class="buy" id="message">Завершить</p>
        </div>
        `);
        
        const $buy_hidden = document.getElementById('buy_hidden');
        const $confirmHtml = document.getElementById('confirmHtml');
        const $messageHtml = document.getElementById('messageHtml');
        
        function showChart(id=0)
        {
            for (const iterator of shoppingCart) 
            {                      
                let chartHtml = `<div id="${id}" class="buy_hidden__item">${iterator.product} за ${iterator.finalPrice()} руб. в количестве ${iterator.kol} `;    
                $buy_hidden.insertAdjacentHTML('afterbegin', `${chartHtml}
                <span data-id="${id}" class="buy_hidden__delete"> (удалить)</span></div>`);
                id++;
            }
        }
        showChart();

        const $buy = document.getElementById('buy');
        const $confirm = document.getElementById('confirm');
        const $message = document.getElementById('message');

        $buy.addEventListener('click', function () {
            $buy_hidden.style.display = 'none';
            $confirmHtml.style.display = 'flex';
            confirmDrow();
        });
        $confirm.addEventListener('click', function () {
            $confirmHtml.style.display = 'none';
            $messageHtml.style.display = 'flex';
            messageDrow();
            let inputAddr = document.getElementById('addr');
            $userAddr = inputAddr.value;
        });
        $message.addEventListener('click', function () {
            $messageHtml.style.display = 'none';
            shoppingCart = 0;
            drowTotal(shoppingCart);
            createConfirmWindow();
        });

        function confirmDrow() {
            let confirmHtml = 
            `<p class="buy_hidden__item">Адрес доставки:</p>        
            <input id="addr" type="text" class="buy_hidden__confirm">`;
            $confirmHtml.insertAdjacentHTML('afterbegin', confirmHtml);
        }
        function messageDrow() {
            let messageHtml = 
            `<p class="buy_hidden__item">Комментарий к заказу:</p>
                <form class="form" action="#">
                    <form action="#">
                        <input id="text" class="buy_hidden__confirm" type="text" placeholder="Ваше имя"><br>
                        <input id="email" class="buy_hidden__confirm" type="email" placeholder="Ваш email"><br>
                        <textarea id="message" class="buy_hidden__confirm" cols="30" rows="5" placeholder="Ваш комментарий"></textarea><br>
                    </form>
                </form>`;
            $messageHtml.insertAdjacentHTML('afterbegin', messageHtml);
        }
    }
}
drowTotal(shoppingCart);



// событие - добавление объекта в корзину
$catalog.addEventListener('click', function (e) {
    if (e.target.className ==='button' ) {
        const id = Number(e.target.getAttribute('data-id'));
        const choice = catalodList[id];
        var tmp = true;
        for(var i in shoppingCart)
        {
            console.log(shoppingCart[i]);
            if(shoppingCart[i].product == choice.product)
            {
                shoppingCart[i].kol++
                tmp = false;
                drowTotal(shoppingCart);
                break;
            }
            
        }
        if(tmp == true)
        {
        shoppingCart.push(new basketItem(choice.product, choice.price, choice.kol = 1));
        console.log(shoppingCart);
        drowTotal(shoppingCart);
        }
       
    } 

});
 

// событие - удаление объекта из корзины
const $basket = document.getElementById('basket');
$basket.addEventListener('click', function (e) {
    if (e.target.className === 'buy_hidden__delete') {
        const this_id = Number(e.target.getAttribute('data-id'));
        shoppingCart[this_id].kol--;
        if(shoppingCart[this_id].kol == 0)
        shoppingCart.splice(this_id,1);
        drowTotal(shoppingCart);
    }
})


// работаем с модальным окном
const $popup = document.querySelector('#popup');

$popup.addEventListener('click', function(e) {
    $popup.style.display = 'none';
});

// работаем с модальным окном + переход
$catalog.addEventListener('click', function(e) {
    let imgCnt = 0;
    if( e.target.tagName === 'IMG' ) {
        $popup.textContent = '';
        $popup.style.display = 'flex';
        
        imgArr = e.target.parentNode;
        
        console.log(imgArr.children[0].src);
        $popup.insertAdjacentHTML('beforeend',
            `<img src="${imgArr.children[imgCnt].getAttribute('src')}" id='img' class="scale">`);
                
            document.addEventListener('keydown', logKey);
            function logKey(a) {
            switch(a.code){
                case 'ArrowRight':
                    imgCnt++;
                    if(imgCnt == 3)
                    {
                    imgCnt=0;
                    }
                    img = $popup.querySelector('img');
                    img.src = imgArr.children[imgCnt].src;
                    break;
                case 'ArrowLeft':
                    imgCnt--;
                    if(imgCnt == -1)
                    {
                    imgCnt=2;
                    }
                    imh = $popup.querySelector('img');
                    img.src = imgArr.children[imgCnt].src;
                    break;
                };                                       
        };
    };
});




// создаем модальное окно для подверждения заказа

const $Task = document.getElementById('Task');

function createConfirmWindow() {
    let $orderDiv = document.createElement('div');
    let date = new Date().toLocaleDateString();

    $orderDiv.className = 'orderDiv';
    $orderDiv.insertAdjacentHTML('beforeend', `
    <h3>Ваш заказ от ${date}<br>на сумму ${totalSumm(shoppingCart)} руб. Спасибо за покупку.</h3>
    <h4>Адрес доставки: ${$userAddr}</h4>
    <button id="close">Закрыть</button>`);
    $Task.append($orderDiv);
    
    $orderDiv.addEventListener('click', function(e) {
        if( e.target.id === 'close' ) {
            $orderDiv.style.display = 'none';
            shoppingCart = [];
        }
    });
}