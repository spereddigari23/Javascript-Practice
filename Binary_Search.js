let binarySearch = function(array,x,start,end){
    if (start>end) return false;
    let mid = Math.floor((start+end)/2);
    if (array[mid]==x) return true;
    if (array[mid]>x)
        return binarySearch(array,x,start,mid-1);
    else
        return binarySearch(array,x,mid+1,end);
} 

//DRIVER CODE
let array = [1,2,3,4,5,6,7,8];
let x = 10;
console.log(binarySearch(array,x,0,8))