var Facebook = {
  init: function() {
    Facebook.registerAsyncInit();
    Facebook.connect();
  },
  registerAsyncInit: function () {
    window.fbAsyncInit = function () {
      console.log('fbAsyncInit');
      FB.init({
        appId: Config.facebookKey,
        cookie: true,
        xfbml: true,
        version: 'v2.8',
        oauth: true
      });
    };
  },
  connect: function () {
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
};

