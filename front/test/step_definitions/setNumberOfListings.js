const {I} = inject();
// Add in your custom step files

Then('я вижу листинги', () => {
  I.waitForVisible('//div[@class="CardOfCamp"]');
});
