/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a page, and set size
    * @param path path of the page 
    */
    open (path) {
        browser.setWindowSize(2000, 2000)
        return browser.url(path)
    }

    timeout (seconds) {
        return browser.setTimeout({
            script: seconds
        })
    }
}
