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
      "source": 'https://www.youtube.com/watch?v=dt__kig8PVU',
      "description": "Koerte saar on lugu 12-aastasest Atari Kobayashist",
      "picture": Config.hostUrl + "/images/9fd2e62c-981c-4ec9-a2ed-7a52a39ada8a-poster.png"
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
  // nope
  shareOnFacebookLikes: function (data) {
    var sharedData;
    console.log('share on facebook');
    sharedData = {
      "method": "share_open_graph",
      "action_type": 'og.likes',
      "action_properties": JSON.stringify({
        object: Config.hostUrl + "/html/koerte_saar.html",
        image: Config.hostUrl + "/images/9fd2e62c-981c-4ec9-a2ed-7a52a39ada8a-poster.png",
        scrape: false
      })
    };

    setTimeout(function () {
      console.log('shareOnFacebook:', JSON.stringify(sharedData));
    }, 1000);

    FB.ui(sharedData,
      function(response) {
        console.log('posting response:', JSON.stringify(response));
        if (response && !response.error_message) {
          alert('Posting completed.');
        } else {
          alert('Error while posting.');
        }
      });
  }
};