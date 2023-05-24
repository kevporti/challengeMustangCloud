This app was made with NODEJS and the following libraries.
    expressjs           -- To make the server side work.
    express-handlebars  -- Template to give easier js expressions in the html files.
    mongoose            -- To connect to MongoDB.
    dotenv              -- To set environment variables.
    node-cron           -- To make a cron job that runs every X time.
    request             -- To make a request at the page to scrape.
    cheerio             -- Read the request made and be able to scrap through the html of the request.

This app runs a CRON JOB that scrape a specific page and stores the data of one table every X time.
There is a responsive client-side view.