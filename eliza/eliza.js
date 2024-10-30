
//Object of reflections 
//Array of responses {Pattern, Response}

/*Reflex Function */
//Parse the user input and store the reflection using the reflection object





const responses = {

 "I am (.*)":[
    "How long have you been {0}",
    "Did you come to me because you are {0}",
    "How does being {0} make you feel",
    "Do you enjoy being {0}"
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
    "I'm": "you are",
}






function getReflection(input){
    const words = input.split(" ");
    for (let i = 0; i < words.length; i++){
        if (reflections[words[i]]){
            words[i] = reflections[words[i]];
        }
    }
    return words.join(" ");
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

/*Response Function*/
//If the user input matches the response pattern
//Get the regex match (Word difference) (r "I am (.*)" user input: "I am happy" regex match: "happy")
//Select a random response from the pattern 
//Check if the regex match is a reflection word and change it if its
//return a response with the reflection word
function getElizaResponse(input) {
    const reflection = getReflection(input);
    for (const [pattern, responsesList] of Object.entries(responses)) {
        const regex = new RegExp(pattern, 'i'); // 'i' flag for case-insensitive matching
        const match = input.match(regex);
        if (match) {
            console.log("Matched " + match);
            const reflectedGroups = match.slice(1).map(group => getReflection(group)); // Reflect each group
            const response = responsesList[Math.floor(Math.random() * responsesList.length)];
            let finalResponse = response;
            console.log(response);
            reflectedGroups.forEach((group, index) => {
                finalResponse = finalResponse.replace(`{${index}}`, group);
            });
            return finalResponse;
        }
    }
    return "I'm not sure what you're trying to say";
}