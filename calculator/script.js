const display = document.querySelector('#display');
const button = document.querySelector('.buttons');

button.addEventListener('click', function(e) {
    const value = e.target.innerText;
    if(value == 'C') {
        display.innerText = '';
    } 

    else if(value == 'DEL') {
        var output = display.innerText;
        output = output.slice(0, output.length - 1);
        display.innerText = output;
    }

    else if(value == '=') {
        let output = display.innerText;
        
        try {
            display.innerText = eval(output);
        }

        catch(err) {
            display.innerText = 'error';
          }       
    } else {
        display.innerText += value;
      } 
    })
