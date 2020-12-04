
/*
Traverse through the array comparing the two adjacent numbers and swapping the largest one to the side,
 that way at the end of each round the largest will be at the end


*/

//Big 0(n^2)-time, space 0(1) no new array is created
function bubbleSort(array){
    for(let i=0;i<array.length-1;i++){
        //it is -1 so we don't compare the last number, as each case will increment by 1   
       for(let j=0;j<array.length-i;j++) {
        if(array[j]>array[j+1]){
            [array[j],array[j+1]]=[array[j+1],array[j]]
            
        }
       }
        
    }

    return array;
}

//Big 0(n^2) average/worst, best case 0(n) if sorted, space 0(1)
function bubbleSortWithStoppage(array){
    let isSorted=false;
   
    let counter=0; //this is removing the 2nd for loop and just incrementing it by 1

    while(!isSorted){
				isSorted=true
        for(let i=0;i<array.length-counter;i++){
            if(array[i]>array[i+1]){
                [array[i],array[i+1]]=[array[i+1],array[i]]
								isSorted=false
            }
        }
        counter++;

    }
	return array

}




let array=[8,5,2,9,5,6,3]

console.log(bubbleSort(array)) //[2,3,5,5,6,8,9]