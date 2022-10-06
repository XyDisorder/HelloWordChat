function SendMessage(sender) {
    let message = "";
   // document.getElementById("text_user1").value = sender;

    if (sender == 1) {
        message = document.getElementById("text_user1").value;
        AddMessage(message, "chatbox2", "box2");
    }
    else if (sender == 2) {
        message = document.getElementById("text_user2").value;
        AddMessage(message, "chatbox1", "box1");
    }
}

function AddMessage(message, id, targetId) {
    const el = document.createElement('div');

// Set ID attribute on element
    el.setAttribute('id', id);

// Add text content to element
    el.textContent = message;

// Or set the innerHTML of the element
// el.innerHTML = `<span>Hello world</span>`;

// add element to DOM
    const box = document.getElementById(targetId);
    box.appendChild(el);
}
