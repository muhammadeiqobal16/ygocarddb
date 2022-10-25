class CardSource {
  static getCards(keyword) {
    return fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${keyword}&num=24&offset=0`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.data) {
          return Promise.resolve(responseJson.data);
        }
        return Promise.reject(new Error('NO RESULT'));
      });
  }
}

export default CardSource;
