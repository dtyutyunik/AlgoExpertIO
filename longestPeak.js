/*
https://www.algoexpert.io/questions/Longest%20Peak
*/

//0(n) time, 0(1) space
function longestPeak(array){
    //peak is literally imaginging a tip of a mountain, if the number to the left is smaller and the number 
    //to the right is smaller than it is the peak

    let peakLength=0;
    //finding peak
    let i=1;

    while(i<array.length-1){

        let peakPoint=0;
        if(array[i-1]<array[i]&&array[i+1]<array[i]){
            peakPoint=i;
        }
        
				let leftIdx,rightIdx
				if(peakPoint!==0){
					leftIdx=peakPoint-1, rightIdx=peakPoint+1;
					while(leftIdx>=0 && array[leftIdx]>array[leftIdx-1]){
							leftIdx--;
					}
					while(rightIdx<array.length && array[rightIdx]>array[rightIdx+1]){
							rightIdx++
					}	
                    
                    //+1 to include the leftside and rightside
					peakLength=Math.max(peakLength,rightIdx-leftIdx+1)
				}
        

				i++
				console.log(`leftIdx is ${leftIdx} : rightidx is ${rightIdx} `)
        
        
        
        
        
    }


    return peakLength;
}