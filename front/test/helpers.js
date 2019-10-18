const Helper = codeceptjs.helper;

const pages = {
  Home: 'http://localhost:3000/'
};

class GeneralHelper extends Helper {

  async goToPage(pageName) {
    const I = this.helpers['Puppeteer'];

    await I.amOnPage(pages[pageName]);
  }

  async enterNumberOfListings(number) {

    const I = this.helpers['Puppeteer'];
    await I.click("//input[@placeholder='Set number of listings']");
    await I.fillField( "//input[@placeholder='Set number of listings']", number);
    await I.click('//button[@class="Submit"]');
  }
}



module.exports = GeneralHelper;