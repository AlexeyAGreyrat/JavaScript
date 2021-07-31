// создаем объект каталога
function Item(product, image, price) {
    this.product = product;
    this.image = `img/${image}.png`;
    this.price = price;
}

let catalodList = []

catalodList.push(new Item('Хлеб', 'Image1',  50,));
catalodList.push(new Item('Колбаса', 'Image2', 150));
catalodList.push(new Item('Кофе', 'Image3', 200));
catalodList.push(new Item('Торт', 'Image4', 350));

// создаем отображение каталога
function drowItems() {
    catalodList.forEach(function (item, i) {
        drowItem(item, i);
    })
}

const $catalog = document.querySelector('#catalog');
function drowItem(item, id) {
    $catalog.insertAdjacentHTML('beforeend', 
    `<div id="item-${id}" class="prod_item">
        <div class="item">
            <div class="image"><img src="${item.image}" width="200" height="150" ></div>
            <div class="Cost"><h3>${item.product}</h3>
                <div class="price">Цена: 
                    <span>${item.price}</span> руб.
                </div>
                <div data-id="${id}" class="button">В корзину</div>
            </div>            
        </div>
    </div>`);
}
drowItems(catalodList);


//создаем объект корзины 
let shoppingCart = [];
let emptyBasket = 'Ваша корзина пуста.';

function basketItem(product, price) {
    this.product = product;
    this.price = price;
    this.finalPrice = function() {
            return this.price;
        }
}

// получаем итоговую сумму
function totalSumm(shoppingCart) {
    return shoppingCart.reduce(function (acc, price) {
        return acc + price.finalPrice();
    }, 0);
}


const $basket = document.querySelector('#basket');
// создаем отображение корзины
function drowTotal (shoppingCart) {
    $basket.textContent = '';
    if (shoppingCart == 0) {
        $basket.insertAdjacentHTML('beforeend', `<div class="total">${emptyBasket}</div>`);
    } else {
        $basket.insertAdjacentHTML('beforeend', 
        `<div class="total">
            <p>Товаров в корзине{${shoppingCart.length}} на сумму ${totalSumm(shoppingCart)} рублей.</p>
            <a class="buy" href="#">Купить</a>
        </div>`);
    }
}
// покупка
$basket.addEventListener('click',function(e){
    if(e.target.className === "buy")
    {
        shoppingCart = [];
        price = 0;
        alert("Спасибо за покупку")
        drowTotal(shoppingCart)
    }
});
drowTotal(shoppingCart);

// событие - добавление объекта в корзину
$catalog.addEventListener('click', function (e) {
    if (e.target.className ==='button' ) {
        const id = Number(e.target.getAttribute('data-id'));
        const choice = catalodList[id];
        shoppingCart.push(new basketItem(choice.product, choice.price));

        drowTotal(shoppingCart);
    } 
});
 
// работаем с #imageUp
const $imageUp = document.querySelector('#imageup');

$imageUp.addEventListener('click', function(e) {
    $imageUp.style.display = 'none';
});

 $catalog.addEventListener('click', function(e) {
    if( e.target.tagName === 'IMG' ) {
        $imageUp.textContent = '';
        $imageUp.style.display = 'flex';
        $imageUp.insertAdjacentHTML('beforeend',
            `<img src="${e.target.getAttribute('src')}" width="350" height="300" class="scale">`);
    }
});