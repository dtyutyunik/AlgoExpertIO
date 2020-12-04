//https://www.algoexpert.io/questions/Run-Length%20Encoding

function runLengthEncoding(string){
    let encodedStrings=[];   //we are using an array instead of string, because to add to an array is a 0(n)
    let count=1;

    for(let i=1;i<string.length;i++){
        let currentLetter=string[i]
        let prevLetter=string[i-1]

        //if count===9 then we just refresh count
        if(currentLetter!==prevLetter ||count===9){
            encodedStrings.push(count.toString())
            encodedStrings.push(prevLetter)
            count=0
        }
        count++;
        
    }

    //the last instance/run, so if we finished the for loop and the last characters were the same, this will get it
    encodedStrings.push(count.toString())
    encodedStrings.push(string[string.length-1]) //it is string.length-1 to get the last character

    encodedStrings.join('')
    return encodedStrings;
}

console.log(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD'))
// console.log(runLengthEncoding('122333'))
// console.log(runLengthEncoding("************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA"))
console.log(runLengthEncoding('ABCD'))