$(document).ready(function() {
  var movieId = SharingHelper.getQueryVariable('movieId');
  console.log('movieId:', movieId);
  if (movieId) {
    SharingHelper.appendMovieMetaTags(movieId);
  }
  SharingHelper.registerEventHandlers();
  Facebook.init();
});
