class FooterSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <span>Copyright &copy; 2021 - YumYum</span>
    </footer>
    `;
  }
}

customElements.define('footer-section', FooterSection);
