const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (element) => {
  return tutorials.map(x => { 
  const wordsArr = x.split(' ') 
    const firstCap = wordsArr.map(x => x.charAt(0).toUpperCase() + x.slice(1))
    const done =  firstCap.join(' ')
    return done

  })
}

// function titleCased(tutorials, callback){
// const newArr =  tutorials.split(' ')
// return 
// }