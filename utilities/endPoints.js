const url = "https://www.jiosaavn.com";

// const imageDetailsRectifier = function(link){

// }

module.exports = {
  url: url,
  searchBaseUrl: `${url}/api.php?__call=autocomplete.get&_format=json&_marker=0&cc=in&includeMetaTags=1&query=`,
  songDetailsBaseUrl: `${url}/api.php?__call=song.getDetails&cc=in&_marker=0%3F_marker%3D0&_format=json&pids=`,
  albumDetailsBaseUrl: `${url}/api.php?__call=content.getAlbumDetails&_format=json&cc=in&_marker=0%3F_marker%3D0&albumid=`,
  lyricsBaseUrl: `${url}/api.php?__call=lyrics.getLyrics&ctx=web6dot0&api_version=4&_format=json&_marker=0%3F_marker%3D0&lyrics_id=`,
  playlistDetailsBaseUrl: `${url}/api.php?__call=playlist.getDetails&_format=json&cc=in&_marker=0%3F_marker%3D0&listid=`,
  mediaBaseUrl: "https://aac.saavncdn.com/",
  // imageDetailsRectifier : imageDetailsRectifier
};