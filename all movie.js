function tampilkanSemuaMovies() {
  $.getJSON('https://blacktvreborn.my.id/movies/source/data/movies.json', function(result) {
    let movies = result.movies;
    let judul = '';
    $('#daftar-movies').empty();
    $.each(movies, function(i, result) {
      $('#daftar-movies').append('<div class="col-3 col-sm-3 col-md-2 col-lg-1"><div id="' + result.kode + '" class="card"><img src="' + result.poster + '" class="card-img-top"></div>');
      $('#' + result.kode + '').click(function() {
        document.getElementById("objek").innerHTML = '<iframe src="' + result.url + '" height="0" width="0" style="border:none;display:none;" title="SS Sport"></iframe>'
        // console.log(result.kode);
      });
    });
  });
}

tampilkanSemuaMovies();



