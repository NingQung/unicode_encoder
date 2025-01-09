const CJKSTA = parseInt("4E00",16);
const CJKEND = parseInt("9FA5",16);
const CJKLEN = CJKSTA - CJKEND;

var input = "我無所謂反正過年要發布50顯卡，到時候40肯定降價，40降價30卡一定白菜價，30白菜價一定會讓20的價格崩盤，到時候就是入手10系的最佳時間。只要我朋友入了10系，我就可以把他的9系拿來換掉我的7系，現在想一想就激動的全身發抖"
var output = "";
var delta = 1
for(var i=0;i<input.length;i++){
  let code = input.charCodeAt(i);
  if(CJKSTA <= code && code <= CJKEND){//CJK
    
  }
  output = output + String.fromCharCode(code)
}
console.log(CJKSTA)
console.log(CJKEND)
console.log(output);