var SharingHelper = {
  registerEventHandlers: function () {
    console.log('registerEventHandlers');

    $('body').on('click', '.share.facebook', SharingHelper.shareOnFacebook);
  },
  
  startSharing: function (e) {
    e.preventDefault();
    SharingHelper.shareOnFacebook({});
  },
  shareOnFacebook: function (data) {
    var sharedData;
    console.log('share on facebook');
    sharedData = {
      "method": "feed",
      "link": Config.hostUrl + "/html/koerte_saar.html",
      "name": "Koerte saar",
      "caption": "Testimise video pealkiri",
      "description": "“Koerte saar” on lugu 12-aastasest Atari Kobayashist, kelle eestkostjaks on korrumpeerunud meer Kobayashi. Kui linnapea dekreediga küüditatakse kõik Megasaki City koerad tohutule prügimäele, kihutab Atari oma Junior-Turbo propellerlennukiga Prügisaarele, et päästa oma neljajalgne ihukaitsja Täpi. Koos uute krantsidest sõpradega asub Atari eepilisele teekonnale, millega määratakse terve Prefektuuri tulevik.",
      "picture": Config.hostUrl + "/images/9fd2e62c-981c-4ec9-a2ed-7a52a39ada8a-poster.png",
      "version": "v2.8"
    };

    setTimeout(function () {
      console.log('vodShareOnFacebook:', JSON.stringify(sharedData));
    }, 1000);

    FB.ui(sharedData,
      // callback
      function(response) {
        console.log('posting response:', reponse);
        if (response && !response.error_message) {
          alert('Posting completed.');
        } else {
          alert('Error while posting.');
        }
    });
  }
};