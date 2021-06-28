const output = document.getElementById('out')

let crypt = document.getElementById('crypt');
crypt.addEventListener('click', (e) => {
    output.textContent = CryptoJS.SHA1(document.getElementById('crypt-message').value);
})