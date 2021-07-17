class NavigationDrawer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="header">
      <div class="header__inner">
        <h1 class="header__title">
          <a href="/">YumYum</a>
        </h1>

        <button id="hamburgerButton" class="header__menu">☰</button>

        <nav id="navigationDrawer" class="nav">
          <h1 class="nav__title">
            YumYum
          </h1>
          <ul class="nav__list">
            <li class="nav__item"><a class="nav__link" href="/">Home</a></li>
            <li class="nav__item"><a class="nav__link" href="#">Favorite</a></li>
            <li class="nav__item"><a class="nav__link" href="https://github.com/Hisarcode">About Us</a></li>
          </ul>
        </nav>
      </div>
    <div>
    `;
  }
}

customElements.define('navigation-drawer', NavigationDrawer);
