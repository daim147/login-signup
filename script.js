const signIn = document.querySelector("#sign-in-button")
const signUp = document.querySelector("#sign-up-button")

const conatiner = document.querySelector(".container")

signUp.addEventListener("click", ()=>{
    conatiner.classList.remove("signupmode")
})
signIn.addEventListener("click", ()=>{
    conatiner.classList.add("signupmode")
})
console.log(signIn, signUp)