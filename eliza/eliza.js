
//Object of reflections 
//Array of responses {Pattern, Response}

/*Reflex Function */
//Parse the user input and store the reflection using the reflection object


/*Response Function*/
//If the user input matches the response pattern
//Get the regex match (Word difference) (r "I am (.*)" user input: "I am happy" regex match: "happy")
//Select a random response from the pattern 
//Check if the regex match is a reflection word and change it if its
//return a response with the reflection word


const responses = {
 "I am (.*)":[
    "How long have you been {}",
    "Did you come to me because you are {}",
    "How does being {} make you feel",
    "Do you enjoy being {}"
],
"(.*)": ["Tell me more about that", "I see", "I understand"],
}

const reflections = {
    "I": "you",
    "me": "you",
    "my": "your",
    "am": "are",
    "you": "I",
    "your": "my",
    "yours": "mine",
    "are": "am",
}






function getReflection(input){
    const words = input.split(" ");
    for (let i = 0; i < words.length; i++){
        if (reflections[words[i]]){
            words[i] = reflections[words[i]];
        }
    }
}










// Remove the button event listener since there's no button anymore
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleUserInput();
    }
});

function handleUserInput() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    const conversationDiv = document.getElementById('conversation');
    const userMessage = document.createElement('div');
    userMessage.textContent = userInput;
    userMessage.id = 'user-message';
    conversationDiv.appendChild(userMessage);

    const elizaResponse = getElizaResponse(userInput);
    const elizaMessage = document.createElement('div');
    elizaMessage.textContent = elizaResponse;
    elizaMessage.id = 'eliza-message';
    conversationDiv.appendChild(elizaMessage);

    document.getElementById('user-input').value = '';
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
}


function getElizaResponse(input) {
    // Simple Eliza response logic
    if (input.toLowerCase().includes('hello')) {
        return 'Hello! How can I help you today?';
    } else if (input.toLowerCase().includes('help')) {
        return 'I am here to help you. What do you need assistance with?';
    } else {
        return 'Tell me more about that.';
    }
}