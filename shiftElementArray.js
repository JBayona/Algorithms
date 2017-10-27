//Solution 1
function rotateArray(k, array){
  let size = array.length;
  let result = new Array(k).fill(0);
  let index = ((size - k)%size+size)%size;

  for(let i = 0; i < array.length; i++){
    result[i] = array[index];
    index = (index + 1)%size;
  }
  return result;
}

//Solution 2
/*
O(1) memoria en O(N) time
1. Divide the array two parts: 1,2,3,4 and 5, 6
2. Reverse first part: 4,3,2,1,5,6
3. Reverse second part: 4,3,2,1,6,5
4. Reverse the whole array: 5,6,1,2,3,4
*/
function rotateArray2(k, array){
  let size = array.length;
  if(k > size){
    k = k%size;
  }

  //Length of first part
  let a = array.length - k;
  //Reverse first part
  reverse(array,0,a-1);
  //Reverse second part
  reverse(array,a,size-1);
  //Reverse complete array
  reverse(array,0,size-1);
  return array;
}

function reverse(array, start, end){
  let tmp;
  while(start < end){
    let tmp = array[start];
    array[start] = array[end];
    array[end] = tmp;
    start++;
    end--;
  }
}

array = [1,2,3,4,5,6,7];
k = 3;
console.log(rotateArray(k,array));
console.log(rotateArray2(k,array));