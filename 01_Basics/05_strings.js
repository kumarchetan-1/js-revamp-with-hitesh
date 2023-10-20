const yourName = new String("Gautam Buddha");

const fName = "Chetan"
const email = "kumarchetan.npr@gmail.com"

console.log(`My First Name is ${fName} and email address is ${email}`)

console.log(yourName.anchor("https://www.chetankumar.me")); // Creates an anchor tag around the string.
console.log(yourName.big()); // Wraps the string in a <big> tag.
console.log(yourName.blink()); // Displays the string blinking.
console.log(yourName.bold()); // Wraps the string in a <b> tag.
console.log(yourName.charAt(3)); // Returns the character at index 3.
console.log(yourName.charCodeAt(2)); // Returns the Unicode value of the character at index 2.
console.log(yourName.codePointAt(4)); // Returns the code point value of the character at index 4.
console.log(yourName.concat(" is a great person!")); // Concatenates another string to yourName.
console.log(yourName.constructor); // Returns the constructor of the string.
console.log(yourName.endsWith("Buddha")); // Checks if the string ends with "Buddha".
console.log(yourName.fixed()); // Wraps the string in a HTML <tt> (teletype) element.
console.log(yourName.fontcolor("red")); // Sets the font color to red.
console.log(yourName.fontsize(20)); // Sets the font size to 20.
console.log(yourName.includes("utam")); // Checks if the string includes "utam".
console.log(yourName.indexOf("a")); // Returns the index of the first occurrence of "a".
console.log(yourName.italics()); // Wraps the string in <i> tags.
console.log(yourName.lastIndexOf("a")); // Returns the last index of "a".
console.log(yourName.length); // Returns the length of the string.
console.log(yourName.link("https://www.example.com")); // Wraps the string in an <a> tag with the specified URL.
console.log(yourName.localeCompare("Gautam Buddha")); // Compares the string with another for locale-specific comparison.
console.log(yourName.match(/au/)); // Matches the regular expression pattern in the string.
console.log(yourName.matchAll(/a/g)); // Matches all occurrences of the regular expression pattern.
console.log(yourName.normalize()); // Normalizes the string.
console.log(yourName.padEnd(20, "X")); // Pads the string with "X" until it reaches a length of 20.
console.log(yourName.padStart(20, "Y")); // Pads the string with "Y" at the beginning until it reaches a length of 20.
console.log(yourName.repeat(2)); // Repeats the string 2 times.
console.log(yourName.replace("Buddha", "Buddha the Enlightened")); // Replaces "Buddha" with "Buddha the Enlightened".
console.log(yourName.replaceAll("a", "A")); // Replaces all occurrences of "a" with "A".
console.log(yourName.search("am")); // Searches for "am" in the string.
console.log(yourName.slice(2, 7)); // Returns a substring from index 2 to 7, you can also use negative values then it will start from the end
console.log(yourName.small()); // Wraps the string in <small> tags.
console.log(yourName.split(" ")); // Splits the string into an array based on spaces.
console.log(yourName.startsWith("Gautam")); // Checks if the string starts with "Gautam".
console.log(yourName.strike()); // Wraps the string in <strike> tags.
console.log(yourName.sub()); // Wraps the string in <sub> tags.
console.log(yourName.substr(2, 5)); // Returns a substring starting at index 2 with a length of 5.
console.log(yourName.substring(2, 5)); // Returns a substring from index 2 to 5, it does not consider negative values and will start from 0th index
console.log(yourName.sup()); // Wraps the string in <sup> tags.
console.log(yourName.toLocaleLowerCase()); // Converts the string to lowercase based on the locale.
console.log(yourName.toLocaleUpperCase()); // Converts the string to uppercase based on the locale.
console.log(yourName.toLowerCase()); // Converts the string to lowercase.
console.log(yourName.toString()); // Converts the string to a string representation.
console.log(yourName.toUpperCase()); // Converts the string to uppercase.
console.log(yourName.trim()); // Removes leading and trailing whitespace.
console.log(yourName.trimEnd()); // Removes trailing whitespace.
console.log(yourName.trimStart()); // Removes leading whitespace.
