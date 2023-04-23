// complete the given function

function palindrome(s){
const str = s.split(" ");
let mystr = str.join("");
mystr = mystr.toLowerCase();

	 let start =0;
    let end =mystr.length -1;
    while(start < end){
        if(mystr[start] != mystr[end]){
            return false
        }
        start++;
        end--;
    }
    return true;
}
module.exports = palindrome
