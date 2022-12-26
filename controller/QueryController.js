const axios = require("axios");

async function getQueryResults(req, res) {
    try {
        let query = req.params.query;
        let data = await axios.get("https://www.jiosaavn.com/api.php?__call=autocomplete.get&_format=json&_marker=0&cc=in&includeMetaTags=1&query="+query);
        res.send(data.data);
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getQueryResults,
};