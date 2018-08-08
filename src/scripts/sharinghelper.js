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
      method: 'share_open_graph',
      action_type: 'og.shares',
      action_properties: JSON.stringify({
        object: {
          'og:url': '"https://www.mikemustkivi.eu/dev/movies/1234.html"', // your url to share
          'og:title': 'Koerte saar (jagamisviis share_open_graph)',
          'og:description': '"“Koerte saar” on lugu 12-aastasest Atari Kobayashist, kelle eestkostjaks on korrumpeerunud meer Kobayashi. Kui linnapea dekreediga küüditatakse kõik Megasaki City koerad tohutule prügimäele, kihutab Atari oma Junior-Turbo propellerlennukiga Prügisaarele, et päästa oma neljajalgne ihukaitsja Täpi. Koos uute krantsidest sõpradega asub Atari eepilisele teekonnale, millega määratakse terve Prefektuuri tulevik."',
          'og:image': 'https://www.mikemustkivi.eu/dev/images/9fd2e62c-981c-4ec9-a2ed-7a52a39ada8a-poster.png'
        }
      })
    };
    setTimeout(function () {
      console.log('shareOnFacebook:', JSON.stringify(sharedData));
    }, 1000);

    FB.ui(sharedData,
      // callback
      function(response) {
        console.log('posting response:', JSON.stringify(response));
        if (response && !response.error_message) {
          alert('Posting completed.');
        } else {
          alert('Error while posting.');
        }
      });
  },
  shareOnFacebookBasedOnHeadMetaOgTags: function (data) {
    var sharedData;
    console.log('share on facebook');
    sharedData = {
      "method": "feed",
      "link": Config.hostUrl + "/movies/1234.html"
    };

    setTimeout(function () {
      console.log('shareOnFacebook:', JSON.stringify(sharedData));
    }, 1000);

    FB.ui(sharedData,
      // callback
      function(response) {
        console.log('posting response:', JSON.stringify(response));
        if (response && !response.error_message) {
          alert('Posting completed.');
        } else {
          alert('Error while posting.');
        }
      });
  },
  appendHeadMetaTag: function (metaPropertyContent) {
    $("head").append($('<meta>')
      .attr('property', metaPropertyContent.property)
      .attr('content', metaPropertyContent.content)
    );
  },
  appendMovieMetaTags: function (movieId) {
    console.log('Movies:',JSON.stringify(Movies));
    Movies[movieId].forEach(function(meta) {
      console.log('append to head meta:', JSON.stringify(meta));
      SharingHelper.appendHeadMetaTag(meta);
    });
  },
  getQueryVariable: function(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (decodeURIComponent(pair[0]) == variable) {
        return decodeURIComponent(pair[1]);
      }
    }
    console.log('Query variable %s not found', variable);
  }
};