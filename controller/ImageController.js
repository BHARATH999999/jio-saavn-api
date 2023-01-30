const axios = require("axios");
const {url} = require("../utilities/endPoints");
const cheerio = require('cheerio');

async function getImage(req, res, next) {
    try{
        let url1 = req.params.type + "/" + req.params.name + "/" + req.params.id;
        let {data} = await axios.get(url + "/" + url1);
        console.log(url1);
        const $ = cheerio.load(data);
        const img = $('.c-content img').attr('src');
        // console.log(im);
        res.send({
            img : img,
        })

    }
    catch(err){
        res.status(404);
        res.send(err);
    }
}

module.exports = {getImage}