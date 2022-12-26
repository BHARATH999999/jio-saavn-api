const axios = require("axios");
const cheerio = require('cheerio');
const url = "https://www.jiosaavn.com/home"

async function getTrendingData(req, res) {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const listItems = $("#homepage_module_0 .o-block__link");
    console.log(listItems)
    const links = [];

    listItems.each((idx, el) => {
        const link = $(el).attr('href');
        // console.log(link)
        links.push(link);
        // console.log(link.split('/')[2,3])
    })
    console.log(links);
    res.send(links);
}

module.exports = {
    getTrendingData,
}
