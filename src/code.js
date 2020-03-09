
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email= document.querySelector("#email");
formbtn.addEventListener("click", store);

function store(){
    localStorage.setItem("First name",firstname.value)
    localStorage.setItem("Last name",lastname.value)
    localStorage.setItem("Email",email.value)
    console.log(672878);
}