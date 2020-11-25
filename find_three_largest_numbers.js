

//https://www.algoexpert.io/questions/Find%20Three%20Largest%20Numbers

//space 0(1) , time (n)
function findThreeLargestNumbers(array){
    let large=-Infinity, larger=-Infinity, largest=-Infinity;
	
	for(let i=0;i<array.length;i++){
		
		if(array[i]>large){
				large=array[i]
		}
		//comparisons
		if(large>larger){
			[large,larger]=[larger,large]
		}
		if(larger>largest){
			[larger,largest]=[largest,larger]	
		}
	
		if(large>largest){
			[large,largest]=[largest,large]
		}
	}
	console.log(`large, ${large},larger, ${larger},largest, ${largest}`)
	return [large,larger,largest]
}
