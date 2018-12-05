/* eslint-disable no-unused-vars */
import style from '../css/style.css';
/* eslint-enable no-unused-vars */
import password from './config';

const connection = new WebSocket('ws://104.248.143.87:1337');

const message = document.getElementById('msgInput');
const send = document.getElementById('msgSendBtn');
function printMessage(msg) {
  const template = document.querySelector('#chatWindow template');
  const tempateDiv = template.content.querySelector('#msgWindow');
  const messageChat = document.importNode(tempateDiv, true);
  const msgPos = document.getElementById('msgPos');
  const t = new Date(msg.time);
  const time = t.toString().substr(16, 8);
  messageChat.setAttribute('style', `background-color: ${msg.color}`);
  messageChat.textContent = `${time} ${msg.author}: ${msg.text}`;
  msgPos.appendChild(messageChat);
  msgPos.scrollTop = msgPos.scrollHeight;
}

function printErrorMessage(msg) {
  const template = document.querySelector('#chatWindow template');
  const tempateDiv = template.content.querySelector('#msgWindow');
  const messageChat = document.importNode(tempateDiv, true);
  const msgPos = document.getElementById('msgPos');
  messageChat.setAttribute('style', `background-color: #ff0000`);
  messageChat.textContent = `ERROR: ${msg}`;
  msgPos.appendChild(messageChat);
  msgPos.scrollTop = msgPos.scrollHeight;
}

connection.onmessage = dataMessage => {
  const msg = JSON.parse(dataMessage.data);
  console.log(msg);
  if (msg.type === 'history') {
    msg.data.forEach(messageHistory => {
      console.log(messageHistory);
      printMessage(messageHistory);
    });
  }
  if (msg.type === 'message') {
    printMessage(msg.data);
  }
  if (msg.type === 'error') {
    printErrorMessage(msg.data);
  }
};
connection.onerror = error => {
  printErrorMessage(`Èrror: ${error}`);
};
const sendMessage = () => {
  const obj = {
    type: 'message',

    data: message.value,

    key: password
  };
  const jsonObj = JSON.stringify(obj);
  connection.send(jsonObj);
};
send.addEventListener('click', sendMessage);

document.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
