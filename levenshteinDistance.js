/*

https://www.algoexpert.io/questions/Levenshtein%20Distance


*/
//time 0(n*m) space 0(n*m)

function levenshteinDistance(str1, str2) {
    // Write your code here.
    let grid=[]

    //create 2d array/matrix
    for(let i=0;i<str1.length+1;i++){
        let row=[]
        for(let j=0;j<str2.length+1;j++){
            row.push(j)
        }
        row[0]=i;
        grid.push(row)
    }

    for(let i=1;i<str1.length+1;i++){
        for(let j=1;j<str2.length+1;j++){
            //if it is equal then we take the diagonal value of before, or the result of the last 2 characters
            //in string from prior comparison
            if(str1[i]===str2[j]){
                grid[i][j]=grid[i-1][j-1]
            }else{
                //we take the minimum value of insert, delete or replace +1
                grid[i][j]=1+Math.min(grid[i-1][j-1],grid[i-1][j],grid[i][j-1])
            }
        }
    }
    //notice it is the length as opposed to -1, because we added the parameters of an empty string in the first row and column
    return grid[str1.length][str2.length]
}

console.log(levenshteinDistance('abc','de'));




