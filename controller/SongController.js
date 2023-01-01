const axios = require("axios");
const {url, songDetailsBaseUrl, searchBaseUrl, mediaBaseUrl, lyricsBaseUrl} = require("../utilities/endPoints");


async function getSongDetails(req, res) {
    try {
        let songId = req.params.songId;
        let songDetails = await axios.get(songDetailsBaseUrl + songId)
        res.send(songDetails.data)
    }
    catch (err) {
        console.log(err);
    }
}

async function getSongId(req, res) {
    try {
        let songName = req.params.songName;
        let querryDetails = await axios.get(searchBaseUrl + songName)
        // console.log(querryDetails)
        let data = querryDetails.data.songs.data[0];
        if (data)
            res.send({ id: data.id })
        else
            res.send({response: "Sorry, No songs found"})
    }
    catch (err) {
        console.log(err);
    }
}

async function getSongMediaUrl(req, res) {
    try {
        let songId = req.params.songId;
        let songDetails = await axios.get(songDetailsBaseUrl + songId)
        let data = songDetails.data;
        data = data[songId].media_preview_url;
        // console.log(data[songId].media_preview_url)
        let url = mediaBaseUrl + data.split('.com/')[1].split('_96_p.mp4')[0].split(",")[0]
        if (songDetails.data[songId]["320kbps"]) url += "_320.mp4";
        else url += "_160.mp4";
        res.send({ songBaseUrl: url });

    }
    catch (err) {
        console.log(err);
    }
}

async function getLyricsDetails(req, res) {
    try {
        let songId = req.params.songId;
        let songDetails = await axios.get(songDetailsBaseUrl + songId)
        let data = songDetails.data;
        let lyrics = await axios.get(lyricsBaseUrl + songId)
        if (lyrics.data) {
            res.send(lyrics.data.lyrics);
        }
        else {
            res.send({ response: "Sorry, No Lyrics found" });
        }
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getSongDetails,
    getSongId,
    getSongMediaUrl,
    getLyricsDetails
}