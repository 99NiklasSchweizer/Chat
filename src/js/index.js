/* eslint-disable no-unused-vars */
import style from '../css/style.css';
/* eslint-enable no-unused-vars */
import password from './config.js';

const connection = new WebSocket('ws://104.248.143.87:1337');

const message = document.getElementById('msgInput');
const send = document.getElementById('msgSendBtn');

connection.onmessage = message => {
  const msg = JSON.parse(message.data);
  console.log(msg.data.text);

  const template = document.querySelector('#chatWindow template');
  console.log(template);
  const tempateDiv = template.content.querySelector('#msgWindow');

  const messageChat = document.importNode(tempateDiv, true);
  const chatWindow = document.getElementById('chatWindow');
  const msgPos = document.getElementById('msgPos');
  console.log(chatWindow);
  console.log(msgPos);
  messageChat.textContent = msg.data.text;

  msgPos.appendChild(messageChat);
};
send.addEventListener('click', () => {
  const obj = {
    type: 'message',

    data: message.value,

    key: password
  };
  const jsonObj = JSON.stringify(obj);
  connection.send(jsonObj);
});
