import MapPage from  '../pageobjects/map.page';

// runs scraping for all addresses
describe('Scrap addresses', () => {

    // connecting the db of addresses in JSON format
    const addresses = require('../../address/data.json');
    if(addresses) {
        addresses.address.forEach(address => {
            
            // running the scraping of a specific code 
            it(`scraping ${address}`, async () => {
                await MapPage.open();
                await MapPage.fillSearchBox(address);
                await MapPage.screenShot(address + '_1');
                await MapPage.clickToHero();
                await MapPage.screenShot(address + '_2');
            });
        })
    }
});


