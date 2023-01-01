const axios = require("axios");
const {searchBaseUrl} = require("../utilities/endPoints");

async function getQueryResults(req, res) {
    try {
        let query = req.params.query;
        let data = await axios.get(searchBaseUrl + query);
        res.send(data.data);
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getQueryResults,
};