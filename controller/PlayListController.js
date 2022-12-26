const axios = require("axios");

async function getPlaylistId(req, res) {
    try {
        let playlistName = req.params.playlistName;
        let querryDetails = await axios.get(`https://www.jiosaavn.com/api.php?__call=autocomplete.get&_format=json&_marker=0&cc=in&includeMetaTags=1&query=${playlistName}`)
        // console.log(querryDetails)
        let data = querryDetails.data.playlists.data[0];
        if (data)
            res.send({ id: data.id })
        else
            res.send({ response: "Sorry, No playlists found" })
    }
    catch (err) {
        console.log(err);
    }
}

async function getPlaylistsDetails(req, res) {
    try {
        let playlistId = req.params.playlistId;
        let playlistData = await axios.get(`https://www.jiosaavn.com/api.php?__call=playlist.getDetails&_format=json&cc=in&_marker=0%3F_marker%3D0&listid=`+ playlistId);
        res.send(playlistData.data);
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getPlaylistId,
    getPlaylistsDetails
}