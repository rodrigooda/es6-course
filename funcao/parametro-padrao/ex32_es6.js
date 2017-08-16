function click(callback = function (){}){
  callback();
}

click(); //OK
click(undefined);
click(null);
