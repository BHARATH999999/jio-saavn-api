const axios = require("axios");
const cheerio = require('cheerio');
const url = "https://www.jiosaavn.com"

// async function imageLink(link) {
//     const res = await axios.get(url + link);
//     const $1 = cheerio.load(res.data);
//     const imageLink = $1(".c-content").find("img")?.attr("src");
//     return imageLink;
// }

// console.log(imageLink("album/kesariya-from-brahmastra/3RMVXHzqov8_"))

async function getHomePageDetails(req, res) {
    const { data } = await axios.get(url + "/home");
    const $ = cheerio.load(data);
    const listItems = $(".c-content");
    const homepage_module_i = listItems.children("div");
    // console.log(homepage_module_i.length);

    var details = [];
    homepage_module_i.each(async (idx, el) => {
        const header = $(el).find(".u-h4").text();
        // console.log(title);
        const elements = $(el).find(".c-drag");

        const detail = [];

        elements.each(async (idx, el) => {
            const temp = $(el).find(".o-block__img").children("a")
            const link = temp.attr("href") // link can be belonging to album or song or playlist
            const name = temp.attr("title")// name can be belonging to album or song or playlist 
            // const img = undefined;
            // if(link != "/home") await imageLink(link);
            // console.log(img);

            let resObj = {
                type: undefined,
                name: undefined,
                link: undefined,
                // img : undefined,
                singerDetails: undefined
            };

            // if(img) resObj.img = img;

            const type = link.split("/")[1];
            if (type == "featured") {
                resObj.type = "featured";
            }
            else if (type == "song") {
                resObj.type = "song";
                const signers = $(el).find("span").text();
                resObj.singerDetails = signers.split(",").map((ele) => {
                    return ele.trim();
                });
            }
            else {
                resObj.type = "album";
                let singerDetails = [];
                const singersDiv = $(el).find(".o-block__body")?.children("p")?.children("a");
                singersDiv.each((idx, el) => {
                    let singerName = $(el).text();
                    let singerLink = $(el).attr("href");
                    singerDetails.push({
                        singerName: singerName,
                        singerLink: singerLink
                    })
                })
                resObj.singerDetails = singerDetails;
            }
            resObj.name = name;
            resObj.link = link;

            detail.push(resObj);
        })

        let obj = {
            header: undefined,
            data: undefined,
            // imageLink: undefined,
        }

        obj.header = header;
        obj.data = detail;
        // let image = await imageLink(feautureLink);
        // console.log(image);
        details.push(obj);
    })

    res.send(details);
}

module.exports = {
    getHomePageDetails,
}
