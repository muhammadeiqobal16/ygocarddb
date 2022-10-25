class CardDetails {
  static getCardDetails(cardId) {
    return fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${cardId}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.data) {
          return Promise.resolve(responseJson.data[0]);
        }
        return Promise.reject(new Error('ERROR RETRIEVING CARD DETAILS'));
      });
  }

  static showModalContent(cardDetails) {
    return `
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-sm-4">
            <img src="${cardDetails.card_images[0].image_url}" class="card-img-top" />
          </div>
          <div class="col">
            <div class="container-fluid">
              <div class="row">
                <div class=col>
                  <h3>${cardDetails.name}</h3>
                </div>
              </div>
              <div class="row d-flex justify-content-between">
                <div class="col">
                  <strong>Type:</strong>
                  <p>${cardDetails.type}</p>
                </div>
                <div class="col">
                  <strong>Attribute:</strong>
                  <p>${cardDetails.attribute ? cardDetails.attribute : '-'}</p>
                </div>
                <div class="col">
                  <strong>Typing:</strong>
                  <p>${cardDetails.race}</p>
                </div>
              </div>
              <div class="row d-flex justify-content-between">
                <div class="col">
                  <strong>Level:</strong>
                  <p>${cardDetails.level ? cardDetails.level : '-'}</p>
                </div>
                <div class="col">
                  <strong>ATK:</strong>
                  <p>${cardDetails.atk ? cardDetails.atk : '-'}</p>
                </div>
                <div class="col">
                  <strong>DEF:</strong>
                  <p>${cardDetails.def ? cardDetails.def : '-'}</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <strong>Archetype:</strong>
                  <p>${cardDetails.archetype ? cardDetails.archetype : '-'}</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <strong>Archetype:</strong>
                  <p>${cardDetails.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export default CardDetails;
