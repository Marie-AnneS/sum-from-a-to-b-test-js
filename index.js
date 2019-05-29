function sum(fromN, toN) {
  
    console.log(`fromN: ${fromN}`);
  console.log(`toN: ${toN}`);
  if (fromN < toN){
    return fromN += sum(fromN + 1, toN);

  }
    return fromN;
  
}
console.log(sum(3, 7));

module.exports = sum;
