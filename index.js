const express = require('express')
const cors = require('cors')
const app = express();
// const axios = require('axios');
const port = process.env.PORT || 9999;


app.use(cors());
// const download = require("node-file-downloader")

const {getHomePageDetails} = require('./controller/homeController');
const { getTrendingData } = require('./controller/TrendingController');
// const { getTopCharts } = require('./controller/TopChartsController');
// const { getNewReleases } = require('./controller/NewReleasesController');
// const { getEditorialPicks } = require('./controller/EditorialPicksController');
// const { getRadioStations } = require('./controller/RadioStationsController');

const { getSongDetails, getSongId, getSongMediaUrl, getLyricsDetails } = require('./controller/SongController');
const { getPlaylistId, getPlaylistsDetails } = require('./controller/PlaylistController');
const { getQueryResults } = require('./controller/QueryController');
const { getAlbumId, getAlbumDetails, getAlbumSongs } = require('./controller/AlbumController');

app.use(express.json());
function fn(req, res) {
    res.send({
        welcome: "Welcome to Jio Saavn Unofficial Api! Create with ❤️❤️❤️ using Javascript, Express and cheerio by @bharath999999. Here are the routes to acess this api",
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
        '/search/:query': "getQueryResults"
    });
}

app.get('/', fn); //Home page

app.get("/homePageDetails", getHomePageDetails); //Home page
// app.get('/trendingData', getTrendingData);               //0
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
app.get('/song/download/:songName/:songId1/:songId2', getSongDownload);

// function getDownload(req, res){
//     let filePath = "https://aac.saavn.com/" + req.params.SongId1 + '/' + req.params.SongId2;
//     let filename = req.params.songName;
//     res.download(filePath,filename);
// }

// function getSongDownload(req, res) {
//     let filePath = "https://aac.saavn.com/" + req.params.SongId1 + '/' + req.params.SongId2;
//     let filename = req.params.songName;
//     download(filePath, filename + ".mp4", function(){
//         console.log("Downloaded");
//     })
//     res.send("Sucessfully downloaded");
// }

async function getSongDownload(req, res) {
    const fetch = require('node-fetch');
    const fs = require('fs');
    let filePath = "https://aac.saavncdn.com/" + req.params.SongId1 + '/' + req.params.SongId2;
    let filename = req.params.songName;
    const response = await fetch(filePath);
    const buffer = await response.buffer();

    fs.writeFile(`./songs/${filename}.mp4`, buffer, () =>
        console.log('finished downloading video!'));
}
app.listen(port, function () {
    console.log(`server started at ${port}`);
})