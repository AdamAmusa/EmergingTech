let lastUserInput = "";

//response ideas assisted with Github copilot
const responses = {
      
    "(I am feeling)(.*)$": [
        "How long have you been {1}",
        "Did you come to me because you are {1}",
        "How does being {1} make you feel",
        "Do you enjoy feeling {1}"
    ],
    
    "(I feel)(.*)$": [
        "How long have you been {1}",
        "Did you come to me because you are {1}",
        "How does being {1} make you feel",
        "Do you enjoy being {1}"
    ],
    "(I am|I'm|Im)(.*)$": [
        "How long have you been {1}",
        "Did you come to me because you are {1}",
        "How does being {1} make you feel",
        "Do you enjoy being {1}"
    ],
    
   
    "(.*)(mother|father|family|parent|dad|mum|mom)(.*)": [
        "Tell me more about your family.",
        "How does that make you feel about your family?",
        "What role does your family play in your thoughts?"
    ],
    "^(hello|hi|hey|yo|Good Morning|Good day)$": [
        "Hello! How are you feeling today?",
        "Hi there! What’s on your mind?",
        "Hey! How can I help you?"
    ],
    "I want (.*)": [
        "Why do you want {0}?",
        "What would you do if you got {0}?",
        "If you got {0}, what would you do next?"
    ],
    "No":[
        "Are you saying no just to be negative?",
        "Why are you being negative?",
        "Why not?",
        "Are you sure?"
    ],
    
    "(.*)": ["Tell me more about that", "I see", "I understand"]
};

const reflections = {
    "I": "you",
    "me": "you",
    "my": "your",
    "am": "are",
    "you": "I",
    "your": "my",
    "yours": "mine",
    "are": "am",
    "I'm": "you are",
    "myself": "yourself",
    "you're": "I am",
    "you've": "I have",
    "you'll": "I will",
    "you'd": "I would",
}

//Repeated input responses
//inspired by responses given from Eliza https://web.njit.edu/~ronkowit/eliza.html
const repeatedInput = [
   "Lets take a moment here. Think about what you just said.",
    " Do you really expect a different answer if you keep repeating yourself?",
    "Again we need to move on from this",
    "Do you really expect a different answer if you keep repeating yourself?",
    "I think we need to move on from this",
];

document.addEventListener('DOMContentLoaded', function() {
    // Display initial message
    displayInitialMessage();
});

//Display initial message
function displayInitialMessage() {
    // Get the conversation list
    const conversationDiv = document.getElementById('conversation');
    // Create a new div element 
    const elizaMessage = document.createElement('div');
    // Set the text content
    elizaMessage.textContent = "Hello! How can I help you today?";
    // Set the id 
    elizaMessage.id = 'eliza-message';
    // Append the message to the conversation list  
    conversationDiv.appendChild(elizaMessage); 

}



//retrieve reflection word
function getReflection(input){
    const words = input.split(" ");
    for (let i = 0; i < words.length; i++){
        if (reflections[words[i]]){
            words[i] = reflections[words[i]];
        }
    }
    return words.join(" ");
}

document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleUserInput();
    }
});

//Handle user input, invoke eliza replies and update message list displayed.
function handleUserInput() {
    let elizaResponse = "";

    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return; 

    const conversationDiv = document.getElementById('conversation'); 
    const userMessage = document.createElement('div'); 
    userMessage.textContent = userInput; 
    userMessage.id = 'user-message'; 
    conversationDiv.appendChild(userMessage);
    //If the user repeats the same input send a specific response
    if(lastUserInput === userInput){ 
        elizaResponse = repeatedInput[Math.floor(Math.random() * repeatedInput.length)];
    }
    else{ //Else get a response from eliza
             elizaResponse = getElizaResponse(userInput); 

    }
    const elizaMessage = document.createElement('div');
    elizaMessage.textContent = elizaResponse;
    elizaMessage.id = 'eliza-message';
    conversationDiv.appendChild(elizaMessage);

    document.getElementById('user-input').value = '';
    lastUserInput = userInput;
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
}

/*Response Function
If the user input matches a response pattern
Get the regex match (Word difference) (r "I am (.*)" user input: "I am happy" regex match: "happy")
Select a random response from the pattern 
Check if the regex match is a reflection word and change it if its
return a response with the reflection word*/

/* Used javascript.info for regex matching
https://javascript.info/regexp-groups

Algorithm inspired by Ian McLoughlin's Eliza implementation
https://github.com/ianmcloughlin/2425_emerging_technologies/blob/main/03_eliza.ipynb 
*/
function getElizaResponse(input) {
    for (const [pattern, responsesList] of Object.entries(responses)) {
        const regex = new RegExp(pattern, 'i');
        const match = input.match(regex); // Get the regex match
        if (match) {
            console.log("Matched " + pattern);
            const reflectedGroups = match.slice(1).map(group => getReflection(group)); // Reflect each group
            const response = responsesList[Math.floor(Math.random() * responsesList.length)]; // Select a random response
            let finalResponse = response;
            console.log(response);
            reflectedGroups.forEach((group, index) => { // Replace each group in the response
                console.log(group);
                finalResponse = finalResponse.replace(`{${index}}`, group); // Replace the group in the response
            });
            return finalResponse;
        }
    }
    return "I'm not sure what you're trying to say";
}