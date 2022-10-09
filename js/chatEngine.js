const firstUser = {
    messageInputId: "text_user1",
    userBoxToSendMessage: "chatbox2",
    userBoxForReceiveMessageHimself: "chatbox1",
    firstBoxId: 'chatboxId',
    secondBoxId: 'chatboxId2',
    ownClassName: 'firstUser',
    classNameToSendMessage : 'secondUser',
    message: '',
    typingClass: 'tappingTextFirstUser',
    typingClass2: 'tappingTextSecondUser',
    countTyping: 0
};

const secondUser = {
    messageInputId: "text_user2",
    userBoxToSendMessage: "chatbox1",
    userBoxForReceiveMessageHimself: "chatbox2",
    firstBoxId: "chatboxId2",
    secondBoxId: 'chatboxId',
    ownClassName: 'firstUser',
    classNameToSendMessage : 'secondUser',
    typingClass: 'tappingTextSecondUser',
    typingClass2: 'tappingTextFirstUser',
    message: '',
    countTyping: 0
};

let timer;
let first = '';
const sender = Object.create(firstUser);
const receiver = Object.create(secondUser);

const Actions = {
    TypingNotification: "typingNotification",
    SendMessage: "sendMessage",
}

const Tags = {
    Li: 'li'
}

function launchAction(actionType, fromSender) {
    if(fromSender === 1) {first = sender;}
    if (fromSender === 2) {first = receiver;}

    switch (actionType) {
        case Actions.TypingNotification:
            tappingNotification();
            break;
        case Actions.SendMessage:
            sendNewMessage();
            break;
        default:
            console.log(`error`);
    }
}

function tappingNotification() {
    isTyping(first.typingClass, first.typingClass2);
    if (first.countTyping === 0) {
        first.message = '';
        addNewElementToDom(Tags.Li, first.typingClass, first.message, first.userBoxToSendMessage);
        scrollDown(document.getElementById(first.secondBoxId), document.getElementById(first.userBoxToSendMessage));
        first.countTyping = 1;
    }
}

function sendNewMessage() {
    first.countTyping = 0;
    removeTypingNotification(first.typingClass)
    first.message = document.getElementById(first.messageInputId).value;
        if (first.message !== '') {
            displayMessage();
    }
}

function displayMessage() {
    let messageToReceiver = addNewElementToDom(Tags.Li, first.classNameToSendMessage, first.message, first.userBoxToSendMessage);
    let messageToSenderHimself = addNewElementToDom(Tags.Li, first.ownClassName, first.message, first.userBoxForReceiveMessageHimself);

    // get element for each user message box
    let chatterbox = document.getElementById(first.secondBoxId);
    let chatterbox2 = document.getElementById(first.firstBoxId);

    //scroll down when message is display
    scrollDown(chatterbox2, messageToSenderHimself);
    scrollDown(chatterbox, messageToReceiver);

    // clear message just send
    clearInputText(first.messageInputId);
}

function addNewElementToDom(tagToCreate, className, message, targetId) {
    const el = document.createElement(tagToCreate); //li
    el.classList.add(className);
    el.textContent = message;
    const box = document.getElementById(targetId);
    box.appendChild(el);
    return box;
}

function scrollDown(targetTag, box) {
    targetTag.scrollTop = box.scrollHeight;
    targetTag.scrollTop = box.scrollHeight;
}

function clearInputText(targetId) {
    document.getElementById(targetId).value = "";
}

function isTyping(className, secondClassName) {
    clearTimeout(timer);
    timer = setTimeout(() => {
        removeTypingNotification(className, secondClassName);
    }, 5000);
}

function removeTypingNotification(className, secondClassName) {
    let typingNotification = document.getElementsByClassName(className);
    let typingNotification2 = document.getElementsByClassName(secondClassName);

    if (typingNotification.length > 0) {
        typingNotification[0].remove();
    }
    if (typingNotification2.length > 0) {
        typingNotification2[0].remove();
    }
}





