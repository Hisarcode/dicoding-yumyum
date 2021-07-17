class ErrorSign extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div>
        <h1>Konten gagal dimuat!</h1>
        <p>Periksa koneksi anda dan klik refresh untuk memuat kembali</p>
      </div>
    `;
  }
}

customElements.define('error-sign', ErrorSign);
