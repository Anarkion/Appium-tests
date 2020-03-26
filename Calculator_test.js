Feature('Calculator')

Scenario('addition test', (I) => {
    I.waitForElement({id: 'com.android.calculator2:id/digit_7'})
    I.tap({id: 'com.android.calculator2:id/digit_7'})
    I.tap({id: 'com.android.calculator2:id/op_add'})
    I.tap({id: 'com.android.calculator2:id/digit_8'})
    I.tap({id: 'com.android.calculator2:id/eq'})
    I.waitForElement({id: 'com.android.calculator2:id/result'})
    I.see('15')
})

Scenario('division test', (I) => {
    I.tap({id: 'com.android.calculator2:id/clr'})
    I.tap({id: 'com.android.calculator2:id/digit_6'})
    I.tap({id: 'com.android.calculator2:id/digit_6'})
    I.tap({id: 'com.android.calculator2:id/op_div'})
    I.tap({id: 'com.android.calculator2:id/digit_2'})
    I.tap({id: 'com.android.calculator2:id/eq'})
    I.waitForElement({id: 'com.android.calculator2:id/result'})
    I.see('33')
});

Scenario("can't divide by 0 test", (I) => {
    I.tap({id: 'com.android.calculator2:id/clr'})
    I.tap({id: 'com.android.calculator2:id/digit_9'})
    I.tap({id: 'com.android.calculator2:id/op_div'})
    I.tap({id: 'com.android.calculator2:id/digit_0'})
    I.tap({id: 'com.android.calculator2:id/eq'})
    I.waitForElement({id: 'com.android.calculator2:id/result'})
    I.see("Can't divide by 0")
})

Scenario('multiplication test', (I) => {
    I.tap({id: 'com.android.calculator2:id/digit_8'})
    I.tap({id: 'com.android.calculator2:id/digit_6'})
    I.tap({id: 'com.android.calculator2:id/op_mul'})
    I.tap({id: 'com.android.calculator2:id/digit_5'})
    I.tap({id: 'com.android.calculator2:id/digit_6'})
    I.tap({id: 'com.android.calculator2:id/eq'})
    I.waitForElement({id: 'com.android.calculator2:id/result'})
    I.see('4816')
}).config({restart: true})

Scenario('failing test', (I) => {
    I.tap({id: 'com.android.calculator2:id/digit_8'})
    I.tap({id: 'com.android.calculator2:id/digit_8'})
    I.tap({id: 'com.android.calculator2:id/digit_8'})
    I.tap({id: 'com.android.calculator2:id/digit_8'})
    I.tap({id: 'com.android.calculator2:id/digit_8'})
    I.tap({id: 'com.android.calculator2:id/digit_8'})
    I.tap('Non-existing element')
})