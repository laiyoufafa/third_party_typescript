/// <reference path='./fourslash.ts' />

// @experimentaldecorators: true
// @ets: {}
// @target: es6
// @lib: es6

// @Filename: test.ets
//// @/*check*/Extend(Text)
//// function test2(color:string){
////     .flexGrow(12)
//// }
verify.quickInfoAt("check", "const Extend: <TextInterface>(component: TextInterface) => MethodDecorator")