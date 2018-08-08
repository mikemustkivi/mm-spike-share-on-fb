$(document).ready(function() {
  var movieName = SharingHelper.getQueryVariable('movieName');
  console.log('movieName:', movieName);
  if (movieName && MoviesShareOpenGraph[movieName]) {
    SharedMoviePageRenderer.render(MoviesShareOpenGraph[movieName]);
  }
});

var SharedMoviePageRenderer = {
  render: function (movie) {
    var title = MoviesShareOpenGraph.get(movie, 'og:title').content;
    console.log('render movie page with title:', title);
    $('title').text(title);
    $('p#title').text(title);
    $('img').attr('src', MoviesShareOpenGraph.get(movie, 'og:image').content);
    $('p#desc').text(MoviesShareOpenGraph.get(movie, 'og:description').content);
  }
};