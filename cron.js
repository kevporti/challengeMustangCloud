const cron = require('node-cron');
require('dotenv/config'); 
const { runCron } = require('./scrapperScript');

cron.schedule(process.env.TIME_SCRAPE_SET, () => {
    runCron();
});