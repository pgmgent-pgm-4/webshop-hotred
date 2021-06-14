// all fetch functions

// link: productDetail / index.html

const showFrontpageArticles = () => {
  const $articlesFrontpage = document.querySelector('.articles .articles__all-articles');

  fetch('http://localhost:8080/api/product')
    .then(response => response.json())
    .then(data => {
      data.forEach(product => {
        $articlesFrontpage.innerHTML += `
          <div class="articles__article">
            <img class='articles__article__product-image' src="https://source.unsplash.com/1600x900/?computer" alt="ph">
            <h3>${product.name}</h3>
            <span class="articles__article__price">
                <strong>€ ${product.price}</strong>
            </span>
            <div class="articles__article__rating-wrap">
                <img src="assets/img/icons/all-rating-starts.svg" alt="5 star rating">
                <span class="articles__article__rating-amount">(256)</span>
            </div>
            <div class="articles__article__link-atc-wrap">
                <a class='articles__article__link' href="productDetail/index.html?product=${product.id}">more info</a>
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
        // add products to cart
        const addToCart = document.querySelectorAll('.articles__article__addToCardBtn')
        const moreInfoOfProduct = document.querySelectorAll('.articles__article__link');

        for (let i = 0; i < addToCart.length; i++) {
          addToCart[i].addEventListener('click', () => {
            cartNumbers(data[i])
            totalCostOfProductsInCart(data[i]);
          })
        }

        // link to detail page
        const productDetailPage = document.querySelector('.product-detail');
        moreInfoOfProduct.forEach((link, i) => {
          link.addEventListener('click', () => {
            productDetailPage.innerHTML = 'test'
            console.log(data[i])
          })
        });
      });
    });
}


const showFrontpageSpotlight = () => {
  const $spotlightFrontpage = document.querySelector('.frontpage__spotlight .articles__all-articles');

  fetch('http://localhost:8080/api/product')
    .then(response => response.json())
    .then(data => {
      data.forEach(product => {
        $spotlightFrontpage.innerHTML += `
          <div class="articles__article">
            <img class='articles__article__product-image' src="https://source.unsplash.com/1600x900/?    console.log(data)
" alt="ph">
            <h3>${product.name}</h3>
            <span class="articles__article__price">
                <strong>€ ${product.price}</strong>
            </span>
            <div class="articles__article__rating-wrap">
                <img src="assets/img/icons/all-rating-starts.svg" alt="5 star rating">
                <span class="articles__article__rating-amount">(256)</span>
            </div>
            <div class="articles__article__link-atc-wrap">
                <a class='articles__article__link' href="productDetail/index.html?product=${product.id}">more info</a>
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
        // add products to cart
        const addToCart = document.querySelectorAll('.articles__article__addToCardBtn')
        const moreInfoOfProduct = document.querySelectorAll('.articles__article__link');

        for (let i = 0; i < addToCart.length; i++) {
          addToCart[i].addEventListener('click', () => {
            cartNumbers(data[i])
            totalCostOfProductsInCart(data[i]);
          })
        }

        // link to detail page
        const productDetailPage = document.querySelector('.product-detail');
        moreInfoOfProduct.forEach((link, i) => {
          link.addEventListener('click', () => {
            productDetailPage.innerHTML = 'test'
            console.log(data[i])
          })
        });
      });
    });


}


// shows amount of items in cart on load 
const onLoadCartNumbers = () => {
  let productNumbers = localStorage.getItem('cartNumbers')
  if (productNumbers) {
    document.querySelector('.shopping-cart-icon span').textContent = productNumbers;
  }
}

// chost amount of items in cart
const cartNumbers = (product) => {
  let productNumbers = localStorage.getItem('cartNumbers')
  productNumbers = parseInt(productNumbers)
  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1)
    document.querySelector('.shopping-cart-icon span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1)
    document.querySelector('.shopping-cart-icon span').textContent = 1;
  }
  setItems(product)
}

// sets items in localstorage
const setItems = (product) => {
  let cartItems = localStorage.getItem('productsInCart')
  cartItems = JSON.parse(cartItems)

  if (cartItems != null) {
    if (cartItems[product.name] === undefined) {
      cartItems = {
        ...cartItems,
        [product.name]: product
      }
    }
    cartItems[product.name].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.name]: product
    }
  }
  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

// counts the amount of products in cart
const totalCostOfProductsInCart = (product) => {
  let cartCost = localStorage.getItem('totalCostOfProductsInCart');

  if (cartCost != null) {
    cartCost = parseInt(cartCost)
    localStorage.setItem('totalCostOfProductsInCart', cartCost + product.price)
  } else {
    localStorage.setItem('totalCostOfProductsInCart', product.price);
  }
}

const showCartContentToPage = () => {
  let cartCost = localStorage.getItem('totalCostOfProductsInCart');
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems)

  const $shoppingCartItems = document.querySelector('.shopping-cart__articles');
  document.querySelector('.shopping-cart__title').innerHTML = `Shopping cart (${Object.keys(cartItems).length})`
  if (cartItems && $shoppingCartItems) {
    $shoppingCartItems.innerHTML = '';
    Object.values(cartItems).map(product => {
      $shoppingCartItems.innerHTML += `
      <div class="shopping-cart__articles__article">
            <div class='shopping-cart__articles__article-content'>
                <img src="/assets/img/placeholder-image.png" alt="ph">
                <div class="shopping-cart__articles__article-info-wrap">
                    <h3>${product.name}</h3>
                    <span class="shopping-cart__articles__article-price">
                        &euro; ${product.price * product.inCart}
                    </span>
                    <div class='shopping-cart__articles__article-info-wrap__select-delete-btn-wrap'>
                        <span>${product.inCart}</span>
                        <button class='shopping-cart__articles__article__delete-btn'>
                        <img src="/assets/img/icons/delete-btn.svg" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </div>
      `
      const deleteItemFromShoppingCartBtn = document.querySelectorAll('.shopping-cart__articles__article__delete-btn');
      deleteItemFromShoppingCartBtn.forEach(btn => {
        btn.addEventListener('click', () => {
          // delete function here
        })
      });
    })
    const $shoppingCartPrices = document.querySelector('.shopping-cart__prices');
    $shoppingCartPrices.innerHTML = `
     <li>
            <span class="shopping-cart__prices__price-item">items</span>
            &euro;
            <span class="hopping-cart__prices__price-amount">${cartCost}</span>
        </li>
        <li>
            <span class="shopping-cart__prices__price-item">tax</span>
            &euro;
            <span class="hopping-cart__prices__price-amount">100</span>
        </li>
         <li>
            <span class="shopping-cart__prices__price-item price-total">total</span>
            &euro;
            <span class="hopping-cart__prices__price-amount price-total">${parseInt(cartCost) + 100}</span>
        </li>
    `
  }
}

//---------------------------computer page-------------------------

showComputerPageArticles = () => {
  console.log(window.location.pathname)
  const techType = window.location.pathname.replace('/', '');
  const $computerPage = document.querySelector('.computers .articles__all-articles');
  fetch('http://localhost:8080/api/product')
    .then(response => response.json())
    .then(data => {
      data.map(product => {
        product.type = 'computer'
        if (product.type === 'computer') {
          $computerPage.innerHTML += `
          <div class="articles__article">
            <img class='articles__article__product-image' src="https://source.unsplash.com/1600x900/?${techType}" alt="ph">
            <h3>${product.name}</h3>
            <span class="articles__article__price">
                <strong>€ ${product.price}</strong>
            </span>
            <div class="articles__article__rating-wrap">
                <img src="../assets/img/icons/all-rating-starts.svg" alt="5 star rating">
                <span class="articles__article__rating-amount">(256)</span>
            </div>
            <div class="articles__article__link-atc-wrap">
                <a class='articles__article__link' href="productDetail/index.html?product=${product.id}">more info</a>
                <button class='articles__article__addToCardBtn'>
                  <img data-id='${product.id}' src="../assets/img/icons/add-to-cart.svg" alt="add to cart icon">
                </button>
            </div>
            <div class="articles__article__in-stock-wrap">
                <img src="../assets/img/icons/check_circle.svg" alt="check">
                <span class="articles__article__in-stock">in stock</span>
            </div>
          </div>
        </div>
        `
        }
      })
    })
}

showComputerPageArticles();
showFrontpageSpotlight();
showFrontpageArticles();
onLoadCartNumbers();
showCartContentToPage();