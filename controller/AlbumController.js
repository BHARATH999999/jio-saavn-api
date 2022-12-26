const axios = require("axios");

async function getAlbumDetails(req, res) {
    try {
        let albumId = req.params.albumId;
        let albumDetails = await axios.get(`https://www.jiosaavn.com/api.php?__call=content.getAlbumDetails&_format=json&cc=in&_marker=0%3F_marker%3D0&albumid=${albumId}`)
        res.send(albumDetails.data)
    }
    catch (err) {
        console.log(err);
    }
}

async function getAlbumId(req, res) {
    try {
        let albumName = req.params.albumName;
        let querryDetails = await axios.get("https://www.jiosaavn.com/api.php?__call=autocomplete.get&_format=json&_marker=0&cc=in&includeMetaTags=1&query="+albumName);
        console.log(querryDetails)
        let data = querryDetails.data.albums.data[0];
        if (data)
            res.send({ id: data.id })
        else
            res.send({response: "Sorry, No Albums found"})
    }
    catch (err) {
        console.log(err);
    }
}

async function getAlbumSongs(req, res) {
    try {
        let albumId = req.params.albumId;
        let albumDetails = await axios.get(`https://www.jiosaavn.com/api.php?__call=content.getAlbumDetails&_format=json&cc=in&_marker=0%3F_marker%3D0&albumid=${albumId}`)
        console.log(albumDetails)
        let data = albumDetails.data.albums.data[0];
        if (data)
            res.send({ id: data.id })
        else
            res.send({response: "Sorry, No Albums found"})
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAlbumDetails,
    getAlbumId,
    getAlbumSongs
}