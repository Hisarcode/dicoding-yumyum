class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">Kami berikan yang terlezat</h1>
        <p class="hero__tagline">Temukan hidangan nikmat bersama orang yang anda cintai</p>
        <button class="hero__button">Find Now</button>
      </div>
    </div>
    `;
  }
}

customElements.define('hero-section', HeroSection);
