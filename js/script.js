let button = document.getElementById('toggle');

let navigation = document.getElementById('menu');

button.addEventListener('click', function(){ 
  navigation.classList.toggle('display-block');
  
});