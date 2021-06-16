const search = window.location.search;
const params = new URLSearchParams(search);
const urlType = params.get('product')


fetch('http://localhost:8080/api/product')
  .then(response => response.json())
  .then(data => {
    if (urlType !== null) {
      let product;
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === parseInt(urlType)) {
          product = data[i];
        }
      }
      fetch(`http://localhost:8080/api/specification/${product.specifications_id}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (product) {
            const $content = document.querySelector('.product-detail')
              let tempStr = "";
              tempStr += `
                <div class="product-detail__photo-wrap">
                <div class='product-detail__photo-wrap__big-image'><img class='product-detail-img-one' src='https://source.unsplash.com/1600x900/?computer' alt=""></div>
                <div class='product-detail__photo-wrap__small-image'>
                    <img class='product-detail-img-two' src="/assets/img/placeholder-image.png" alt="">
                    <img class='product-detail-img-three' src="/assets/img/placeholder-image.png" alt="">
                    <img class='product-detail-img-four' src="/assets/img/placeholder-image.png" alt="">
                </div>
              </div>

              <div class="product-detail__info">
                <h2>${product.name}</h2>
                <span class="product-detail__info-price">&euro; ${product.price}</span>
                <p class="product-detail__info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus ea a facilis nemo illo quos laboriosam, dolore quia aspernatur.</p>
                <div class="product-detail__info-rating-wrap">
                    <img src="/assets/img/icons/all-rating-stars.svg" alt="">
                    <a href='#'><span class="rating-reviews-count">xx reviews</span></a>
                </div>
                <div class="product-detail__info-amount-atc-wrap">
                    <select name="select-product-amount" id="select-product-amount">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button>Add to cart</button>
                </div>
                <ul class="product-detail__info-specs">
                    <li><strong>height: </strong><span class="spec-info">${data.height} mm</span></li>
                    <li><strong>weight: </strong><span class="spec-info">${data.weight} kg</span></li>
                    <li><strong>width: </strong><span class="spec-info">${data.width} mm</span></li>
                    <li><strong>ram: </strong><span class="spec-info">${data.ram} gb</span></li>
                    <li><strong>storage: </strong><span class="spec-info">${data.storage === null ? '/' : data.storage + 'gb'}</span></li>
                </ul>
              </div>
              `
            $content.innerHTML = tempStr;
          }
        })

    }
  });