let currentUser = "";

function login() {
  const username = document.getElementById("username").value.trim();
  if (username) {
    currentUser = username;
    document.getElementById("login").style.display = "none";
    document.getElementById("chat").style.display = "block";
    loadMessages();
  }
}

function sendMessage() {
  const text = document.getElementById("message").value.trim();
  if (text) {
    const message = { user: currentUser, text: text };
    let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    messages.push(message);
    localStorage.setItem("chatMessages", JSON.stringify(messages));
    document.getElementById("message").value = "";
    loadMessages();
  }
}

function loadMessages() {
  const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
  const messagesDiv = document.getElementById("messages");
  messagesDiv.innerHTML = "";
  messages.forEach(msg => {
    const msgEl = document.createElement("div");
    msgEl.textContent = `${msg.user}: ${msg.text}`;
    messagesDiv.appendChild(msgEl);
  });
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}