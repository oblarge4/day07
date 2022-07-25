const messageFirst = document.querySelector(".message-first");
const messageSecond = document.querySelector(".message-second");
const USERNAME_KEY = localStorage.getItem("username");

messageFirst.innerHTML = `${USERNAME_KEY} already has a wonderful life. I hope to see you next time.`;
messageSecond.innerHTML = `Too bad, I can't lock ${USERNAME_KEY} up`;

localStorage.removeItem("username");