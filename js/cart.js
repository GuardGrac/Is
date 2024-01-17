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

var cart = {};
function loadCart(){
    //проверяю есть ли в localStorage запись cart
    if (localStorage.getItem('cart')){
        //если есть - расшифровываю и записываю в переменную
        cart = JSON.parse(localStorage.getItem('cart'));
            showCart();
    }
    else{
        $('.main-cart').html('Корзина пуста!');
    }
}

function showCart(){
    // $.getJSON(catalog, function (data){
    // var catalog = data;
    //вывод корзины
    if(!isEmpty(cart)){
        $('.main-cart').html('Корзина пуста!');
    }
    else{
      var out = '';
      for(var id in cart){
        out += `<img class="cart-img" src="images\\${catalog[id].goods_image}">`;
        out += `<p class="name">${catalog[id].name}</p> `;
        out += ` ${cart[id]} `;
        out += `<button data-id="${id}" class="del-goods">X</button>`;
        out += `<br>`;
      } 
      $('.main-cart').html(out);
      $('.del-goods').on('click', delGoods);
    }
    // });
}

function delGoods(){
    //удаляем товар из корзины
    var id = $(this).attr('data-id');
    delete cart[id];
    saveCart();
    showCart();
}

function saveCart(){
    //сохраняем корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart)); //корзину в строку
}

function isEmpty(object) {
    //проверка корзины на пустоту
    for (var key in object)
    if (object.hasOwnProperty(key))  return true;
    return false;
}

loadCart();