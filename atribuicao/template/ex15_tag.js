function tag(strings, ...values){
console.log(strings);
console.log(values);
return 'Outro valor';
}
var aluna = 'Megan';
var status = 'Aprovada';
console.log(tag `${aluna} está ${status}`);
