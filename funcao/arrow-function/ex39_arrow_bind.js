this.desc = 'Sou o module.exports...';
const obj = {desc: 'Sou o obj...'};

const func = function(){
  console.log(this);
}
func();

const funcBind = func.bind(obj);
funcBind();

const arrowFunc = () => console.log(this);
arrowFunc();

const arrowFuncBind = arrowFunc.bind(obj);
arrowFuncBind();
