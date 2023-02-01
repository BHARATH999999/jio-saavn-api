const axios = require("axios");
const cheerio = require('cheerio');
let { url } = require("../utilities/endPoints");
let help = {
    hindi: {
        "start": 8,
        "end": 12
    },
    english: {
        "start": 13,
        "end": 16
    },
    tamil: {
        "start": 17,
        "end": 20
    },
    telugu: {
        start: 21,
        end: 24
    },
    punjabi: {
        "start": 25,
        "end": 28
    },
    marathi: {
        "start": 29,
        "end": 32
    },
    gujarati: {
        "start": 33,
        "end": 36
    },
    bengali: {
        "start": 37,
        "end": 40
    },
    kannada: {
        "start": 41,
        "end": 44
    },
    bhojpuri: {
        "start": 45,
        "end": 48
    },
    malayalam: {
        "start": 49,
        "end": 52
    },
    urdu: {
        "start": 53,
        "end": 56
    },
    haryanvi: {
        "start": 57,
        "end": 60
    },
    rajasthani: {
        "start": 61,
        "end": 64
    },
    odia: {
        "start": 65,
        "end": 68
    },
    assamese: {
        "start": 69,
        "end": 72
    }
}

let help1 = [
    {
        "name": "Hindi",
        "start": 8,
        "end": 12
    },
    {
        "name": "English",
        "start": 13,
        "end": 16
    },
    {
        "name": "Tamil",
        "start": 17,
        "end": 20
    },
    {
        "name": "Telugu",
        "start": 21,
        "end": 24
    },
    {
        "name": "Punjabi",
        "start": 25,
        "end": 28
    },
    {
        "name": "Marathi",
        "start": 29,
        "end": 32
    },
    {
        "name": "Gujarati",
        "start": 33,
        "end": 36
    },
    {
        "name": "Bengali",
        "start": 37,
        "end": 40
    },
    {
        "name": "Kannada",
        "start": 41,
        "end": 44
    },
    {
        "name": "Bhojpuri",
        "start": 45,
        "end": 48
    },
    {
        "name": "Malayalam",
        "start": 49,
        "end": 52
    },
    {
        "name": "Urdu",
        "start": 53,
        "end": 56
    },
    {
        "name": "Haryanvi",
        "start": 57,
        "end": 60
    },
    {
        "name": "Rajasthani",
        "start": 61,
        "end": 64
    },
    {
        "name": "Odia",
        "start": 65,
        "end": 68
    },
    {
        "name": "Assamese",
        "start": 69,
        "end": 72
    }
]

async function getLanguageData(req, res) {
    try {
        let { data } = await axios.get(url + "/sitemap.php");
        const $ = cheerio.load(data);
        const listItems = $(".page-wrap ul li");

        let language = req.params.language.toLowerCase();
        if (help[language] === undefined) {
            res.status(404);
            res.send({ "Error": "Please enter a valid language" });
            return;
        }

        let res1 = [];
        for (let i = 7; i < listItems.length; i++) { 
            // indexing in array starts at 0 wheres as in searching starts at 1
            let name = $(listItems[i]).children("a")?.text();
            let nameSplit = name?.split(" ");
            for (let j = 0; j < nameSplit.length; j++) {
                if (nameSplit[j].toLowerCase() === language) {
                    let link = $(listItems[i]).children("a")?.attr("href");
                    let resObj = {
                        name: name,
                        link: link
                    }
                    res1.push(resObj);
                    break;
                }
                else if(help[nameSplit[j].toLowerCase()]) break;
            }
            if(res1.length >= 5) break;
        }

        console.log(res1);
        res.send(res1);
    }
    catch (err) {
        res.status(500);
        console.log(err);
        res.send(err);
    }
}

async function getAllLanguageData(req, res) {
    try {
        let { data } = await axios.get(url + "/sitemap.php");
        const $ = cheerio.load(data);
        const listItems = $(".page-wrap ul li");
        // console.log("listItems.length", listItems.length)

        let output = [];
        help1.map((ele) => {
            let start = ele.start;
            let end = ele.end;

            let res1 = [{ language: ele.name }];
            for (let i = start - 1; i < end; i++) {
                // indexing in array starts at 0 wheres as in searching starts at 1
                let name = $(listItems[i]).children("a")?.text();
                let link = $(listItems[i]).children("a")?.attr("href");
                let resObj = {
                    name: name,
                    link: link
                }
                res1.push(resObj);
            }
            output.push(res1);
        })

        res.send(output);
    }
    catch (err) {
        res.status(500);
        res.send(err);
    }
}

module.exports = { getLanguageData, getAllLanguageData };