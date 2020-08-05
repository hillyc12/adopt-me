const obj = {
  word: 1,
};
obj.word = isNaN(obj.word) ? 1 : ++obj.word;
console.log(obj);
