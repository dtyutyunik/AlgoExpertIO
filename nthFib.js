//recursive Space-0(n), time 0(2^n)
function getNthFib(n) {
    // Write your code here.
      if(n===1){
          return 0
      }
      
      if(n<=2){
          return 1
      }
      
      return getNthFib(n-2)+ getNthFib(n-1)
  }


//Caching space 0(n), time 0(n)
function getNthFib(n) {
  // Write your code here.
	let arr=[0,1,1];
	
	for(let i=3;i<n;i++){
		arr[i]=arr[i-2]+arr[i-1]
		console.log(arr[i])
	}
		console.log(arr)
		return arr[n-1]
}

//Space 0(1) time 0(n)

function getNthFib(n){
    let arr=[0,1];
    let counter=3

    while(counter<=n){
        let sum=arr[0]+arr[1]
        arr[0]=arr[1]
        arr[1]=sum;
        counter++
    }
    return n>1?arr[1]:arr[0]    //if n===2 it still will be 1 as answer due to 0+1


}