const axios = require("axios");
const cheerio = require('cheerio');
let { url } = require("../utilities/endPoints");

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
        let querryDetails = await axios.get("https://www.jiosaavn.com/api.php?__call=autocomplete.get&_format=json&_marker=0&cc=in&includeMetaTags=1&query=" + albumName);
        console.log(querryDetails)
        let data = querryDetails.data.albums.data[0];
        if (data)
            res.send({ id: data.id })
        else
            res.send({ response: "Sorry, No Albums found" })
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
            res.send({ response: "Sorry, No Albums found" })
    }
    catch (err) {
        console.log(err);
    }
}

async function getAllAlbumsInALanguage(req, res) {
    try {
        let language = req.params.language;
        let albums = [];

        for (let i = 0; i < 26; i++) {
            let alphabet = String.fromCharCode(97 + i);
            const { data } = await axios.get(url + `/catalogue-${alphabet}/albums-${language}`);
            const $ = cheerio.load(data);
            const listItems = $(".catalog-items li a");
            let res1 = {
                startsWith: alphabet,
                data: []
            };

            for (let i = 0; i < listItems.length - 1; i++) {
                let albumName = $(listItems[i]).text();
                let albumLink = $(listItems[i]).attr("href");
                // console.log(albumName, albumLink);
                let obj = {
                    albumName: albumName,
                    albumLink: albumLink
                }
                res1.data.push(obj);
            }

            albums.push(res1);
        }

        const { data } = await axios.get(url + `/catalogue-0-9/albums-${language}`);
        const $ = cheerio.load(data);
        const listItems = $(".catalog-items li a");
        let res1 = {
            startsWith: "0-9",
            data: []
        };

        for (let i = 0; i < listItems.length - 1; i++) {
            let albumName = $(listItems[i]).text();
            let albumLink = $(listItems[i]).attr("href");
            // console.log(albumName, albumLink);
            let obj = {
                albumName: albumName,
                albumLink: albumLink
            }
            res1.data.push(obj);
        }

        albums.push(res1);

        res.status(200).send({ albums: albums });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ response: err.response });
    }
}

async function getAllAlbumsInALanguageStartsWith(req, res) {
    try {
        let language = req.params.language;
        let startsWith = req.params.startsWith;
        const { data } = await axios.get(url + `/catalogue-${startsWith}/albums-${language}`);
        const $ = cheerio.load(data);
        const listItems = $(".catalog-items li a");
        let res1 = {
            startsWith: startsWith,
            data: []
        };

        for (let i = 0; i < listItems.length - 1; i++) {
            let albumName = $(listItems[i]).text();
            let albumLink = $(listItems[i]).attr("href");
            // console.log(albumName, albumLink);
            let obj = {
                albumName: albumName,
                albumLink: albumLink
            }
            res1.data.push(obj);
        }

        res.status(200).send({ albums: res1 });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ response: err.response });
    }
}
module.exports = {
    getAlbumDetails,
    getAlbumId,
    getAlbumSongs,
    getAllAlbumsInALanguage,
    getAllAlbumsInALanguageStartsWith
}

    // < a onclick = "Util.logAndGoToUrl('content:catalog:album:click', 'https://www.jiosaavn.com/album/attempted-mustache/5Pbu3HIvZ4U_');return false;" href = "https://www.jiosaavn.com/album/attempted-mustache/5Pbu3HIvZ4U_" > Attempted Mustache</ >