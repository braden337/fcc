function translate(word) {
  
  var vowels = 'aeiou';
  
  if (vowels.indexOf(word.split('')[0]) != -1)
    word += 'way';
  
  else {
    word = word.split('');
    
    var vowelsPresent = word.filter(function(x) {
      return vowels.indexOf(x) != -1;
    });
    
    var firstVowel = word.indexOf(vowelsPresent[0]);
    
    var end = word.splice(0, firstVowel)
                  .concat('ay'.split(''));
    
    word = word.concat(end).join('');
    
  }
  
  return word;
  
}

translate('flowshow'); //should return "owshowflay"
