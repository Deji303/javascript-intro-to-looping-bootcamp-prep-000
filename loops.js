
function forLoop (strange) {
  for (let i = 0; i<25; i++) {
    
    if (i == 1) {
      strange.push("I am 1 strange loop.");
    } else  {
      strange.push(`I am ${i} strange loops.`);
    } 
    
}
  return strange; 
}

function whileLoop (num) {
  while (num > 0) {
     console.log( --num )
  }
  return "done"

}