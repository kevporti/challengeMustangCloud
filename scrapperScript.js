const request = require('request');
const cheerio = require('cheerio');
require('dotenv/config');

function scraping() {
    const url = process.env.SCRAPE_URL;

    options = {
        jar: true
    }

    return new Promise((resolve, reject) => {
        request(url, options, function(err,resp,body) {
            if (err) reject(err);
            let $ = cheerio.load(body);

            // console.log($('table tbody tr.clasificacion').text());
            // const imgSrc = $('table tbody tr.clasificacion td.equipo a img');
            // const img = imgSrc.attr('data-src');
            // console.log(img);

            resolve($);
        });
    });
}

module.exports = { scraping };