import './card-item';

class CardList extends HTMLElement {
  constructor() {
    super();
    this.setAttribute('class', 'row');
  }

  set cards(cards) {
    this._cards = cards;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._cards.forEach((card) => {
      const cardItemElement = document.createElement('card-item');
      cardItemElement.setAttribute('class', 'col-6 col-md-3 col-lg-2 mb-3');
      cardItemElement.card = card;

      this.appendChild(cardItemElement);
    });
  }

  renderNoResult(error) {
    this.innerHTML = '';
    this.innerHTML = `<h1 class="text-center">${error}</h1>`;
  }
}

customElements.define('card-list', CardList);
