
   let dbResult;
   const listElem = document.querySelector('main');
   const dbName='vladdominator';
   const idbRequest = indexedDB.open(dbName, 1);
   idbRequest.onsuccess = function sucess(){
     dbResult = idbRequest.result;
   }
   idbRequest.onerror = function error(){
     throw new Error('Error Request.');
   };
   idbRequest.onupgradeneeded = function needed() {
   dbResult = idbRequest.result;
   if (!dbResult.objectStoreNames.contains('users')) {
     dbResult.createObjectStore('users');
   };
   }
   function sendRequest() {
     const firstNameValue = (document.querySelector('span')).textContent;
   //   const lastNameValue = (document.querySelector('#last__name'));
   //   const emailValue = (document.querySelector('#e-mail')).value;
   //   const photoUser = (document.querySelector('.input-User')).src;
     const transaction = dbResult?.transaction('users', 'readwrite');
     console.log({firstNameValue});
     transaction?.objectStore('users').add({firstNameValue});
     const tx = dbResult?.transaction('users','readwrite');
     const bookStore = tx?.objectStore('users');
     const books = bookStore?.getAll();
     console.log(books);
   }

   document.querySelector('span').addEventListener('click', sendRequest)

    
    



 
 


