/* eslint-disable no-unused-vars */
import style from '../css/style.css';
/* eslint-enable no-unused-vars */
import password from './config.js';

const connection = new WebSocket('ws://104.248.143.87:1337');

const message = document.getElementById('textInput');
const send = document.getElementById('textSendBtn');

send.addEventListener('click', () => {
  const obj = {
    type: 'message',

    data: message.value,

    key: password
  };
});
