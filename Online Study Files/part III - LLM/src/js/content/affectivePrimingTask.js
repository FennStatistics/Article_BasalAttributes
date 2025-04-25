/* 
Affective Priming Task: 
*/


/* set up array practice task */
const posnegWords_practice = [
    "sociable",
    "absurd",
    "hearty",
    "choosy",
    "honorable",
    "devious"
];

const positiveWords_practice = [
    "sociable",
    "hearty",
    "honorable"
];

const negativeWords_practice = [
    "absurd",
    "choosy",
    "devious"
];

// >>> add primes, duration (repeat every stimuli 9x times)
// Function to create objects for each word with prime values and randomized duration
function createWordObjects_practice(array) {
    const primes = [
        "female_neutral",
        "male_neutral"
    ];

    return array.flatMap(word => primes.map(prime => ({ 
        stimulus: word, 
        prime, 
        duration: Math.floor(Math.random() * (1700 - 1000 + 1)) + 1000 
    })));
}

const sorted_Stimuli_practice = createWordObjects_practice(posnegWords_practice);


// Function to shuffle an array such that no identical stimuli appear consecutively
function shuffleWithoutConsecutiveRepeats(array) {
    const shuffledArray = [];
    const availableItems = [...array];

    // Randomly pick items ensuring no consecutive repeats
    while (availableItems.length > 0) {
        const possibleChoices = availableItems.filter(
            item => !shuffledArray.length || item.stimulus !== shuffledArray[shuffledArray.length - 1].stimulus
        );

        if (possibleChoices.length === 0) {
            // If no valid choices, reshuffle availableItems into the array and start over
            shuffledArray.push(availableItems.shift());
        } else {
            const choiceIndex = Math.floor(Math.random() * possibleChoices.length);
            const chosenItem = possibleChoices[choiceIndex];
            shuffledArray.push(chosenItem);

            // Remove chosen item from availableItems
            const itemIndex = availableItems.findIndex(
                item => item.stimulus === chosenItem.stimulus && item.prime === chosenItem.prime
            );
            availableItems.splice(itemIndex, 1);
        }
    }

    return shuffledArray;
}

// constrained shuffle
const random_Stimuli_practice = shuffleWithoutConsecutiveRepeats(sorted_Stimuli_practice);
console.log("random_Stimuli_practice:", random_Stimuli_practice)

/* set up array main task */

// >>> stimuli
// Arrays for positive and negative words
const positiveWords = [
    "punctual",
    "attentive",
    "ambitious",
    "masterful",
    "diligent",
    "crafty",
    "exuberant",
    "quick-witted",
    "concise",
    "studious",
    "purposeful",
    "comical",
    "joyful",
    "self-contented",
    "tidy",
    "well-bred",
    "triumphant",
    "courteous",
    "brave",
    "insightful"
];

const negativeWords = [
    "immodest",
    "unfair",
    "immature",
    "unobservant",
    "indecisive",
    "somber",
    "domineering",
    "unagreeable",
    "showy",
    "sloppy",
    "discouraged",
    "defiant",
    "untruthful",
    "self-indulgent",
    "slow",
    "boisterous",
    "confused",
    "detached",
    "rash",
    "irresponsible"
];

// combine two arrays
const posnegWords = positiveWords.concat(negativeWords);

// >>> add primes, duration (repeat every stimuli 9x times)
// Function to create objects for each word with prime values and randomized duration
function createWordObjects(array) {
    const primes = [
        "neutralShape",
        "normalweight_female",
        "normalweight_male",
        "obese_female",
        "obese_male",
        "overweight_female",
        "overweight_male",
        "underweight_female",
        "underweight_male"
    ];

    return array.flatMap(word => primes.map(prime => ({ 
        stimulus: word, 
        prime, 
        duration: Math.floor(Math.random() * (1700 - 1000 + 1)) + 1000 
    })));
}

const sorted_Stimuli = createWordObjects(posnegWords);

// constrained shuffle
const random_Stimuli = shuffleWithoutConsecutiveRepeats(sorted_Stimuli);
console.log("random_Stimuli:", random_Stimuli)


/*
var index = 0
random_Stimuli.forEach(element => {
    if(element.stimulus == "defiant"){
        console.log(element, index)
    }
    index++
});
*/