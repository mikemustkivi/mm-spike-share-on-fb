var SharingHelper = {
  registerEventHandlers: function () {
    console.log('registerEventHandlers');

    $('body').on('click', '.share.facebook', SharingHelper.shareOnFacebook);
    $('body').on('click', '.share.facebook.with.meta', SharingHelper.shareOnFacebookBasedOnHeadMetaOgTags);
  },
  
  startSharing: function (e) {
    e.preventDefault();
    SharingHelper.shareOnFacebook({});
  },
  shareOnFacebook: function (event) {
    var sharedData, openGraphObj, title = event.target.dataset.title;
    console.log('share on facebook');
    if (!title || !MoviesShareOpenGraph[title]) {
      console.log('title not found, skipping fb sharing');
      return;
    }
    openGraphObj = MoviesShareOpenGraph.convertToSharedObject(MoviesShareOpenGraph[title]);
    console.log('openGraphObj:', JSON.stringify(openGraphObj));
    sharedData = {
      method: 'share_open_graph',
      action_type: 'og.shares',
      action_properties: JSON.stringify({
        object: openGraphObj
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