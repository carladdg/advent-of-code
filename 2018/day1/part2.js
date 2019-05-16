const fs = require("fs"); 

fs.readFile("./input.txt", "utf8", (error, data) => {
    if (error) throw error;

    let frequency = 0; 
    const frequencyChanges = data.split("\n");
    let reachedFrequencies = [];
    let frequencyHasBeenRepeated = false;

    while (!frequencyHasBeenRepeated) {
        frequencyChanges.forEach(change => {
            frequency += parseInt(change);

            if (reachedFrequencies.includes(frequency) && !frequencyHasBeenRepeated) {
                const firstRepeatedFrequency = frequency;
                console.log(`The first repeated frequency is ${firstRepeatedFrequency}.`)
                frequencyHasBeenRepeated = true;
            } else {
                reachedFrequencies.push(frequency);
            }
        })
    }
})

// 558