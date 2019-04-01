
var dailySpecial = document.querySelector("#daily-special");
var foodMenu = document.querySelector(".content");


$.ajax({
  method: "get",
  url: "https://obscure-tundra-54269.herokuapp.com/bar-food"
}).done(function(data) {

  var images = [
    "entrees/sliders.jpg",
    "entrees/Mini-Bratwursts.jpg",
    "entrees/grilled-chicken.jpg",
    "entrees/fixh-chips.jpg"
  ]
  var entree = data.entrees;

  var newArr = [];

  for(var i=0; i <images.length; i++) {
    newArr.push({
      "image": images[i],
      "entree" : entree[i]
  })
  }

  console.log(newArr);


  var items = newArr.map(function(item) {
  return `
    <div class="image-daily"><img src="${item.image}" class="daily-img"></div>
    <div id="todays">
      <h2>Today's Special</h2>
      <div class="dish-price">
        <p>${item.entree.name}</p>
        <p>$ ${item.entree.price}</p>
      </div>
      <p>${item.entree.description}</p>
      <button><a>Menu</a></button>
    </div>
  `;
  });

  var menu = data.entrees.map(function(item) {
    return `
     <div class="row-name-price">
        <p>${item.name}</p>
        <p>.....................................</p>
        <p class="price-color">$${item.price}</p>
      </div>
        <p class="desc">${item.description}</p>
        <div class="icons">
        ${!(item.extra.spicy) ? '<p class="spicy" style="display:inline;"></p>' : '<i class="fas fa-pepper-hot fa-1x"></i>'}         
        ${!(item.extra.glutenfree) ? '<p class="glutenfree" style="display:inline;"></p>' : '<i class="fab fa-pagelines fa-1x"></i>'}         
        ${!(item.extra.vegetarian) ? '<p class="vegetarian style="display:inline;"></p>' : '<i class="fas fa-leaf fa-1x"></i>'}
        </div>
      
    `;
  }).join('');

  var app = data.appetizers.map(function(item) {
    return `
     <div class="row-name-price">
        <p>${item.name}</p>
        <p>.....................................</p>
        <p class="price-color">$${item.price}</p>
        </div>
        <p class="desc">${item.description}</p>
        <div class="icons">
        ${!(item.extra.spicy) ? '<p class="spicy" style="display:inline;"></p>' : '<i class="fas fa-pepper-hot fa-1x"></i>'}         
        ${!(item.extra.glutenfree) ? '<p class="glutenfree" style="display:inline;"></p>' : '<i class="fab fa-pagelines fa-1x"></i>'}         
        ${!(item.extra.vegetarian) ? '<p class="vegetarian style="display:inline;"></p>' : '<i class="fas fa-leaf fa-1x"></i>'}
        </div>
       
    `;
  }).join('');

  var dessert = data.desserts.map(function(item) {
    return `
     <div class="row-name-price">
        <p>${item.name}</p>
        <p>.....................................</p>
        <p class="price-color">$${item.price}</p>
        </div>
        <p class="desc">${item.description}</p>
        <div class="icons">
        ${!(item.extra.spicy) ? '<p class="spicy" style="display:inline;"></p>' : '<i class="fas fa-pepper-hot fa-1x"></i>'}         
        ${!(item.extra.glutenfree) ? '<p class="glutenfree" style="display:inline;"></p>' : '<i class="fab fa-pagelines fa-1x"></i>'}         
        ${!(item.extra.vegetarian) ? '<p class="vegetarian style="display:inline;"></p>' : '<i class="fas fa-leaf fa-1x"></i>'}
        </div>
    `;
  }).join('');

  var food = `<h3 style="font-family: 'Fira Sans', sans-serif; font-size: 30px; color: #FBCB81;">Appetizers</h3>` + app + `<h3 style="font-family: 'Fira Sans', sans-serif; font-size: 30px; color: #FBCB81;">Entrees</h3>` + menu + `<h3 style="font-family: 'Fira Sans', sans-serif; font-size: 30px; color: #FBCB81;">Desserts</h3>` + dessert;

  var item = Math.floor(Math.random() * items.length)
  var randomItem = items[item]

  dailySpecial.innerHTML = randomItem;
  foodMenu.innerHTML = food;

  $("#accordion").on("click", ".acc-header", function () {
    $(".slidein").removeClass("slideout")
    $(this).find("+ .slidein").addClass("slideout")
  })

})

