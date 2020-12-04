//https://www.algoexpert.io/questions/Three%20Number%20Sum

// Time 0(n^2), space 0(n)
function threeNumberSum(array, targetSum) {
    array.sort((a,b)=>a-b); //0 (nlog n)
    //3rd+2nd=targetSum-1st
    //b+c=t-a
    let answerArray=[]
    let possibleCombos=[]

    

    for(let i=0;i<array.length-2;i++){
        let firstValue=array[i],secondValue=i+1,thirdValue=array.length-1
        
        while(secondValue<thirdValue){
            possibleCombos.push([firstValue,array[secondValue],array[thirdValue]])
            if(targetSum===firstValue+array[secondValue]+array[thirdValue]){
                answerArray.push([firstValue,array[secondValue],array[thirdValue]])
                secondValue++
                thirdValue--
            }  
            else if(firstValue+array[secondValue]+array[thirdValue]>targetSum){
                thirdValue--
            }else{
                secondValue++
            }
        }
        // possibleCombos.push('done',i)
    }
    console.log(possibleCombos)
    return answerArray;
  }




// return an array containing an array of triplets that add up to it
  console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6],0))
