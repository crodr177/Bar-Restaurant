
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

  var menu = newArr.map(function(item) {
    return `
     <div class="row-name-price">
        <p>${item.entree.name}</p>
        <p>.....................................</p>
        <p class="price-color">$${item.entree.price}</p>
        </div>
        <p class="desc">${item.entree.description}</p>
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
     </div>
    `;
  }).join('');

  var food = `<h3 style="font-family: 'Fira Sans', sans-serif; font-size: 30px; color: #FBCB81;">Appetizers</h3>` + app + `<h3 style="font-family: 'Fira Sans', sans-serif; font-size: 30px; color: #FBCB81;">Entrees</h3>` + menu + `<h3 style="font-family: 'Fira Sans', sans-serif; font-size: 30px; color: #FBCB81;">Desserts</h3>` + dessert;

  var item = Math.floor(Math.random() * items.length)
  var randomItem = items[item]

  dailySpecial.innerHTML = randomItem;
  foodMenu.innerHTML = menu;
  foodMenu.innerHTML = food;

  $("#accordion").on("click", ".acc-header", function () {
    $(".slidein").removeClass("slideout")
    $(this).find("+ .slidein").addClass("slideout")
  })

})

var disqus_developer = 1;
var disqus_url = '{{ site.url }}{{ page.url }}';

  var disqus_config = function () {
    this.page.url = 'mainstreetpub.disqus.com';  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = 'PAGE_IDENTIFIER'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };

  (function () { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://mainstreetpub.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();
