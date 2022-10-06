function sendMessage(sender) {
    let message = "";

    if (sender === 1) {
        message = document.getElementById("text_user1").value;
        sendMessageToReceiver(message, "chatbox2");
        addMessageForSender(message, "chatbox1");
        clearInputText(sender);
    } else if (sender === 2) {
        message = document.getElementById("text_user2").value;
        sendMessageToReceiver(message, "chatbox1");
        addMessageForSender(message, "chatbox2");
        clearInputText(sender);
    }
}

function sendMessageToReceiver(message, targetId) {
    // create a new element
    const el = document.createElement('li');
    el.classList.add('receiver');
    // Add text content to element
    el.textContent = message;
    // add element to DOM
    const box = document.getElementById(targetId);
    box.appendChild(el);
}

function addMessageForSender(message, targetId) {
    const el = document.createElement('li');
    el.classList.add('sender');
    el.textContent = message;
    const box = document.getElementById(targetId);
    box.appendChild(el);
}

function clearInputText(sender) {
    if (sender === 1) {
        document.getElementById("text_user1").value = "";
    } else if (sender === 2) {
        document.getElementById("text_user2").value = "";
    }
}
