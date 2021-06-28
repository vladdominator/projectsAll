function consecutive(arr, a, b) {
   let s=false
  for(let i=0;i<arr.length;i++){
     if((a==arr[i] && b==arr[i+1])||(b==arr[i] && a==arr[i+1])){
        s=true
        break
     }
     else {s=false}
  }
  return s
 }

console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4))