function checkPassword(){

    const password = document.getElementById("passwordInput").value
    const result = document.getElementById("result")

    let errors = []

    if(password.length < 8){
        errors.push("минимум 8 символов")
    }

    if(!/[A-Z]/.test(password)){
        errors.push("хотя бы одна БОЛЬШАЯ буква")
    }

    if(!/[a-z]/.test(password)){
        errors.push("хотя бы одна маленькая буква")
    }

    if(!/[0-9]/.test(password)){
        errors.push("хотя бы одна цифра")
    }

    if(!/[!@#$%^&*()_\-+=<>?]/.test(password)){
        errors.push("хотя бы один символ (!@#$...)")
    }

    if(errors.length > 0){

        result.innerHTML =
        "Пароль недостаточно надёжный.<br>Не хватает:<br>• " +
        errors.join("<br>• ")

    }else{

        result.innerHTML = ""
        document.getElementById("successModal").style.display = "flex"

    }

}

function closeModal(){
    document.getElementById("successModal").style.display = "none"
}
