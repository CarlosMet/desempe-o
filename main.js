let credentials = {
    user: "admin",
    password: "1234"
}

let attemptsCounter = 0

let isLogged = false

const loginForm = document.getElementById("login")

loginForm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const user = e.target.user.value
    const password = e.target.password.value

    if(attemptsCounter < 3){

        if(user === "admin" && password === "1234"){
            console.log("logged")
            window.location.href = "taxes/taxes.html"
        }else{
            console.log("wrong credentials")
            attemptsCounter++
        }

    } else{
        alert("No puede ingresar, su cuenta ha sido bloqueada por el número de intentos fallidos")
    }

    
})




