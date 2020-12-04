/*
https://www.algoexpert.io/questions/Monotonic%20Array

*/

// 0(n) for time, 0(1) for space
function isMonotonic(array) {
    // Write your code here.
      //if length is 2 then it will either increase or decrease or empty then it is monotonic
      if(array.length<=2){
          return true
      }
      
      let increasing,decreasing;
      //we are using a counter in initial steps so we iterate through array only once
      let counter=0
      //we go through array comparing numbers
      while(counter<array.length-1){
          //if number is the same, then it is not increasing or decreasing, else it is one or the other
          if(array[counter]===array[counter+1]){
          counter++
          }
      else if(array[counter]<array[counter+1]){
          increasing=true
          counter++
          break;
      }else{
          decreasing=true;
          counter++
          break;
      }
          
      }
      
      //we increment from counter, since we started from that point
      for(let i=counter;i<array.length-1;i++){
          if(increasing===true){
              if(array[i]>array[i+1]){
                  return false
              }
          }else if(decreasing===true){
              if(array[i]<array[i+1]){
                  return false;
              }
          }
      
      }
      //if its not increasing/decreasing or if it is same number everywhere then it will be true
      return true
  }
  

  