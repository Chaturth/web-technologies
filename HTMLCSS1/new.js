 function validate() {
            let submit = true;

            let nameValue = document.registrationform.nameofName.value;
            let emailValue = document.registrationform.nameofEmail.value;

         
            if (nameValue.length < 4) {
                alert("Name too small");
                submit = false;
            }

          
            if (emailValue.length < 5 || !emailValue.includes("@")) {
                alert("Invalid email");
                submit = false;
            }

            if (submit) {
                alert("Form submitted");
            }

            return submit;
        }
