Feature('Calculator');

Scenario('test something', (I) => {
    I.waitForElement('#com.android.calculator2:id/digit_7')
    I.click('#com.android.calculator2:id/digit_7')
    I.wait(10)
});
