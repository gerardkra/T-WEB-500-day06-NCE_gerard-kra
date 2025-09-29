// We must "export" the function so the tester can use it
// Check if str contain 'G' and increase count by 1 each time 'G' is found
// We don't treat the case where srt is lower string!
export function countGs(str) {
    // Initialize a counter at 0
    let count = 0;

    // Loop through each character of the string
    for (let i = 0; i < str.length; i++) {
        // If the character is strictly 'G', increase the counter by 1
        if (str[i] === 'G') {
            count+=1;
        }
    }

    // Return the total number of 'G' found
    return count;
}


