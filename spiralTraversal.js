/*

https://www.algoexpert.io/questions/Spiral%20Traverse


*/


function spiralTraverse(array){

    let traversedArray=[]
    let startingRow=0,
        startingColumn=0,
        endingRow=array.length-1,
        endingColumn=array[0].length-1;

    while(startingRow<=endingRow && startingColumn<=endingColumn){
        //traverse right via columns
        for(let col=startingColumn;col<=endingColumn;col++){
            traversedArray.push(array[startingRow][col])
        }

        //traverse down via row
        for(let row=startingRow+1;row<=endingRow;row++){
            traversedArray.push(array[row][endingColumn])
        }

        for(let col=endingColumn-1;col>=startingColumn;col--){
            //handles edgecase for single row
            if(endingColumn===startingColumn){
                break;
            }
            traversedArray.push(array[endingRow][col])
        }
        
        for(let row=endingRow-1;row>=startingRow;row--){
            //handles edgecase for single column
            if(endingRow===startingRow){
                traversedArray.push(array[row][endingColumn])
            }
        }

        //bring in the perimeter by
        startingRow++
        endingRow--
        startingColumn++
        endingColumn--


    }
        

    
    return traversedArray;

}

console.log(spiralTraverse([
    [ 1, 2, 3, 4 ],
    [ 12, 13, 14, 5 ],
    [ 11, 16, 15, 6 ],
    [ 10, 9, 8, 7 ]
  ]))
/*
[
  [ 1, 2, 3, 4 ],
  [ 12, 13, 14, 5 ],
  [ 11, 16, 15, 6 ],
  [ 10, 9, 8, 7 ]
]

Answer
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

*/