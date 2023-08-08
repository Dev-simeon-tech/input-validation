const form = document.querySelector('#form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const  password = document.querySelector('#password');
const  password2 = document.querySelector('#password2');

//Submiting the form
form.addEventListener('submit', (e) =>{
    // e.preventDefault();
    let load = e.preventDefault()
    validateInputs();
    return load
});


//error message
const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message
    // inputControl.classlist.add('error')
    // inputControl.classlist.remove('success')
    element.style.border = ' 2px solid #ff3860'
}
//error message

// seting sucess 
const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = '';
    // inputControl.classlist.add('success')
    // inputControl.classlist.remove('error')
    element.style.border = '2px solid #09c372'

}
// seting sucess 
const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    

    if(usernameValue === ''){
        setError(username,'username required')
    }
    else{
        setSuccess(username)
    };

    if(emailValue === ""){
        setError(email,'email required')
       
    }
    else{
        setSuccess(email)
    }
    // first password validation
    if(passwordValue === ''){
        setError(password,'username required')
    } else if(passwordValue.length > 8){
        setError(password, ' Password must be at least 8 character')
    }
    else{
        setSuccess(password)
    };
    //second password validation
    if(password2Value === ''){
        setError(password2,'Please confirm password')
    } else if(password2Value !== passwordValue){
        setError(password2,"Password dosen't match")
    }
    else{
        setSuccess(password2)
    };
    
}
