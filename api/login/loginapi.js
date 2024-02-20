const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const btn = document.getElementById("btn")

btn.addEventListener("click",() => {
    const email = emailInput.value
    const password = passwordInput.value

    axios.post("https://taxbotapi.evdtechnology.com/api/superadmin-login/",{email:email , password:password})
    .then((response) => {
        const authToken = response?.data?.data?.superadmin_access_token
        localStorage.setItem('authToken',authToken)
        console.log('Admin Login Successful. Auth Token:',authToken);

        if(response.status === 200){
            window.location.href = 'admin.html'
            alert("Login Successful!")
        }        
    })
    .catch(error => {
        console.log("Admin Login Failed:",error.response.status3);
        alert("Invalid Email or Password!")
    })
})