const NodeRSA = require('node-rsa');
const key = new NodeRSA('-----BEGIN RSA PRIVATE KEY-----\n' +
    'MIIBOQIBAAJAVY6quuzCwyOWzymJ7C4zXjeV/232wt2ZgJZ1kHzjI73wnhQ3WQcL\n' +
    'DFCSoi2lPUW8/zspk0qWvPdtp6Jg5Lu7hwIDAQABAkBEws9mQahZ6r1mq2zEm3D/\n' +
    'VM9BpV//xtd6p/G+eRCYBT2qshGx42ucdgZCYJptFoW+HEx/jtzWe74yK6jGIkWJ\n' +
    'AiEAoNAMsPqwWwTyjDZCo9iKvfIQvd3MWnmtFmjiHoPtjx0CIQCIMypAEEkZuQUi\n' +
    'pMoreJrOlLJWdc0bfhzNAJjxsTv/8wIgQG0ZqI3GubBxu9rBOAM5EoA4VNjXVigJ\n' +
    'QEEk1jTkp8ECIQCHhsoq90mWM/p9L5cQzLDWkTYoPI49Ji+Iemi2T5MRqwIgQl07\n' +
    'Es+KCn25OKXR/FJ5fu6A6A+MptABL3r8SEjlpLc=\n' +
    '-----END RSA PRIVATE KEY-----');
const output = document.getElementById('out')

let crypt = document.getElementById('crypt');
crypt.addEventListener('click', (e) => {
    output.textContent = key.encrypt(document.getElementById('crypt-message').value, 'base64');
    console.log(key);
})

let decrypt = document.getElementById('decrypt');
decrypt.addEventListener('click', (e) => {
    output.textContent = key.decrypt(document.getElementById('decrypt-message').value, 'utf8');
})