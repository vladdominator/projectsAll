module.exports = function CaesarCipher(text, shift, action){  
   function _isUpperCase(symbol) {
      if (symbol === symbol.toUpperCase()) {
        return true;
      } else {
        return false;
      }
   }
   function _isLetter(symbol) {
      return /[a-z]/i.test(symbol);
   }
   let result = [];
   let codeA = "A".charCodeAt(0);
   let abcCount = 26;
   if (shift < 0) {
      shift = Math.abs(abcCount + shift);
   }
   for (let i = 0; i < text.length; i++) {
      if (!(_isLetter(text[i]))) {
        result.push(text[i]);
      } else {
        let letterIdx = text.toUpperCase().charCodeAt(i) - codeA;
        let temp;
        if (action === "encode") {
          temp = String.fromCharCode(
            codeA + ((letterIdx + shift) % abcCount)
          );
        } else if (action === "decode") {
          temp = String.fromCharCode(
            codeA + ((letterIdx - shift + abcCount) % abcCount)
          );
        }
        if (!(_isUpperCase(text[i]))) {
          temp = temp.toLowerCase();
        }
        result.push(temp);
      }
    }
    return result.join("");
}