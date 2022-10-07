const sender = {
    messageInputId: "text_user1",
    receiverChatboxId: "chatbox2",
    senderChatboxId: "chatbox1",
    message: '',
    displayMessage: function () {
        displayMessage(this.message, this.senderChatboxId, 'sender', this.messageInputId);
        displayMessage(this.message, this.receiverChatboxId, 'receiver');
    } ,
};

const receiver = {
    messageInputId: "text_user2",
    receiverChatboxId: "chatbox1",
    senderChatboxId: "chatbox2",
    message: '',
    displayMessage: function () {
        displayMessage(this.message, this.senderChatboxId, 'sender', this.messageInputId);
        displayMessage(this.message, this.receiverChatboxId, 'receiver');
    },
};

function sendNewMessage(fromSender) {
    const senderUser = Object.create(sender);
    const receiverUser = Object.create(receiver);

    if (fromSender === 1) {
        senderUser.message = document.getElementById(senderUser.messageInputId).value;
        senderUser.displayMessage();
    } else if (fromSender === 2) {
        receiverUser.message = document.getElementById(receiverUser.messageInputId).value;
        receiverUser.displayMessage();
    }
}

function displayMessage(message, targetId, className, textInputId) {
    const el = document.createElement('li');
    el.classList.add(className);
    el.textContent = message;
    const box = document.getElementById(targetId);
    box.appendChild(el);

    clearInputText(textInputId);
}


function clearInputText(targetId) {
        document.getElementById(targetId).value = "";
}
