// all fetch functions

// fetch test


const showFrontpageArticles =  () => {
  const $articlesFrontpage = document.querySelector('.articles .articles__all-articles');

   fetch('http://localhost:8080/api/product')
    .then(response => response.json())
    .then(data => {
      data.forEach(product => {
        $articlesFrontpage.innerHTML += `
          <div class="articles__article">
            <img class='articles__article__product-image' src="https://picsum.photos/200" alt="ph">
            <h3>${product.name}</h3>
            <span class="articles__article__price">
                <strong>€ ${product.price}</strong>
            </span>
            <div class="articles__article__rating-wrap">
                <img src="assets/img/icons/all-rating-starts.svg" alt="5 star rating">
                <span class="articles__article__rating-amount">(256)</span>
            </div>
            <div class="articles__article__link-atc-wrap">
                <a href="productDetail/index.html">more info</a>
                <button class='articles__article__addToCardBtn'>
                  <img data-id='${product.id}' src="assets/img/icons/add-to-cart.svg" alt="add to cart icon">
                </button>
            </div>
            <div class="articles__article__in-stock-wrap">
                <img src="assets/img/icons/check_circle.svg" alt="check">
                <span class="articles__article__in-stock">in stock</span>
            </div>
          </div>
        </div>
        `
      });
      const addToCart = document.querySelectorAll('.articles__article__addToCardBtn')
      console.log(btn)
      addToCart.forEach(btn => {
        btn.addEventListener('click', (e) => console.log(btn.target.className))
      });
    });
}


const showFrontpageSpotlight =  () => {
  const $spotlightFrontpage = document.querySelector('.frontpage__spotlight .articles__all-articles');

   fetch('http://localhost:8080/api/product')
    .then(response => response.json())
    .then(data => {
      data.forEach(product => {
        $spotlightFrontpage.innerHTML += `
          <div class="articles__article">
            <img class='articles__article__product-image' src="https://picsum.photos/200" alt="ph">
            <h3>${product.name}</h3>
            <span class="articles__article__price">
                <strong>€ ${product.price}</strong>
            </span>
            <div class="articles__article__rating-wrap">
                <img src="assets/img/icons/all-rating-starts.svg" alt="5 star rating">
                <span class="articles__article__rating-amount">(256)</span>
            </div>
            <div class="articles__article__link-atc-wrap">
                <a href="productDetail/index.html">more info</a>
                <button class='articles__article__addToCardBtn'>
                  <img src="assets/img/icons/add-to-cart.svg" alt="add to cart icon">
                </button>
            </div>
            <div class="articles__article__in-stock-wrap">
                <img src="assets/img/icons/check_circle.svg" alt="check">
                <span class="articles__article__in-stock">in stock</span>
            </div>
          </div>
        </div>
        `
      });
    });

  
}

showFrontpageSpotlight();
showFrontpageArticles();

