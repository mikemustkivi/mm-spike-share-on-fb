var Facebook = {
  init: function() {
    Facebook.registerAsyncInit();
    Facebook.connect();
  },
  registerAsyncInit: function () {
    console.log('facebook registerAsyncInit');
    window.fbAsyncInit = function () {
      console.log('fbAsyncInit');
      FB.init({
        appId: Config.facebookKey,
        cookie: true,
        xfbml: true,
        version: 'v3.1',
        oauth: true
      });
    };
  },
  connect: function () {
    console.log('facebook init sdk');
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
};

