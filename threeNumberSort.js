/*

https://www.algoexpert.io/questions/Three%20Number%20Sort

 Input {"array": [1, 0, 0, -1, -1, 0, 1, 1], "order": [0, 1, -1]}
 Output [0, 0, 0, 1, 1, 1, -1, -1]

have to mutate in place

*/

//0(n) time, 0(1) space
function threeNumberSort(array,order){
    let leftIndex=0;
    let rightIndex=array.length-1;

    for(let i=0;i<array.length;i++){
        if(array[i]===order[0]){
            [array[i],array[leftIndex]]=[array[leftIndex],array[i]]
            leftIndex++
        }
    }

    //we go over it a second time in case we moved some numbers incorretly the first time
    for(let j=array.length-1;j>=0;j--){
        if(array[j]===order[2]){
            [array[j],array[rightIndex]]=[array[rightIndex],array[j]]
            rightIndex--;
        }
    }

    return array;


}


//One pass 0(n) time, 0(1) space
function threeNumberSortOptimized(array,order){
    //we will use the middle/second as the reference point
    let first=0,second=0,third=array.length-1;

    while(second<=third){

        if(array[second]===order[0]){
            [array[first],array[second]]=[array[second],array[first]]
            first++
            second++
        }else if(array[second]===order[1]){
            second++
        }else{
            [array[second],array[third]]=[array[third],array[second]]
            third--
        }
    }

    return array;

}

