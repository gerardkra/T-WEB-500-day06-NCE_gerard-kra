// We must "export" the function so the tester can use it
export function drawTriangle(height) {
    // Loop from 1 up to the given height
    for (let i = 1; i <= height; i++) {
        // Repeat the character "$" i times
        let line = "$".repeat(i);

        // Print the line in the terminal
        console.log(line);
    }
}

