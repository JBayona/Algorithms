function reverseWords(str){
  str = str.split('');
  let start = 0;
  let end = str.length - 1;
  let tmp;

  while(start < end){
    let tmp = str[start];
    str[start] = str[end];
    str[end] = tmp;
    start++;
    end--;
  }
  return str.join('');
}

str = 'the sky is blue';
console.log(reverseWords(str));