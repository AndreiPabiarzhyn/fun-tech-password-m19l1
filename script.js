const input = document.getElementById("passwordInput")
input.addEventListener("input", liveCheck)

function liveCheck(){
    const pass = input.value
    updateLength(pass)
    updateRule("ruleUpper", /[A-Z]/.test(pass))
    updateRule("ruleLower", /[a-z]/.test(pass))
    updateRule("ruleNumber", /[0-9]/.test(pass))
    updateRule("ruleSymbol", /[!@#$%^&*]/.test(pass))
}

function updateLength(pass){
    const el = document.getElementById("ruleLength")
    const ok = pass.length >= 8
    el.textContent = `${ok ? "✅" : "❌"} символов: ${pass.length} / 8`
    el.className = ok ? "ok" : "bad"
}

function updateRule(id, ok){
    const el = document.getElementById(id)
    if(ok){
        el.className="ok"
        el.textContent="✅ "+el.textContent.slice(2)
    }else{
        el.className="bad"
        el.textContent="❌ "+el.textContent.slice(2)
    }

}


function checkPassword(){
    const pass = input.value
    const valid =
        pass.length >= 8 &&
        /[A-Z]/.test(pass) &&
        /[a-z]/.test(pass) &&
        /[0-9]/.test(pass) &&
        /[!@#$%^&*]/.test(pass)

    const modal = document.getElementById("resultModal")
    const title = document.getElementById("resultTitle")
    const gif = document.getElementById("resultGif")

    if(valid){
        title.textContent = "🎉 Отличный пароль!"
        gif.src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
    }else{
        title.textContent = "⚠️ Пароль слабый"
        gif.src="https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif"
    }
    modal.style.display="flex"
}


function closeModal(){
   document.getElementById("resultModal").style.display="none"

}
