function isValidSubsequence(array, sequence) {
    // Write your code here.
      let tempCompare=0;
      
      for(let i=0;i<array.length;i++){
          
          if(sequence[tempCompare]===array[i]){
              tempCompare++
          }	
      }
      if(tempCompare===sequence.length){
          return true;
      }
      
      return false;
  }


  function isValidSubsequenceAlternative(array, sequence) {
    // Write your code here.
      let tempCompare=0;
        
        for(let i=0;i<array.length;i++){
            
            if(sequence[tempCompare]===array[i]){
                tempCompare++
            }	
        }
        
              return tempCompare===sequence.length
       
  }

  
  
  
  console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
  console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [22,25,6]))
  