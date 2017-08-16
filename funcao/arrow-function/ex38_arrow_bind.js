function Pessoa(){
  var self = this;
  self.idade = 0;

  setInterval(function(){
    this.idade++;
    console.log(this.idade);
  },1000);
}

//new Pessoa();

function Pessoa2(){
  this.idade = 0;
  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  },1000);
}
new Pessoa2();
