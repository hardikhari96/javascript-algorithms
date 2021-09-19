
// Jthis function swap number on each other position 
// like [1,2] => [2,1]
var swapnumber = (arr, xp, yp) => {
    // taking xp to temp 
    var temp = arr[xp];
    //and move yp to xp location
    arr[xp] = arr[yp];
    // and temp xp value move to yp location 
    arr[yp] = temp;
}

// example  - 0 and 1 is index of array swap number between 0 and 1 index
//console.log(swapnumber([22,11],0,1)); 

function selectionSort(arr,  n)
{
    var i, j, min_idx;
 
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;
 
        // Swap the found minimum element with the first element
        swapnumber(arr,min_idx, i);
    }
}

// default value
var arr = [64, 25, 12, 22, 11,3,33,44,55,6,677];
    var n = arr.length;
    selectionSort(arr, n);
    console.log(arr);

var defaultt = [64, 25, 12, 22, 11,3,33,44,55,6,677]; 
console.log(defaultt.sort((a,b)=>a-b));