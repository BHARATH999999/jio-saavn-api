const axios = require("axios");

async function getSongDetails(req, res) {
    try {
        let songId = req.params.songId;
        let songDetails = await axios.get(`https://www.jiosaavn.com/api.php?__call=song.getDetails&cc=in&_marker=0%3F_marker%3D0&_format=json&pids=${songId}`)
        res.send(songDetails.data)
    }
    catch (err) {
        console.log(err);
    }
}

async function getSongId(req, res) {
    try {
        let songName = req.params.songName;
        let querryDetails = await axios.get(`https://www.jiosaavn.com/api.php?__call=autocomplete.get&_format=json&_marker=0&cc=in&includeMetaTags=1&query=${songName}`)
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
        let songDetails = await axios.get(`https://www.jiosaavn.com/api.php?__call=song.getDetails&cc=in&_marker=0%3F_marker%3D0&_format=json&pids=${songId}`)
        let data = songDetails.data;
        data = data[songId].media_preview_url;
        // console.log(data[songId].media_preview_url)
        let url = `https://aac.saavncdn.com/` + data.split('.com/')[1].split('_96_p.mp4')[0].split(",")[0]
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
        let songDetails = await axios.get(`https://www.jiosaavn.com/api.php?__call=song.getDetails&cc=in&_marker=0%3F_marker%3D0&_format=json&pids=${songId}`)
        let data = songDetails.data;
        let lyrics = await axios.get(`https://www.jiosaavn.com/api.php?__call=lyrics.getLyrics&ctx=web6dot0&api_version=4&_format=json&_marker=0%3F_marker%3D0&lyrics_id=${songId}`)
        if (lyrics.data) {
            res.send({ lyrics: lyrics.data });
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