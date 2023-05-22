const request = require('request');
const cheerio = require('cheerio');
const TableModel = require('./models/positionTable');
require('dotenv/config');

// Get the html of the page to scrape.
function HTML_Structure() {
    const url = process.env.SCRAPE_URL;

    options = {
        jar: true
    }

    return new Promise((resolve, reject) => {
        request(url, options, function(err,resp,body) {
            if (err) reject(err);
            let $ = cheerio.load(body);

            resolve($);
        });
    });
}

async function getTableData() {
    const html = await HTML_Structure();

    const teams = [];
    // Iterate over each team.
    html('table tbody tr').each((i, el) => {
        // Find the link of the team's photo.
        const image = html(el).find('td.equipo a img');
        const img = image.attr('data-src');

        // Store team data in an array.
        teams[i] = {
            pos: i + 1,
            equipo: html(el).find('td.equipo a span.d-md-inline').text(),
            logo: img,
            pj: html(el).find('td.bg-color').next().next().first().text(),
            g: html(el).find('td.d-none').first().text(),
            e: html(el).find('td.d-none').next().first().text(),
            p: html(el).find('td.d-none').next().next().first().text(),
            gf: html(el).find('td.d-none').next().next().next().first().text(),
            gc: html(el).find('td.d-none').next().next().next().next().first().text(),
            dg: html(el).find('td.d-none').next().next().next().next().next().first().text(),
            pts: html(el).find('td').last().text()
        }
    });

    return teams;
}

async function runCron() {
    try {
        // Wait for the scraped data.
        const teams = await getTableData();

        // Delete the old data.
        await TableModel.deleteMany({});

        // Save the new data.
        await TableModel.create({data: teams});
        console.log('Data saved.');
    } catch (err) {
        console.error(err);
    }
}

module.exports = { getTableData, runCron };