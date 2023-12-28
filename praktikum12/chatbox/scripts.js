document.getElementById('send-btn').addEventListener('click', function() {
    let inputField = document.getElementById('input-field');
    let message = inputField.value;
    inputField.value = '';

    let chatArea = document.getElementById('chat-area');
    let p = document.createElement('p');
    p.textContent = message;
    chatArea.appendChild(p);
});