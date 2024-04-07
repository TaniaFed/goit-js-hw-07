const sendForm = document.querySelector("form");

sendForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    
    event.preventDefault();

    const email = sendForm.elements.email.value.trim();
    const password = sendForm.elements.password.value.trim();
  
    if (email === "" || password === "") {
        alert(`All form fields must be filled in`);
        return;
    }

    const formInfo = {
        email,
        password
    };

    console.log(formInfo);
  
    sendForm.reset();
};
  




