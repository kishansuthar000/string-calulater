const addString=(numbers)=>{

    //if numbers or input string is empty then return 0 directly.
    if (numbers === "") {
        return 0;
    }

    // default delimiters: comma and newline
    let delimiter = /,|\n/; 

    // to check if the numbers string starts with a custom delimiter declaration. like // or newLine \n
    let customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);

    let numArray = numbers.split(delimiter); // split the numbers in array by extracting delimiter pattern
    let sum = 0;
    let negatives = [];


}
console.log(addString("1,2,3"))