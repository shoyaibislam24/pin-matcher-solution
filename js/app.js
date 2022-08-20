function getpin(){
    const pin = generatepin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        console.log('pin not 3 digit found', pin)
        return getpin();
    }
}

function generatepin(){
    const random = Math.round(Math.random()*10000);
    return random;
}


document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getpin();
   //display pin 
   const displayPinField = document.getElementById('display-pin');
   displayPinField.value = pin;
})


document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value ;


    if(isNaN(number)){

        if(number === 'C'){
            typedNumberField.value ='';
         }
         else if(number === '<'){
             const digits = previousTypedNumber.split('');
             digits.pop();
             const remaingDigits = digits.join('');
             typedNumberField.value = remaingDigits;
         }
    }
    else{
        const newTypednumber = previousTypedNumber + number;
        typedNumberField.value = newTypednumber;

    }
    
})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('typed-numbers');
    const typedNumber = typeNumberField.value;
    
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if(typedNumber === currentPin){
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else{
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})