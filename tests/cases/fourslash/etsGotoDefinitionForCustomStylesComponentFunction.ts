/// <reference path='./fourslash.ts' />

// @experimentaldecorators: true
// @ets: {}
// @target: es6
// @lib: es6
// @Filename: test.ets

//// @Styles
//// function /*definition*/test1(){ 
////     .width(12)
//// }
//// @Entry
//// @Component
//// struct MyComponent{
////     build() {
////           Text().fontSize(11).[|/*reference*/test1|]('11')
////     }
//// }

verify.goToDefinition("reference", "definition");