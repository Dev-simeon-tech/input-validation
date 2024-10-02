const form = document.querySelector('#form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const  password = document.querySelector('#password');
const  password2 = document.querySelector('#password2');
const eye1 = document.querySelector('.e1')
const eye2 = document.querySelector('.e2')
const inputControl = document.querySelectorAll('.input-control')

eye1.addEventListener('click', function(){
    if(password.type === 'password'){
        password.type = 'text'
    }
    else{
        password.type = 'password'
    }
    eye1.classList.toggle('fa-eye')
})
eye2.addEventListener('click', function(){
    
    eye2.classList.toggle('fa-eye')
    if(password2.type === 'password'){
        password2.type = 'text'
    }
    else{
        password2.type = 'password'
    }

})


//Submiting the form
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    validateInputs();
    if(validateInputs()){
        postRequest();
    }

});


//error message
const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message
    element.style.border = ' 2px solid #ff3860'
}
//error message

// seting sucess 
const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = '';
    element.style.border = '2px solid #09c372'

}
// seting sucess 
const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    let validator = true;
    if(usernameValue === ''){
        setError(username,'username required')
        validator = false;
    }
    else{
        setSuccess(username)
    };

    if(emailValue === ""){
        setError(email,'email required')
        validator = false;

       
    }
    else{
        setSuccess(email)

    }
    // first password validation
    if(passwordValue === ''){
        setError(password,'username required')
        validator = false;

    } else if(passwordValue.length > 8){
        setError(password, ' Password must be at least 8 character')
        validator = false;

    }
    else{
        setSuccess(password)

    };
    //second password validation
    if(password2Value === ''){
        setError(password2,'Please confirm password')
        validator = false;

    } else if(password2Value !== passwordValue){
        setError(password2,"Password dosen't match")
        validator = false;
    }
    else{
        setSuccess(password2)
    };
    return validator
    
}

async function postRequest(){
    const inputData = new FormData(form)
    // [...inputData].forEach(element => {
        
    // });
    const objInputData =  Object.fromEntries([...inputData])
    
    try{
        
        const response = await fetch('/signup',{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objInputData),
        })
        const data = await response.json();
        if (data.success) {
            window.location.href = '/home.html';
        } else {
            document.getElementById('error-msg').textContent = data.message;
        }
    }catch(error){
        console.warn(error)
    }
    
    
}




