/*

https://www.algoexpert.io/questions/Longest%20Palindromic%20Substring


{"string": "abaxyzzyxf"}

"xyzzyx"


*/

//time 0(n^2), space 0(1)

function longestPalindromicSubstring(string) {

let currentLongest=[0,1]

for(let i=1;i<string.length;i++){

    let odd=getLongestPalindrome(string,i-1,i+1);
    let even=getLongestPalindrome(string,i-1,ii);

    let longest=odd[1]-odd[0]>even[1]-even[0]?odd:even;

    currentLongest=currentLongest[1]-currentLongest[0]>longest[1]-longest[0]?currentLongest:longest
}
    //notice it is substring as it goes from start to end/not inclusive
    return string.substring(currentLongest[0],currentLongest[1])
    // or can be
    // return string.slice(currentLongest[0].currentLongest[1])

    



}

function getLongestPalindrome(string,leftIdx,rightIdx){

    while(leftIdx>=0 && rightIdx<string.length){
        if(string[leftIdx]!==string[rightIdx]){
            break;
        }
        leftIdx--;
        rightIdx++;

    }

    //we return leftIdx+1 since we did i-1 when entering it
    return [leftIdx+1,rightIdx]
}





