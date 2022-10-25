import CardSource from './function/card-source';
import './component/card-list';

const main = () => {
  const navbarElement = document.querySelector('nav-bar');
  const cardListElement = document.querySelector('card-list');
  const renderResult = (cards) => {
    cardListElement.cards = cards;
  };

  const renderMessage = (error) => {
    cardListElement.renderNoResult(error);
  };

  const onInputEvent = async () => {
    try {
      const cards = await CardSource.getCards(navbarElement.keyword);
      renderResult(cards);
    } catch (error) {
      renderMessage(error);
    }
  };

  navbarElement.inputEvent = onInputEvent;
};

export default main;
