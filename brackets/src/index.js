module.exports = function check(str, bracketsConfig) {
   let one = [];
   let two = [];
     for (let i = 0; i < bracketsConfig.length; i++) {
         one.push(bracketsConfig[i][0]);
         two.push(bracketsConfig[i][1]);
     }
     let stack = [];
 
     for (let i = 0; i < str.length; i++) {
         let twoItem = two.indexOf(str[i]);
         let oneItem = one.indexOf(str[i]);
 
         if (twoItem !== -1) {
             let top = stack[stack.length - 1];
 
             if (twoItem === oneItem && (top !== str[i] || stack.length === 0)) {
                 stack.push(str[i]);
             } else if (one.indexOf(top) === twoItem) {
                 stack.pop();
             } else {
                 return false;
             }
         } else {
             stack.push(str[i]);
         }
     }
 
     return stack.length === 0;
}
