var Movies = {
  "1234": [{
    property: 'og:url',
    content: Config.hostUrl +'/dev/html/koerte_saar.html?movieId=1234'
  }, {
    property: 'og:image',
    content: Config.hostUrl + '/dev/images/9fd2e62c-981c-4ec9-a2ed-7a52a39ada8a-poster.jpg'
  }, {
    property: 'og:type',
    content: 'video.movie'
  }, {
    property: 'fb:app_id',
    content: Config.facebookKey
  }, {
    property: 'og:title',
    content: 'Koerte saar'
  }, {
    property: 'og:description',
    content: '“Koerte saar” on lugu 12-aastasest Atari Kobayashist, kelle eestkostjaks on korrumpeerunud meer Kobayashi. Kui linnapea dekreediga küüditatakse kõik Megasaki City koerad tohutule prügimäele, kihutab Atari oma Junior-Turbo propellerlennukiga Prügisaarele, et päästa oma neljajalgne ihukaitsja Täpi. Koos uute krantsidest sõpradega asub Atari eepilisele teekonnale, millega määratakse terve Prefektuuri tulevik.'
  }],
  log: function () {
    console.log('Movies["1234"]:', Movies["1234"]);
  }
};