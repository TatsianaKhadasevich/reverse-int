module.exports = function reverse (n) {
  let num = Math.abs(n).toString().split('');
  let newNum=[];
  for (let i=num.length-1;i>=0 ;i--){
    newNum.push(num[i])
  }
  return Number(newNum.join(''));
}
