//iterate through array, and swaps it backwards
function insertionSort(array){

    for(let i=1;i<array.length;i++){
        for(let j=i;j>0;j--){
            if(array[j]<array[j-1]){
                [array[j],array[j-1]]=[array[j-1],array[j]]
            }else{
                break;
            }
        }
        console.log(array)
    }

    return array
}



let array=[8,5,2,9,5,6,3]

console.log(insertionSort(array)) //[2,3,5,5,6,8,9]