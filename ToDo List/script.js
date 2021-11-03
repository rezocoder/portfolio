const inputData = document.querySelector('#inputData');
const addData = document.querySelector('#addData');
const list = document.querySelector('.list');
const trash = document.querySelector('.trash');

addData.addEventListener('click', addItem);

function addItem() {
    const item = document.createElement("DIV");
    let inputValue = inputData.value;
    item.classList.add('item');
    item.innerHTML = "<input type='text' value=" + inputValue + "> <button><i class='fa fa-check'></i></button> <button><i class='fa fa-edit'></i></button> <button class='trash'><i class='fa fa-trash-o'></i></button>"
    list.appendChild(item);
    inputData.value = '';
}

list.addEventListener('click',  function(e) {
    const current = e.target.parentElement;
    
    if(e.target.className == 'fa fa-trash-o'){ 
      setTimeout(function() {
        current.parentElement.style.display = 'none';
      }, 500) 
      current.parentElement.style.opacity = 0;      
   }

   else if(e.target.className == 'fa fa-check') {
     console.log(current.parentElement.style.opacity)

      if(current.parentElement.style.opacity == 0.6) {
      current.parentElement.style.opacity = 1;
      current.previousElementSibling.style.textDecoration = 'none';
      } else {
        current.parentElement.style.opacity = 0.6;
        current.previousElementSibling.style.textDecoration = 'line-through';
      }
   }

   else if(e.target.className == 'fa fa-edit') {
    let thisInput = current.previousElementSibling.previousElementSibling;
    const newValue =  prompt('დაარედაქტირე', thisInput.value);
    thisInput.parentElement.style.opacity = 1;
    thisInput.style.textDecoration = 'none';
    thisInput.value = newValue;
  }
});

function deleteItem(e) {
    this.style.color = 'red';
}