var MoviesShareOpenGraph = {
  "midnight_in_paris": [{
    property: 'og:url',
    content: Config.hostUrl +'/shared_movie.html?movieName=midnight_in_paris'
  }, {
    property: 'og:image',
    content: Config.hostUrl + '/images/08a84ff4-06f9-48f6-9c75-41264a777188-poster.jpg'
  // }, {
  //   property: 'og:other',
  //   content: 'https://www.youtube.com/watch?v=FAfR8omt-CY'
  // }, {
  //   property: 'og:image:width',
  //   content: '240'
  // }, {
  //   property: 'og:image:heigth',
  //   content: '340'
  // }, {
  //   property: 'og:type',
  //   content: 'video.other'
  }, {
    property: 'og:title',
    content: 'Südaöö Pariisis'
  }, {
    property: 'og:description',
    content: 'Lootusetust romantikust kirjanik Gil on veendunud, et ta oleks pidanud sündima 1920ndatel. Sõites puhkusele Pariisi, süveneb ta veendumus veelgi enam. Tema kallim Ines aga tunneb rõõmu tänasest päevast. Gili südaöised jalutuskäigud Pariisis muudavad linna ta jaoks järjest lähedasemaks ja kalli kaasa üha kaugemaks.'
  }],
  convertToSharedObject: function(movie) {
    var obj = {};
    movie.forEach(function (item) {
      obj[item.property] = item.content;
    });
    return obj;
  },
  get: function (movie, propetry) {
    // console.log('MoviesShareOpenGraph, get movie property ', propetry);
    var result;
    movie.forEach(function (item) {
      if (propetry === item.property) {
        // console.log('MoviesShareOpenGraph, get movie property ', propetry, ', found: ', JSON.stringify(item));
        result = item;
      }
    });
    return result;
  }

  // object: {
  //   'og:url': 'https://www.mikemustkivi.eu/dev/movies/1234.html', // your url to share
  //   'og:title': 'Koerte saar (jagamisviis share_open_graph)',
  //   'og:description': '"“Koerte saar” on lugu 12-aastasest Atari Kobayashist, kelle eestkostjaks on korrumpeerunud meer Kobayashi. Kui linnapea dekreediga küüditatakse kõik Megasaki City koerad tohutule prügimäele, kihutab Atari oma Junior-Turbo propellerlennukiga Prügisaarele, et päästa oma neljajalgne ihukaitsja Täpi. Koos uute krantsidest sõpradega asub Atari eepilisele teekonnale, millega määratakse terve Prefektuuri tulevik."',
  //   'og:image': 'https://www.mikemustkivi.eu/dev/images/9fd2e62c-981c-4ec9-a2ed-7a52a39ada8a-poster.png',
  //   'og:type': 'video.movie'
  // }
};


var Movies = {
  "1234": [{
    property: 'og:url',
    content: Config.hostUrl +'/dev/html/koerte_saar.html?movieId=1234'
  }, {
    property: 'og:image',
    content: Config.hostUrl + '/dev/images/9fd2e62c-981c-4ec9-a2ed-7a52a39ada8a-poster.png'
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