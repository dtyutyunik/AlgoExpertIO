/*

https://www.algoexpert.io/questions/Max%20Subset%20Sum%20No%20Adjacent

array=[75,105,120,75,90,135]

ans= 330 // 75 +120+135


*/

//0(n) for time, 0(n) for space
function maxSubsetSumNoAdjacent(array){


    if(array.length===0){
        return 0
    }
    if(array.length<2){
        return array[1]
    }

    //subSumArray is an array of continous sums
    let subSumArray=Array.length(array.length).fill(0)
    subSumArray[0]=array[0]

    for(let i=1;i<array.length;i++){
        // the undefinded is because we start at i=1

        subSumArray=Math.max(subSumArray[i-1], subSumArray[i-2]!==undefined?subSumArray[i-2]+array[i]:array[i])
    }

    //the last value
    return subSumArray[subSumArray.length-1]

}



//0(n) time, 0(1) space
function maxSubsetSumNoAdjacentOptimized(array) {
    // Write your code here.
      if(array.length===1){
          return array[0]
      }
      if(array.length<1){
          return 0
      }
      
      //second is array[0] because we are starting from i=2, i-2 technically
      let second=array[0]
      
      //first is math.max(0,1) so it is i-1 or larger between the first two numbers
      let first=Math.max(array[0],array[1])
      let current=0;
      
      for(let i=2;i<array.length;i++){
          current=Math.max(first,second+array[i])
          second=first; // will become i-1
          first=current; //first will become, because in the beginning first is the current being evaluated
      }
      return first
      
  }