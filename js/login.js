document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault() // to stop the refresh
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)
})