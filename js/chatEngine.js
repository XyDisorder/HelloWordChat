function SendMessage(sender) {
    let message = "";

    if (sender === 1) {
        message = document.getElementById("text_user1").value;
        SendMessageToReceiver(message, "chatbox2");
        AddMessageForSender(message, "chatbox1");
        ClearInputText(sender);
    } else if (sender === 2) {
        message = document.getElementById("text_user2").value;
        SendMessageToReceiver(message, "chatbox1");
        AddMessageForSender(message, "chatbox2");
        ClearInputText(sender);
    }
}

function SendMessageToReceiver(message, targetId) {
    // create a new element
    const el = document.createElement('li');
    el.classList.add('receiver');
    // Add text content to element
    el.textContent = message;
    // add element to DOM
    const box = document.getElementById(targetId);
    box.appendChild(el);
}

function AddMessageForSender(message, targetId) {
    const el = document.createElement('li');
    el.classList.add('sender');
    el.textContent = message;
    const box = document.getElementById(targetId);
    box.appendChild(el);
}

function ClearInputText(sender) {
    if (sender === 1) {
        document.getElementById("text_user1").value = "";
    } else if (sender === 2) {
        document.getElementById("text_user2").value = "";
    }
}
