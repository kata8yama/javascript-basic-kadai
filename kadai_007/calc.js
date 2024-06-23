let num = 15;

console.log(15);

if(num % 3 === 0) {
console.log('3の倍数です');
}

else if(num % 5 === 0) {
console.log('5の倍数です');
}

else if (num % 3 === 0 && num % 5 === 0)  {
console.log('3と5の倍数です'); 
}

//　それ以外の場合の変数の値を出力する
else {
console.log(num);
}