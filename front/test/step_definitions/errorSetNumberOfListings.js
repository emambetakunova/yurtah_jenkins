const {I} = inject();
// Add in your custom step files

Then('я вижу текст {string}', (text) => {
  I.waitForText(text);
});