let catalog = {
    "1234":{
        "name": "Гранатовый сок",
        "cost": 150,
        "description": "Прекрасный гранатовый сок, приготовленный из самых свежих и спелых ягод граната",
        "goods_image": "RedB.png",
        "order": 1
    },
    "1235":{
        "name": "Апельсиновый сок",
        "cost": 160,
        "description": "Прекрасный апельсиновый сок, приготовленный из самых свежих и спелых ягод апельсина",
        "goods_image": "yellowB.png",
        "order": 2
    },
    "1236":{
        "name": "Гранатовый сок",
        "cost": 150,
        "description": "Прекрасный гранатовый сок, приготовленный из самых свежих и спелых ягод граната",
        "goods_image": "OrangeB.png",
        "order": 3
    },
    "1237":{
        "name": "Гранатовый сок",
        "cost": 170,
        "description": "Прекрасный гранатовый сок, приготовленный из самых свежих и спелых ягод граната",
        "goods_image": "greenB.png",
        "order": 4
    },
    "1238":{
        "name": "Гранатовый сок",
        "cost": 130,
        "description": "Прекрасный гранатовый сок, приготовленный из самых свежих и спелых ягод граната",
        "goods_image": "brightYellowB.png",
        "order": 5
    },
    "1239":{
        "name": "Гранатовый сок",
        "cost": 170,
        "description": "Прекрасный гранатовый сок, приготовленный из самых свежих и спелых ягод граната",
        "goods_image": "greenB.png",
        "order": 4
    },
    "1240":{
        "name": "Гранатовый сок",
        "cost": 170,
        "description": "Прекрасный гранатовый сок, приготовленный из самых свежих и спелых ягод граната",
        "goods_image": "greenB.png",
        "order": 4
    },
    "1241":{
        "name": "Гранатовый сок",
        "cost": 170,
        "description": "Прекрасный гранатовый сок, приготовленный из самых свежих и спелых ягод граната",
        "goods_image": "greenB.png",
        "order": 4
    },
    "1242":{
        "name": "Гранатовый сок",
        "cost": 170,
        "description": "Прекрасный гранатовый сок, приготовленный из самых свежих и спелых ягод граната",
        "goods_image": "greenB.png",
        "order": 4
    },
}

var cart = {};//корзина

function goodsOut(data){
    //вывод на страницу
    var out='';
    for(var key in data) {
        out +='<div class="cart">';
        out +=`<img class="goods-image" src="/images/${data[key].goods_image}" alt="">`;
        out +=`<p class="name">${data[key].name}</p>`;
        out +=`<p class="description">${data[key].description}</p>`;
        out +=`<div class="cost">${data[key].cost}</div>`;
        out +=`<button class="add-to-cart" data-id="${key}">Купить</button>`;
        out +='</div>';  
    }
    $('.goods-out').html(out)
    $('.add-to-cart').on('click', addToCart);
}

function addToCart(){
    var id = $(this).attr('data-id');
        if(cart[id]==undefined) {
            cart[id] = 1; //если в корзине нет товара - делает равным 1
        }

        else{
            cart[id]++; //если такой товар есть - увеличивает на единицу
        }
        
      showMiniCart();
      saveCart();

}

function saveCart(){
    //сохраняю корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart)); //корзину в строку
}

function showMiniCart(){
    var out="";
    for(var key in cart){
        out+= key +' --- '+cart[key]+'<br>';
    }
    out += '<div>';
    out += '<a href="cart.html" class="links" link="#000000" vlink="000000">В корзину</a>';
    out += '</div>';
    $('.mini-cart').html(out);
}

function loadCart(){
    //проверяю есть ли в localStorage запись cart
    if (localStorage.getItem('cart')){
        //если есть - расшифровываю и записываю в переменную
        cart = JSON.parse(localStorage.getItem('cart'));
        showMiniCart();
    }
}

loadCart();
goodsOut(catalog);
