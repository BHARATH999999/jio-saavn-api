const axios = require("axios");
const {searchBaseUrl, playlistDetailsBaseUrl} = require("../utilities/endPoints");

async function getPlaylistId(req, res) {
    try {
        let playlistName = req.params.playlistName;
        let querryDetails = await axios.get(searchBaseUrl + playlistName)
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
        let playlistData = await axios.get(playlistDetailsBaseUrl + playlistId);
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
