const express = require('express')
const app = express();
const { getSongDetails, getSongId, getSongMediaUrl, getLyricsDetails } = require('./controller/SongController');
const { getPlaylistId, getPlaylistsDetails } = require('./controller/PlaylistController');
const { getQueryResults } = require('./controller/QueryController');
const { getAlbumId, getAlbumDetails, getAlbumSongs } = require('./controller/AlbumController');
const { getTrendingData } = require('./controller/TrendingController');

app.use(express.json());
function fn(req, res) {
    res.send({
        welcome: "Welcome to Jio Saavn Unofficial Api! Create with ❤️❤️❤️ using Express and cheerio by @bharath999999"
    });
}

app.get('/', fn)

app.get('/trendingData', getTrendingData);
app.get('/albumId/:albumName', getAlbumId);
app.get('/album/:albumId', getAlbumDetails);
app.get('/album/songs/:albumId', getAlbumSongs);
app.get('/songId/:songName', getSongId);
app.get('/songDetails/:songId', getSongDetails);
app.get('/songMediaUrl/:songId', getSongMediaUrl)
app.get('/lyrics/:songId', getLyricsDetails);
app.get('/playlistId/:playlistName', getPlaylistId);
app.get('/playlist/:playlistId', getPlaylistsDetails);
app.get('/search/:query', getQueryResults)

app.listen(9999, function () {
    console.log("server started at 9999");
})