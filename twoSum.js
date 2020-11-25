
//for loop Big0: (n^2), space 0(1)
function twoNumberSum(array,targetSum){
    let left=0;
	for(left;left<array.length;left++){
		for(let right=left+1;right<array.length;right++){
			if(array[left]+array[right]===targetSum){
				return [array[left],array[right]]
			}
		}
    }
    //if there is nothing that adds up
	return []
}
    
    


//sorting Big0 n(log n), space 0(1)
function twoNumberSumSorting(array,targetSum){
    //array.sort returns a sorted array
    array.sort((a,b)=>a-b)
    let left=0,right=array.length-1;
    while(left<right){
        if(array[left]+array[right]===targetSum){
            return [array[left],array[right]]
        }
        if(array[left]+array[right]<targetSum){
            left++
        }else{
            right--
        }
    }
    return []
    
}

//sorting Big0: (n), space 0(n)
function twoNumberSortingSet(array,targetSum){
    //as we traverse the array we are doing y=10-x
    let set=new Set()
    for(let i=0;i<array.length;i++){
        let checkingNumber=targetSum-array[i]

        if(set.has(checkingNumber)){
            return [checkingNumber,array[i]]
        }else{
            set.add(array[i])
        }
    }
    
    return []
}




// console.log(twoNumberSumSorting([3,5,-4,8,11,-1,-2,6],10))
// console.log(twoNumberSum([3,5,-4,8,11,-1,-2,6],10))
console.log(twoNumberSortingHash([3,5,-4,8,11,-1,-2,6],10))