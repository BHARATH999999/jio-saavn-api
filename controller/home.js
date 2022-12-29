const axios = require("axios");
const cheerio = require('cheerio');
const url = "https://www.jiosaavn.com/"

async function imageLink(feautureLink) {
    const res1 = await axios.get(url + feautureLink);
    const $1 = cheerio.load(res1.data);
    const imageLink = $1(".c-content").find("img")?.attr("src");
    return imageLink;
}

async function getTrendingData(req, res) {
    const { data } = await axios.get(url + "home");
    const $ = cheerio.load(data);
    const listItems = $(".c-content");
    const homepage_module_i = listItems.children("div");
    console.log(homepage_module_i.length);

    var links = [];
    homepage_module_i.each(async (idx, el) => {
        const title = $(el).find(".u-h4").text();
        // console.log(title);
        const feautureLink = $(el).find(".o-block__link").attr("href");  //further link.

        // console.log(imageLink);

        let obj = {
            title: undefined,
            feautureLink: undefined,
            // imageLink: undefined,
        }

        obj.title = title;
        obj.feautureLink = feautureLink;
        // let image = await imageLink(feautureLink);
        // console.log(image);
        links.push(obj);
    })

    console.log(links.length);
    // res.send({data : links});

    res.send(links);

    // listItems.each((idx, el) => {
    //     const temp = $(el).find(".o-block__img").children("a")
    //     const link = temp.attr("href") // link can be belonging to album or song or playlist
    //     const name = temp.attr("title")// name can be belonging to album or song or playlist

    //     let resObj = {
    //         type: undefined,
    //         name: undefined,
    //         link: undefined,
    //         singerDetails: undefined
    //     };
    //     const type = link.split("/")[1];
    //     if (type == "featured") {
    //         resObj.type = "featured";
    //     }
    //     else if (type == "song") {
    //         resObj.type = "song";
    //         const signers = $(el).find("span").text();
    //         resObj.singerDetails = signers.split(",").map((ele)=>{
    //             return ele.trim();
    //         });
    //     }
    //     else {
    //         resObj.type = "album";
    //         let singerDetails = [];
    //         const singersDiv = $(el).find(".o-block__body")?.children("p")?.children("a");
    //         singersDiv.each((idx, el) => {
    //             let singerName = $(el).text();
    //             let singerLink = $(el).attr("href");
    //             singerDetails.push({
    //                 singerName: singerName,
    //                 singerLink: singerLink
    //             })
    //         })
    //         resObj.singerDetails = singerDetails;
    //     }
    //     resObj.name = name;
    //     resObj.link = link;

    //     links.push(resObj);
    // })
    // console.log(links.length);
    // res.send(links);
}

module.exports = {
    getTrendingData,
}
