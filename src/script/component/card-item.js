import CardDetails from '../function/card-details';

class CardItem extends HTMLElement {
  set card(card) {
    this._card = card;
    this.render();
  }

  async onClickEvent() {
    const cardId = this.querySelector('img').getAttribute('id');
    const modalBody = document.querySelector('.modal-body');
    try {
      const cardDetails = await CardDetails.getCardDetails(cardId);
      const modalContent = await CardDetails.showModalContent(cardDetails);
      modalBody.innerHTML = modalContent;
    } catch (error) {
      modalBody.innerHTML = this.renderError(error);
    }
  }

  renderError(error) {
    this.innerHTML = '';
    this.innerHTML = `<h1 class="text-center">${error}</h1>`;
  }

  render() {
    this.innerHTML = `
      <div class="card" type="button" data-bs-toggle="modal" data-bs-target="#showCardDetail">
        <img id="${this._card.id}" src="${this._card.card_images[0].image_url}" class="card-img-top" alt="${this._card.name}">
      </div>
      `;

    this.querySelector('.card').addEventListener('click', this.onClickEvent);
  }
}

customElements.define('card-item', CardItem);
