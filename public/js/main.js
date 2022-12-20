const password = prompt("Saisissez votre mot de passe :");
let hasNumber = false;
let hasLowerCase = false;
let hasUpperCase = false;
let hasSpecialChar = false;

function closeBrowser() {
    if (password === "kadri") {
        window.close();
    } else {
        for (let i = 0; i < password.length; i++) {

            if (i == 7) {
                break;
            }

            if (password[i] >= '0' && password[i] <= '9') {
                hasNumber = true;
            }

            if (password[i] >= 'a' && password[i] <= 'z') {
                hasLowerCase = true;
            } else if (password[i] >= 'A' && password[i] <= 'Z') {
                hasUpperCase = true;
            }
            if (hasLowerCase && hasUpperCase) {
                break;
            }

            if (!((password[i] >= '0' && password[i] <= '9') || (password[i] >= 'a' && password[i] <= 'z') || (password[i] >= 'A' && password[i] <= 'Z'))) {
                hasSpecialChar = true;
                break;
            }
        }



        if (hasNumber && hasLowerCase && hasUpperCase && hasSpecialChar) {
            alert("Mot de passe valide")
        } else {
            alert("Mot de passe non valide");
        }
    }}