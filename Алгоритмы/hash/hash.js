let voted = {};
checkVoter("Mike", voted);
console.log(voted);
checkVoter("John", voted);
console.log(voted);
checkVoter("Mik", voted);
console.log(voted);
function checkVoter(name, voted) {
if (name in voted) {
   console.log("kick them out!");
} else {
   voted["Mike"] = 123;
   voted["Mik"] = 448;
   voted["John"] = 4747;
   console.log("let them vote!");
}
}
console.log(voted)