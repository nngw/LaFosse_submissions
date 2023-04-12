//Implement countLetters that will print

const sentence = "Hello I am a random sentence, we have learnt HTML, CSS, git and GitHub so far. Thanks"

const countLetters = sentence =>{
    const letterCounts = {};
    const cleanSentence = sentence.toLowerCase().replace(/[^a-z]/g, '');
    for (let i = 0; i <  cleanSentence.length; i++) {
      const letter = cleanSentence[i];
      if (letterCounts[letter]){
        letterCounts[letter]++; 
      } else {
        letterCounts[letter] = 1;
      }
    }
    return letterCounts;
  }

console.log(countLetters(sentence))