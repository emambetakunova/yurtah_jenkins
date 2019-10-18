const {I} = inject();
// Add in your custom step files

Given('я нахожусь на странице {string}', (pageName) => {
  I.goToPage(pageName)
});

When('я ввожу число {string}', (number) => {
  I.enterNumberOfListings(number);
});