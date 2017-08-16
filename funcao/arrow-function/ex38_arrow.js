'use strict'

this.desc = 'Sou eu... ';
console.log(this);

const func = function(){
  console.log(this === undefined)
}
func();

const arrowFunc = () =>
  console.log(this, this === module.exports);
arrowFunc();
