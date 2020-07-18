function partition(arr, first, last) {
  let i = (first -1);
  let pivot = arr[last]; // pivot element 
  
  for(let j = first; j < last; j++) {
  	
    if(arr[j] < pivot) {
    	i++;
 		let temp = arr[i]; 
        arr[i] = arr[j]; 
        arr[j] = temp; 
    }
  }
  
  let temp = arr[i+1]; 
  arr[i+1] = arr[last]; 
  arr[last] = temp; 
  return i + 1;
}

function quicksort(arr, first, last) {

    if(first < last) {
        // the partition of the array
        pivot_index = partition(arr, first, last);

        
        quicksort(arr, first, pivot_index-1);
        quicksort(arr, pivot_index+1, last);
    }
    return arr;
}




let arr = [5,3,7,6,2,9];
let res = quicksort(arr, 0, arr.length-1);
console.log(res);