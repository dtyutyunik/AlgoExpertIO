/*

https://www.algoexpert.io/questions/Array%20Of%20Products

returns array of same length where each value in array is equal to multiplication of others but itself

[5,1,4,2]

return: [8,40,10,20]

8= 1*4*2
40=5*4*2
10=5*1*2
20=5*1*4


*/

//0(n^2) time, 0(n) space
function arrayOfProducts(array){

    const products=[];

    for(let i=0;i<array.length;i++){
        let runningProducts=1;
        for(let j=0;j<array.length;j++){
            //if the index does not equal each other then multiply
            if(i!==j){
                runningProducts*=array[j]
            }
            products[i]= runningProducts;
        }
    }
    return products;

}


console.log(arrayOfProducts([5,1,4,2]))


//0(n) time, 0(n) space
function arrayOfProducts2(array){

    let leftProductsArray=Array(array.length).fill(1)
    let rightProductsArray=Array(array.length).fill(1)
    let leftProductTotal=1
    let rightProductTotal=1
    let finalProducts=[]

    //left arrayPRoducts of everything to the left of the current value
    for(let i=0;i<array.length;i++){
        
        leftProductsArray[i]*=leftProductTotal;
        //after we equal current value to prior runningProduct, we update runningProduct to multiply current value
        leftProductTotal*=array[i]
    }

    //we do the same for the right side of products
    for(let j=array.length-1;j>=0;j--){
		rightProductsArray[j]*=rightProductTotal;
		rightProductTotal*=array[j]
	}
	
	for(let i=0;i<array.length;i++){
		finalProducts[i]=leftProductsArray[i]*rightProductsArray[i]
		
	}

	return finalProducts


}

console.log(arrayOfProducts2([5,1,4,2]))

//0(n) time, 0(n) space, however it uses 2 less arrays
function arrayOfProducts3(array){
    let leftRunningProduct=1,rightProductsArray=1,finalProducts=Array(array.length).fill(1);

    for(let i=0;i<array.length;i++){
        finalProducts[i]*=leftRunningProduct;
        leftRunningProduct*=array[i]
    }
    for(let i=array.length-1;i>=0;i--){
        finalProducts[i]*=rightProductsArray;
        rightProductsArray*=array[i]
    }

    return finalProducts;
}

console.log(arrayOfProducts3([5,1,4,2]))

