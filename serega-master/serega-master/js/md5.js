const output = document.getElementById('out')

let crypt = document.getElementById('crypt');
crypt.addEventListener('click', (e) => {
    output.textContent = CryptoJS.MD5(document.getElementById('crypt-message').value);
})