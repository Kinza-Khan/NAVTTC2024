let myUrl = window.location.href;
console.log(myUrl);
let ext = myUrl.split('/');
console.log(ext);
let lastIndex = ext[ext.length - 1];
console.log(lastIndex);
let brFile = lastIndex.split('.');
let final = brFile[0];
console.log(final);

