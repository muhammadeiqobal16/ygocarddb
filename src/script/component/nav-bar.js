class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  get keyword() {
    return this.querySelector('nav form input').value;
  }

  set inputEvent(event) {
    this._inputEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Yu-Gi-Oh! CardDb.</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex ms-auto" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" autocomplete="off" autofocus>
            </form>
          </div>
        </div>
      </nav>
    `;
    this.querySelector('nav form input').addEventListener('input', this._inputEvent);
  }
}

customElements.define('nav-bar', Navbar);
