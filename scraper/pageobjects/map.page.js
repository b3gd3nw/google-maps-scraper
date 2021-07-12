import Page from './page';

/**
 * page containing specific selectors and methods for a specific page
 */
class MapPage extends Page {

    /**
     * define selectors using getter methods
     */
    get body () { return $('body') }
    get searchbox () { return $('.tactile-searchbox-input') }
    get searchBtn () { return $('#searchbox-searchbutton') }
    get heroImage () { return $('.section-hero-header-image-hero-container') }
    get galleryImage () { return $('.gallery-image-highlight')}
    get widget () { return $('.widget-titlecard-contentcontainer') }
    get closeSidebarBtn() { return $('/html/body/jsl/div[3]/div[9]/div[8]/div/div[3]') }

    /**
     * fills the address field and clicks search
     * 
     * @param {*} address 
     */
    async fillSearchBox(address) {
        await (await this.searchbox).addValue(address);
        await (await this.searchBtn).click();
        await (await this.heroImage).waitForDisplayed();
    }
    
    /**
     * gets address name, creates the folder with the address and stores the screeenshot in it
     * @param {*} name 
     */
    async screenShot(name) {
        const fs = require('fs');
        if (!fs.existsSync(`results/${name.split('_')[0]}`)) {
            fs.mkdirSync(`results/${name.split('_')[0]}`);
        }
        await (await this.body).saveScreenshot(`results/${name.split('_')[0]}/${name}.png`);
    }

    /**
     * clicks on the picture and closes the sidebar
     */
    async clickToHero() {
        await (await this.heroImage).click();
        await (await this.galleryImage).waitForDisplayed();
        await (await this.closeSidebarBtn).click();
        await (await this.widget).waitForDisplayed();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('https://www.google.com.ua/maps/');
    }
}

export default new MapPage();
