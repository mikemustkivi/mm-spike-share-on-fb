$(document).ready(function() {
  var movieId = SharingHelper.getQueryVariable('movieId');
  console.log('movieId:', movieId);
  movieId = movieId ? movieId : "1234";
  SharingHelper.appendMovieMetaTags(movieId);
  SharingHelper.registerEventHandlers();
  Facebook.init();
});
