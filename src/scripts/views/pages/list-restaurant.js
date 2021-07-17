import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
    <hero-section></hero-section>
    <main>
      <div class="content">
        <div class="resto">
          <h1 class="resto__label">Daftar Restaurant</h1>
          <loading-sign></loading-sign>
          <div class="posts" id="posts__article"></div>
        </div>
      </div>
      <post-content></post-content>
    </main>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#posts__article');
    const loadingSign = document.querySelector('.loader');

    try {
      const restaurants = await RestaurantSource.listRestaurants();
      loadingSign.style.display = 'none';
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML +=
          createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      loadingSign.style.display = 'none';
      console.log(error);
      restaurantsContainer.innerHTML = '<error-sign></error-sign>';
    }
  },
};

export default ListRestaurant;
