class PostContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="content">
      <div class="resto">
        <h1 class="resto__label">Kota dengan Kuliner Terbaik</h1>
        <div class="posts" id="posts__article">
          <article class="post-item">
            <div class="post-item__image">
              <img class="post-item__thumbnail"
                src="https://cdn.pixabay.com/photo/2017/11/24/21/49/bali-2975787_1280.jpg" alt="Gambar Bali">
            </div>
            <div class="post-item__content">
              <h3 class="post-item__title"><a href="#">Bali</a></h3>
            </div>
          </article>
          <article class="post-item">
            <div class="post-item__image">
              <img class="post-item__thumbnail"
                src="https://media-cdn.tripadvisor.com/media/photo-f/13/da/5b/62/food-at-saigonsan-restaurant.jpg"
                alt="Gambar Malang">
            </div>
            <div class="post-item__content">
              <h3 class="post-item__title"><a href="#">Malang</a></h3>

            </div>
          </article>
          <article class="post-item">
            <div class="post-item__image">
              <img class="post-item__thumbnail"
                src="https://cdn.idntimes.com/content-images/community/2020/02/50634444-349923728943100-4251778540682919136-n-b47975f907e52a4604c5a95e501dfcc7_600x400.jpg"
                alt="Gambar Ternate">
            </div>
            <div class="post-item__content">
              <h3 class="post-item__title"><a href="#">Ternate</a></h3>
            </div>
          </article>
        </div>
      </div>
    <div>
    `;
  }
}

customElements.define('post-content', PostContent);
