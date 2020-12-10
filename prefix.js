function prefix(array,k){

    let arr=[]
    
    
    for(let kCounter=1;kCounter<k;kCounter++){

        let count=0;
        
        let firstElement=array[0].substr(0,kCounter);

        //if element is less than kcounter then it's prefix is too small to be counted
        if(firstElement.length>=kCounter){
            console.log('firstelemnt is', firstElement)
        }
        
        for(let i=1;i<array.length;i++){
            
            if(firstElement!==array[i].substr(0,kCounter)){
                
            }
            // console.log(array[i].substr(0,kCounter))
        }
        arr.push(count)
        console.log('===========')
        
    }
    console.log('arr', arr)
    

}

console.log(prefix(['apple','app','bad','apples'],8))

/*
concept is you have an array ['apple','app','bad','apples']

k is the prefix or length of array
if prefix does not match then it increases
if word is less than length of prefix then it is disqualifed

'a,b' ->2
'ap, ba'->2
'app',bad ->2
'appl,app ,bad '->3
'appl,->1
'apple, ->1
'apples' ->1
''->0
[2,2,2,3,1,1,1,0]

*/

