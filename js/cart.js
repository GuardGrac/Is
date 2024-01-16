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
    console.log("хуй");
    // $.getJSON(catalog, function (data){
    //   var catalog = data;
      var out = '';
      for(var id in cart){
        out += `<img src="images\\${catalog[id].goods_image}">`;
        out += `${catalog[id].name}`;
      } 
      $('.main-cart').html(out);
    // });
}

loadCart();