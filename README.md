#  Scraper usage manual  #
1.  Environment  
    
    * NodeJs v12 min.
    * NPM
    * Google Chrome

2. Setup and run

    To install depenpencies run "npm i" or "npm install".
    
    Put JSON with scraping data at "patric-bagviewer/address", there is a sample file there. File name must be "data" and it must be .json format.
    
    To run the scraper execute"npx wdio run ./wdio.conf.js".

    The results will be stored in "patric-bagviewer/results/address_name/address_name_1/2.png".