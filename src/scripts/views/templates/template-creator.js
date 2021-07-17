import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (resto) => `
<h2 class="restodetail__title">${resto.name}</h2>
<img class="restodetail__poster" src="${
  CONFIG.BASE_IMAGE_URL + resto.pictureId
}" alt="${resto.name}" />
<div class="restodetail__info">
<h3>Information</h3>
  <h4>Kota</h4>
  <p>${resto.city}</p>
  <h4>Alamat</h4>
  <p>${resto.address}</p>
  <h4>Rating</h4>
  <p>${resto.rating} <span><i class="fa fa-heart"></i></span> </p>
  <h4>Deskripsi</h4>
  <p align="justify">${resto.description}</p>

  <h4>Kategori</h4>
    <ul class="restodetail__list">
    ${resto.categories.map((categori) => `
      <li>${categori.name}</li>
    `).join('')}
    </ul>
    <h4>Daftar makanan</h4>
    <ul class="restodetail__list">
    ${resto.menus.foods.map((food) => `
      <li>${food.name}</li>
    `).join('')}
    </ul>
    
    <h4>Daftar minuman</h4>
    <ul class="restodetail__list">
    ${resto.menus.drinks.map((drink) => `
      <li>${drink.name}</li>
    `).join('')}
    </ul>

    <div class="restodetail__review">
      <h3>Review Restaurant</h3>
        <div class="restodetail__review__container">
        ${resto.customerReviews.map((review) => `
          <div class="restodetail__review__card">
            <i class="fa fa-user fa-3x"></i>
            <h5 class="restodetail__review__name">${review.name}</h5>
            <p class="restodetail__review__date">${review.date}</p>
            <p class="restodetail__review__desciption">"${review.review}"</p>
          </div>
        `).join('')}
        </div>
    </div>
  
</div>

`;

const createRestaurantItemTemplate = (restaurant) => `
<article class="post-item">
     <div class="post-item__image">
         <img class="post-item__thumbnail"
             src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
             alt="Gambar ${restaurant.name}">
         <span class="post-item__city">${restaurant.city}</span>
     </div>

     <div class="post-item__content">
         <h3 class="post-item__rating">${restaurant.rating} &#9733;</h3>
         <h3 class="post-item__title"><a href="${`/#/detail/${restaurant.id}`}"">${restaurant.name}</a></h3>
         <p class="post-item__description">${restaurant.description.substr(0, 200)} ...</p>
     </div>
   </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
