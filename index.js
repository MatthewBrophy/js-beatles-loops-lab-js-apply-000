function theBeatlesPlay(musicians, instruments) {
  let newArray = [];
  for (let i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray;
}

function johnLennonFacts (facts) {
  let newArray = [];
  let i = 0;
  while (i < facts.length) {
    newArray.push (`${facts[i]}!!!`)
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  let newArray = [];
  let i = 0;
  do {
    newArray.push("I love the Beatles!")
    i++;
  } while (i < (15 - number)) {
    }
    return newArray;
  }
