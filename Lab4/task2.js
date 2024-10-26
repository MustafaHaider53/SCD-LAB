function reverseAndSortString(inputString) {
    // Step 1: Split the string into an array of characters
    let charArray = inputString.split('');
    
    // Step 2: Reverse the array
    charArray.reverse();
    
    // Step 3: Sort the array in ascending order
    charArray.sort();
    
    // Step 4: Join the array back into a string
    let sortedString = charArray.join('');
    
    return sortedString;
}

// Test the function
console.log(reverseAndSortString("hello")); // Output: "ehllo"
console.log(reverseAndSortString("javascript")); // Output: "aacijprstv"
