/*

https://www.algoexpert.io/questions/Search%20In%20Sorted%20Matrix

*/

//0(n+m) n is rows, m is column, space 0(1)
function searchInSortedMatrix(matrix,target){

    let row=0;
    let column=matrix[0].length-1

    //we are starting for the last value in the first row

    while(row<=matrix[row].length && column>=0){
        if(matrix[row][column]<target){
            row++
        }else if(matrix[row][column]>target){
            column--
        }else{
            return [row,column] //then it must be equal
        }
    }

    return [-1,-1]
}




/*
//Looking for 44

[
  [ 1, 4, 7, 12, 15, 1000 ],
  [ 2, 5, 19, 31, 32, 1001 ],
  [ 3, 8, 24, 33, 35, 1002 ],
  [ 40, 41, 42, 44, 45, 1003 ],
  [ 99, 100, 103, 106, 128, 1004 ]
]


*/