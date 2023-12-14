function init(){
    $.getJSON("goods.json", goodsOut);
}

function goodsOut(data){
    console.log(data);
    var out='';
    for(var key in data){
    out +='<div class="cart">';
    out +=`<img class="goods-image" src="images/${data[key].goods-image}" alt="">`;
    out +=`<p class="name">${data[key].name}</p>`;
    out +=`<p class="description">${data[key].description}</p>`;
    out +=`<div class="cost">${data[key].cost}</div>`;
    out +='<button class="add-to-cart">Купить</button>';
    out +='</div>';  
    }
    $('.goods-out').html(out)
}

$(document).ready(function (){
    init();
});