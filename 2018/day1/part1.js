const fs = require("fs"); 

fs.readFile("./input.txt", "utf8", (error, data) => {
    if (error) throw error;

    let frequency = 0; 
    const frequencyChanges = data.split("\n");
    frequencyChanges.forEach(change => {
        frequency += parseInt(change);
    })

    console.log(`The final frequency is ${frequency}.`);
})

// 497