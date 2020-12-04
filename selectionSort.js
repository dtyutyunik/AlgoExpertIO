/*


*/
//0(n^2), o(1) space
function selectionSort(array){

    for(let i=0;i<array.length-1;i++){
        let minIndex=i; //we create a minIndex and set it to first instance
        for(let j=i+1;j<array.length;j++){ //i+1 because smallest value is already set
            if(array[j]<array[minIndex]){ //if the value is smaller then the index, then it becomes new index
                minIndex=j
            }
        }
        
        [array[i],array[minIndex]]=[array[minIndex],array[i]]
        console.log(`smallest value is ${array[i]}, minindex being ${minIndex}`)
    }
    return array;
}



let array=[8,5,2,9,5,6,3]

console.log(selectionSort(array)) //[2,3,5,5,6,8,9]