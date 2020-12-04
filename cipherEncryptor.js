//time is 0(n) space is 0(n) since we created a new variable which is a string
function caesarCipherEncryptor(string, key) {
    // Write your code here.
      //a-z is 97-122
      //'letter.charCodeAt(0)' will give ascii value of the letter between 97 to 122
        let newString=''

      for(let i=0;i<string.length;i++){
        //since there are 26 letter in alphapet, if the key is greater than that then we do modelo to get the correct movement
        if(key>26){
            key=key%26
        }

          let currentValue=string[i].charCodeAt(0)
        //   let temp=''
          if(currentValue+key>122){
            newString+=String.fromCharCode(currentValue+key-122+96)
            //   newString+=temp;
          
          }else{
            newString+=String.fromCharCode(currentValue+key)
            //   newString+=temp;
          
          }
      }
      return newString;

  }

  console.log(caesarCipherEncryptor('xyz',32)) //zab

  //time 0(n), space 0(n) since we are creating an array to hold the values
  function caesarCipherEncryptorWithArray(array,key){

    let newString=''
    key=key%26; //since there are only 26 letters
    let alphabet='abcdefghijklmnopqrstuvwxyz'.split('')
    for(let i=0;i<array.length;i++){
        let newValue=alphabet.indexOf(array[i])
		
		let letter=alphabet[((newValue+key)%26)]
		newString+=letter;
    }
    return newString

    
  }

  console.log(caesarCipherEncryptorWithArray('xyz',32)) //zab
//   console.log(String.fromCharCode(97))

//   console.log('d'.charCodeAt(0))