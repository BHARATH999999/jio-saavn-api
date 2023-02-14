const express = require('express')
const cors = require('cors')
const app = express();
// const axios = require('axios');
var pretty = require('express-prettify');

app.use(pretty({ query: 'pretty' }));
const port = process.env.PORT || 9999;

app.set('json spaces', 2)
app.use(cors());
// const download = require("node-file-downloader")

const { getHomePageDetails } = require('./controller/homeController');
// const { getTrendingData } = require('./controller/TrendingController');
// const { getTopCharts } = require('./controller/TopChartsController');
// const { getNewReleases } = require('./controller/NewReleasesController');
// const { getEditorialPicks } = require('./controller/EditorialPicksController');
// const { getRadioStations } = require('./controller/RadioStationsController');

const { getSongDetails, getSongId, getSongMediaUrl, getLyricsDetails } = require('./controller/SongController');
const { getPlaylistId, getPlaylistsDetails } = require('./controller/PlaylistController');
const { getQueryResults } = require('./controller/QueryController');
const { getAlbumId, getAlbumDetails, getAlbumSongs, getAllAlbumsInALanguage, getAllAlbumsInALanguageStartsWith } = require('./controller/AlbumController');
const { getLanguageData, getAllLanguageData } = require('./controller/LanguageController');

app.use(express.json());
function fn(req, res) {
    res.send({
        welcome: "Welcome to Jio Saavn Unofficial Api! Created with ❤️❤️❤️ using JavaScript, Express and cheerio by @bharath999999. Here are the routes to acess this api",
        '/homePageDetails': "getHomePageDetails",
        // '/trendingData': "getTrendingData",
        '/albumId/:albumName': "getAlbumId",
        '/album/:albumId': "getAlbumDetails",
        '/album/songs/:albumId': "getAlbumSongs",
        '/songId/:songName': "getSongId",
        '/songDetails/:songId': "getSongDetails",
        '/songMediaUrl/:songId': "getSongMediaUrl",
        '/lyrics/:songId': "getLyricsDetails",
        '/playlistId/:playlistName': "getPlaylistId",
        '/playlist/:playlistId': "getPlaylistsDetails",
        '/search/:query': "getQueryResults",
        '/getAllLanguageData': "getAllLanguageData",
        '/getLanguageData/:language': "getLanguageData of the one of the languages like Hindi, English, Tamil, Telugu, Punjabi, Marathi, Gujarati, Bengali, Kannada, Bhojpuri, Malayalam, Urdu, Haryanvi, Rajasthani, Odia, Assamese",
        '/getAllAlbums/:language': "getAllAlbumsInALanguage --> Takes some time to fetch all the data.",
        '/getAllAlbums/:language/:startsWith': 'getAllAlbumsInALanguageStartsWith) --> use any characters from a to z for albums starting with alphabet and for data starting with numbers kindly use "0-9" as startsWith '

    });
}

app.get('/', fn); //Home page

app.get("/homePageDetails", getHomePageDetails); //Home page
// app.get('/trendingData', getTrendingData);            //0
// app.get('/topCharts', getTopCharts);                  //1
// app.get('/newReleases', getNewReleases);              //2
// app.get('/editorialPicks', getEditorialPicks);        //3
// app.get('/radioStations', getRadioStations);          //4

app.get('/albumId/:albumName', getAlbumId);
app.get('/album/:albumId', getAlbumDetails);
app.get('/album/songs/:albumId', getAlbumSongs);
app.get('/songId/:songName', getSongId);
app.get('/songDetails/:songId', getSongDetails);
app.get('/songMediaUrl/:songId', getSongMediaUrl)
app.get('/lyrics/:songId', getLyricsDetails);
app.get('/playlistId/:playlistName', getPlaylistId);
app.get('/playlist/:playlistId', getPlaylistsDetails);
app.get('/search/:query', getQueryResults);
app.get('/getLanguageData/:language', getLanguageData);
app.get('/getAllLanguageData', getAllLanguageData);
app.get('/getAllAlbums/:language', getAllAlbumsInALanguage); // Takes some time to fetch all the data.
app.get('/getAllAlbums/:language/:startsWith', getAllAlbumsInALanguageStartsWith); // use any characters from a to z for albums starting with alphabet for data starting with numbers kindly use "0-9" as startsWith

app.all('*', function (req, res) {
    res.status(404).send({400 : 'Not Found or Unaccessible route'});
}); // Manages all the remaining unacessible routes 

app.listen(port, function () {
    console.log(`server started at ${port}`);
})