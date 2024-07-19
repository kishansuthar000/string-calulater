const addString=(numbers)=>{

    //if numbers or input string is empty then return 0 directly.
    if (numbers === "") {
        return 0;
    }

    // default delimiters: comma and newline
    let delimiter = /,|\n/; 

    // to check if the numbers string starts with a custom delimiter declaration. like // or newLine \n
    let customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);

    // if is any special char like // \n then replace new value/regex for delimiter
    if (customDelimiterMatch) {
        delimiter = new RegExp(customDelimiterMatch[1]);
        numbers = numbers.substring(customDelimiterMatch[0].length);
    }

    let numArray = numbers.split(delimiter); // split the numbers in array by extracting delimiter pattern
    let sum = 0;
    let negatives = [];

    for (let num of numArray) {
        let parsedNum = parseInt(num, 10);
        
        if (isNaN(parsedNum)) {
            continue;
        }

        if (parsedNum < 0) {
            negatives.push(parsedNum);
        }

        sum += parsedNum;
    }

    //throw error if is there negative values.
    if (negatives.length > 0) {
        throw new Error("negative numbers not allowed: " + negatives.join(", "));
    }

    return sum;

}

// Test cases
console.log(addString("")); // Output: 0
console.log(addString("1")); // Output: 1
console.log(addString("10,5")); // Output: 15
console.log(addString("1\n2,3,7")); // Output: 13
console.log(addString("//;\n1;2")); // Output: 3
try {
    console.log(addString("1,-2,3,-4")); // should throw an exception
} catch (e) {
    console.error(e.message); // Output: negative numbers not allowed: -2, -4
}
