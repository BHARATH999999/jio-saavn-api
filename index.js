const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 9999;

app.set('json spaces', 4)
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
        welcome: "Welcome to Jio Saavn Unofficial Api! Crafted with ❤️❤️❤️ using JavaScript, Express, cheerio, aws, ec2-instance and pm2 by @bharath999999. Here are the routes to acess this api:-",
        '/homePageDetails': "get the home page details of jio-saavn.",
        // '/trendingData': "getTrendingData",
        '/albumId/<albumName>': "get AlbumId of a particular album, which will be used for fetching album information.",
        '/album/<albumId>':      "get Album information for a particular AlbumId.",
        '/album/songs/<albumId>': "get all the Songs in an album with the given albumId.",
        '/songId/<songName>': "get SongId of a particular Song, which will be used for fetching song information.",
        '/songDetails/<songId>': "get the Song details with the given songId.",
        '/songMediaUrl/<songId>': "get Song-media-url with the given songId, which will be used for listening and downloading the song.",
        '/lyrics/<songId>': "get the Lyrics(if available) with the given songId.",
        '/playlistId/<playlistName>': "get the PlaylistId of a particular Playlist, which will be used for fetching playlist information.",
        '/playlist/<playlistId>': "get the Playlists information with the given playlistId.",
        '/search/<query>': "get the general search results for a particular Query.",
        '/getAllLanguageData': "get the links of all language data i.e. newly releases, weekly top, featured playlists and featured albums.",
        '/getLanguageData/<language>': "get the links as said above for a particular language like Hindi, English, Tamil, Telugu, Punjabi, Marathi, Gujarati, Bengali, Kannada, Bhojpuri, Malayalam, Urdu, Haryanvi, Rajasthani, Odia, Assamese",
        '/getAllAlbums/<language>': "get the details(name and link) of All the Albums in a Language(Note:- Takes some time to fetch all the data.)",
        '/getAllAlbums/<language>/<startsWith>': 'get the details(name and link) of All the Albums in a Language which starts with a particular character. --> use any characters from a to z for albums starting with alphabet and for data starting with numbers kindly use "0-9" as startsWith ',
        "Note 1:- hostname should be used before all these routes." : "Hostname is http://34.207.57.230/",
        "Example 1:-" : "http://34.207.57.230/songId/believer fetches the songId of the song (Believer) as 'BeXBcbVK'.",
        "Example 2:-":  "http://34.207.57.230/songMediaUrl/BeXBcbVK fetches the songMediaUrl of the song (Believer) as 'https://aac.saavncdn.com/248/a6b1b78b396245f712abda8f1daefee0_320.mp4' which can be used to listen or download the same.",
        "Note 2:- replace a particular <parameter> with the respective details" : "Example:- <language> can be replaced with English",
        "help" : "If you found any errors, feel free to comment them in our repository 'https://github.com/BHARATH999999/jio-saavn-api' and star the same repository if you really love this api.",
        "Disclaimer" : "The data fetched and the links(everything) is available online. I have only made the process of acheiving the data easier, Thanks!",
        "More to come" : "Many more routes, features and documentation are on the way. Stay in touch."
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