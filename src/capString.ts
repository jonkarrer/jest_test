const capString = (string:string) => {
  let firstLetter = string.charAt(0);
  let capitalize = firstLetter.toUpperCase();
  return string.replace(firstLetter, capitalize); 
} 

module.exports = capString;