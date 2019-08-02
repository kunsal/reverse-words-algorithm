function reverseWordsRevised(string) {
  const wordsArr = string.split(' '); // correct
  let reverseWordsArr = [];

  wordsArr.forEach(word => {
    let reversedWord = '';
    for (let i = word.length-1; i>=0; i--) {
      reversedWord += word[i];
    }
    reverseWordsArr.push(reversedWord);
  })
  return reverseWordsArr.join(' ');
}

reverseWords('All is about javascript');
