/*
https://www.algoexpert.io/questions/Kadane's%20Algorithm

Max sum of adjacent numbers

[
  3, 5, -9, 1,  3, -2,
  3, 4,  7, 2, -9,  6,
  3, 1, -5, 4
]

//19 is the answer with the rane of [1, 3, -2, 3, 4, 7, 2, -9, 6,3, 1,]
*/

//0(n) time, 0(1) space

//the way the algo works is that if the ongoing sum is less than the current number then the current number is the new ongoing sum
function KadanesAlgorithim(array){

    //we will have a tempSum that calculates 
    let tempSum=array[0]
    //we will have maxsum which is highest sum
    let maxSum=array[0]
    



    for(let i=1;i<array.length;i++){

       
        if(tempSum+array[i]<array[i]){
            tempSum=array[i]
           
        }else{
            tempSum+=array[i]
        }

        if(maxSum<tempSum){
            maxSum=tempSum;
           
        }

    }

    return maxSum;
}