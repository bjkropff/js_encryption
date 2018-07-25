/*
Steps
1. Make a cypher
2. Take inputs
3. Take passwords (x2)
4. Take a key for both passwords
5. Have input translate to cypher then untranslate
6. Post all steps
*/

var agreedNumber;
var userOnePass;
var userTwoPass;
var userOnePrivate;
var userTwoPrivate;
var message;
var testMessage = "abc";
// var lettersArray = message.split("");
var lettersArray = testMessage.split("");

let cypheredText =[];

function translateToHash(letter){
  cypheredText.push.fromCharCode(0);
  return letter.charCodeAt(0);
}

function translateFromHash(letter){
  var code = letter.charCodeAt(0)+3;
  cypheredText.push(String.fromCharCode(code));

  return true;
}

function cypher(arrayInput){

  arrayInput.forEach(letter => {translateFromHash(letter)});
  cypheredText = cypheredText.join('');

  //cypher test
  if(cypheredText == "def"){
    return console.log(cypheredText);
  } else {
    return console.log("error", cypheredText);
  }

  return console.log(cypheredText);
}

cypher(lettersArray);
