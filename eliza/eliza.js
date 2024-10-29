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